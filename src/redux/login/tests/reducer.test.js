import reducer from "../reducer";
import state from "../state";
import {loginAction, loginDoneAction} from "../actions";
import {PlayerBuilder} from "../../../constants/mocks/player.mock";
describe("LoginReducer", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual(state);
    });
    it("should return the LOGIN_ACTION state", () => {
        expect(reducer(undefined, loginAction(1))).toEqual({...state, loading: true});
    });
    it("should return the LOGIN_DONE_ACTION state for next", () => {
        const player = PlayerBuilder();
        expect(reducer(undefined, loginDoneAction(player))).toEqual({
            ...state,
            loading: false,
            player,
        });
    });
    it("should return the LOGIN_DONE_ACTION state for throw", () => {
        const player = PlayerBuilder();
        expect(reducer(undefined, loginDoneAction(Error()))).toEqual({
            ...state,
            loading: false,
            error: true,
        });
    });
});
