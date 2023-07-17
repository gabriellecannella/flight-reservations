import express from "express";
const app = express();
import cors from "cors";
import { flightData } from "../backend/flightData.js";

app.use(cors());

app.get("/", (req, res) => {
  console.log(req.query);
  const { q } = req.query;
  const query = q.split(",");
  console.log(query);

  const keys_origin = [
    "origin",
    //"destination",
    "origin_full_name",
    //"destination_full_name",
  ];

  const keys_dest = [
    //"origin",
    "destination",
    //"origin_full_name",
    "destination_full_name",
  ];

  const search = (data) => {
    return data.filter((flight) => {
      if (
        query[0] &&
        query[1] &&
        query[0] != "null_origin" &&
        query[1] != "null_dest"
      ) {
        console.log("in first if");
        return (
          keys_origin.some((key) =>
            flight[key].toLowerCase().includes(query[0])
          ) &&
          keys_dest.some((key) => flight[key].toLowerCase().includes(query[1]))
        );
      } else if (
        query[0] &&
        query[0] != "null_origin" &&
        (query[1] == "" || query[1] == "null_dest")
      ) {
        console.log("here!");
        return keys_origin.some((key) =>
          flight[key].toLowerCase().includes(query[0])
        );
      }
    });
  };

  res.json(search(flightData).splice(0, 20));
});

app.listen(5000, () => {
  console.log("API is working yay");
});
