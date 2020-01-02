import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import LatestNews from "./pages/LatestNews";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import './App.css'
import { Upcoming } from "./pages/new-articles/Upcoming";
import { BelowZero } from "./pages/new-articles/BelowZero";
import { EminentDomain } from "./pages/new-articles/EminentDomain";
import { GreenBook } from "./pages/new-articles/GreenBook";
import { Outstanding } from "./pages/new-articles/Outstanding";
import { ValuationMagazine } from "./pages/new-articles/ValuationMagazine";
import { WellBuilding } from "./pages/new-articles/WellBuilding";

function App() {
	return (
		<div>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/portfolio">
						<Portfolio />
					</Route>
					<Route exact path="/latest">
						<LatestNews />
					</Route>
					<Route exact path="/latest/upcoming">
						<Upcoming />
					</Route>
					<Route exact path="/latest/below-zero">
						<BelowZero />
					</Route>
					<Route exact path="/latest/eminent-domain">
						<EminentDomain />
					</Route>
					<Route exact path="/latest/green-book">
						<GreenBook />
					</Route>
					<Route exact path="/latest/outstanding">
						<Outstanding />
					</Route>
					<Route exact path="/latest/valuation-magazine">
						<ValuationMagazine />
					</Route>
					<Route exact path="/latest/well-building">
						<WellBuilding />
					</Route>
					<Route exact path="/contact">
						<Contact />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
