import mongoose from "mongoose";

const CheckShema = new mongoose.Schema(
    {
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product',
            }
        ],
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('Check', CheckShema);