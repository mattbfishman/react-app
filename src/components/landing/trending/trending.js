import React from "react";
import { render } from "react-dom";

import logo from './images/image1.jpg';
import logo2 from './images/image2.JPG';
import logo3 from './images/image3.jpg';
import logo4 from './images/image4.jpg';

import "./trending.css"

export class Trending extends React.Component {
	render(){
		return(
			<div className="trending-div">
				<h2>Trending</h2>
				<ul className="trending-ul">
					<li className="trending-li"><img src={logo}/></li>
					<li className="trending-li"><img src={logo2}/></li>
					<li className="trending-li"><img src={logo3}/></li>
					<li className="trending-li"><img src={logo4}/></li>
				</ul>
			</div>
		);
	}
}