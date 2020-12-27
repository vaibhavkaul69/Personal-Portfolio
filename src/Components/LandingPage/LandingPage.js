import React, { useEffect } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
//import homepageImage from "../../images/homepage_bg.png";
import TodoHome from "../TodoHome";
function LandingPage() {
	useEffect(() => {
		document.title = "TODO Money";
	});
	const userExist = JSON.parse(localStorage.getItem("User"));

	return userExist && userExist.isUserLoggedIn ? (
		<TodoHome />
	) : (
		<div className="landing-page-container ">
			<div className="container">
				<h1 className="landing-hero-heading text-center">
					<span>TODO</span> <span>Money</span>
				</h1>
				<hr className="mt-0 landing-hero-heading-line mx-auto mb-4" />
				<h2 className="landing-hero-subheading p-2 mb-3 mx-auto text-white text-center">
					Managing Transaction Records Made Easy.
				</h2>
				<p className="landing-hero-cta-text text-center text-white py-2 px-3 my-4 mx-auto">
					{" "}
					TODO Money is a Web based Application that acts as a Single Storage
					Unit for Storing and Managing record of all the Transactions that you
					made with someone.
					<br />
				</p>
				<div className="d-flex mt-5 mb-5 justify-content-center align-items-center">
					<Link
						to="/user-auth/login"
						className=" d-flex mr-xl-4 mr-lg-4 mr-md-4 mr-sm-4 mr-1 justify-content-center align-items-center landing-login-btn"
					>
						Proceed to Login <span>&rarr;</span>
					</Link>
					{/*
					<Link
						to="/todo-home"
						className=" d-flex justify-content-center align-items-center landing-login-btn"
					>
						Homepage<span>&rarr;</span>
					</Link>
					*/}
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
