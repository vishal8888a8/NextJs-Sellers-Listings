import mongoose from "mongoose";

interface Lists {
    sellerId: string;
    name: string;
    sku: string;
    stock: number;
    costPrice: number;
    sellPrice: number;
    image: string;
}

let listingSchema = new mongoose.Schema<Lists>({
    sellerId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    sku: {
        type: String,
        required: true,
        unique: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    costPrice: {
        type: Number,
        required: true,
    },
    sellPrice: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

let Listings =
    mongoose.models.ListingCol ||
    mongoose.model<Lists>("ListingCol", listingSchema);

export default Listings;
