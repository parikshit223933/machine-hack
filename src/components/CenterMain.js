import React from "react";
import pink from "../website-Resources/pink_svg.png";
import spaceMan from "../website-Resources/space-man.png";

class CenterMain extends React.Component {
	render() {
		return (
			<div className="center-main">
				<div className="banner-main mb-2">
					<div className="pink-color-svg">
						<img src={pink} alt="pink-color-svg" />
					</div>
					<div className="space-man">
						<img src={spaceMan} alt="space-man" />
					</div>
					<div className="banner-heading">
						<p>LOREM IPSUM</p>
					</div>
					<div className="banner-menu d-flex flex-row justify-content-start align-items-center pl-4">
						<div className="d-flex flex-row justify-content-center align-items-center banner-menu-item">
							<p className="m-0 text-secondary">HOME</p>
						</div>
						<div className="d-flex flex-row justify-content-center align-items-center banner-menu-item">
							<p className="m-0 text-secondary">DATA</p>
						</div>
						<div className="d-flex flex-row justify-content-center align-items-center banner-menu-item">
							<p className="m-0 text-secondary">LEADERBOARD</p>
						</div>
						<div className="d-flex flex-row justify-content-center align-items-center banner-menu-item">
							<p className="m-0 text-secondary">PARTICIPATE</p>
						</div>
					</div>
				</div>
				<div className="container-fluid content-main">
					<div className="row">
						<div className="col-lg-1 p-1 body-nav d-flex flex-lg-column flex-row justify-content-around justify-content-lg-start align-items-center text-secondary">
							<div className="d-flex justify-content-center align-items-center body-menu-item">
								<p>
									<i className="fas fa-th"></i>
								</p>
							</div>
							<div className="d-flex justify-content-center align-items-center body-menu-item">
								<p>
									<i className="fas fa-file-alt"></i>
								</p>
							</div>
							<div className="d-flex justify-content-center align-items-center body-menu-item">
								<p>
									<i className="far fa-copy"></i>
								</p>
							</div>
							<div className="d-flex justify-content-center align-items-center body-menu-item">
								<p>
									<i className="fas fa-medal"></i>
								</p>
							</div>
						</div>
						<div className="col-lg-11 p-1 graph">sdf</div>
					</div>
				</div>
			</div>
		);
	}
}
export default CenterMain;
