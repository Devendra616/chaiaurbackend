import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { DATA_LIMIT } from "./constants";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// accepts data in json format also
app.use(express.json({ limit: DATA_LIMIT }));
// excepts data from url , extended is for nested data
app.use(express.urlencoded({ extended: true, limit: DATA_LIMIT }));
// keep public static files like images, pdf, icons
app.use(express.static("public"));
// add and read cookies from server and client
app.use(cookieParser());

export { app };
