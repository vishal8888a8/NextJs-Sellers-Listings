import Listings from "@/data/localListings";
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/database/db";
connectDB();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === "GET") {
            const { query } = req;
            const seller_id = query.sellerId;
            res.status(200).send(
                Listings.filter((list) => list.seller_id === seller_id)
            );
        } else if (req.method === "POST") {
            Listings.push(req.body);
            res.status(200).send(Listings);
        } else if (req.method === "PUT") {
            let index = Listings.findIndex(
                (item) => item.product_id === req.body.product_id
            );
            if (index === -1) throw new Error("Product ID not found");
            Listings[index] = req.body;
            res.send(Listings);
        } else if (req.method === "DELETE") {
            let index = Listings.findIndex(
                (item) => item.product_id === req.body.product_id
            );
            if (index === -1) throw new Error("Product ID not found");
            Listings.splice(index, 1);
            res.send(Listings);
        }
    } catch (err) {
        res.status(400).send((err as Error).message);
    }
}
