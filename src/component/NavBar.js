import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
	render() {
		return(
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<Link className="navbar-brand" to="/">Navbar</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarColor02">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/">Features</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/">Pricing</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/">About</Link>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0">
							<input className="form-control mr-sm-2" type="text" placeholder="Search"/>
								<button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
						</form>
					</div>
				</nav>
			</div>
		);
	}
}

export default NavBar;