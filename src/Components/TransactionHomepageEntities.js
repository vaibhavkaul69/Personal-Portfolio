import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
//CSS in App.css
import moneyGivenIcon from "../images/money-given.svg";
import importantIcon from "../images/important.svg";
import settledIcon from "../images/settled.svg";
import AccessDenied from "./AccessDenied";
import { UserAuthContext } from "../Contexts/UserAuthContext";
function TransactionHomepageEntities() {
	const { isUserLoggedIn } = useContext(UserAuthContext);
	return isUserLoggedIn ? (
		<section className="transaction-entities-container w-100">
			<div className="container">
				<div className="row mb-3 align-items-center d-flex justify-content-center">
					<NavLink
						to="/money-given"
						className="transaction-entity__money-given d-flex justify-content-center align-items-center transaction-entity col-xl-4 col-lg-4 col-md-4 col-sm-4 col-5 mr-xl-5 mr-lg-5 mr-md-5 mr-sm-5 mr-2"
					>
						Money Given
						<img src={moneyGivenIcon} className="entity-btn-icon" />
					</NavLink>
					{/*}
					<NavLink
						to="/money-to-take"
						className="transaction-entity__money-to-take d-flex justify-content-center align-items-center transaction-entity col-xl-4 col-lg-4 col-md-4 col-sm-4 col-5"
					>
						Money to be Taken
					</NavLink>
					*/}
				</div>
				<div className="row align-items-center d-flex justify-content-center">
					<NavLink
						to="/important-transactions"
						className="transaction-entity__imp-transact d-flex justify-content-center align-items-center transaction-entity col-xl-4 col-lg-4 col-md-4 col-sm-4 col-3 mr-xl-5 mr-lg-5 mr-md-5 mr-sm-5 "
					>
						Important Transactions
						<img src={importantIcon} className="entity-btn-icon" />
					</NavLink>
					<NavLink
						to="/settled-transactions"
						className="transaction-entity__settled-transact d-flex justify-content-center align-items-center transaction-entity col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4"
					>
						Settled Transactions
						<img src={settledIcon} className="entity-btn-icon " />
					</NavLink>
				</div>
			</div>
		</section>
	) : (
		<AccessDenied />
	);
}
export default TransactionHomepageEntities;
