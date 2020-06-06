import React from "react";
import { Router } from "@reach/router";
import HomePage from "./pages/HomePage";
import PathsModal from "./pages/pathsModal";
const App: React.FC = () => {
  return (
    <>
      <Router>
        <HomePage path="/" />
        <PathsModal path="/pathsModal" />
      </Router>
    </>
  );
};

export default App;
