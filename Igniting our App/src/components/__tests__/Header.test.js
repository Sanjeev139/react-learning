import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"
import {Header} from "../Header"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

describe("Header Component Test Cases", () => {

    it("Should load the header component", () => {
        render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header></Header>
            </Provider>
            </BrowserRouter>
        );
        const button = screen.getByRole("button")

        expect(button).toBeInTheDocument();
    });

    if("Should change Login Button to Logout on click", () => {
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                <Header></Header>
                </BrowserRouter>
            </Provider>
        )
        const loginButton = screen.getByRole("button", {name:"Login"})
        fireEvent.click(loginButton);
        const logOutButton = screen.getByRole("button", {name:"logout"})

        expec(logOutButton).toBeInTheDocument();
    });
})