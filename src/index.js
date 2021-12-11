import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const root = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
);
