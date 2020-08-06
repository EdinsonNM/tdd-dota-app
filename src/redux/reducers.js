import {combineReducers} from "redux";
import AppReducer from "./app/reducer";
import LoginReducer from "./login/reducer";
export default combineReducers({AppReducer, LoginReducer});
