import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/home/home";
import Strategy from "./pages/strategy/strategy";
import About from "./pages/about/about";
import Faq from "./pages/faq/faq";
import Invest from "./pages/invest/invest";
import LoadingSpinner from "./components/controls/loading";

function App() {

	// Set the router base name based on the NODE_ENV environment variable
	const routerBaseName = process.env.NODE_ENV !== "development" ? "/PorterLegacyGroup" : "/";

	return (
		<Router basename={routerBaseName}>
			<Suspense fallback={<LoadingSpinner />}>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="strategy" element={<Strategy />} />
						<Route path="about" element={<About />} />
						<Route path="faq" element={<Faq />} />
						<Route path="invest" element={<Invest />} />
					</Route>
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
