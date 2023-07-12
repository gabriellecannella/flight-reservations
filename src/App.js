import "./App.css";
import Table from "./Table";
import flightData from "./flightData.json";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    fetchFlights();
  }, [query]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter origin or destination..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={data} />
    </div>
  );
}

export default App;
