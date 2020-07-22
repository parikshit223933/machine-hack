import React from "react";

const CustomToolTip = (props) => {
	if (props.active)
		return (
			<div className="ctt p-3 d-flex flex-row justify-content-around align-items-center">
				<div className="d-flex flex-column justify-content-start align-items-start">
					<div>
						<p>Month</p>
        <p>{props.payload[0].payload.name}</p>
					</div>
					<div>
						<p>Tasks Completed</p>
						<p>28</p>
					</div>
				</div>
				<div className="d-flex flex-column justify-content-start align-items-start">
					<div>
						<p>Activity</p>
						<p>{props.payload[0].payload.uv}</p>
					</div>
					<div>
						<p>Tasks Created</p>
						<p>22</p>
					</div>
				</div>
			</div>
		);
};
export default CustomToolTip;
