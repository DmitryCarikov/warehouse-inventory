import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
            maxlength: 32,
        },
        description: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('Category', CategorySchema);