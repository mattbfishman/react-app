import React from "react";
import { render } from "react-dom";
import "./login.css";


export class Login extends React.Component {
	constructor(props){
		super();
		this.state = {
			header: "Login",
			btnText: "Sign Up"
		};
	}

	onChangeToSignUp(event){
		this.setState({
			header: this.state.btnText == "Sign Up" ? "Sign Up" : "Login",
			btnText: this.state.btnText == "Login" ? "Sign Up" : "Login"
		});
	}
	render(){
		return(
			<div className="login-div">
				<h1>{this.state.header}</h1>
				<div className="login-form-div">
					<table className="login-table">
						<tbody>
							<tr>
								<td><label>Username:</label></td>
								<td><input type="text" name="username"/></td>
						
							</tr>
							<tr>
								<td><label>Password:</label></td>
								<td><input type="password" name="password"/></td>
							</tr>
							{this.state.btnText == "Login" &&
							<tr>
								<td><label>Confirm Password:</label></td>
								<td><input type="password" name="confirm-password"/></td>
							</tr>
							}

						</tbody>
					</table>
					<button onClick={this.onChangeToSignUp.bind(this)}>{this.state.btnText}</button>
				</div>
			</div>
		);
	}
}