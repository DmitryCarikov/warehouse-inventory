import mongoose from "mongoose";

const SuplierShema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true,
            maxlength: 32,
        },
        address: {
            type: String,
            required: true,
            maxlength: 32,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('Suplier', SuplierShema);