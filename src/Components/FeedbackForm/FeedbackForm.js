import React, { useState } from "react";
import feedbackImage from "../../images/feedback.svg";
import "./FeedbackForm.css";
//import { db } from "../Firebase";

function FeedbackForm(props) {
	const classBasedOnTheme = {
		light: "light-theme-input text-dark",
		dark: "dark-theme-input text-white",
	};

	return (
		<footer className="feedback-form-footer py-2">
			<div className="container">
				<h1 className="no-transaction-entry-text text-center mb-3">
					Feedback Form
				</h1>
				<div className="row w-100 h-100 m-0">
					<div className="col-xl-6 col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center">
						<img
							src={feedbackImage}
							alt="Feedback Icon"
							className="feedback-icon "
						/>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-12 pl-xl-5 pl-lg-5 pl-md-5 pl-2 d-flex flex-column justify-content-center align-items-center">
						<form className="feedback-form w-100">
							<h2 className="feedback-form-label name-label">Name:</h2>
							<input
								type="search"
								name="name"
								placeholder="Enter your name"
								className={"mt-1 p-2 "}
							/>
							<h2 className="feedback-form-label mt-3 email-label">Email:</h2>
							<input
								type="email"
								name="email"
								placeholder="Enter your email"
								className={"mt-1 p-2 "}
							/>
							<h2 className="feedback-form-label mt-3 feedback-label">
								Feedback:
							</h2>
							<textarea
								type="search"
								name="feedback"
								placeholder="Provide your valuable feedback here"
								className={"mt-1 mb-2 p-2 feedback-input "}
							></textarea>
							<input
								type="submit"
								value="Submit"
								className="submit-feedback-form-btn mt-3 text-white"
							/>
						</form>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default FeedbackForm;
