import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { auth} from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from '../Nav/NavigationBar';
import {  Button, Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addPlayerToTeam } from '../../actions/index';


function AddPlayerToTeam() {

	const {teamName} = useParams();


	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();
	const [playersList, setPlayersList] = useState([]);
	const dispatch = useDispatch();

	const players = useSelector((state)=> state.PlayerReducer);
	// console.log('players are ; ',players);

	useEffect(() => {
		if (loading) { return; }
		if (!user) { navigate('/'); }
		const team_players = players.filter((player)=>{return player.team_name==='';});


		setPlayersList(team_players.map((item,id)=>{
			return (<tr key={id} >
				<td>{id+1}</td>
				<td>{item['name']}</td>
				<td>{item['age']}</td>
				<td>{item['nationality']}</td>
				<td>{item['role']}</td>
				<td><Button className='btn btn-success btn-sm' onClick={()=>{handleAddPlayer(item);}} >Add to Team</Button></td>

			</tr>);
		}));
		
		
	}, [user, loading, players]);

	const handleAddPlayer = (player)=>{

		dispatch(addPlayerToTeam({name:player.name,team_name:teamName}));
		
	};

	return (
		<>
			<Navbar />
			<div>
				<Table striped bordered hover variant="dark">
					<thead>
						<tr>
							<th>No.</th>
							<th>Player Name</th>
							<th>Age</th>
							<th>Nationality</th>
							<th>Role</th>
							<th>Action</th>

						</tr>
					</thead>
					<tbody>
						{playersList}
					</tbody>    
				</Table>
				
			</div>

		</>
	);
}

export default AddPlayerToTeam;