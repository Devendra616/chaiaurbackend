import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (err) => {
      console.log("ERROR:", err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`server is running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log("ERROR:", err);
    throw err;
  }
})();
