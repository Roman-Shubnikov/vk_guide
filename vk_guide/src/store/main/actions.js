import {
    viewsActionTypes,
    accountActionTypes,
    } from './ActionTypes';

export const accountActions = {
    setScheme: (payload) => ({type: accountActionTypes.SET_SCHEME, payload}),
    
}
export const viewsActions = {
    setActiveStory: (payload) => ({ type: viewsActionTypes.SET_ACTIVE_STORY, payload}),
    setActivePanel: (payload) => ({ type: viewsActionTypes.SET_ACTIVE_PANEL, payload}),
    setActiveScene: (story, panel) => {
        let payload = {story, panel};
        return { type: viewsActionTypes.SET_ACTIVE_SCENE, payload}},
    setHistory: (payload) => ({ type: viewsActionTypes.SET_HISTORY, payload}),
    setNeedEpic: (payload) => ({ type: viewsActionTypes.SET_NEED_EPIC, payload}),
    setSnackbar: (payload) => ({ type: viewsActionTypes.SET_SNACKBAR, payload}),
    setPopout: (payload) => ({ type: viewsActionTypes.SET_POPOUT, payload}),
    setGlobalError: (payload) => ({ type: viewsActionTypes.SET_GLOBAL_ERROR, payload})
}