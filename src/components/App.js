import React, { useState } from "react";
import "../styles/App.css";
import Navigation from "./Navigation";
const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div id="main">
      <Navigation log={isLogged} set={setIsLogged} />
    </div>
  );
};

export default App;
