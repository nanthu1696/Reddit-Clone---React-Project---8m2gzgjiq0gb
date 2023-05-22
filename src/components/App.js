import React, { useState } from "react";
import "../styles/App.css";
import Navigation from "./Navigation";
import Posts from "./Posts";
const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div id="main">
      <Navigation log={isLogged} set={setIsLogged} />
      <Posts />
    </div>
  );
};

export default App;
