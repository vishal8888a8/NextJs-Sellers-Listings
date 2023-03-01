import React from "react";
import Home from "../../pages/index";
import { fireEvent } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

type sellerInterface = {
    _id: string;
    name: string;
    contact: string;
    location: string;
    address: string;
    gender: string;
    image: string;
    listings: number;
};
let sellerDataDB: sellerInterface[] = [];

describe("Checking for Main Sellers page components", () => {

    test("render heading", () => {
        jest.mock("../../components/Sellers/Functions", () => {
            return jest.fn(() => (
                <div>
                    <h1>Functions Component</h1>
                </div>
            ));
        });
        jest.mock("../../components/Sellers/Table", () => {
            return jest.fn(() => (
                <div>
                    <h1>Table Component</h1>
                </div>
            ));
        });
        render(<Home sellerDataDB={sellerDataDB} />);

        expect(
            screen.getByRole("heading", {
                name: /HOME SCREEN/i,
            })
        ).toBeInTheDocument();

        // expect(screen.getByText("Functions Component")).toBeInTheDocument();

        // expect(screen.getByText("Table Component")).toBeInTheDocument();
    });
});



// describe("Checking the CRUD operation for seller", () => {
//     beforeEach(() => {
//         render(<Home sellerDataDB={sellerDataDB} />);
//     });
//     //Create
//     //Read
//     //Update
//     //Delete
// });
