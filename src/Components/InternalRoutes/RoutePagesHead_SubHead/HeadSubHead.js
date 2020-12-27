import React from "react";
import "./HeadSubHead.css";

function HeadSubHead(props) {
	const { head, subhead } = props;
	return (
		<div className="route-pages-head-subhead-container">
			<h1 className="route-pages__heading text-center">{head}</h1>
			<p className="route_pages__subheading text-center">
				{subhead ? subhead : null}
			</p>
		</div>
	);
}

export default HeadSubHead;
