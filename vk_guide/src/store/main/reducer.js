import { viewsStructure } from "../../config";
import {
    accountActionTypes, 
    viewsActionTypes, 
} from "./ActionTypes";

const initalStateAccount = {
    schemeSettings: {
        scheme: "bright_light",
        default_scheme: "bright_light",
    },
}
const initalStateViews = {
    account: {},
    scheme: "bright_light",
    default_scheme: "bright_light",
    activeStory: viewsStructure.Excursions.navName,
    activePanel: viewsStructure.Excursions.panels.homepanel,
    historyPanels: [{view: viewsStructure.Excursions.navName, panel: viewsStructure.Excursions.panels.homepanel}],
    snackbar: null,
    need_epic: true,
    popout: null,
    globalError: null,
    historyPanelsView: [viewsStructure.Excursions.panels.homepanel],
}
export const accountReducer = (state = initalStateAccount, action) => {
    switch(action.type) {
        case accountActionTypes.SET_SCHEME:
            return { ...state, schemeSettings: {...state.schemeSettings, ...action.payload}}
        default: 
            return state

    }
}
export const viewsReducer = (state = initalStateViews, action) => {
    switch(action.type) {
        case viewsActionTypes.SET_ACTIVE_STORY:
            return {...state, activeStory: action.payload}
        case viewsActionTypes.SET_ACTIVE_PANEL:
            return {...state, activePanel: action.payload}
        case viewsActionTypes.SET_ACTIVE_SCENE:
            return {...state, activePanel: action.payload.panel, activeStory: action.payload.story}
        case viewsActionTypes.SET_HISTORY:
            let viewHistory = action.payload.map((obj, i) => obj.panel)
            return {...state, historyPanels: action.payload, historyPanelsView: viewHistory}
        case viewsActionTypes.SET_NEED_EPIC:
            return {...state, need_epic: action.payload}
        case viewsActionTypes.SET_SNACKBAR:
            return {...state, snackbar: action.payload}
        case viewsActionTypes.SET_GLOBAL_ERROR:
            return {...state, globalError: action.payload}
        case viewsActionTypes.SET_POPOUT:
            return {...state, popout: action.payload}
        default: 
            return state
    }
}
