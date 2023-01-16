import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { auth} from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import PropTypes from 'prop-types';
import {  Table, Button} from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { removePlayerFromTeam } from '../../actions/index';

function PlayersListingPage({reload,setReload,showAddPlayerToTeamForm}) {

	const {team_id} = useParams();
	const dispatch = useDispatch();

	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();
	const [playersList, setPlayersList] = useState([]);


	const players = useSelector((state)=> state.Players);
	

	useEffect(() => {
		if (loading) { return; }
		if (!user) { navigate('/'); }
		const team_players = players.filter((player)=>{return player.team_id===team_id;});


		setPlayersList(team_players.map((item,id)=>{
			return (<tr key={id} >
				<td>{id+1}</td>
				<td>{item['name']}</td>
				<td>{item['age']}</td>
				<td>{item['nationality']}</td>
				<td>{item['role']}</td>
				<td><Button variant='outline-danger' className='btn btn-sm' onClick={() => { handleRemovePlayer(item); }} >Remove</Button></td>

			</tr>);
		}));
		
		
	}, [user, loading,players, showAddPlayerToTeamForm, reload]);

	const handleRemovePlayer = (player) => {
		dispatch(removePlayerFromTeam({ name: player.name}));
		setReload(!reload);
	};

	return (
		<>
			
			<div>
				<h4>Players List </h4>
				<Table striped bordered hover variant="">
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


PlayersListingPage.propTypes = {
	showAddPlayerToTeamForm: PropTypes.bool,
	reload: PropTypes.bool,
	setReload: PropTypes.func
};

export default PlayersListingPage;