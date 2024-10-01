import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./theme/global.less";


const el = document.getElementById("root")!;
el.classList.add("root-style");

const root = ReactDOM.createRoot(el);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
