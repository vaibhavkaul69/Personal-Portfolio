import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";
//CSS in App.css
/*
 Custom Modules exported here
 */
import TransactionHomepageEntities from "./TransactionHomepageEntities";
import RecentActivityContainer from "./RecentActivity/RecentActivityContainer";

function TodoHome() {
	useEffect(() => {
		document.title = "TODO Money - Home ";
	}, []);

	return (
		<React.Fragment>
			<div className="main-bg-container d-flex justify-content-center align-items-center">
				<TransactionHomepageEntities />
				{/*
			<RecentActivityContainer />
			*/}
			</div>
			<Footer />
		</React.Fragment>
	);
}

export default TodoHome;
