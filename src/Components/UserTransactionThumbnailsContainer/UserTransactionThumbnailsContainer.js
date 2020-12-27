import React, { useContext, useEffect } from "react";
import { UserTransactionDataContext } from "../../Contexts/UserTransactionDataContext";
//import UserTransactionDataThumbnail_Main from "../UserTansactionDataThumbnailMain/UserTransactionDataThumbnail_Main";
import NoTransactionEntry from "../NoTransactionEntry";
import UserTransactionDataThumbnail_Main from "../UserTansactionDataThumbnailMain/UserTransactionDataThumbnail_Main";

function UserTransactionThumbnailsContainer(props) {
	const { userTransactionsInfo } = useContext(UserTransactionDataContext);
	//console.log(userTransactionsInfo);
	//let value = localStorage.getItem("user-transaction-data");

	return (
		<div className="user-transaction-thumbnail-container pb-3">
			{userTransactionsInfo.length == 0 ? (
				<NoTransactionEntry />
			) : (
				userTransactionsInfo.map((item) => {
					return (
						<UserTransactionDataThumbnail_Main
							name={item.name}
							amount="1200"
							id={item.id}
							key={item.id}
						/>
					);
				})
			)}
		</div>
	);
}

export default UserTransactionThumbnailsContainer;
