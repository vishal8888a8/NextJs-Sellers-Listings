import React from "react";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import Functions from "./Functions";
import "@testing-library/jest-dom";

describe("Checking Functions Rendering", () => {
    beforeEach(() => {
        const api_call = jest.fn();
        const updateSearchInput = jest.fn();
        render(
            <Functions
                api_call={api_call}
                updateSearchInput={updateSearchInput}
            />
        );
    });
    test("Search Bar presence", () => {
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    test("Check the presence of Add seller button", () => {
        const button = screen.getByRole("button", {
            name: /Add Sellers/i,
        });
        expect(button).toBeInTheDocument();
    });

    test("Check the Model popup", () => {
        const button = screen.getByRole("button", {
            name: /Add Sellers/i,
        });
        fireEvent.click(button);
        expect(screen.getByText("Sellers details")).toBeInTheDocument();
    });
});
