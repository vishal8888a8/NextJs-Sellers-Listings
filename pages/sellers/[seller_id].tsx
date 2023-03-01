import React, { useEffect, useState } from "react";
import ListingModal from "@/components/Modals/ListingModal";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";

type Props = {};
// type ProductType = {
//     _id: string;
//     name: string;
//     sku: string;
//     stock: number;
//     costPrice: number;
//     sellPrice: number;
//     image: string;
// };
type ProductInterface = {
    title: string;
    stock: string;
    price: string;
    thumbnail: string;
};
let init_stat = {
    _id: "",
    name: "",
    contact: "",
    location: "",
    address: "",
    gender: "",
    image: "",
    listings: 0,
    __v: 0,
};
export default function Home({}: Props) {
    let router = useRouter();

    let [listingData, updateListingData] = useState<Array<ProductInterface>>(
        []
    );
    let [seller, updateSeller] = useState(init_stat);

    useEffect(() => {
        if (!router.isReady) return;

        const fetch_seller_data = async () => {
            let res = await axios(
                "http://localhost:3000/api/sellers?id=" + router.query.seller_id
            );
            updateSeller(res.data);
        };
        let api_call = async () => {
            let res = await axios("https://dummyjson.com/products?limit=20");
            updateListingData(res.data.products);
        };
        fetch_seller_data();
        api_call();
    }, [router.isReady]);

    return (
        <>
            <div className="sellerDetails">
                <div className="sellerImage">
                    <img src={seller.image} alt="seller image" />
                </div>
                <div className="title">
                    <h1>{seller.name}</h1>
                </div>
                <div className="address">
                    <h4>Address :</h4>
                    <hr />
                    <h3>{seller.address}</h3>
                    <h3>{seller.location}</h3>
                </div>
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
                            {listingData.map((item, idx) => (
                                <tr key={idx}>
                                    <td>
                                        <img
                                            alt="Product Image"
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

export async function getServerSideProps() {
    let listingData = await axios("https://dummyjson.com/products?limit=20");
    return {
        props: {},
    };
}
