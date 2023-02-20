import sellersList from "@/data/localSellers";
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
            const data = await SellersList.find();
            res.status(200).send(data);
        } else if (req.method === "POST") {
            const data = new SellersList(req.body);
            let response = await data.save();
            res.status(200).send(response);
        } else if (req.method === "PUT") {
            let index = sellersList.findIndex(
                (item) => item.id === req.body.id
            );
            if (index === -1) throw new Error("Seller's ID not found");
            sellersList[index] = req.body;
            res.send(sellersList);
        } else if (req.method === "DELETE") {
            let _id = req.body._id;
            await SellersList.deleteOne({ _id });
            res.status(200).send("Data Deleted!");
        }
    } catch (err) {
        console.log(err);
        res.status(400).send((err as Error).message);
    }
}
