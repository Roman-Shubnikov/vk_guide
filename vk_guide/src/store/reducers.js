import { combineReducers } from "redux";
import {
    accountReducer as account,
    viewsReducer as views,

} from "./main";

export const reducers = combineReducers({
    account,
    views,
})