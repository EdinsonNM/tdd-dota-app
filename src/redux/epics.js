import {combineEpics} from "redux-observable";
import AppEpics from "./app/epics";

export default combineEpics(AppEpics);
