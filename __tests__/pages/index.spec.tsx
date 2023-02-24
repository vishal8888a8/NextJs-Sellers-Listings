import React from "react";
import Home from "../../pages/index";
// import SellerModal from "../../components/SellerModal";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Main Sellers page", () => {
    jest.mock("../../components/SellerModal", () => {});
    test("render heading", () => {
        render(<Home />);

        const heading = screen.getByRole("heading", {
            name: /HOME SCREEN/i,
        });
        expect(heading).toBeInTheDocument();

        const table = screen.getByRole("table");
        expect(table).toBeInTheDocument();

        const button = screen.getByRole("button", {
            name: /Add Sellers/i,
        });

        expect(button).toBeInTheDocument();
    });
});
