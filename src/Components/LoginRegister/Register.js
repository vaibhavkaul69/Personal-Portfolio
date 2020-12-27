import React, { useContext } from "react";
import "./LoginRegister.css";
import { Link } from "react-router-dom";
import FormBody from "./LoginRegisterFormBody";
import { UserAuthContext } from "../../Contexts/UserAuthContext";
import ErrorSuccessInfoModal from "../ErrorSuccessInfoModal/ErrorSuccessInfoModal";
import success from "../../images/success.gif";

function Register() {
	const { storeUserInfo } = useContext(UserAuthContext);
	return (
		<div className="login-register-container">
			<div className="register-container mx-auto p-3">
				<h1 className="user-auth-form-header">Create New Account</h1>
				<FormBody />
				<ErrorSuccessInfoModal
					modalImage={success}
					modalText="Account Created Successfully.!<br/> Please Login to Continue"
				/>
				<div className="user-auth-form-footer d-flex justify-content-around align-items-center">
					<div className="d-flex justify-content-center align-items-center flex-column">
						<p className="tutorial-text mb-1">Already a User?</p>
						<Link
							to="/user-auth/login"
							className="mr-2 d-flex justify-content-center align-items-center text-white redirect-btn"
						>
							Login Now
						</Link>
					</div>
					<button
						id="userRegister"
						className="text-white"
						onClick={storeUserInfo}
					>
						Register
					</button>
				</div>
			</div>
		</div>
	);
}
export default Register;
