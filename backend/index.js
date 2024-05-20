import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Helloo",
  });
});

const startServer = async () => {
  try {
    app.listen(8080, () => {
      console.log("server running on port 8080");
    });
  } catch (error) {}
};

startServer();
