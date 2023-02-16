import React, { useEffect, useState } from "react";
import SellerModal from "@/components/SellerModal";
import axios from "axios";
import Link from "next/link";

type Props = {};

export default function home({}: Props) {
    let [sellersData, updateSellersData] = useState([]);
    useEffect(() => {
        let api_call = async () => {
            let res = await axios("https://jsonplaceholder.typicode.com/users");
            updateSellersData(res.data);
        };
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
                        <input type="text" name="search" id="search" />
                    </div>
                    <div className="add_sellers">
                        <SellerModal
                            sellers={sellersData}
                            updateSellers={updateSellersData}
                        />
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
                            {sellersData.map((item) => (
                                <tr>
                                    <td>
                                        <Link href={"/sellers/" + item.name}>
                                            {item.name}
                                        </Link>
                                    </td>
                                    <td>{item.phone}</td>
                                    <td>26</td>
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
