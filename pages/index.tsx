import React, { useEffect, useState } from "react";
import SellerModal from "@/components/SellerModal";
import axios from "axios";
import Link from "next/link";

type Props = {};
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
export default function home({}: Props) {
    let [sellersData, updateSellersData] = useState<Array<sellerInterface>>([]);
    let [searchInput, updateSearchInput] = useState<string>("");

    let api_call = async () => {
        let res = await axios("http://localhost:3000/api/sellers");
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

    useEffect(() => {
        api_call();
    }, []);

    return (
        <>
            <div className="title">
                <h1>HOME SCREEN</h1>
            </div>
            <div className="list_container">
                <div className="functions">
                    <div className="icon_search">
                        <i className="fa fa-search icon"></i>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            onChange={(e) => updateSearchInput(e.target.value)}
                        />
                    </div>
                    <div className="add_sellers">
                        <SellerModal api_call={api_call} />
                    </div>
                </div>
                <div className="table_list">
                    <table className="students">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Contact No.</th>
                                <th>Total Listings</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sellersData.map(
                                (item) =>
                                    item.name
                                        .toLowerCase()
                                        .includes(
                                            searchInput.toLowerCase()
                                        ) && (
                                        <tr>
                                            <td>
                                                <Link
                                                    href={
                                                        "/sellers/" + item.name
                                                    }
                                                >
                                                    {item.name}
                                                </Link>
                                            </td>
                                            <td>{item.contact}</td>
                                            <td>{item.listings}</td>
                                            <td>
                                                <div className="buttons">
                                                    <button className="update">
                                                        Update
                                                    </button>
                                                    <button
                                                        className="delete"
                                                        onClick={() =>
                                                            deleteHandler(item)
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
