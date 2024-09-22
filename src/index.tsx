import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// TODO: Delete this line; I got rid of the bootstrap
// import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./theme/global.less";

const el = document.getElementById("root")!;
el.classList.add("root-style");

const root = ReactDOM.createRoot(el);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
