import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { names } from "./data/names";

function App() {
  const [randomName, setRandomName] = useState("");

  const handleRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setRandomName(names[randomIndex]);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React course</h1>
      <h2>extract a random name</h2>
      <div className="card">
        {randomName && <h3>{randomName}</h3>}
        <button onClick={handleRandomName}>Click here</button>
      </div>
    </>
  );
}

export default App;
