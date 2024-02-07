import mongoose from "mongoose";

const WareHouseShema = new  mongoose.Shema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 32,
        },
        address: {
            type: String,
            required: true,
            maxlength: 32,
        },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('WareHouse', WareHouseShema);