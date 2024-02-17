import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/resMockData.json"
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

describe('Search Component Test Cases', () => {

    global.fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve(MOCK_DATA);
            }
        });
    });

    it("Should load body component with search button", async() => {
        await act(async () => render(<BrowserRouter><Body></Body></BrowserRouter>));

        const body = screen.getByRole("button", {name:"Search"});

        expect(body).toBeInTheDocument();
    });

    it("Should load all the restaurant cards initially", async() => {
        await act(async () => render(<BrowserRouter><Body></Body></BrowserRouter>));

        const allCards = screen.getAllByTestId("resCardId");

        expect(allCards.length).toBe(20)
    });

    it("Should filter the restaurant card based on search input value", async() => {
        await act(async () => render(<BrowserRouter><Body></Body></BrowserRouter>));

        const searchButton = screen.getByRole("button", {name:"Search"});

        const inputSearch = screen.getByTestId("searchId");
        fireEvent.change(inputSearch, { target: { value: "burger" } });

        fireEvent.click(searchButton);

        const cards = screen.getAllByTestId("resCardId");

        expect(cards.length).toBe(2);
    })

    it("Should return the top rated restaurent", async() => {
        await act(async () => render(<BrowserRouter><Body></Body></BrowserRouter>));

        const filterButton = screen.getByRole("button", {name:"Top Rated Restaurents"});
        fireEvent.click(filterButton);

        const filterCards = screen.getAllByTestId("resCardId");

        expect(filterCards.length).toBe(17)
    })
})