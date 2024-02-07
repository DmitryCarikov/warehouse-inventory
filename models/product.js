import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        imageUrl: String,
        categories: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Category',
            }
        ],
        storageLocation: {
            type: Schema.Types.ObjectId,
            ref: 'StorageLocation',
        },
        suplier: {
            type: Schema.Types.ObjectId,
            ref: 'Suplier',
        },
        wareHouse: {
            type: Schema.Types.ObjectId,
            red: 'WareHouse',
        }
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('Product', ProductSchema);