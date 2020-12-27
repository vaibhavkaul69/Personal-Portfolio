import React, { useContext } from "react";
import { InputValidateContext } from "../../Contexts/InputValidationContext";
import { UserTransactionDataContext } from "../../Contexts/UserTransactionDataContext";
import InputErrorMessage from "../InputErrorMessage/InputErrorMessage";

function AddTransactionModal_Body(props) {
	const { visibleFormBody, setVisibleFormBody } = props;
	const {
		setName,
		setDescription,
		setAmount,
		setDateOfTransaction,
		userTransactionsInfo,
		changeUserAddHistory,
	} = useContext(UserTransactionDataContext);

	const { checkInputError } = useContext(InputValidateContext);

	function actionOnInputModalChange(e) {
		if (e.target.name == "name") {
			setName(e);
		} else if (e.target.name == "select-name") {
			console.log(e.target.value);
			changeUserAddHistory(e.target.value);
		} else if (e.target.name == "amount") {
			setAmount(e);
		} else if (e.target.name == "date") {
			setDateOfTransaction(e);
		} else {
			setDescription(e);
		}
		checkInputError(e.target);
	}
	return (
		<div className="modal-container__modal-body p-3">
			{visibleFormBody == "addUser" ? (
				<div className="user-main-form-body mt-3" id="addUser_Body">
					<h1 className="modal-form-label m-0">New Username:</h1>
					<p className="tutorial-text mb-2">
						Add a new user here. Please make sure the name{" "}
						<strong>does not exceeds 7 characters</strong> else it will be
						trimmed.
					</p>
					<input
						className="form-input-field p-2"
						onChange={(e) => actionOnInputModalChange(e)}
						type="search"
						name="name"
						required
						placeholder="Name"
					/>
					<InputErrorMessage />
					{/*
					<h1 className="modal-form-label mt-3">Date:</h1>
					<p className="tutorial-text mb-2 text-left">
						Date on which this User is added.
					</p>
					
					<input
						className="form-input-field p-2 w-50 "
						type="date"
						required
						onChange={(e) => setDateOfUserAdded(e)}
						placeholder="Date of Transaction"
					/>
					<InputErrorMessage/>
					*/}
				</div>
			) : (
				<div className="user-history-form-body mt-3" id="addUserHistory_Body">
					<h1 className="modal-form-label ">Select Username:</h1>
					<p className="tutorial-text mb-2 text-left">
						Select the username from the list below. The following transaction
						will be added as Transaction-History for the selected user.
					</p>
					<select
						defaultValue={"name-choose"}
						required
						name="select-name"
						className="form-input-field p-2 user-name-dropdown-modal"
						onChange={(e) => actionOnInputModalChange(e)}
					>
						<option defaultValue={null} value="null">
							Choose a name
						</option>
						{userTransactionsInfo.map((item) => {
							return (
								<option key={item.id} value={item.name}>
									{item.name}
								</option>
							);
						})}
					</select>
					<InputErrorMessage />
					<h1 className="modal-form-label mt-3">Amount:</h1>
					<input
						className="form-input-field p-2 w-50 "
						type="number"
						required
						name="amount"
						onChange={(e) => actionOnInputModalChange(e)}
						placeholder="Amount"
					/>
					<InputErrorMessage />
					<h1 className="modal-form-label mt-3">Date of Transaction:</h1>
					<input
						className="form-input-field p-2 w-50 "
						type="date"
						required
						name="date"
						onChange={(e) => actionOnInputModalChange(e)}
						placeholder="Date of Transaction"
					/>
					<InputErrorMessage />
					<h1 className="modal-form-label mt-3">Description:</h1>
					<textarea
						className="form-input-field h-25 p-2"
						type="number"
						required
						name="description"
						onChange={(e) => actionOnInputModalChange(e)}
						placeholder="Transaction Description"
					></textarea>
					<InputErrorMessage />
				</div>
			)}
		</div>
	);
}

export default AddTransactionModal_Body;
