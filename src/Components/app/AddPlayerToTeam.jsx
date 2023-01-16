import React from 'react';
// import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button, Table, Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addPlayerToTeam } from '../../actions/index';


function AddPlayerToTeam({reload,setReload, team_id }) {

	// const {team_id} = useParams();


	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();
	const [playersList, setPlayersList] = useState([]);
	const [showAlert, setShowAlert] = useState(false);
	const dispatch = useDispatch();

	const players = useSelector((state) => state.Players);


	useEffect(() => {
		if (loading) { return; }
		if (!user) { navigate('/'); }
		const open_players = players.filter((player) => { return player.team_id === ''; });


		setPlayersList(open_players.map((item, id) => {
			return (<tr key={id} >
				<td>{id + 1}</td>
				<td>{item['name']}</td>
				<td>{item['role']}</td>
				<td><Button className='btn btn-success btn-sm' onClick={() => { handleAddPlayer(item); }} >Add to Team</Button></td>

			</tr>);
		}));


	}, [user, loading, players, reload]);

	const handleAddPlayer = (player) => {
		const team_players = players.filter((player) => { return player.team_id === team_id; });
		if (team_players.length == 25) {
			setShowAlert(true);
			return;
		}
		dispatch(addPlayerToTeam({ name: player.name, team_id: team_id }));
		// handleClosePlayerToTeamForm();
		setReload(!reload);
		navigate('/players/' + team_id);

	};

	return (
		<>

			{
				showAlert ? <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
					<Alert.Heading>Failed</Alert.Heading>
					<p>
						Maximum Players are already added for team
					</p>
				</Alert> : null
			}
			<div>
				<Table size="lg" striped bordered hover>
					<thead>
						<tr>
							<th>No.</th>
							<th>Player Name</th>
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

AddPlayerToTeam.propTypes = {
	team_id: PropTypes.string,
	handleClosePlayerToTeamForm: PropTypes.func,
	reload: PropTypes.bool,
	setReload: PropTypes.func
};

export default AddPlayerToTeam;