import React, { useContext, useEffect } from "react";
import "./ImportantTransaction.css";
import HeadSubHead from "../RoutePagesHead_SubHead/HeadSubHead";
import RouteSearchSort from "../RoutePagesSearch_Sort/RouteSearchSort";
import { UserAuthContext } from "../../../Contexts/UserAuthContext";
import AccessDenied from "../../AccessDenied";
import Footer from "../../Footer/Footer";

function ImportantTransaction() {
	const { isUserLoggedIn } = useContext(UserAuthContext);
	useEffect(() => {
		document.title = "Important Transactions - TODO ";
	}, []);

	return isUserLoggedIn ? (
		<React.Fragment>
			<div className="main-bg-container">
				<div className="important-transaction-container">
					<div className="container">
						<HeadSubHead
							head="You Have Marked These Transactions as Important"
							subhead="You will be notified frequently for all important transactions"
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

export default ImportantTransaction;
