import React, { useContext } from "react";
import "./Footer.css";
import facebook from "../../images/facebook.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";
import instagram from "../../images/instagram.svg";
import { AppThemeContext } from "../../Contexts/AppThemeContext";

function Footer() {
	const { selectedTheme } = useContext(AppThemeContext);
	return (
		<footer
			className="app-main-footer w-100 py-3"
			style={{
				background:
					selectedTheme == "light"
						? "linear-gradient(to right bottom, var(--green-boxShadow),var(--blue-boxShadow))"
						: "#1a1a1a",
			}}
		>
			<div
				className="container-fluid  d-flex flex-column justify-content-center align-items-center"
				style={{ color: selectedTheme == "light" ? "var(--blue)" : "#fff" }}
			>
				<h1 className="footer-text text-center m-0 font-weight-bold">
					This app is made by Vaibhav Kaul
				</h1>
				<h3 className="follow-footer-text text-center m-0">Follow me on</h3>
				<div className="footer-social-icons">
					<a
						href="https://www.instagram.com/vaibhaaaaavv/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={instagram}
							alt="Vaibhav Instagram"
							className="social-media-footer-icon"
						/>
					</a>
					<a
						href="https://www.facebook.com/vaibhav.kaul2"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={facebook}
							alt="Vaibhav Facebook"
							className="social-media-footer-icon facebook-footer-icon"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/vaibhav-kaul-ab5941182/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={linkedin}
							alt="Vaibhav Linkedin"
							className="social-media-footer-icon"
						/>
					</a>
					<a
						href="https://github.com/vaibhavkaul69"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={github}
							alt="Vaibhav Github"
							className="social-media-footer-icon github-footer-icon"
						/>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
