import React from "react";
import logo from "../website-Resources/logo.png";

/* NAVBAR COLLAPSES AT 768 PIXELS */
class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar navbar-expand-lg navbar-light bg-white">
				<a className="navbar-brand" href="/">
					<img src={logo} />
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
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
                    <div>
					    <i class="fas fa-align-left"></i>
				    </div>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button
							className="btn btn-outline-success my-2 my-sm-0"
							type="submit"
						>
							Search
						</button>
					</form>
				</div>
			</div>
		);
	}
}
export default Navbar;
