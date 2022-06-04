import React, {useEffect, useCallback, useRef } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	SplitLayout,
	SplitCol,
	Platform,
	usePlatform,
	useAdaptivity,
	VKCOM,
	ViewHeight,
	ViewWidth,
	Panel,
	Group,
	Epic,
	Tabbar,
	TabbarItem,
	PanelHeader,
	ScreenSpinner,

} from '@vkontakte/vkui';
import {
	Icon28LogoVkOutline,
	Icon28Users3Outline,
} from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';
import './styles/styles.css';
import { useNavigation, useUser } from './hooks';
import { APP_ID, IS_MOBILE, viewsStructure } from './config';
import { useSelector, useDispatch } from 'react-redux';
import { accountActions, viewsActions } from './store/main';
import { EpicItemPC } from './components';
import { Excursions, Communites } from './panels';

var DESKTOP_SIZE = 1000;
var TABLET_SIZE = 900;
var SMALL_TABLET_SIZE = 768;
var MOBILE_SIZE = 320;
var MOBILE_LANDSCAPE_HEIGHT = 414;
var MEDIUM_HEIGHT = 720;

function calculateAdaptivity(windowWidth, windowHeight) {
  var viewWidth = ViewWidth.SMALL_MOBILE;
  var viewHeight = ViewHeight.SMALL;

  if (windowWidth >= DESKTOP_SIZE) {
    viewWidth = ViewWidth.DESKTOP;
  } else if (windowWidth >= TABLET_SIZE) {
    viewWidth = ViewWidth.TABLET;
  } else if (windowWidth >= SMALL_TABLET_SIZE) {
    viewWidth = ViewWidth.SMALL_TABLET;
  } else if (windowWidth >= MOBILE_SIZE) {
    viewWidth = ViewWidth.MOBILE;
  } else {
    viewWidth = ViewWidth.SMALL_MOBILE;
  }

  if (windowHeight >= MEDIUM_HEIGHT) {
    viewHeight = ViewHeight.MEDIUM;
  } else if (windowHeight > MOBILE_LANDSCAPE_HEIGHT) {
    viewHeight = ViewHeight.SMALL;
  } else {
    viewHeight = ViewHeight.EXTRA_SMALL;
  }
  return {
    viewWidth: viewWidth,
    viewHeight: viewHeight,
  };
}
const scheme_params = {

	bright_light: { "status_bar_style": "dark", "action_bar_color": "#FFFFFF", 'navigation_bar_color': "#FFFFFF" },
	space_gray: { "status_bar_style": "light", "action_bar_color": "#19191A", 'navigation_bar_color': "#19191A" }
  }
var backTimeout = false;
const App = () => {
	const dispatch = useDispatch();
	const { setUserToken } = useUser();
	const { schemeSettings } = useSelector((state) => state.account);
	const { scheme, default_scheme } = schemeSettings;
	const {
		activeStory, 
		historyPanels, 
		goPanel,
		popout,
		goDisconnect,
		setPopout } = useNavigation();
	const need_epic = useSelector((state) => state.views.need_epic)
	const setScheme = useCallback((payload) => dispatch(accountActions.setScheme(payload)), [dispatch])
	const setActiveScene = useCallback((story, panel) => dispatch(viewsActions.setActiveScene(story, panel)), [dispatch]);
	const setHistoryPanels = useCallback((history) => dispatch(viewsActions.setHistory(history)), [dispatch]);
	const setHash = (hash) => {
		if(window.location.hash !== ''){
		  bridge.send("VKWebAppSetLocation", {"location": hash});
		  window.location.hash = hash
		}
	  }
	const AppInit = useCallback(() => {
		bridge.send("VKWebAppGetAuthToken", {
			app_id: APP_ID,
			scope: '',
		})
		.then((data) => {
			setUserToken(data.access_token)
		})
		.catch(goDisconnect)
		if( activeStory === 'disconnect') {
		  let {view, panel} = historyPanels[historyPanels.length - 2];
		  goPanel(view, panel, true, true)
		}
		// eslint-disable-next-line
	  }, [historyPanels, activeStory, goPanel])
	const goBack = useCallback(() => {
	let history = [...historyPanels]
	if(!backTimeout) {
		backTimeout = true;
		if (history.length <= 1) {
			bridge.send("VKWebAppClose", {"status": "success"});
		} else {
			if(history.length >= 2) {
				bridge.send('VKWebAppDisableSwipeBack');
			}else {
				bridge.send('VKWebAppEnableSwipeBack');
			}
			setHash('');
			history.pop()
			let {view, panel} = history[history.length - 1];
			setActiveScene(view, panel)
			setPopout(<ScreenSpinner />)
			setTimeout(() => {
				setPopout(null)
				}, 500)
			}
			setHistoryPanels(history)
			setTimeout(() => {backTimeout = false;}, 500)
			
	}else{
		window.history.pushState({ ...history[history.length - 1] }, history[history.length - 1].panel );
	}
	// eslint-disable-next-line
	}, [historyPanels, setHistoryPanels, setActiveScene])
	const handlePopstate = useCallback((e) => {
		e.preventDefault();
		goBack();
	  }, [goBack]);
	  useEffect(() => {
		AppInit();
		bridge.send('VKWebAppInit', {});
		// eslint-disable-next-line
	  }, [])
	  useEffect(() => {
		window.addEventListener('popstate', handlePopstate);
		return () => {
		  window.removeEventListener('popstate', handlePopstate)
		}
	  }, [handlePopstate])
	  const bridgecallback = useCallback(({ detail: { type, data } }) => {
		if (type === 'VKWebAppViewHide') {
			console.log('closing...')
		}
		if (type === 'VKWebAppViewRestore') {
			AppInit();
		}
		if (type === 'VKWebAppUpdateConfig') {
			setScheme({ ...schemeSettings, default_scheme: data.scheme })
			
		}
		}, [AppInit, setScheme, schemeSettings])
	
	useEffect(() => {
		bridge.subscribe(bridgecallback);
		
		return () => bridge.unsubscribe(bridgecallback);
		}, [bridgecallback])
	useEffect(() => {
		const brigeSchemeChange = (params) => {
			bridge.send("VKWebAppSetViewSettings", params);
		}
		setScheme({ scheme: IS_MOBILE ? 'bright_light' : 'vkcom_light' })
		if (IS_MOBILE) {
			brigeSchemeChange(scheme_params.bright_light)
		}
	}, [default_scheme, setScheme])
	
	const onEpicTap = (e) => {
		goPanel(e.currentTarget.dataset.story, viewsStructure[e.currentTarget.dataset.story].panels.homepanel);
	}
	const platformwithPlat = usePlatform();
	const platform = useRef();
	const viewWidth = useAdaptivity().viewWidth;
	const isDesktop = useRef();
	const hasHeader = useRef()
	
	useEffect(() => {
		if (IS_MOBILE) {
		platform.current = platformwithPlat;
		} else {
		platform.current = Platform.VKCOM;
		}
	}, [platformwithPlat])

  
  useEffect(() => {
    hasHeader.current = platform.current !== VKCOM;
    isDesktop.current = viewWidth >= ViewWidth.SMALL_TABLET;
  }, [viewWidth, platform])
  
  	const Views = [
		<Excursions id={viewsStructure.Excursions.navName} key={'1'} />,
		<Communites id={viewsStructure.Communites.navName} key={'2'} />,
	  ]
	return (
		<ConfigProvider scheme={scheme} platform={platform.current}>
			<AppRoot>
				<SplitLayout popout={popout}
				style={{ justifyContent: "center" }}>
				<SplitCol
				animate={!isDesktop.current}
                spaced={isDesktop.current}
                width={isDesktop.current ? '690px' : '100%'}
                maxWidth={isDesktop.current ? '690px' : '100%'}>
					<Epic activeStory={activeStory}
						tabbar={!isDesktop.current && need_epic && 
							<Tabbar>
								<TabbarItem
								data-story={viewsStructure.Excursions.navName}
								selected={activeStory === viewsStructure.Excursions.navName}
								onClick={onEpicTap}
								text='Экскурсия'>
									<Icon28LogoVkOutline />
								</TabbarItem>
								<TabbarItem
								data-story={viewsStructure.Communites.navName}
								selected={activeStory === viewsStructure.Communites.navName}
								onClick={onEpicTap}
								text='Сообщества'>
									<Icon28Users3Outline />
								</TabbarItem>
							</Tabbar>
						}>
							
							{Views}
							
						</Epic>
					
				</SplitCol>
				{isDesktop.current && need_epic && (<SplitCol fixed width="280px" maxWidth="280px">
                    <Panel id='menu_epic'>
                  {hasHeader.current && <PanelHeader/>}
                      <>
                      <Group>
                        <EpicItemPC
                        icon={<Icon28LogoVkOutline />}
                        story={viewsStructure.Excursions.navName}
                        activeStory={activeStory}
                        onClick={(e) => {setHash('');goPanel(e.currentTarget.dataset.story, viewsStructure.Excursions.panels.homepanel)}}>
                          {viewsStructure.Excursions.name}
                        </EpicItemPC>
                        <EpicItemPC
                        icon={<Icon28Users3Outline />}
                        story={viewsStructure.Communites.navName}
                        activeStory={activeStory}
                        onClick={(e) => {setHash('');goPanel(e.currentTarget.dataset.story, viewsStructure.Communites.panels.homepanel)}}>
                          {viewsStructure.Communites.name}
                        </EpicItemPC>
                      </Group>
                      </>
                    </Panel>
                  </SplitCol>)}
					
				</SplitLayout>
			</AppRoot>
		</ConfigProvider>
	);
}
// eslint-disable-next-line
export default () => (
	<AdaptivityProvider viewWidth={ calculateAdaptivity( document.documentElement.clientWidth, document.documentElement.clientHeight).viewWidth}>
	  <App />
	</AdaptivityProvider>
  );
  
