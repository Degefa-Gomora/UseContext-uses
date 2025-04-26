import { useState } from "react";
import "./App.css";
import Abe from "./Components/Abe.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Abe />
    </>
  );
}

export default App;
