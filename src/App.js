import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import DataArr from "./data/RealEstate.json";

function App() {
  const [filterArr, setFilterArr] = useState([...DataArr]);
  return (
    <div className="bg-[#f3f3f6]">
      <Home filterArr={filterArr} setFilterArr={setFilterArr} />
    </div>
  );
}

export default App;
