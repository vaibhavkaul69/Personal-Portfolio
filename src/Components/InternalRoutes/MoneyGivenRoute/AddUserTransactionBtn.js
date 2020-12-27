import React, { Component, useContext, useEffect, useState } from "react";
import { AppThemeContext } from "../../../Contexts/AppThemeContext";
import { UserAuthContext } from "../../../Contexts/UserAuthContext";

function AddUserTransactionBtn(props) {
	const { selectedTheme } = useContext(AppThemeContext);
	const { isUserLoggedIn } = useContext(UserAuthContext);

	return (
		<button
			onClick={() => props.toggleModalContainerVisibility(true)}
			className="d-flex justify-content-center flex-column font-weight-light text-white align-items-center open-add-transaction-modal-btn"
		>
			<span>+</span>
			{/*
						<img
							src={UserAddIcon}
							alt="Add User Icon"
							className="img-fluid add-user-icon ml-2"
						/>
			*/}
		</button>
	);
}

export default AddUserTransactionBtn;
