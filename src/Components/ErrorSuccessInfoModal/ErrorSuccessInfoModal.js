import React, { useContext } from "react";
import { ErrorSuccessInfoContext } from "../../Contexts/ErrorSuccessInfoModalContext";
import "./ErrorSuccessInfoModal.css";

function ErrorSuccessInfoModal(props) {
	//console.log(props);
	const {
		isErrorSuccessInfoModalOpen,
		changeErrorSuccessInfoModalState,
	} = useContext(ErrorSuccessInfoContext);

	const userActionModalClass = {
		true: "d-flex",
		false: "d-none",
	};
	const modalText = props.modalText;
	const modalImage = props.modalImage;
	return (
		<div
			className={
				"error_success_info_modal-container justify-content-center align-items-center user-action-modal " +
				userActionModalClass[isErrorSuccessInfoModalOpen]
			}
		>
			<div className="user-action-modal-body bg-white p-3 d-flex flex-column justify-content-center align-items-center">
				<button
					type="button"
					className="close user-action-modal-close-btn"
					onClick={changeErrorSuccessInfoModalState}
				>
					<span className="font-weight-light modal-cross-close-btn">
						&times;
					</span>
				</button>
				<img
					src={modalImage}
					className="img-fluid mb-0 user-action-modal-image"
				/>
				<h2 className="text-center  user-action-modal-text">
					{modalText.includes("<br/>")
						? modalText.split("<br/>").map((item) => {
								return (
									<span key={Math.random() * 1062} className="d-block">
										{item}
									</span>
								);
						  })
						: modalText}
				</h2>
			</div>
		</div>
	);
}

export default ErrorSuccessInfoModal;
