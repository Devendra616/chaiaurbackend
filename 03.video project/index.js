// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "./src/db/index.js";

dotenv.config({
  path: "./env",
});

// connect to the database
const PORT = process.env.PORT || 8000;
connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("ERROR: error connecting to express", err);
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("ERROR: MongoDb connection failed !!!", err);
  });

/* import express from "express";
import { DB_NAME } from "./src/constants.js";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (err) => {
      console.log("ERROR connecting to express:", err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`server is listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log("ERROR:", err);
    throw err;
  }
})(); */
