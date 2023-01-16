import React,{useState} from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../../firebase';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AddTeam from '../app/AddTeam';
import AddPlayer from '../app/AddPlayer';

function NavigationBar() {
	const [showAddTeamForm, setShowAddTeamForm] = useState(false);
	const [showAddPlayerForm, setShowAddPlayerForm] = useState(false);

	const handleCloseTeamForm = () => setShowAddTeamForm(false);
	const handleShowAddTeamForm = () => setShowAddTeamForm(true);
	const handleClosePlayerForm = () => setShowAddPlayerForm(false);
	const handleShowAddPlayerForm = () => setShowAddPlayerForm(true);

	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand ><Link to="/" className="links">Team Management</Link></Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link as={NavLink} to="/teamlistingpage">Team Listing Page</Nav.Link>
						<Link className='nav nav-link links' onClick={handleShowAddPlayerForm}>Add New Player</Link>
						<Link className='nav nav-link links' onClick={handleShowAddTeamForm}>Add New Team</Link>
					</Nav>
					<div className="text-center m-3" ><Button onClick={logout} >Logout</Button></div>
				</Container>
			</Navbar>

			<Offcanvas show={showAddTeamForm} onHide={handleCloseTeamForm} placement='end' name='end' >
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Add New Team</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<AddTeam/>
				</Offcanvas.Body>
			</Offcanvas>

			<Offcanvas show={showAddPlayerForm} onHide={handleClosePlayerForm} placement='end' name='end' >
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Add New Player</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<AddPlayer/>
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
}


export default NavigationBar;