import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewsStructure } from "../config";
import { viewsActions } from "../store/main";
import * as Sentry from "@sentry/react";
import bridge from '@vkontakte/vk-bridge'; // VK Brige
import { sendHit } from "../metrika";
import { alertCreator, errorAlertCreator } from "../Utils";



export const useNavigation = () => {
    const dispatch = useDispatch();
    const { activeStory, historyPanels, snackbar, activePanel } = useSelector((state) => state.views)
    const setActiveStory = useCallback((story) => dispatch(viewsActions.setActiveStory(story)), [dispatch]);
    const setActiveScene = useCallback((story, panel) => dispatch(viewsActions.setActiveScene(story, panel)), [dispatch]);
    const setPopout = useCallback((popout) => dispatch(viewsActions.setPopout(popout)), [dispatch]);
    const setHistoryPanels = useCallback((history) => dispatch(viewsActions.setHistory(history)), [dispatch]);
    const setSnackbar = useCallback((payload) => dispatch(viewsActions.setSnackbar(payload)), [dispatch])
    const goPanel = useCallback((view, panel, forcePanel=false, replaceState=false) => {
    
        const checkVisitedView = (view) => {
          let history = [...historyPanels];
          history.reverse();
          let index = history.findIndex(item => item.view === view)
          if(index !== -1) {
           return history.length - index
          } else {
            return null;
          }
        }
        const historyChange = (history, view, panel, replaceState) => {
          if(replaceState){
            history.pop();
            history.push({view, panel });
            window.history.replaceState({ view, panel }, panel);
          } else {
            history.push({view, panel });
            window.history.pushState({ view, panel }, panel);
          }
          return history;
        }
        if(view === null) view = activeStory;
        let history = [...historyPanels];
        if(forcePanel){
          history = historyChange(history, view, panel, replaceState)
        }else{
          let index = checkVisitedView(view);
          if(index !== null){
            let new_history = history.slice(0, index);
            history = new_history
            window.history.pushState({ view, panel }, panel);
            ({view, panel} = history[history.length - 1])
          } else {
            history = historyChange(history, view, panel, replaceState)
          }
        }
        setHistoryPanels(history);
        setActiveScene(view, panel)
        bridge.send('VKWebAppEnableSwipeBack');
        sendHit(view+'_'+panel);
      }, [setActiveScene, historyPanels, activeStory, setHistoryPanels])
    
    const showAlert = (title, text) => {
        alertCreator(setPopout, title, text)
    }
    const showErrorAlert = (error = null, action = null) => {
        errorAlertCreator(setPopout, error, action)
      }
    const goDisconnect = (e=null) => {
        console.log(e)
        Sentry.captureException(e);
        dispatch(viewsActions.setGlobalError(e))
        goPanel(viewsStructure.Disconnect.navName, viewsStructure.Disconnect.panels.homepanel, true, false);
    }
    return {
        goPanel,
        goDisconnect,
        setSnackbar,
        setPopout,
        showAlert,
        showErrorAlert,
        setActiveStory,
        activePanel,
        snackbar,
        activeStory,
        historyPanels,
    }
}