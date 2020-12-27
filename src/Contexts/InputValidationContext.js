import React, { Component, createContext } from "react";

export const InputValidateContext = createContext();

class InputValidateProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isInputErrorFree: true,
		};
	}
	checkInputError = (targetInput) => {
		if (targetInput.value == "" || !/[a-zA-Z0-9]+/.test(targetInput.value)) {
			targetInput.classList.add("error-input");
			if (targetInput.nextElementSibling.style.height == "0px") {
				targetInput.nextElementSibling.style.height = "20px";
			}
			this.setState({
				isInputErrorFree: !this.state.isInputErrorFree,
			});
			return false;
		} else {
			targetInput.classList.remove("error-input");
			if (targetInput.nextElementSibling.style.height == "20px") {
				targetInput.nextElementSibling.style.height = "0px";
			}
			this.setState({
				isInputErrorFree: !this.state.isInputErrorFree,
			});
			return true;
		}
	};
	render() {
		return (
			<InputValidateContext.Provider
				value={{ ...this.state, checkInputError: this.checkInputError }}
			>
				{this.props.children}
			</InputValidateContext.Provider>
		);
	}
}

export default InputValidateProvider;
