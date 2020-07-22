import React from "react";

const CustomToolTip = (props) => {
	if (props.active)
		return (
			<div className="ctt p-3 d-flex flex-row justify-content-around align-items-center">
				<div className="d-flex flex-column justify-content-start align-items-start mr-2">
					<div>
						<p>Month</p>
						<p style={{color:'#f38273'}}>{props.payload[0].payload.name}</p>
					</div>
					<div>
						<p>Tasks Completed</p>
						<p style={{color:'#5fd4c3'}}><b>28</b></p>
					</div>
				</div>
				<div className="d-flex flex-column justify-content-start align-items-start ml-2">
					<div>
						<p>Activity</p>
						<p style={{color:'#b77cff'}}>{props.payload[0].payload.uv}</p>
					</div>
					<div>
						<p>Tasks Created</p>
						<p style={{color:'#69cbfe'}}><b>22</b></p>
					</div>
				</div>
			</div>
		);
};
export default CustomToolTip;
