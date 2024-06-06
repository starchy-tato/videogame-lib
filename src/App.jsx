import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HelloWorld from "./components/Header";
import AddForm from "./components/AddForm";
import SearchBar from "./components/SearchBar";
import VideoGameList from "./components/VideoGameList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HelloWorld />
      <AddForm />
      <SearchBar />
      <VideoGameList />
      <p className="read-the-docs">starchy-tato @ 2024</p>
    </>
  );
}

export default App;
