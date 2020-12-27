import React from "react";
import "./RouteSearchSort.css";
import SearchIcon from "../../../images/search-icon.png";
import SortIcon from "../../../images/sort-icon.png";
function RouteSearchSort(props) {
	const { changeInputValue } = props;
	//console.log(props);
	return (
		<div className="search-sort-container d-flex justify-content-center align-items-center my-2 mx-auto">
			<div className="row w-100 d-flex justify-content-center align-items-center">
				<div className="mr-3 w-100 search-input d-flex justify-content-center align-items-center">
					<input
						type="text"
						className="w-100 p-2 search-input-field"
						placeholder="Search by name"
					/>

					<img
						src={SearchIcon}
						alt="Search Icon Black"
						className="img-fluid search-input-btn"
					/>
				</div>
				{/*
				<div className="col-xl-3 col-lg-3 col-md-3 col-3 d-flex justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-sm-start justify-content-center pl-xl-2 pl-lg-2 pl-md-2 pl-sm-2 pl-0 pr-0 w-75 sort-input">
				
					<img
						src={SortIcon}
						alt="Sort Icon Coloured"
						className="img-fluid sort-input-btn"
					/>
					
					<div className="sort-option-container">
						<button className="sort-option" id="Sort_By_Date">
							Sort by date
						</button>
						<button className="sort-option" id="Sort_By_Amount">
							Sort by amount
						</button>
					</div>
				
				</div>
					*/}
			</div>
		</div>
	);
}

export default RouteSearchSort;
