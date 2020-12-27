import React, { Component, createContext } from "react";

export const ErrorSuccessInfoContext = createContext();

class ErrorSuccessInfoProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isErrorSuccessInfoModalOpen: false,
		};
	}
	changeErrorSuccessInfoModalState = () => {
		this.setState({
			isErrorSuccessInfoModalOpen: !this.state.isErrorSuccessInfoModalOpen,
		});
	};
	render() {
		return (
			<ErrorSuccessInfoContext.Provider
				value={{
					...this.state,
					changeErrorSuccessInfoModalState: this
						.changeErrorSuccessInfoModalState,
				}}
			>
				{this.props.children}
			</ErrorSuccessInfoContext.Provider>
		);
	}
}

export default ErrorSuccessInfoProvider;
