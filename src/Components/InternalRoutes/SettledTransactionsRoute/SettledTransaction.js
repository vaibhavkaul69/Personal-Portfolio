import React, { Component, useContext, useEffect } from "react";
import "./SettledTransaction.css";
import HeadSubHead from "../RoutePagesHead_SubHead/HeadSubHead";
import RouteSearchSort from "../RoutePagesSearch_Sort/RouteSearchSort";
import AccessDenied from "../../AccessDenied";
import Footer from "../../Footer/Footer";
import { UserAuthContext } from "../../../Contexts/UserAuthContext";
function SettledTransaction() {
	const { isUserLoggedIn } = useContext(UserAuthContext);
	useEffect(() => {
		document.title = "Settled Transactions - TODO ";
	}, []);

	return isUserLoggedIn ? (
		<React.Fragment>
			<div className="main-bg-container">
				<div className="settled-transaction-container">
					<div className="container">
						<HeadSubHead
							head="Settled Transactions"
							subhead="All these transactions have been completed successfully and are no longer pending."
						/>
						<RouteSearchSort />
					</div>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	) : (
		<AccessDenied />
	);
}

export default SettledTransaction;
