import React, { Component, useContext, useEffect, useState } from "react";
import "./MoneyGiven.css";
import HeadSubHead from "../RoutePagesHead_SubHead/HeadSubHead";
import RouteSearchSort from "../RoutePagesSearch_Sort/RouteSearchSort";
import AddTransactionModal from "../../AddTransactionModal/AddTransactionModal";
//import UserAddIcon from "../../../images/user-plus.svg";
import AddUserTransactionBtn from "./AddUserTransactionBtn";
import Footer from "../../Footer/Footer";
//import noTransactionEntryImage from "../../NoTransactionEntry";
import AccessDenied from "../../AccessDenied";
import UserTransactionThumbnailsContainer from "../../UserTransactionThumbnailsContainer/UserTransactionThumbnailsContainer";
import { AppThemeContext } from "../../../Contexts/AppThemeContext";
import { UserAuthContext } from "../../../Contexts/UserAuthContext";

function MoneyGiven() {
	const { selectedTheme } = useContext(AppThemeContext);
	const { isUserLoggedIn } = useContext(UserAuthContext);
	const [isModalContainerVisible, toggleModalContainerVisibility] = useState(
		false
	);
	useEffect(() => {
		document.title = "Money Given - TODO ";
		const searchSortAddBtnDOM = document.querySelector(".search-sort-add-item");
		window.addEventListener("scroll", () => {
			//console.log(window.scrollY);
			if (window.scrollY > 200) {
				if (searchSortAddBtnDOM)
					searchSortAddBtnDOM.classList.add(
						"search-sort-add-operation-container__fixed"
					);
			} else {
				if (searchSortAddBtnDOM) {
					searchSortAddBtnDOM.classList.remove(
						"search-sort-add-operation-container__fixed"
					);
				}
			}
		});
	}, []);

	return isUserLoggedIn ? (
		<React.Fragment>
			<div className="main-bg-container">
				<div className="money-given-container">
					<div className="container">
						<HeadSubHead
							head="You Have Given Money to These People"
							subhead="Do not forget to take the money back."
						/>
						<div
							className="d-flex search-sort-add-item justify-content-center align-items-center"
							style={{
								background: selectedTheme == "light" ? "#fff" : "#1a1a1a",
							}}
						>
							<RouteSearchSort />
							<span className="small-screen-add-user-transaction-btn">
								<AddUserTransactionBtn
									toggleModalContainerVisibility={
										toggleModalContainerVisibility
									}
								/>
							</span>
						</div>
						<UserTransactionThumbnailsContainer doesUserExist="false" />
					</div>
					<span className="large-screen-add-user-transaction-btn">
						<AddUserTransactionBtn
							toggleModalContainerVisibility={toggleModalContainerVisibility}
						/>
					</span>
					<AddTransactionModal
						isModalContainerVisible={isModalContainerVisible}
						toggleModalContainerVisibility={toggleModalContainerVisibility}
					/>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	) : (
		<AccessDenied />
	);
}

export default MoneyGiven;
