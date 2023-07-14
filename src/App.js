import "./App.css";
import Table from "./Table";
import { useEffect, useState } from "react";
import axios from "axios";
import { MuiHeader } from "./components/MiHeader.tsx";
import { MuiButton } from "./components/MuiButton.tsx";
import { MuiTextField } from "./components/MuiTextField.tsx";
//import { MuiTypography } from "./components/MuiTypography.tsx";

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
      <MuiHeader />
      <MuiButton />
      <MuiTextField />
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
