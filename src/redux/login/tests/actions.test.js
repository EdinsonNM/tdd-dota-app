import {loginAction, loginDoneAction} from "../actions";
describe("login/actions", () => {
    test("should create action LOGIN_ACTION", () => {
        expect(loginAction()).toMatchSnapshot();
    });
    test("should create action LOGIN_DONE_ACTION", () => {
        expect(loginDoneAction([1, 2, 3])).toMatchSnapshot();
    });
});
