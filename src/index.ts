require("dotenv").config();

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//database setting
const db_name = process.env.DB_NAME;
const db_password = process.env.DB_PASSWORD;

const url = `mongodb+srv://${db_name}:${db_password}@cluster0.iyauopq.mongodb.net/secrectsDB`;
mongoose
  .connect(url)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err: any) => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});