import logo from "./logo.svg";
import "./App.css";
import flightData from "./flightData.json";

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Search..." />
      {flightData.map((val, key) => {
        return (
          <div>
            <p>{val.origin} </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
