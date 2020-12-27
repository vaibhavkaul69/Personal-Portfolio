import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { UserTransactionDataContext } from "../../Contexts/UserTransactionDataContext";
import "./HistoryThreadContainer.css";
import NoTransactionEntry from "../NoTransactionEntry";
import UserTransactionDataThumbnail_History_Thread from "../UserTransactionDataThumbnailHistoryThread/UserTransactionDataThumbnail_History_Thread";
import { AppThemeContext } from "../../Contexts/AppThemeContext";

function HistoryThreadContainer(props) {
	const { userTransactionsInfo } = useContext(UserTransactionDataContext);
	const { selectedTheme } = useContext(AppThemeContext);
	const userId = props.match.params.id;
	const selectedUser = userTransactionsInfo.filter((item) => {
		if (item.id == userId) {
			return item;
		}
	});
	//console.log(selectedUser);
	const selectedUserHistoryArray =
		selectedUser[0].transactionHistory.length == 0
			? null
			: selectedUser[0].transactionHistory;

	//console.log(selectedUserHistoryArray);
	return selectedUserHistoryArray ? (
		<div className="history-thread-container container">
			<h1
				className="history-thread-main-heading my-5 text-center"
				style={{ color: selectedTheme == "light" ? "#1a1a1a" : "#fff" }}
			>
				List of all the transactions that you did with{" "}
				<strong className="font-weight-bold">{selectedUser[0].name}</strong>
			</h1>
			<section className="history-thread">
				{selectedUserHistoryArray.map((item) => {
					return (
						<UserTransactionDataThumbnail_History_Thread
							transactionDate={item.transactionDate}
							amount={item.amount}
							description={item.description}
							id={item.id}
							key={item.id}
							name={item.name}
							isImportant={item.isImportant}
						/>
					);
				})}
			</section>
		</div>
	) : (
		<div className="margin-top-10rem">
			<NoTransactionEntry />
		</div>
	);
}
export default withRouter(HistoryThreadContainer);
