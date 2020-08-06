import {PlayerBuilder} from "../../../constants/mocks/player.mock";
import OpenDotaApi from "../../../api/opendota.api";
import {ActionsObservable} from "redux-observable";
import {of} from "rxjs";
import {loginAction, loginDoneAction} from "../actions";
import {loginActionEpic} from "../epics";
describe("loginEpics", () => {
    describe("when dispatch loadAction", () => {
        test("should call loginDoneAction with player info", (done) => {
            const player = PlayerBuilder();
            jest.spyOn(OpenDotaApi, "getPlayer").mockImplementation(() =>
                of({response: player})
            );
            const action$ = ActionsObservable.of(loginAction(123));
            const expected = loginDoneAction(player);
            loginActionEpic(action$).subscribe((result) => {
                expect(result).toEqual(expected);
                done();
            });
        });
    });
});
