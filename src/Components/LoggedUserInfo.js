import React, { useContext } from "react";
import { ToggleSideNavbar } from "../Contexts/ToggleSideNavbarContext";
import { Link } from "react-router-dom";
import logoutLogo from "../images/logout-btn.svg";
import { UserAuthContext } from "../Contexts/UserAuthContext";

function LoggedUserInfo(props) {
	const { isSidebarOpen, toggleSideNavbar } = useContext(ToggleSideNavbar);
	const { logoutUser } = useContext(UserAuthContext);
	const { onTopNav } = props;
	const actionOnLogoutClick = () => {
		if (onTopNav) {
			toggleSideNavbar(onTopNav);
		} else {
			toggleSideNavbar(onTopNav);
		}
		logoutUser();
	};
	const loggedInUserName = JSON.parse(localStorage.getItem("User"));
	return (
		<div className="side-navbar-footer d-flex justify-content-between align-items-center">
			<h2 className="side-navbar-footer-username mx-3 mb-0">
				{loggedInUserName
					? loggedInUserName.name.split("").splice(0, 7)
					: "Admin"}
			</h2>
			<Link
				to="/todo-money"
				onClick={actionOnLogoutClick}
				className="side-navbar-footer-logout-btn m-0 text-white d-flex justify-content-center align-items-center"
			>
				Logout <img src={logoutLogo} className="logout-image ml-2" />
			</Link>
		</div>
	);
}

export default LoggedUserInfo;
