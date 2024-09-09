import * as React from "react";
import "../theme/global.less";
import './App.less';
import Heading from "./components/layout/header";

function App() {

	return (
		<>
			<div className="app-container">
				<Heading />
			</div>
			<div className="app-container">
				<center><h3>Coming Soon!</h3></center>
			</div>

		</>
	);
}

export default App;
