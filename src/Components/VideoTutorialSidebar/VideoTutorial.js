import React from "react";
import "./VideoTutorial.css";
import videoTutorialIcon from "../../images/video-tutorial.svg";

function VideoTutorial() {
	return (
		<button className="side-navbar-video-tutorial pb-lg-5 pb-md-5 pb-4 mt-lg-5 mt-md-5 mt-4 px-3 d-flex justify-content-center align-items-center">
			<img
				src={videoTutorialIcon}
				className="video-tutorial-icon mr-3"
				alt="Video Tuorial "
			/>
			<div className="video-tutorial-content">
				<h3 className="video-tutorial-label-text text-left mb-1">
					Video Walkthrough
				</h3>
				<p className="tutorial-text mb-0 text-left ">
					Click here to watch a video tutorial on how to use TODO Money.
				</p>
			</div>
		</button>
	);
}

export default VideoTutorial;
