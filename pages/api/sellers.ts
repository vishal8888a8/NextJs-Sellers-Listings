import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/database/db";
connectDB();
import SellersList from "@/database/sellerSchema";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        if (req.method === "GET") {
            if (req.query.id === undefined) {
                const data = await SellersList.find();
                res.status(200).send(data);
            } else {
                const data = await SellersList.findById({ _id: req.query.id });
                if (data === null) res.status(404).send("Seller Not found!");
                else res.status(200).send(data);
            }
        } else if (req.method === "POST") {
            const data = new SellersList(req.body);
            let response = await data.save();
            res.status(201).send(response);
        } else if (req.method === "PUT") {
            await SellersList.findByIdAndUpdate(req.query.id, req.body, {
                new: true,
            });
            res.status(200).send("updated!");
        } else if (req.method === "DELETE") {
            let _id = req.body._id;
            await SellersList.deleteOne({ _id });
            res.status(200).send("Data Deleted!");
        }
    } catch (err) {
        // console.log(err);
        res.status(400).send((err as Error).message);
    }
}
