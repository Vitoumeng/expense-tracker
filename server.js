require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

// middleware to handle CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// routes
app.use("/api/v1", authRoutes);

const PORT = process.env.PORT || 8000;

// connect to mongodb
connectDB();

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
