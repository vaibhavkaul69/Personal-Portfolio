import React, { useContext } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
//CSS in App.css
//import NavIconToggleTheme from "../images/theme-toggle.png";
//import { UserAuth } from "../Contexts/UserAuthContext";
/*
import ThemeToggler from "./ThemeTogglerNavbar/ThemeToggler";
import VideoTutorial from "./VideoTutorialNavbar/VideoTutorial";
*/
import toggleThemeIcon from "../images/theme-toggle.png";
import videoTutorialIcon from "../images/video-tutorial.svg";
import LoggedUserInfo from "./LoggedUserInfo";
import { ToggleSideNavbar } from "../Contexts/ToggleSideNavbarContext";
import { AppThemeContext } from "../Contexts/AppThemeContext";
import { UserAuthContext } from "../Contexts/UserAuthContext";

function Navbar(props) {
	const { isSidebarOpen, toggleSideNavbar } = useContext(ToggleSideNavbar);
	const { theme, selectedTheme, toggleThemeChange } = useContext(
		AppThemeContext
	);
	const { isUserLoggedIn } = useContext(UserAuthContext);
	return (
		<div id="top-navbar">
			{isUserLoggedIn ? (
				<nav
					className="navbar w-100  mb-5 px-xl-3 px-lg-3 px-md-3 px-sm-3 px-1  d-flex justify-content-between align-items-center"
					style={{ background: theme[selectedTheme].color }}
				>
					<Link to="/todo-home" className="top-navbar-item">
						<div className="w-100  d-flex justify-content-start align-items-center">
							<img src={logo} className="navbar__logo" alt="Todo money logo" />

							<h1 className="navbar__brand-name m-0 ">
								<span className="navbar__brand-name--first-child">TODO</span>
								&nbsp;
								<span className="navbar__brand-name--second-child">Money</span>
							</h1>
						</div>
					</Link>
					<div className="nav-top-right-btns top-navbar-item d-flex align-items-center">
						<div className="nav-top-video-theme-btn d-flex align-items-center">
							<button
								onClick={toggleThemeChange}
								className="top-navbar-theme-toggler flex-column w-100 pb-xl-3 pb-lg-3 pb-5 px-3 mt-3 justify-content-start align-items-center"
							>
								<img
									src={toggleThemeIcon}
									className="top-nav-theme-toggler-icon mb-2 mr-2"
								/>
								<div className="top-nav-theme-toggle-content ">
									<h3 className="top-nav-theme-toggler-label-text text-center mb-1">
										<span>Toggle</span>&nbsp;
										<span className="light-theme-text">Theme</span>
									</h3>
									<p className="tutorial-text mb-0 text-center">
										Change current theme.
									</p>
								</div>
							</button>
							<button className="top-navbar-video-tutorial flex-column pb-xl-3 pb-lg-3 pb-5 px-3  mt-3 justify-content-center align-items-center">
								<img
									src={videoTutorialIcon}
									className="top-nav-video-tutorial-icon mb-2 mr-2"
									alt="Video Tuorial "
								/>
								<div className="top-nav-video-tutorial-content">
									<h3 className="top-nav-video-tutorial-label-text text-center mb-1">
										Video Walkthrough
									</h3>
									<p className="tutorial-text mb-0 text-center ">
										Watch a video tutorial.
									</p>
								</div>
							</button>
							<LoggedUserInfo onTopNav={true} />
						</div>
					</div>
					<button
						className="toggle-sidebar-btn mr-3 "
						onClick={() => toggleSideNavbar(false)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</nav>
			) : null}
		</div>
	);
}

export default Navbar;
