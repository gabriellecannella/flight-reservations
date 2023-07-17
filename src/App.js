import "./App.css";
import Table from "./Table";
import { useEffect, useState } from "react";
import axios from "axios";
import { MuiHeader } from "./components/MiHeader.tsx";
import { MuiButton } from "./components/MuiButton.tsx";
import { MuiTextField } from "./components/MuiTextField.tsx";
//import { MuiTypography } from "./components/MuiTypography.tsx";

function App() {
  const [query, setQuery] = useState(["null_orgin", "null_dest"]);
  console.log(query);
  //const [orgin, setOrgin] = useState("");
  //const [dest = setDest] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      console.log(query[0]);
      console.log(query[1]);
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    fetchFlights();
  }, [query]);

  return (
    <div className="App">
      <MuiHeader />
      {/* <MuiButton /> */}
      {/* <MuiTextField /> */}
      <input
        type="text"
        placeholder="Enter origin"
        onChange={(e) => setQuery([e.target.value.toLowerCase(), query[1]])}
      />
      <input
        type="text"
        placeholder="Enter origin"
        onChange={(e) => setQuery([query[0], e.target.value.toLowerCase()])}
      />
      <Table data={data} />
    </div>
  );
}

export default App;
