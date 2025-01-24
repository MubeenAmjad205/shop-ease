import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: [true, "Product name is required"],
        },
        description: {
            type: String,
            required: [true, "Product description is required"],
        },
        price: {
            type: Number,
            required: [true, "Product price is required"],
        },
        productImage: {
            type: String, // Relative path to the image
            required: [true, "Product image is required"],
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Created by is required"],
        },
    },
    {
        timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
    }
);

export const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);
