import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { UserAuthContext } from "../../Contexts/UserAuthContext";
import "./LoginRegister.css";
import ErrorSuccessInfoModal from "../ErrorSuccessInfoModal/ErrorSuccessInfoModal";
import FormBody from "./LoginRegisterFormBody";
import failed from "../../images/failed.gif";

function Login(props) {
	const { changeUserAuthLoginStatus } = useContext(UserAuthContext);
	const userLoginActivity = () => {
		if (changeUserAuthLoginStatus()) {
			props.history.push("/todo-home");
		}
	};
	return (
		<div className="login-register-container">
			<div className="login-container mx-auto p-3">
				<h1 className="user-auth-form-header">Sign In Now</h1>
				<FormBody />
				<ErrorSuccessInfoModal
					modalImage={failed}
					modalText="You need to create an account first <br/>- Or -<br/> You have written wrong credentials.!"
				/>
				<div className="user-auth-form-footer d-flex justify-content-around align-items-center">
					<div className="d-flex justify-content-center align-items-center flex-column">
						<p className="tutorial-text mb-1">New User?</p>
						<Link
							to="/user-auth/register"
							className="mr-2 d-flex justify-content-center align-items-center text-white redirect-btn"
						>
							Register Now
						</Link>
					</div>
					<button
						id="userLogin"
						className="text-white"
						onClick={() => userLoginActivity()}
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
}
export default withRouter(Login);
