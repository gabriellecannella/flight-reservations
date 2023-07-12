import "./App.css";
import Table from "./Table";
import flightData from "./flightData.json";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  const keys = ["origin", "destination", "origin_full_name"];

  // searches each flight for user input in each specified key
  const search = (data) => {
    return data.filter((flight) =>
      keys.some((key) => flight[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter origin or destination..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(flightData)} />
    </div>
  );
}

export default App;
