import {combineEpics} from "redux-observable";
import AppEpics from "./app/epics";
import {LoginEpics} from "./login/epics";

export default combineEpics(AppEpics, LoginEpics);
