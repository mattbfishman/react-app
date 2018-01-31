import React from "react";
import { render } from "react-dom";

import { Navbar } from "./components/navbar/navbar.js";
import { Landing } from "./components/landing/landing.js";
import { Login } from "./components/login/login.js";

import {Route} from 'react-router-dom';

import './app.css';

class App extends React.Component {
	render(){
		return(
			<div className="landing-div">
				<Navbar/>
				<Route exact path="/" component={Landing} />
				<Route exact path="/login" component={Login} />
			</div>
		);
	}
}

export default App;