import React, { useState } from "react";
// import SellersList from "@/database/sellerSchema";
// import Functions from "@/components/Sellers/Functions";
// import Table from "@/components/Sellers/Table";
// import SellersList from "../database/sellerSchema";
import Functions from "../components/Sellers/Functions";
import Table from "../components/Sellers/Table";
import axios from "axios";

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

type Props = { sellerDataDB: sellerInterface[] };
export default function Home({ sellerDataDB }: Props) {
    let [sellersData, updateSellersData] =
        useState<Array<sellerInterface>>(sellerDataDB);
    let [searchInput, updateSearchInput] = useState<string>("");

    var api_call = async () => {
        const headers = {
            "Content-Type": "application/json",
        };
        let res = await axios("http://localhost:3000/api/sellers", { headers });
        updateSellersData(res.data);
    };

    let deleteHandler = async (item: sellerInterface) => {
        {
            let res = await axios.delete("http://localhost:3000/api/sellers", {
                data: {
                    _id: item._id,
                },
            });
            await api_call();
        }
    };

    return (
        <>
            <div className="Home">
                <h1>HOME SCREEN</h1>
            </div>
            <Functions
                api_call={api_call}
                updateSearchInput={updateSearchInput}
            />
            <Table
                sellersData={sellersData}
                searchInput={searchInput}
                deleteHandler={deleteHandler}
                api_call={api_call}
            />
        </>
    );
}

export async function getServerSideProps() {
    let sellerDataDB: sellerInterface[] = []; //await SellersList.find();
    sellerDataDB = JSON.parse(JSON.stringify(sellerDataDB));
    return {
        props: { sellerDataDB },
    };
}
