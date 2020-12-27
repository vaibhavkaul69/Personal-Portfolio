import React, { useContext } from "react";
import "../../Components/UserTransactionDataThumbnail.css";
import { AppThemeContext } from "../../Contexts/AppThemeContext";
import { UserTransactionDataContext } from "../../Contexts/UserTransactionDataContext";
import clockIcon from "../../images/clock.png";
import userImage from "../../images/user_image.png";

function UserTransactionDataThumbnail_History_Thread(props) {
	const { name, id, description, isImportant, transactionDate, amount } = props;
	const { theme, selectedTheme, toggleThemeChange } = useContext(
		AppThemeContext
	);
	const { markTransactionImportant } = useContext(UserTransactionDataContext);
	const tagline = "You have given  Rs. " + amount + " to " + name;
	const amountSummary =
		"This is the total amount of money you have given to " + name;
	/*
	const addTagLineSpecificToURL = {
		"/money-given/user/": {
			tagline: ",
			amountSummary:
				
		},
		"/component-test": {
			tagline: "LOGGED IN USER has given RS" + amount + " to " + name,
			amountSummary:
				"This is the total amount of money LOGGED IN USER has given to " + name,
		},
	};
	*/
	//console.log(addTagLineSpecificToURL);
	return (
		<div
			className="user-transaction-thumbnail-history-container px-2 my-4  py-4"
			id={id}
			key={id}
			style={{
				background: theme[selectedTheme].color,
				boxShadow: theme[selectedTheme].boxShadow,
			}}
		>
			<div className="row d-flex justify-content-center m-0  ">
				<div className="col-xl-2 col-lg-2 col-md-2 p-0 ml-xl-0 ml-lg-0 ml-md-0 ml-2 d-flex justify-content-xl-center justify-content-lg-center mb-xl-0 mb-lg-0 mb-2 justify-content-start">
					<img
						src={userImage}
						className="img-fluid  user-transaction-data-thumnail__image"
					/>
				</div>
				<div className="col-xl-6 col-lg-6 col-md-6 d-flex flex-column align-items-start justify-content-between">
					<h1
						className="user-transaction-data-thumnail__name  mb-xl-0 mb-lg-0 mb-3"
						style={{ color: theme[selectedTheme].textColor }}
					>
						{name}
					</h1>
					<p className="user-transaction-data-thumnail__amount-summary mb-2 w-100 text-left">
						This transaction was made on :
					</p>
					<div className="user-transaction-data-thumnail__date mt-0 px-2  py-1 d-flex justify-content-center align-items-center">
						<img
							src={clockIcon}
							className="img-fluid mr-2 user-transaction-data-thumnail__date-clock-icon"
							alt="Clock icon"
						/>
						<h6 className="user-transaction-data-thumnail__date-text text-white  m-0">
							{transactionDate.split("-").reverse().join("-")}
						</h6>
					</div>

					<div className="user-transaction-data-thumbnail__tagline-row d-flex justify-content-start align-items-center">
						<span className="pl-0 d-flex justify-content-center align-items-center">
							&#9888;
						</span>
						<p
							className="  user-transaction-data-thumnail__tagline text-left my-3"
							style={{ color: theme[selectedTheme].textColor }}
						>
							{tagline}
						</p>
					</div>
					<p
						className="  user-transaction-data-thumnail__description  my-3"
						style={{ color: theme[selectedTheme].textColor }}
					>
						{description}
					</p>
					{/*
					<p
						className="user-transaction-data-thumnail__description"
						style={{
							color:
								selectedTheme == "light" ? theme.dark.color : theme.light.color,
						}}
					>
						I'm a little confused why we keep making class components...
					</p>
					*/}
				</div>
				<div className="col-xl-4 col-lg-4 col-md-4 amount-payable__container d-flex flex-column align-items-xl-center align-items-lg-center align-items-md-center align-items-end">
					<h1
						className=" user-transaction-data-thumnail__amount d-flex  font-weight-bold text-xl-center text-lg-center text-md-center text-right mt-xl-5 mt-lg-5 mt-2"
						style={{ color: theme[selectedTheme].textColor }}
					>
						<span>Rs :&nbsp;</span> <span>{amount}</span>
					</h1>
				</div>
			</div>
			<div className="user-transaction-data-thumnail__action-btns mt-1 w-100">
				<div className="action-btns__CRUD d-flex w-100 justify-content-end w-100">
					<button
						onClick={(e) => markTransactionImportant(e.target.id)}
						id={id}
						className="action-btn__important  text-white px-2 mr-xl-5 mr-lg-5 mr-md-5 mr-sm-5 mr-0 transaction-thumbnail-action-btn"
					>
						Mark Important
					</button>
				</div>
			</div>
		</div>
	);
}

export default UserTransactionDataThumbnail_History_Thread;
