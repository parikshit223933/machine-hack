import React from "react";
import logo from "../website-Resources/logo.png";
import dp from "../website-Resources/profile-picture.jpg";

/* NAVBAR COLLAPSES AT 768 PIXELS */
class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar navbar-expand-lg navbar-light bg-white mb-3">
				<a className="navbar-brand" href="/">
					<img src={logo} alt="website-logo" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse text-secondary justify-content-between"
					id="navbarSupportedContent"
				>
					<div className="d-flex flex-row justify-content-center align-items-center ml-lg-5 mt-4 mt-lg-0">
						<div className="more-button">
							<i className="fas fa-align-left"></i>
						</div>
						<div className="search-box ml-2">
							<input
								className="mr-sm-2 pl-4"
								type="text"
								placeholder="Type here for Search..."
								aria-label="Search"
							/>
							<div className="search-button">
								<i className="fas fa-search"></i>
							</div>
						</div>
					</div>
					<div className="d-flex flex-row justify-content-center align-items-center mt-4 mt-lg-0">
						<div className="user-image-container">
							<img src={dp} alt="user-profile-pic" />
						</div>
						<div className="user-name ml-2 mr-2">
							<p className="m-0">Parikshit Singh <i className="fas fa-angle-down"></i></p>
						</div>
						<div className="bell-icon mr-2 ml-2">
							<i className="fas fa-bell"></i>
                            <div className="dot1"></div>
						</div>
						<div className="settings-icon mr-2 ml-2">
							<i className="fas fa-cog"></i>
                            <div className="dot2"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Navbar;
