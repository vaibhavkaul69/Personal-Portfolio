import React from "react";
//import AddTransactionModal from "./AddTransactionModal/AddTransactionModal";
import UserTransactionDataThumbnail_Main from "./UserTansactionDataThumbnailMain/UserTransactionDataThumbnail_Main";
import UserTransactionDataThumbnail_History_Thread from "./UserTransactionDataThumbnailHistoryThread/UserTransactionDataThumbnail_History_Thread";
import NoTransactionEntry from "./NoTransactionEntry";
import FeedbackForm from "../Components/FeedbackForm/FeedbackForm";
import Error_404 from "./Error_404";
import LandingPage from "./LandingPage/LandingPage";
import ErrorSuccessInfoModal from "./ErrorSuccessInfoModal/ErrorSuccessInfoModal";
import modalImage from "../images/success.gif";
import modalImage_1 from "../images/failed.gif";
import modalImage_2 from "../images/info.gif";
import NavSidebar from "./NavSidebar/NavSidebar";
import AccessDenied from "./AccessDenied";

function ComponentTester(props) {
	function test({ ...data }) {
		console.log(data);
	}

	test({ name: "vaibhav", id: 23667 });
	return (
		<div>
			<div className="container" style={{ marginTop: 10 + "rem" }}>
				{/*
				<LandingPage />
				<ErrorSuccessInfoModal
					modalImage={modalImage}
					modalText="This process went well"
				/>
				<ErrorSuccessInfoModal
					modalImage={modalImage_1}
					modalText="This process failed"
				/>
				<ErrorSuccessInfoModal
					modalImage={modalImage_2}
					modalText="This is a info"
				/>
				<NavSidebar />
				<AddTransactionModal />
				 

				<Error_404 />
				<NoTransactionEntry />
			
				<UserTransactionDataThumbnail_Main />
				*/}
				<UserTransactionDataThumbnail_History_Thread
					transactionDate="11-22-2020"
					amount="1234567"
					description="this is a description"
					id="12"
					key="123"
					name="Paras chabra"
					isImportant={false}
				/>
				<AccessDenied />
				<Error_404 />
			</div>
			<FeedbackForm />
		</div>
	);
}
export default ComponentTester;
