import React from "react";
import {render, waitFor} from "@testing-library/react";
import App from "../app";

describe("containers/app", () => {
    test("renders main classname", async () => {
        const {getByTestId} = render(<App />);
        const classElement = getByTestId("container-app");
        expect(classElement).toHaveClass("app");
        await waitFor(() => expect(getByTestId("Login")).toBeInTheDocument());
    });
});
