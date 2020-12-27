import React, { createContext, Component } from "react";

//Create a context.
export const UserTransactionDataContext = createContext();

class UserTransactions {
	constructor(name) {
		this.id = (Math.random() * 10000).toFixed(5).replace(".", "");
		this.name = name;
	}
}
class UserTransaction__Main extends UserTransactions {
	constructor(name) {
		super(name);
		(this.allTransactionsDate = []),
			(this.transactionHistory = []),
			(this.isDeleted = false);
		this.notifyUser = false;
		this.notifyUserCount = 3;
		this.isSettled = false;
	}
}
class UserTransaction_Main_HistoryThread extends UserTransactions {
	constructor(name, amount, date, description) {
		super(name);
		this.amount = amount;
		this.transactionDate = date;
		this.description = description;
		this.isImportant = false;
	}
}
class UserTransactionDataContextProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			description: "",
			//dateofUserAdded: "",
			dateOfTransaction: "",
			amount: 0,
			userTransactionsInfo: [],
		};
		(this.importantTransactions = []),
			(this.settledTransactions = []),
			(this.userAllTransactionHistory = []),
			(this.UserAddHistory = ""),
			(this.doesInputErrorExist = false),
			(this.addDataToUserInfo = this.addDataToUserInfo.bind(this));
	}
	markTransactionImportant = (id) => {
		console.log(id);
		const filterCurrentTransaction = this.userAllTransactionHistory.filter(
			(item) => {
				if (item.id == id) {
					return item;
				}
			}
		);
		console.log(filterCurrentTransaction);

		//Here we add the selected important transaction to the ImportantTransactions array.
		this.importantTransactions.push(filterCurrentTransaction);

		//Store data to storage
		setTimeout(() => {
			this.storeUserTransactionInfoToStorage();
		}, 1000);
	};
	storeUserTransactionInfoToStorage = () => {
		localStorage.setItem(
			"UserTransactionDataStore",
			JSON.stringify(this.state.userTransactionsInfo)
		);
		localStorage.setItem(
			"UserAllTransactionsHistory",
			JSON.stringify(this.userAllTransactionHistory)
		);
		localStorage.setItem(
			"ImportantTransactions",
			JSON.stringify(this.importantTransactions)
		);
		localStorage.setItem(
			"SettledTransactions",
			JSON.stringify(this.settledTransactions)
		);
	};
	addDataToUserInfo(formBodyName) {
		if (formBodyName == "addUser") {
			if (this.state.name == "" || !/[a-zA-Z0-9]+/.test(this.state.name)) {
				alert("You need to add a User!");
				return false;
			} else {
				this.setState({
					userTransactionsInfo: [
						...this.state.userTransactionsInfo,
						new UserTransaction__Main(this.state.name),
					],
				});
				setTimeout(() => {
					this.storeUserTransactionInfoToStorage();
				}, 1000);
				return true;
			}
		} else {
			if (
				this.state.name == "" ||
				!/[a-zA-Z0-9]+/.test(this.state.name) ||
				this.state.amount == "" ||
				!/[a-zA-Z0-9]+/.test(this.state.amount) ||
				this.state.description == "" ||
				!/[a-zA-Z0-9]+/.test(this.state.description) ||
				this.state.dateOfTransaction == "" ||
				!/[a-zA-Z0-9]+/.test(this.state.dateOfTransaction)
			) {
				//alert("You cannot leave the fields empty.!");
				return false;
			} else {
				const userData = this.state.userTransactionsInfo;
				const [activeTransactionHistoryUser] = userData.filter(
					(item) => item.name == this.UserAddHistory
				);
				const num = activeTransactionHistoryUser.transactionHistory.push(
					new UserTransaction_Main_HistoryThread(
						this.UserAddHistory,
						this.state.amount,
						this.state.dateOfTransaction,
						this.state.description
					)
				);

				console.log(activeTransactionHistoryUser.transactionHistory);

				//Add all the transaction history into the userAllTransactionHistory
				this.userAllTransactionHistory.push(
					activeTransactionHistoryUser.transactionHistory[num - 1]
				);
				/*
				activeTransactionHistoryUser.transactionHistory.map((item) => {
					this.userAllTransactionHistory.push(item);
				});
				*/
				console.log(this.userAllTransactionHistory);

				//Call store to localstorage method
				setTimeout(() => {
					this.storeUserTransactionInfoToStorage();
				}, 1000);
				return true;
			}
		}
	}
	setName = (e) => {
		this.setState({
			name: e.target.value,
		});
	};

	setDateOfTransaction = (e) => {
		this.setState({
			dateOfTransaction: e.target.value,
		});
	};
	setAmount = (e) => {
		this.setState({
			amount: e.target.value,
		});
	};
	setDescription = (e) => {
		this.setState({
			description: e.target.value,
		});
	};
	changeUserAddHistory = (activeUser) => {
		this.UserAddHistory = activeUser;
		this.setState({
			name: this.UserAddHistory,
		});
	};
	componentDidMount() {
		const UserTransactionDataStore = JSON.parse(
			localStorage.getItem("UserTransactionDataStore")
		);
		const UserAllTransactionsHistory = JSON.parse(
			localStorage.getItem("UserAllTransactionsHistory")
		);
		const ImportantTransactions = JSON.parse(
			localStorage.getItem("ImportantTransactions")
		);
		//console.log(UserTransactionDataStore);
		if (
			UserTransactionDataStore == null &&
			UserAllTransactionsHistory == null &&
			ImportantTransactions == null
		) {
			return;
		} else {
			console.log(UserTransactionDataStore, UserAllTransactionsHistory);
			this.setState({
				userTransactionsInfo: UserTransactionDataStore,
			});
			this.userAllTransactionHistory = UserAllTransactionsHistory;
			this.importantTransactions = ImportantTransactions;
		}
	}
	render() {
		return (
			<UserTransactionDataContext.Provider
				value={{
					...this.state,
					addDataToUserInfo: this.addDataToUserInfo,
					setName: this.setName,
					setDateOfTransaction: this.setDateOfTransaction,
					setAmount: this.setAmount,
					setDescription: this.setDescription,
					changeUserAddHistory: this.changeUserAddHistory,
					markTransactionImportant: this.markTransactionImportant,
				}}
			>
				{this.props.children}
			</UserTransactionDataContext.Provider>
		);
	}
}

export default UserTransactionDataContextProvider;
