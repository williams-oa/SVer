import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(<App />);

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)


