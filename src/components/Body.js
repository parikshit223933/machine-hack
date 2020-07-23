import React from "react";
import {LeftNav, CenterMain, RightStats} from './';

class Body extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3 col-lg-2 p-1">
						<LeftNav/>
					</div>
					<div className="col-md-6 col-lg-6 p-1">
                        <CenterMain/>
                    </div>
					<div className="col-md-3 col-lg-4 p-1">
                        <RightStats/>
                    </div>
				</div>
			</div>
		);
	}
}

export default Body;
