import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Scrypt, bsv} from 'scrypt-ts'

Scrypt.init({
    apiKey: process.env.REACT_APP_API_KEY || '',
    network: bsv.Networks.testnet
})

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)


