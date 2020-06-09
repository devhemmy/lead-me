import React from "react";
import { Router } from "@reach/router";
import HomePage from "./pages/HomePage";
import PathsModal from "./pages/pathsModal";
import NonTech from "./pages/NonTech";
import PlatformsModal from "./pages/PlatformsModal";
import Coursera from "./pages/Coursera";
import Edx from "./pages/Edx";
import BackButton from "./views/BackButton";
import Tech from "./pages/Tech";

const App: React.FC = () => {
  return (
    <>
      <Router primary={false}>
        <BackButton path="/learn/*" />
      </Router>
      <Router>
        <HomePage path="/" />
        <PathsModal path="/learn/pathsModal" />
        <Tech path="/learn/tech" />
        <NonTech path="/learn/non-tech" />
        <PlatformsModal path="/learn/platforms" />
        <Coursera path="/learn/coursera" />
        <Edx path="/learn/edx" />
      </Router>
    </>
  );
};

export default App;
