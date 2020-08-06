import initialState from "./state";
import {LOGIN_ACTION, LOGIN_DONE_ACTION} from "./constants";
import {handleActions} from "redux-actions";
const LoginReducer = handleActions(
    {
        [LOGIN_ACTION]: (state) => ({...state, loading: true}),
        [LOGIN_DONE_ACTION]: {
            next: (state, {payload}) => ({...state, loading: false, player: payload}),
            throw: (state) => ({...state, loading: false, error: true}),
        },
    },
    initialState
);
export default LoginReducer;
