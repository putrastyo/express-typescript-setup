import express, { type Request, type Response } from "express";
import config from "./config/config.js";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const port = config.app.port;

// Config: Setup Cors
const corsOptions = {};
app.use(cors(corsOptions));

// Config: Connect to DB
const mongoURI = config.database.mongo_uri;

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
