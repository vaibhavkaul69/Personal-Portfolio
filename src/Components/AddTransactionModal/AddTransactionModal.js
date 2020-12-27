import React, { useState, useContext } from "react";
import "./AddTransactionModal.css";
import AddTransactionModal_Body from "./AddTransactionModal_Body";
import AddTransactionIcon from "../../images/add-transaction-icon.png";
import { UserTransactionDataContext } from "../../Contexts/UserTransactionDataContext";
import ErrorSuccessInfoModal from "../ErrorSuccessInfoModal/ErrorSuccessInfoModal";
import { ErrorSuccessInfoContext } from "../../Contexts/ErrorSuccessInfoModalContext";

function AddTransactionModal(props) {
	const { isModalContainerVisible, toggleModalContainerVisibility } = props;
	const { addDataToUserInfo } = useContext(UserTransactionDataContext);
	const [visibleFormBody, setVisibleFormBody] = useState("addUser");
	const modalCurrentStateClass = {
		true: "d-flex",
		false: "d-none",
	};
	function actionOnAddbtnClick() {
		/*
		if (addDataToUserInfo(visibleFormBody)) {
			//changeErrorSuccessInfoModalState();
			toggleModalContainerVisibility(false);
		}
		*/
		console.log(visibleFormBody);
		addDataToUserInfo(visibleFormBody);
		toggleModalContainerVisibility(false);
	}
	function addActiveBorderClass(e) {
		const btn = document.querySelectorAll(
			".modal-container__modal-header-navigate-btns > button"
		);
		[...btn].map((item) => {
			item.classList.add("border-bottom");
			item.classList.remove("active-border");
		});
		if (!e.target.classList.contains("active-border")) {
			e.target.classList.add("active-border");
			e.target.classList.remove("border-bottom");
			setVisibleFormBody(e.target.id);
		}
	}

	return (
		<div
			className={
				"modal-container-bg " + modalCurrentStateClass[isModalContainerVisible]
			}
		>
			<div className="modal-container my-5">
				<header className="">
					<div className="modal-container__modal-header pl-3 pt-3 pr-3 pb-0  d-flex justify-content-between align-items-center">
						<div className="modal-head-title d-flex justify-content-center align-items-center">
							<h5 className="modal-title font-weight-bold">
								Add User Transaction
							</h5>
							<img
								className="modal-icon"
								src={AddTransactionIcon}
								alt="Add transaction icon"
							/>
						</div>

						<div className="close-theme-toggler-container-header ">
							<button
								type="button"
								className="close"
								onClick={() => toggleModalContainerVisibility(false)}
							>
								<span className="font-weight-light modal-cross-close-btn">
									&times;
								</span>
							</button>
						</div>
					</div>
					<div className="modal-container__modal-header-navigate-btns  w-100 d-flex justify-content-center mt-3 align-items-center ">
						<button
							className="add-user-header-btn active-border"
							id="addUser"
							onClick={(e) => addActiveBorderClass(e)}
						>
							Add User
						</button>
						<button
							className="add-transaction-header-btn border-bottom"
							id="addUserHistory"
							onClick={(e) => addActiveBorderClass(e)}
						>
							Add Transaction
						</button>
					</div>
				</header>

				<AddTransactionModal_Body
					visibleFormBody={visibleFormBody}
					setVisibleFormBody={setVisibleFormBody}
				/>
				<div className="modal-container__modal-footer d-flex justify-content-end w-100  p-3">
					<button
						type="button"
						onClick={() => toggleModalContainerVisibility(false)}
						className="text-white py-2 px-3 mr-xl-3 mr-lg-3 mr-md-3 mr-sm-3 mr-2 modal-footer-close-btn"
					>
						Close
					</button>
					<button
						type="button"
						onClick={actionOnAddbtnClick}
						className="text-white py-2 px-3 modal-footer-add-btn"
					>
						Add
					</button>
				</div>
			</div>
		</div>
	);
}

export default AddTransactionModal;
