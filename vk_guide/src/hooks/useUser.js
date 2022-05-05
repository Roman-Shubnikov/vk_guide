import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { accountActions } from "../store/main";


export const useUser = () => {
    const dispatch = useDispatch();
    const { userToken } = useSelector((state) => state.account)
    const setUserToken = useCallback((token) => dispatch(accountActions.setUserToken(token)), [dispatch]);

    return {
        setUserToken,
        userToken,
    }
}