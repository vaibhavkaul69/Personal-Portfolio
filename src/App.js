import React, { Component } from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	withRouter,
} from "react-router-dom";

/*
 Custom Modules exported here
 */
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/Footer";
//import TransactionHomepageEntities from "./Components/TransactionHomepageEntities";
import TodoHome from "./Components/TodoHome";
import MoneyGiven from "./Components/InternalRoutes/MoneyGivenRoute/MoneyGiven";
import ImportantTransaction from "./Components/InternalRoutes/ImportantTransactionsRoute/ImportantTransaction";
import SettledTransaction from "./Components/InternalRoutes/SettledTransactionsRoute/SettledTransaction";
import ComponentTester from "./Components/ComponentTester";
import LandingPage from "./Components/LandingPage/LandingPage";
import Login from "./Components/LoginRegister/Login";
import Register from "./Components/LoginRegister/Register";
import SideNavbar from "./Components/NavSidebar/NavSidebar";
import HistoryThreadContainer from "./Components/HistoryThreadContainer/HistoryThreadContainer";

/*
	Contexts Imported Here
*/
import UserTransactionDataContextProvider from "./Contexts/UserTransactionDataContext";
import UserAuthProvider from "./Contexts/UserAuthContext";
import ErrorSuccessInfoProvider from "./Contexts/ErrorSuccessInfoModalContext";
import ToggleSideNavbarProvider from "./Contexts/ToggleSideNavbarContext";
import AppThemeProvider from "./Contexts/AppThemeContext";
import InputValidateProvider from "./Contexts/InputValidationContext";
import Error_404 from "./Components/Error_404";

class App extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		document.body.className = "light-theme-body";
	}
	render() {
		return (
			<ErrorSuccessInfoProvider>
				<UserAuthProvider>
					<AppThemeProvider>
						<UserTransactionDataContextProvider>
							<ToggleSideNavbarProvider>
								<Router>
									<div>
										<SideNavbar />
										<Navbar />

										<Route exact path="/" component={() => <LandingPage />} />

										<InputValidateProvider>
											<Route
												path="/todo-money"
												component={() => <LandingPage />}
											/>
											<Route
												path="/user-auth/login"
												component={() => <Login />}
											/>
											<Route
												path="/user-auth/register"
												component={() => <Register />}
											/>
											<Route
												exact
												path="/todo-home"
												component={() => <TodoHome />}
											/>

											<Route
												path="/money-given"
												component={() => <MoneyGiven />}
											/>
											<Route
												path="/important-transactions"
												component={ImportantTransaction}
											/>
											<Route
												path="/settled-transactions"
												component={SettledTransaction}
											/>
											<Route
												path="/component-test"
												component={() => <ComponentTester />}
											/>
											<Route
												exact
												path="/user/:id"
												component={HistoryThreadContainer}
											/>
										</InputValidateProvider>
									</div>
								</Router>
							</ToggleSideNavbarProvider>
						</UserTransactionDataContextProvider>
					</AppThemeProvider>
				</UserAuthProvider>
			</ErrorSuccessInfoProvider>
		);
	}
}

export default App;
