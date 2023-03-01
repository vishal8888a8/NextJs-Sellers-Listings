import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";
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

const mockData: sellerInterface[] = [];

describe("Checking Table Rendering", () => {
    beforeEach(() => {
        const api_call = jest.fn();
        const deleteHandler = jest.fn();
        render(
            <Table
                searchInput=""
                sellersData={mockData}
                api_call={api_call}
                deleteHandler={deleteHandler}
            />
        );
    });
    test("Table presence", () => {
        expect(screen.getByRole("table")).toBeInTheDocument();
    });
});
