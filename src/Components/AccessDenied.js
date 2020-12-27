import React, { useContext } from "react";
import access_denied from "../images/access-denied.svg";
import { Link } from "react-router-dom";
import { AppThemeContext } from "../Contexts/AppThemeContext";
function AccessDenied(props) {
	const { selectedTheme } = useContext(AppThemeContext);
	return (
		<div className="error-404-container container d-flex flex-column justify-content-center align-items-center">
			<img
				src={access_denied}
				className="access-denied-image"
				alt="Error 404"
			/>
			<h1
				className="error-404-text text-center mt-3"
				style={{ color: selectedTheme == "light" ? "#1a1a1a" : "#fff" }}
			>
				You are not authoized to use the application.!
				<br /> Please login first to continue.
			</h1>
			<Link
				to="/user-auth/login"
				className="p-3 mt-3 back-to-home-error-404-btn"
			>
				Go to Login Page
			</Link>
		</div>
	);
}

export default AccessDenied;
