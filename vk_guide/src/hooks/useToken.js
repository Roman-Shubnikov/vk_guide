import { 
    Button,
    Placeholder,
    SimpleCell,
    Spinner,
} from "@vkontakte/vkui";
import bridge from '@vkontakte/vk-bridge';
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { accountActions } from "../store/main";
import { APP_ID } from "../config";
import { useNavigation } from "./useNavigation";
import { Icon32PrivacyCircleFillPurple } from "@vkontakte/icons";


export const useToken = () => {
    const dispatch = useDispatch();
    const { goDisconnect } = useNavigation();
    const { userToken } = useSelector((state) => state.account)
    const setUserToken = useCallback((token) => dispatch(accountActions.setUserToken(token)), [dispatch]);
    const requestToken = () => {
        bridge.send("VKWebAppGetAuthToken", {
			app_id: APP_ID,
			scope: '',
		})
		.then((data) => {
			setUserToken(data.access_token)
            bridge.send("VKWebAppStorageSet", {key: 'userToken', value: data.access_token})
		})
		.catch(goDisconnect)
    }
    const getPlaceholder = (type) => {
        if(userToken) return;
        if(type === "placeholder") return <Placeholder
        header='Доступ к информации'
        icon={<Spinner size="large" style={{color: 'var(--accent)'}} />}
        action={<Button size='m'
                onClick={() => requestToken()}>Разрешить</Button>}>
            Разрешите доступ к информации, 
            чтобы мы могли отобразить вам сообщества
        </Placeholder>
        return <SimpleCell 
        before={<Icon32PrivacyCircleFillPurple />}
        onClick={() => requestToken()}
        description="Разрешите доступ к информации, чтобы мы могли отобразить вам сообщества">
            Общая информация
        </SimpleCell>
    }
    return {
        userToken,
        getPlaceholder,
    }
}