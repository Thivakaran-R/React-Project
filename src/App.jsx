import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Propsdrilling from "./Components/Propsdrilling/Propsdrilling";
import Toggle from "./Components/Toggle-Switch/Toggle";
import Usereducer from "./Components/Hook/Usereducer";
import Card from "./Components/Card/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Toggle/>} />
          <Route path="/propsdrilling" element={<Propsdrilling />} />
          <Route path="/hook" element={<Usereducer />} />
          <Route path="/shop" element={<Card/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
