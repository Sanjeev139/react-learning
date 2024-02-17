import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCategoryItem.json";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";
import appStore from "../../utils/appStore";
import RestaurantMenu from "../RestaurantMenu";
import { Header } from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart  from "../Cart";

describe("Cart component test cases", () => {

    global.fetch = jest.fn(() => {
        return Promise.resolve({
            json : () => {
                return Promise.resolve(MOCK_DATA);
            }
        });
    });

    it("Should load the cart component", async() => {
        await act(async() => render(<Provider store={appStore}><RestaurantMenu></RestaurantMenu></Provider>));

        const cart = screen.getByText("The Hole in the Wall Cafe");

        expect(cart).toBeInTheDocument();
    });

    it("Should click on Accordion Header and open the Accordion", async() => {
        await act(async() => render(<Provider store={appStore}><RestaurantMenu></RestaurantMenu></Provider>));

        const accordionHeader = screen.getByText("Breakfast (17)")
        fireEvent.click(accordionHeader);

        const foodItem = screen.getAllByTestId("foodItem")

        expect(foodItem.length).toBe(17);
    });

    it("Should click on add button and increase the cart Item", async() => {
        await act(async() => render(<BrowserRouter><Provider store={appStore}><Header></Header><RestaurantMenu></RestaurantMenu><Cart></Cart></Provider></BrowserRouter>));

        const accordionHeader = screen.getByText("Breakfast (17)")
        fireEvent.click(accordionHeader);

        const addButton = screen.getAllByRole("button", {name:"Add+"});
        
        fireEvent.click(addButton[0]);
        fireEvent.click(addButton[1]);

        const getItem = screen.getByText("Cart 2")

        expect(getItem).toBeInTheDocument();

    });

})