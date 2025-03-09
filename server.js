require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

// connect to mongodb
connectDB();

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
