import React, { Component, createContext } from "react";

export const ToggleSideNavbar = createContext();

class ToggleSideNavbarProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSidebarOpen: false,
		};
	}
	toggleSideNavbar = (isLogoutPresentOnTopNav) => {
		if (isLogoutPresentOnTopNav) {
			return;
		} else {
			this.setState({
				isSidebarOpen: !this.state.isSidebarOpen,
			});
		}
	};

	render() {
		return (
			<ToggleSideNavbar.Provider
				value={{ ...this.state, toggleSideNavbar: this.toggleSideNavbar }}
			>
				{this.props.children}
			</ToggleSideNavbar.Provider>
		);
	}
}
export default ToggleSideNavbarProvider;
