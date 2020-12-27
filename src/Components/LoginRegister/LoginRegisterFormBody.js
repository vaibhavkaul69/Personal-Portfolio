import React, { useState, useContext } from "react";
import { InputValidateContext } from "../../Contexts/InputValidationContext";
import { UserAuthContext } from "../../Contexts/UserAuthContext";
import InputErrorMessage from "../InputErrorMessage/InputErrorMessage";
import "./LoginRegister.css";

function LoginRegisterFormBody() {
	const { setUserAuthName, setUserAuthPassword, name, password } = useContext(
		UserAuthContext
	);
	const { checkInputError } = useContext(InputValidateContext);

	return (
		<div className="login-register-form-body-container my-3">
			<div className="user-auth-form-body">
				<h2>Name:</h2>
				<input
					type="search"
					placeholder="Enter name"
					name="uname"
					value={name}
					onChange={(e) => setUserAuthName(e.target.value)}
					className=" p-2"
				/>
				<InputErrorMessage />
				<h2>Password:</h2>
				<input
					type="password"
					placeholder="Enter password"
					name="upass"
					value={password}
					onChange={(e) => setUserAuthPassword(e.target.value)}
					className=" p-2"
				/>
				<InputErrorMessage />
			</div>
		</div>
	);
}
export default LoginRegisterFormBody;
