import React from "react";
import { render } from "react-dom";

import { About } from "./about/about.js";

import "./landing.css";

export class Landing extends React.Component {
	render(){
		return(
			<div className="landing-div">
				<About/>
			</div>
		);
	}
}