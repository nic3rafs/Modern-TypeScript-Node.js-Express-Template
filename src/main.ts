import 'dotenv/config'
import express from "express";
import cors from "cors";
import { exampleFunction } from "./services/example.js";
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/example", (req, res) => {
  res.send(exampleFunction());
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
