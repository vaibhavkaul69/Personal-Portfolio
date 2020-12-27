import React, { useContext } from "react";
import "../../Components/UserTransactionDataThumbnail.css";
import { AppThemeContext } from "../../Contexts/AppThemeContext";
import clockIcon from "../../images/clock.png";
import userImage from "../../images/user_image.png";
import { withRouter, Link } from "react-router-dom";

function UserTransactionDataThumbnail_Main(props) {
	const { name, amount, id } = props;
	const { theme, selectedTheme } = useContext(AppThemeContext);
	const addTagLineSpecificToURL = {
		"/money-given": {
			tagline: `You have given RS XXX to ${name}`,
			amountSummary: `This is the total amount of money you have given to ${name}`,
		},
	};
	//console.log();
	const openCurrentUserTransactionHistory = () => {
		props.history.push("/user/" + id);
		//console.log(props);
	};
	return (
		<div
			className="user-transaction-thumbnail-main-container  px-2 mt-5 mb-4  py-4"
			style={{
				background: theme[selectedTheme].color,
				boxShadow: theme[selectedTheme].boxShadow,
			}}
			key={id}
			id={id}
		>
			<div className="row d-flex justify-content-center m-0  ">
				<div className="col-xl-2 col-lg-2 col-md-2 p-0 d-flex justify-content-xl-center justify-content-lg-center mb-xl-0 mb-lg-0 mb-2 justify-content-start">
					<img
						src={userImage}
						className="img-fluid  user-transaction-data-thumnail__image"
					/>
				</div>
				<div className="col-xl-6 col-lg-6 col-md-6 d-flex flex-column align-items-start justify-content-between">
					<h1
						className="user-transaction-data-thumnail__name  mb-xl-0 mb-lg-0 mt-xl-0 mt-lg-0 mt-md-0 mb-2 mt-4"
						style={{ color: theme[selectedTheme].textColor }}
					>
						{name.split("").splice(0, 7)}
					</h1>
					<p className="user-transaction-data-thumnail__amount-summary w-100 mb-1 text-left">
						All the dates when you made transactions with {name}
						<br />
						<strong>Scroll to view all</strong>
					</p>
					<div className="user-transaction-data-thumbnail__date-container w-100 ">
						<div className="user-transaction-data-thumnail__date mt-1 px-2  py-1 d-flex justify-content-center align-items-center">
							<img
								src={clockIcon}
								className="img-fluid mr-2 user-transaction-data-thumnail__date-clock-icon"
								alt="Clock icon"
							/>
							<h6 className="user-transaction-data-thumnail__date-text text-white  m-0">
								23-04-2020
							</h6>
						</div>
						<div className="user-transaction-data-thumnail__date mt-1 px-2  py-1 d-flex justify-content-center align-items-center">
							<img
								src={clockIcon}
								className="img-fluid mr-2 user-transaction-data-thumnail__date-clock-icon"
								alt="Clock icon"
							/>
							<h6 className="user-transaction-data-thumnail__date-text text-white  m-0">
								23-04-2020
							</h6>
						</div>
						<div className="user-transaction-data-thumnail__date mt-1 px-2  py-1 d-flex justify-content-center align-items-center">
							<img
								src={clockIcon}
								className="img-fluid mr-2 user-transaction-data-thumnail__date-clock-icon"
								alt="Clock icon"
							/>
							<h6 className="user-transaction-data-thumnail__date-text text-white  m-0">
								23-04-2020
							</h6>
						</div>
						<div className="user-transaction-data-thumnail__date mt-1 px-2  py-1 d-flex justify-content-center align-items-center">
							<img
								src={clockIcon}
								className="img-fluid mr-2 user-transaction-data-thumnail__date-clock-icon"
								alt="Clock icon"
							/>
							<h6 className="user-transaction-data-thumnail__date-text text-white  m-0">
								23-04-2020
							</h6>
						</div>
						<div className="user-transaction-data-thumnail__date mt-1 px-2  py-1 d-flex justify-content-center align-items-center">
							<img
								src={clockIcon}
								className="img-fluid mr-2 user-transaction-data-thumnail__date-clock-icon"
								alt="Clock icon"
							/>
							<h6 className="user-transaction-data-thumnail__date-text text-white  m-0">
								23-04-2020
							</h6>
						</div>
						<div className="user-transaction-data-thumnail__date mt-1 px-2  py-1 d-flex justify-content-center align-items-center">
							<img
								src={clockIcon}
								className="img-fluid mr-2 user-transaction-data-thumnail__date-clock-icon"
								alt="Clock icon"
							/>
							<h6 className="user-transaction-data-thumnail__date-text text-white  m-0">
								23-04-2020
							</h6>
						</div>
						<div className="user-transaction-data-thumnail__date mt-1 px-2  py-1 d-flex justify-content-center align-items-center">
							<img
								src={clockIcon}
								className="img-fluid mr-2 user-transaction-data-thumnail__date-clock-icon"
								alt="Clock icon"
							/>
							<h6 className="user-transaction-data-thumnail__date-text text-white  m-0">
								23-04-2020
							</h6>
						</div>
						<div className="user-transaction-data-thumnail__date mt-1 px-2  py-1 d-flex justify-content-center align-items-center">
							<img
								src={clockIcon}
								className="img-fluid mr-2 user-transaction-data-thumnail__date-clock-icon"
								alt="Clock icon"
							/>
							<h6 className="user-transaction-data-thumnail__date-text text-white  m-0">
								23-04-2020
							</h6>
						</div>
						<div className="user-transaction-data-thumnail__date mt-1 px-2  py-1 d-flex justify-content-center align-items-center">
							<img
								src={clockIcon}
								className="img-fluid mr-2 user-transaction-data-thumnail__date-clock-icon"
								alt="Clock icon"
							/>
							<h6 className="user-transaction-data-thumnail__date-text text-white  m-0">
								23-04-2020
							</h6>
						</div>
					</div>

					<div className="user-transaction-data-thumbnail__tagline-row d-flex align-items-center">
						<span className="pl-0 d-flex justify-content-center align-items-center">
							&#9888;
						</span>
						<p
							className="  user-transaction-data-thumnail__tagline  my-3"
							style={{ color: theme[selectedTheme].textColor }}
						>
							{addTagLineSpecificToURL[window.location.pathname]["tagline"]}
						</p>
					</div>
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
						className=" user-transaction-data-thumnail__amount font-weight-bold text-xl-center text-lg-center text-md-center text-right mt-xl-5 mt-lg-5 mt-2"
						style={{ color: theme[selectedTheme].textColor }}
					>
						Rs. {amount}
					</h1>
					<p className="user-transaction-data-thumnail__amount-summary mx-xl-auto mx-lg-auto mx-md-auto ml-4   text-center">
						{addTagLineSpecificToURL[window.location.pathname]["amountSummary"]}
					</p>
				</div>
			</div>
			<div className="user-transaction-data-thumnail__action-btns mt-3 w-100">
				<div className="action-btns__CRUD d-flex w-100 justify-content-xl-end justify-content-lg-end justify-content-center">
					<button className="action-btn__notify text-white mx-2 px-2 transaction-thumbnail-action-btn">
						Notify
					</button>

					<button className="action-btn__settle mr-2 px-2 transaction-thumbnail-action-btn">
						Settle
					</button>
					<button className="action-btn__delete  text-white px-2 mr-2 transaction-thumbnail-action-btn">
						Delete
					</button>
					<button
						onClick={openCurrentUserTransactionHistory}
						className="action-btn__history d-flex justify-content-center align-items-center  text-white px-2 transaction-thumbnail-action-btn"
					>
						Load History
					</button>
				</div>
			</div>
		</div>
	);
}

export default withRouter(UserTransactionDataThumbnail_Main);
