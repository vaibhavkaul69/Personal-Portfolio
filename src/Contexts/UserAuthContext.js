import React, { Component, createContext } from "react";
import { ErrorSuccessInfoContext } from "./ErrorSuccessInfoModalContext";
export const UserAuthContext = createContext();

class UserAuthProvider extends Component {
	static contextType = ErrorSuccessInfoContext;
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			password: "",
			isUserLoggedIn: false,
		};
	}
	componentDidMount() {
		const userStorageData = JSON.parse(localStorage.getItem("User"));
		if (userStorageData && userStorageData.isUserLoggedIn) {
			this.setState({
				name: userStorageData.name,
				password: userStorageData.password,
				isUserLoggedIn: true,
			});
			setTimeout(() => {
				console.log(this.state);
			}, 1000);
		}
	}
	storeUserInfo = () => {
		//Create a user in LocalStorage
		localStorage.setItem("User", JSON.stringify(this.state));
		this.context.changeErrorSuccessInfoModalState();
		this.setState({
			name: "",
			password: "",
		});
	};
	setUserAuthName = (userName) => {
		this.setState({
			name: userName,
		});
	};
	setUserAuthPassword = (userPass) => {
		this.setState({
			password: userPass,
		});
	};
	logoutUser = () => {
		this.setState({
			isUserLoggedIn: false,
		});
		setTimeout(() => {
			localStorage.setItem("User", JSON.stringify(this.state));
		}, 1000);
	};
	changeUserAuthLoginStatus = () => {
		const user = JSON.parse(localStorage.getItem("User"));
		if (
			user &&
			user.name == this.state.name &&
			user.password == this.state.password
		) {
			this.setState({
				isUserLoggedIn: true,
			});
			setTimeout(() => {
				localStorage.setItem("User", JSON.stringify(this.state));
			}, 1000);

			return true;
		} else {
			this.context.changeErrorSuccessInfoModalState();
			return false;
		}
	};
	render() {
		return (
			<UserAuthContext.Provider
				value={{
					...this.state,
					storeUserInfo: this.storeUserInfo,
					setUserAuthName: this.setUserAuthName,
					setUserAuthPassword: this.setUserAuthPassword,
					changeUserAuthLoginStatus: this.changeUserAuthLoginStatus,
					logoutUser: this.logoutUser,
				}}
			>
				{this.props.children}
			</UserAuthContext.Provider>
		);
	}
}

export default UserAuthProvider;
