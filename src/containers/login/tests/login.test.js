import {render, fireEvent, waitFor, getByTestId} from "@testing-library/react";
import React from "react";
import Login from "../login";
import {useSelector, useDispatch} from "react-redux";
import {loginAction} from "../../../redux/login/actions";
import {renderWithRedux} from "../../../libs/testUtils";
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
    useSelector: jest.fn((fn) => fn({})),
    useDispatch: () => mockDispatch,
}));

describe("login", () => {
    beforeEach(() => {
        useSelector.mockImplementation((callback) => {
            return callback({LoginReducer: {error: false}});
        });
    });
    describe("When initialized Login", () => {
        test("should render correctly", () => {
            const {getByTestId} = render(<Login />);
            const element = getByTestId("Login");
            expect(element).toHaveClass("login");
            expect(element).toBeInTheDocument();
        });
        test("should render the components properly", () => {
            const {getByText, getByTestId, getByTitle} = render(<Login />);
            const imageLogo = getByTitle("logo");
            const input = getByTestId("userid");
            const button = getByText(/Ingresar/, "i");
            const title = getByText(/Mi perfil gamer/, "i");
            expect(title).toBeInTheDocument();
            expect(imageLogo).toBeInTheDocument();
            expect(button).toBeInTheDocument();
            expect(input).toBeInTheDocument();
        });
    });
    describe("When initialized and click 'Ingresar'", () => {
        test("should return 'api key es requerido' when input is empty", async () => {
            const {getByTestId, getByRole} = render(<Login />);
            fireEvent.submit(getByTestId("login-form"));
            //TODO: revisar script test add params for waitfor
            await waitFor(() =>
                expect(getByRole("alert")).toHaveTextContent("api key es requerido")
            );
        });
        test("should return 'api key es icorrecto' when apikey is incorrect", async () => {
            const {getByTestId, getByRole, getByPlaceholderText, state} = renderWithRedux(
                <Login />
            );

            const input = getByTestId("userid");
            fireEvent.change(input, {target: {value: "abc"}});
            fireEvent.submit(getByTestId("login-form"));
            useSelector.mockImplementation((callback) => {
                return callback({LoginReducer: {error: true}});
            });
            //TODO: revisar script test add params for waitfor
            await waitFor(() =>
                expect(getByRole("alert")).toHaveTextContent("api key es icorrecto")
            );
        });
        test("should call loginAction", async () => {
            const id = "123";
            const {getByTestId} = render(<Login />);
            const input = getByTestId("userid");
            fireEvent.change(input, {target: {value: id}});
            fireEvent.submit(getByTestId("login-form"));
            await waitFor(() =>
                expect(mockDispatch).toHaveBeenCalledWith(loginAction(id))
            );
        });
    });
});
