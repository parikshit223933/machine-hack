import React from "react";

class LeftNav extends React.Component {
	render() {
		return (
			<div className="left-nav w-100 d-flex flex-column justify-content-start align-items-start text-secondary">
				<div className="w-100 left-menu-item">
					<p>
						<i className="fas fa-th-large font-weight-normal"></i>{" "}
						Home
					</p>
				</div>
				<div className="w-100 left-menu-item">
					<p>
						<i className="fas fa-layer-group"></i> Hackathon
					</p>
				</div>
				<div className="w-100 left-menu-item">
					<p>
						<i className="far fa-chart-bar"></i> Global Ranking
					</p>
				</div>
			</div>
		);
	}
}
export default LeftNav;
