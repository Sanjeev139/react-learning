import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {

    it("Should load contact us component", () => {
        render(<Contact></Contact>)
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    })
    
    it("Should load button inside Contact us component", () => {
        render(<Contact></Contact>)
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    })
    
    it("Should return 2 input boxes on Contact us component", () => {
        render(<Contact></Contact>)
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        expect(inputBoxes.length).toBe(2);
    })
})