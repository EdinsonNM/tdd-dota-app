import React from "react";
import {render} from "@testing-library/react";
import App from "../app";

describe("containers/app", () => {
    test("renders main classname", () => {
        const {getByTestId} = render(<App />);
        const classElement = getByTestId("container-app");
        expect(classElement).toHaveClass("app");
    });
});
