import WareHouseModel from '../models/wareHouse.js';

export const create = async (req, res) => {
    try {
        const { name, address } = req.body;

        const wareHouse = new WareHouseModel({
            name,
            address,
        });

        await wareHouse.save();

        res.status(201).json(wareHouse);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to create warehouse',
        });
    }
};

export const getAll = async (req, res) => {
    try {
        const warehouses = await WareHouseModel.find();
        res.json(warehouses);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to retrieve warehouses',
        });
    }
};

export const getOne = async (req, res) => {
    try {
        const wareHouseId = req.params.id;
        const wareHouse = await WareHouseModel.findById(wareHouseId);

        if (!wareHouse) {
            return res.status(404).json({ message: 'Warehouse not found' });
        }

        res.json(wareHouse);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error retrieving warehouse' });
    }
};

export const update = async (req, res) => {
    try {
        const wareHouseId = req.params.id;
        const { name, address } = req.body;

        const updatedWareHouse = await WareHouseModel.findByIdAndUpdate(wareHouseId, {
            name,
            address,
        }, { new: true });

        if (!updatedWareHouse) {
            return res.status(404).json({ message: 'Warehouse not found' });
        }

        res.json(updatedWareHouse);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to update warehouse',
        });
    }
};

export const remove = async (req, res) => {
    try {
        const wareHouseId = req.params.id;
        const deletedWareHouse = await WareHouseModel.findByIdAndDelete(wareHouseId);

        if (!deletedWareHouse) {
            return res.status(404).json({ message: 'Warehouse not found' });
        }

        res.json({ message: 'Warehouse successfully deleted' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to delete warehouse' });
    }
};