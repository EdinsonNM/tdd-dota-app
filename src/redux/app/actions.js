import {createActions} from "redux-actions";
import {APP_ACTION} from "./constants";

const actionsCreator = createActions({}, APP_ACTION);
export const {appAction} = actionsCreator;
