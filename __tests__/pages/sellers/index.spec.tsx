import React from "react";
import Index from "../../../pages/sellers/index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Index Sellers page", () => {
    test("render heading", () => {
        render(<Index />);
        const heading = screen.getByRole("heading", {
            name: /HOME/i,
        });

        expect(heading).toBeInTheDocument();
    
    });
});
