import express from "express";
const app = express();
import { flightData } from "../backend/flightData.js";

console.log(flightData);

app.get("/", (req, res) => {
  res.json({ flightData });
});

app.listen(5000, () => {
  console.log("API is working yay");
});
