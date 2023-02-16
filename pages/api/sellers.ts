import sellersList from "@/data/localSellers";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === "GET") {
            res.status(200).send(sellersList);
        } else if (req.method === "POST") {
            sellersList.push(req.body);
            res.status(200).send(sellersList);
        } else if (req.method === "PUT") {
            let index = sellersList.findIndex(
                (item) => item.id === req.body.id
            );
            if (index === -1) throw new Error("Seller's ID not found");
            sellersList[index] = req.body;
            res.send(sellersList);
        } else if (req.method === "DELETE") {
            let index = sellersList.findIndex(
                (item) => item.id === req.body.id
            );
            if (index === -1) throw new Error("Seller's ID not found");
            sellersList.splice(index, 1);
            res.send(sellersList);
        }
    } catch (err) {
        res.status(400).send((err as Error).message);
    }
}
