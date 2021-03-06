import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {render as rtlRender, fireEvent} from "@testing-library/react";
import reducer from "../redux/reducers";

// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState or the entire store that the ui is rendered with
export function renderWithRedux(
    ui,
    {initialState, store = createStore(reducer, initialState), ...renderOptions} = {}
) {
    const Wrapper = ({children}) => {
        return <Provider store={store}>{children}</Provider>;
    };
    return {
        ...rtlRender(ui, {
            Wrapper: Wrapper,
            ...renderOptions,
        }),
        // adding `store` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        store,
    };
}
