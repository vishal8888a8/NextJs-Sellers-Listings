import React from "react";
import Link from "next/link";
import SellerModal from "../Modals/SellerModal";

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

type Props = {
    sellersData: sellerInterface[];
    searchInput: string;
    deleteHandler: (item: sellerInterface) => void;
    api_call: () => void;
};

export default function Table({
    sellersData,
    searchInput,
    deleteHandler,
    api_call,
}: Props) {
    return (
        <div className="list_container">
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
                            (item, idx) =>
                                item.name
                                    .toLowerCase()
                                    .includes(searchInput.toLowerCase()) && (
                                    <tr key={idx}>
                                        <td>
                                            <Link href={"/sellers/" + item._id}>
                                                {item.name}
                                            </Link>
                                        </td>
                                        <td>{item.contact}</td>
                                        <td>{item.listings}</td>
                                        <td>
                                            <div className="buttons">
                                                <SellerModal
                                                    api_call={api_call}
                                                    method="PUT"
                                                    type="Update"
                                                    buttonStyle={{
                                                        backgroundColor:
                                                            "green",
                                                        color: "white",
                                                        borderRadius: "0.2rem",
                                                    }}
                                                    id={item._id}
                                                />
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
    );
}
