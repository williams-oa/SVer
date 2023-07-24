import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

// <FontAwesomeIcon icon={solid("wallet")} />

function App() {
  return (
    <>
      <Router>
        <Navbar>This is the Navbar</Navbar>
        <Routes>
          <Route path="/" exact></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
