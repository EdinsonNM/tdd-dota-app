import {createActions} from "redux-actions";
import {LOGIN_ACTION, LOGIN_DONE_ACTION} from "./constants";

const actionsCreator = createActions(
    {},

    LOGIN_ACTION,
    LOGIN_DONE_ACTION
);

export const {loginAction, loginDoneAction} = actionsCreator;
