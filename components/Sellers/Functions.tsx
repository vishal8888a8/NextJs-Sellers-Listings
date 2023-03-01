import React from "react";
import SellerModal from "../Modals/SellerModal";

type Props = {
    api_call: () => void;
    updateSearchInput: (value: string) => void;
};

export default function Functions({ api_call, updateSearchInput }: Props) {
    return (
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
                <SellerModal
                    api_call={api_call}
                    method="POST"
                    type="Add Sellers"
                    buttonStyle={{
                        backgroundColor: "#3d1766",
                        color: "white",
                    }}
                    id="0"
                />
            </div>
        </div>
    );
}
