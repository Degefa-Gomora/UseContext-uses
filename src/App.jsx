import { useState } from "react";
import "./App.css";
import Grandparent from "./Components/Grandparent.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Grandparent />
    </>
  );
}

export default App;
