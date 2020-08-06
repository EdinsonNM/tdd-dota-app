import {render, fireEvent, waitFor} from "@testing-library/react";
import React from "react";
import Login from "../login";
describe("login", () => {
    describe("When initialized Login", () => {
        test("should render correctly", () => {
            const {getByTestId} = render(<Login />);
            const element = getByTestId("Login");
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
            const {getByText, getByRole} = render(<Login />);
            const button = getByText(/Ingresar/, "i");
            fireEvent.click(button);
            //TODO: revisar script test add params for waitfor
            await waitFor(() =>
                expect(getByRole("alert")).toHaveTextContent("api key es requerido")
            );
        });
        test("should return 'api key es icorrecto' when apikey is icorrect", async () => {
            const {getByText, getByRole, getByPlaceholderText} = render(<Login />);
            const button = getByText(/Ingresar/, "i");
            const input = getByPlaceholderText("Ingresa tu api key");
            fireEvent.change(input, {target: {value: "abc"}});
            fireEvent.click(button);
            //TODO: revisar script test add params for waitfor
            await waitFor(() =>
                expect(getByRole("alert")).toHaveTextContent("api key es icorrecto")
            );
        });
    });
});
