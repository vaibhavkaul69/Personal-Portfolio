import React, { useContext } from "react";
//CSS in App.css
import { AppThemeContext } from "../Contexts/AppThemeContext";
import noTransactionImage from "../images/no-transaction.png";

function NoTransactionEntry(props) {
	const { selectedTheme } = useContext(AppThemeContext);
	return (
		<div className="no-transaction-entry-container d-flex flex-column justify-content-center align-items-center">
			<img
				src={noTransactionImage}
				className="img-fluid"
				alt="No transactions made in image"
			/>
			<h1
				className="no-transaction-entry-text text-center"
				style={{ color: selectedTheme == "light" ? "#1a1a1a" : "#fff" }}
			>
				Oops....! <br />
				Looks like you haven't made <br /> any transactions yet.
			</h1>
		</div>
	);
}

export default NoTransactionEntry;
