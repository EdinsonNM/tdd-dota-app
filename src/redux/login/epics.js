import {ofType, combineEpics} from "redux-observable";

import {LOGIN_ACTION} from "./constants";
import {switchMap, map, catchError} from "rxjs/operators";
import OpenDotaApi from "../../api/opendota.api";
import {of} from "rxjs";
import {loginDoneAction} from "./actions";
export const loginActionEpic = (action$) =>
    action$.pipe(
        ofType(LOGIN_ACTION),
        switchMap(({payload}) =>
            OpenDotaApi.getPlayer(payload).pipe(
                map((result) => result.response),
                map(loginDoneAction),
                catchError((error) => of(loginDoneAction(error)))
            )
        )
    );

export const LoginEpics = combineEpics(loginActionEpic);
