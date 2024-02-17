import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../components/mocks/resCardMenu.json";
import RestaurantCard from "../RestaurantCard";

describe("Restaurant Card component test cases", () => {

    it("Should check if restaurent card is loaded or not", () => {
        render(<RestaurantCard restData={MOCK_DATA}></RestaurantCard>);
        const name = screen.getByText("California Burrito");
        expect(name).toBeInTheDocument();
    })
})