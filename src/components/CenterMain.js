import React from "react";
import pink from "../website-Resources/pink_svg.png";
import spaceMan from "../website-Resources/space-man.png";
import { AreaGraph } from "./";
import pink2 from "../website-Resources/pink2.png";

class CenterMain extends React.Component {
	render() {
		return (
			<div className="center-main">
				<div className="banner-main mb-4">
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
						<div className="w-100 graph col-lg-11 p-4 graph mb-5">
							<h4 className="mb-3 text-secondary w-75">
								Graph About Hackathon Activity
							</h4>
							<AreaGraph />
							<div className="sorter">
								<div className="btn-group">
									<button
										className="btn btn-outline-primary btn-sm dropdown-toggle"
										type="button"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										Sort By
									</button>
									<div
										className="dropdown-menu dropdown-menu-right"
										aria-labelledby="dropdownMenuLink"
									>
										<a className="dropdown-item" href="/">
											Month
										</a>
										<a className="dropdown-item" href="/">
											year
										</a>
										<a className="dropdown-item" href="/">
											Day
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="rules p-3 mb-5">
							<div className="rules-heading mb-3">
								<div className="rules-pink">
									<img src={pink2} alt="pink2" />
								</div>
								<div className="rules-text">
									<h4 className="m-0">Rules</h4>
								</div>
							</div>
							<div className="w-100 pl-1 pr-3">
								<ul>
									<li>
										<h6>ONE ACCOUNT PER PARTICIPANT</h6>
										<div>
											<p>
												One account per participant One
												account per participant.
												Submissions from multiple
												accounts will lead to
												disqualification The submission
												limit for the hackathon is 10
												per day after which the
												submission will not be evaluated
												All registered users are
												eligible to participate in the
												hackathon We ask that you
												respect the spirit of the
												competition and do not cheat
											</p>
										</div>
										<div className="li-dot"></div><div className="left-line"></div>
									</li>
									<li>
										<h6>
											NO PRIVATE SHARING OUTSIDE TEAMS
										</h6>
										<div>
											<p>
												No private sharing outside teams
												One account per participant.
												Submissions from multiple
												accounts will lead to
												disqualification The submission
												limit for the hackathon is 10
												per day after which the
												submission will not be evaluated
												All registered users are
												eligible to participate in the
												hackathon We ask that you
												respect the spirit of the
												competition and do not cheat
											</p>
										</div>
										<div className="li-dot"></div><div className="left-line"></div>
									</li>
									<li>
										<h6>SUBMISSION LIMITS</h6>
										<div>
											<p>
												Submission Limits One account
												per participant. Submissions
												from multiple accounts will lead
												to disqualification The
												submission limit for the
												hackathon is 10 per day after
												which the submission will not be
												evaluated All registered users
												are eligible to participate in
												the hackathon We ask that you
												respect the spirit of the
												competition and do not cheat
											</p>
										</div>
										<div className="li-dot"></div><div className="left-line"></div>
									</li>
									<li>
										<h6>COMPETTION TIMELINE</h6>
										<div>
											<p>
												Start Date: 19/5/2020 End Date:
												19/11/2020
											</p>
										</div>
										<div className="li-dot"></div><div className="left-line"></div>
									</li>
									<li>
										<h6>COMPETITION-SPECIFIC TERMS</h6>
										<div>
											<p style={{marginBottom:'0px'}}>
												WINNER LICENSE TYPE : Open
												Source
											</p>
											<p>
												DATA ACCESS AND USE : Any
												purpose
											</p>
										</div>
										<div className="li-dot"></div><div className="left-line"></div>
									</li>
									<li>
										<h6>ELIGIBILITY</h6>
										<div>
											<p style={{marginBottom:'0px'}}>
												WINNER LICENSE TYPE : Open
												Source
											</p>
											<p>
												DATA ACCESS AND USE : Any
												purpose
											</p>
										</div>
										<div className="li-dot"></div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default CenterMain;
