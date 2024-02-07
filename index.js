import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';

mongoose
    .connect('mongodb+srv://admin:Hesus2016@cluster0.vgtv5yo.mongodb.net/WareHouse')
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB ERROR', err));

const app = express();

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads')
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname)
    },
});

const upload = multer({ storage });

// media upload pathes
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`,
    });
});

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
});