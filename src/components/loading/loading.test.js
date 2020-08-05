import React from "react";
import {render} from "@testing-library/react";
import Loading from "./loading";

describe("component/loading", () => {
    test("renders main classname", () => {
        const {getByTestId} = render(<Loading />);
        const classElement = getByTestId("component_loading");
        expect(classElement).toHaveClass("component_loading");
    });
    test("renders text content loading", () => {
        const {getByText} = render(<Loading />);
        const textContent = getByText(/loading/, "i");
        expect(textContent).toBeInTheDocument();
    });
});
