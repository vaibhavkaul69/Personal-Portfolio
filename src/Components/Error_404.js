import React, { useContext } from "react";
//CSS in App.css
import error_404 from "../images/404.png";
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";
import { AppThemeContext } from "../Contexts/AppThemeContext";
function Error_404(props) {
	const { selectedTheme } = useContext(AppThemeContext);
	return (
		<div className="error-404-container d-flex flex-column justify-content-center align-items-center">
			<div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
				<img src={error_404} className="img-fluid" alt="Error 404" />
				<h1
					className="error-404-text text-center"
					style={{ color: selectedTheme == "light" ? "#1a1a1a" : "#fff" }}
				>
					Oh no, just like the Unicorn - The page is extinct.
				</h1>
				<Link to="/todo-home" className="p-3 mt-3 back-to-home-error-404-btn">
					Go to Homepage
				</Link>
			</div>
		</div>
	);
}

export default Error_404;
