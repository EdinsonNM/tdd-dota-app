import {loginAction, loginDoneAction} from "../actions";
import {PlayerBuilder} from "../../../constants/mocks/player.mock";
import {LOGIN_DONE_ACTION} from "../constants";
describe("login/actions", () => {
    test("should create action LOGIN_ACTION", () => {
        expect(loginAction(1)).toMatchSnapshot();
    });
    test("should create action LOGIN_DONE_ACTION", () => {
        const player = PlayerBuilder();
        const expected = {
            type: LOGIN_DONE_ACTION,
            payload: player,
        };
        expect(loginDoneAction(player)).toEqual(expected);
    });
});
