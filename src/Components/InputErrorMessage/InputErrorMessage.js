import React from "react";
import "./InputErrorMessage.css";

function InputErrorMessage() {
	return (
		<p className="error-text d-block m-0" style={{ height: "0px" }}>
			Please complete this field
		</p>
	);
}
export default InputErrorMessage;
