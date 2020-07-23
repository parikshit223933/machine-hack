import React from "react";

class PieLegend extends React.Component {
	render() {
		const { payload } = this.props;
		payload.splice(4);
		return (
			<div className="w-100 d-flex flex-row justify-content-around align-items-start flex-wrap">
				{payload.map((data, index) => {
					return (
						<div className="d-flex flex-row justify-content-center align-items-center p-1 single-pie-legend" key={index}>
							<div
								className="circle mr-2"
								style={{ backgroundColor: data.payload.color }}
							>
								<div className="inner-circle"></div>
							</div>
							<div>
								<b>
									{Math.round(data.payload.percent * 100)} %
								</b>
								<p>Lorem Ipsum</p>
							</div>
                            <div className="coverer"></div>
						</div>
					);
				})}
			</div>
		);
	}
}
export default PieLegend;
