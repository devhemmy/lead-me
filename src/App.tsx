import React from "react";
import { Router } from "@reach/router";
import HomePage from "./pages/HomePage";
import PathsModal from "./pages/pathsModal";
import NonTech from "./pages/NonTech";
import PlatformsModal from "./pages/PlatformsModal";
import Coursera from "./pages/Coursera";
import Edx from "./pages/Edx";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <HomePage path="/" />
        <PathsModal path="/pathsModal" />
        <NonTech path="/non-tech" />
        <PlatformsModal path="/platforms" />
        <Coursera path="/coursera" />
        <Edx path="/edx" />
      </Router>
    </>
  );
};

export default App;
