import mongoose from "mongoose";

const StorageLocationShema = new mongoose.Schema(
    {
        shelfNumber: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('StorageLocation', StorageLocationShema);