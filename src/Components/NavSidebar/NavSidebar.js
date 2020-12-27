import React, { useContext } from "react";
import "./NavSidebar.css";
import { Link } from "react-router-dom";
import logoImage from "../../images/logo.png";
import logoutLogo from "../../images/logout-btn.svg";
import ThemeToggler from "../ThemeTogglerSidebar/ThemeToggler";
import VideoTutorial from "../VideoTutorialSidebar/VideoTutorial";
import LoggedUserInfo from "../LoggedUserInfo";
import { ToggleSideNavbar } from "../../Contexts/ToggleSideNavbarContext";
import { AppThemeContext } from "../../Contexts/AppThemeContext";
import { UserAuthContext } from "../../Contexts/UserAuthContext";

function NavSidebar() {
	const { isSidebarOpen, toggleSideNavbar } = useContext(ToggleSideNavbar);
	const { theme, selectedTheme, toggleThemeChange } = useContext(
		AppThemeContext
	);
	return (
		<nav
			id="side-navbar-container"
			className={isSidebarOpen ? "visible-sidebar" : "hidden-sidebar"}
		>
			<div
				className="side-navbar-body "
				style={{ background: theme[selectedTheme].color }}
			>
				<header className="side-navbar-head border-bottom d-flex justify-content-center align-items-center flex-column">
					<img src={logoImage} className="side-navbar-head-logo" />
					<button
						type="button"
						className="side-navbar-close-btn d-flex justify-content-center align-items-center m-0 "
						onClick={() => toggleSideNavbar(false)}
					>
						<span className="font-weight-light text-white">&times;</span>
					</button>
					<h1 className="side-navbar-head-text mt-2">
						<span>TODO</span> <span>Money</span>
					</h1>
					<LoggedUserInfo onTopNav={false} />
				</header>
				<div className="side-navbar-main-content">
					<ThemeToggler />
					<VideoTutorial />
				</div>
			</div>
		</nav>
	);
}

export default NavSidebar;
