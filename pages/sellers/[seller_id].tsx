import React, { useEffect, useState } from "react";
import ListingModal from "@/components/ListingModal";
import { useRouter } from "next/router";
import axios from "axios";

type Props = {};

export default function home({}: Props) {
    let router = useRouter();
    let [listingData, updateListingData] = useState([]);
    useEffect(() => {
        let api_call = async () => {
            let res = await axios("https://dummyjson.com/products?limit=20");
            updateListingData(res.data.products);
        };
        api_call();
    }, []);

    return (
        <>
            <div className="title">
                <h1>{router.query.seller_id}</h1>
            </div>
            <div className="list_container">
                <div className="functions">
                    <div>
                        <h1>Listings</h1>
                    </div>
                    <div className="add_sellers">
                        <ListingModal
                            listing={listingData}
                            updateListing={updateListingData}
                        />
                    </div>
                </div>
                <div className="table_list">
                    <table className="students">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listingData.map((item) => (
                                <tr>
                                    <td>
                                        <img
                                            src={item.thumbnail}
                                            style={{
                                                height: "2.5rem",
                                                width: "2.5rem",
                                                marginRight: "1rem",
                                                borderRadius: "0.3rem",
                                            }}
                                        />
                                        {item.title}
                                    </td>
                                    <td>{item.stock}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <div className="buttons">
                                            <button className="update">
                                                Update
                                            </button>
                                            <button className="delete">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
