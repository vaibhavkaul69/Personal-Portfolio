import React, { useContext } from "react";
import "./ThemeToggler.css";
import toggleThemeIcon from "../../images/theme-toggle.png";
import { AppThemeContext } from "../../Contexts/AppThemeContext";

function ThemeToggler() {
	const { toggleThemeChange } = useContext(AppThemeContext);
	return (
		<button
			onClick={toggleThemeChange}
			className="side-navbar-theme-toggler w-100 border-bottom pb-lg-5 pb-md-5 pb-4 mt-lg-5 mt-md-5 mt-4 px-3  d-flex  justify-content-start align-items-center"
		>
			<img src={toggleThemeIcon} className="theme-toggler-btn mr-3" />
			<div className="theme-toggle-label">
				<h3 className="theme-toggler-label-text text-left mb-1">
					<span>Toggle</span>&nbsp;
					<span className="light-theme-text">Dark Theme</span>
				</h3>
				<p className="tutorial-text mb-0 text-left">
					Click here to change current theme.
				</p>
			</div>
		</button>
	);
}

export default ThemeToggler;
