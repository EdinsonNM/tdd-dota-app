import state from "../state";
describe("state", () => {
    test("should return initial state", () => {
        expect(state).toMatchSnapshot();
    });
});
