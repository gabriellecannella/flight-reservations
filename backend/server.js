import express from "express";
const app = express();
import cors from "cors";
import { flightData } from "../backend/flightData.js";

app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;

  const keys = [
    "origin",
    "destination",
    "origin_full_name",
    "destination_full_name",
  ];

  const search = (data) => {
    return data.filter((flight) =>
      keys.some((key) => flight[key].toLowerCase().includes(q))
    );
  };

  res.json(search(flightData).splice(0, 10));
});

app.listen(5000, () => {
  console.log("API is working yay");
});
