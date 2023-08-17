import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import artifact from "../../contract/artifacts/trial.json";
import { Scrypt, bsv } from "scrypt-ts";
import { SVer } from "./contracts/myApp";

SVer.loadArtifact(artifact);

Scrypt.init({
  apiKey: process.env.REACT_APP_API_KEY || "",
  network: bsv.Networks.testnet,
});

ReactDOM.render(<App />, document.getElementById("root"));
