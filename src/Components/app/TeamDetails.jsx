import React,{useEffect, useState} from 'react';
import Navbar from '../Nav/NavigationBar';
import PlayersListingPage from './PlayersListingPage';
import '../../css/TeamDetails.scss';
import { useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AddPlayerToTeam from './AddPlayerToTeam';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeTeam, removePlayerFromTeam } from '../../actions/index';

function TeamDetails() {

	const navigate = useNavigate();
	const {team_id} = useParams();
	const dispatch = useDispatch();
	const teams = useSelector((state)=> state.Teams);
	const players = useSelector((state)=> state.Players);
	const [team,setTeam] = useState([]);
	const [reload,setReload] = useState(false);
	const [teamPlayers,setTeamPlayers] = useState([]);

	useEffect(()=>{
		setTeam(teams.filter((team)=>{return team.team_id===team_id;})[0]);
	},[teams]);

	useEffect(()=>{
		setTeamPlayers(players.filter((player)=>{return player.team_id===team_id;}));
	},[players, reload]);

	
	const [showAddPlayerToTeamForm, setShowAddPlayerToTeamForm] = useState(false);
	const handleClosePlayerToTeamForm = () => setShowAddPlayerToTeamForm(false);
	const handleAddPlayerToTeamForm = () => setShowAddPlayerToTeamForm(true);

	const handleRemoveTeam = ()=>{
		for (let i in teamPlayers){
			dispatch(removePlayerFromTeam({ name: teamPlayers[i].name}));
		}

		dispatch(removeTeam(team.team_id));
		navigate('/teamlistingpage');
	};

	return (
		<>
			<Navbar />
			{
				team?<div className='main__container'>
					<div className='img__container'>
						<img src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/08/21/Pictures/_64499636-e35b-11ea-a73d-37b3f13c5782.PNG" alt="ipl_team_logo" />
					</div>
					<div className='details__container'>
						<h5>Team Name  </h5><p style={{fontSize:'20px'}}>{team.team_name}</p>
						<h5>Home Ground  </h5><p style={{fontSize:'20px'}}>{team.home_ground}</p>
						<h5>City  </h5><p style={{fontSize:'20px'}}>{team.city}</p>
					</div>
					<div className='details__container'>
						<h5>Coach  </h5><p style={{fontSize:'20px'}}>{team.coach}</p>
						<h5>Debute Year  </h5><p style={{fontSize:'20px'}}>{team.debute}</p>
						<Link className="btn btn-info" onClick={()=>{handleAddPlayerToTeamForm();}}>Add Player</Link>
						<Button className='mx-3' variant='danger' onClick={()=>{handleRemoveTeam();}} >Remove Team</Button>
					</div>
					
				</div>:null
			}
			
			<PlayersListingPage reload={reload} setReload={setReload} showAddPlayerToTeamForm={showAddPlayerToTeamForm} />

			<Offcanvas show={showAddPlayerToTeamForm} onHide={handleClosePlayerToTeamForm} placement='end' name='end' >
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Add Player to Team</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<AddPlayerToTeam reload={reload} setReload={setReload} team_id={team_id} handleClosePlayerToTeamForm={handleClosePlayerToTeamForm} />
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}

export default TeamDetails;