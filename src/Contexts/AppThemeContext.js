import React, { Component, createContext } from "react";

export const AppThemeContext = createContext();

class AppThemeProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: {
				dark: {
					//navColor: " #1a1a1a",
					color: "#1a1a1a",
					textColor: "#fff",
					boxShadow: "5px 5px 25px 0 rgba(255,255,255,0.1)",
					addUserBtnColor: "#fff",
				},
				light: {
					//navColor: "#fff",
					color: "#fff",
					textColor: "#1a1a1a",
					boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
					addUserBtnColor: "var(--green)",
				},
			},
			selectedTheme: "light",
		};
	}
	toggleThemeChange = () => {
		if (this.state.selectedTheme == "light") {
			this.setState({
				selectedTheme: "dark",
			});
			document.body.className = "dark-theme-body";
		} else {
			this.setState({
				selectedTheme: "light",
			});
			document.body.className = "light-theme-body";
		}
	};
	render() {
		//console.log(this.state);
		return (
			<AppThemeContext.Provider
				value={{ ...this.state, toggleThemeChange: this.toggleThemeChange }}
			>
				{this.props.children}
			</AppThemeContext.Provider>
		);
	}
}

export default AppThemeProvider;
