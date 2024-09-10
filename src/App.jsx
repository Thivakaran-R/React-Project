import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Child2 from "./Components/Propsdrilling/Child2";
import Propsdrilling from "./Components/Propsdrilling/Propsdrilling";

function App() {
  const [count, setCount] = useState(0);

  return <>
    <Propsdrilling/>
  </>;
}

export default App;
