import React from 'react';
import {Navbar,Container,Nav,Button} from 'react-bootstrap';
import { Link , NavLink} from 'react-router-dom';
import {logout} from '../../firebase';

function NavigationBar() {

	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand ><Link to="/" className="links">Team Management</Link></Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link as={NavLink} to="/teamlistingpage">Team Listing Page</Nav.Link>
						<Nav.Link as={NavLink} to="/newPlayer">Add New Player</Nav.Link>
						<Nav.Link as={NavLink} to="/newTeam">Add New Team</Nav.Link>
					</Nav>
					<div className="text-center m-3" ><Button onClick={logout} >Logout</Button></div>
				</Container>
			</Navbar>
		</div>
	);
}


export default NavigationBar;