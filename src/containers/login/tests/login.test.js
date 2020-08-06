import {render, fireEvent, waitFor, getByTestId} from "@testing-library/react";
import React from "react";
import Login from "../login";

describe("login", () => {
    describe("When initialized Login", () => {
        test("should render correctly", () => {
            const {getByTestId} = render(<Login />);
            const element = getByTestId("Login");
            expect(element).toHaveClass("login");
            expect(element).toBeInTheDocument();
        });
        test("should render the components properly", () => {
            const {getByText, getByPlaceholderText, getByTitle} = render(<Login />);
            const imageLogo = getByTitle("logo");
            const input = getByPlaceholderText("Ingresa tu api key");
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
        test("should return 'api key es icorrecto' when apikey is icorrect", async () => {
            const {getByTestId, getByRole, getByPlaceholderText} = render(<Login />);
            const input = getByPlaceholderText("Ingresa tu api key");
            fireEvent.change(input, {target: {value: "abc"}});
            fireEvent.submit(getByTestId("login-form"));
            //TODO: revisar script test add params for waitfor
            await waitFor(() =>
                expect(getByRole("alert")).toHaveTextContent("api key es icorrecto")
            );
        });
    });
});
