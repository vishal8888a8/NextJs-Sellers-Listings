import Listings from "@/database/listingSchema";
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/database/db";
connectDB();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        if (req.method === "GET") {
            if (req.query.id === undefined) {
                const data = await Listings.find();
                res.status(200).send(data);
            } else {
                const data = await Listings.findById({ _id: req.query.id });
                res.status(200).send(data);
            }
        } else if (req.method === "POST") {
            const data = new Listings(req.body);
            let response = await data.save(); 
            res.status(200).send(response);
        } else if (req.method === "PUT") {
            await Listings.findByIdAndUpdate(req.query.id, req.body, {
                new: true,
            });
            res.status(200).send("updated!");
        } else if (req.method === "DELETE") { 
            let _id = req.query.id;
            await Listings.deleteOne({ _id });
            res.status(200).send("Data Deleted!");
        }
    } catch (err) {
        res.status(400).send((err as Error).message);
    }
}
