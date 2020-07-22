import React from "react";

class Body extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3 p-1">
						<div className="left-nav w-100 d-flex flex-column justify-content-start align-items-start">
							<div className="w-100 left-menu-item">
								<p>
									<i className="fas fa-th-large font-weight-normal"></i>{" "}
									Home
								</p>
							</div>
							<div className="w-100 left-menu-item">
								<p>
									<i className="fas fa-layer-group"></i>{" "}
									Hackathon
								</p>
							</div>
							<div className="w-100 left-menu-item">
								<p>
									<i className="far fa-chart-bar"></i> Global
									Ranking
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-5 p-1"></div>
					<div className="col-md-4 p-1"></div>
				</div>
			</div>
		);
	}
}

export default Body;
