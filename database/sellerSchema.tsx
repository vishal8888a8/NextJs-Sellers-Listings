import mongoose from "mongoose";

let sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
        unique: true,
    },
    location: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    listings: {
        type: Number,
        default: 0,
    },
});

let SellersList =
    mongoose.models.SellersCol || mongoose.model("SellersCol", sellerSchema);

export default SellersList;
