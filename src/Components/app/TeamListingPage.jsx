import React from 'react';
import { useEffect , useState } from 'react';
import { auth} from '../../firebase';
import { useNavigate,Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from '../Nav/NavigationBar';
import { Table} from 'react-bootstrap';
// import { fetchTeams } from './Database';
import { useSelector } from 'react-redux';


function TeamListingPage() {
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();
	const [TeamList, setTeamList] = useState([]);

	const teams = useSelector((state)=> state.TeamReducer);

	useEffect(() => {
		if (loading) { return; }
		if (!user) { navigate('/'); }
		

		setTeamList(teams.map((item,id)=>{
			return (<tr key={id} >
				<td>{id+1}</td>
				<td><Link className='links' style={{color:'#0b5ed7'}} to={'/players/'+item['team_name']} >{item['team_name']}	</Link></td>
				<td>{item['home_ground']}</td>
				<td>{item['city']}</td>
				<td>{item['coach']}</td>

				<td>{item['debute']}</td>
			</tr>);
		}));
		
		
	}, [user, loading, teams]);

	return (
		<>
			<Navbar/>
			<div>
				<Table striped bordered hover variant="dark">
					<thead>
						<tr>
							<th>No.</th>
							<th>Team name</th>
							<th>Home Ground</th>
							<th>City</th>
							<th>Coach</th>

							<th>Debute</th>
						</tr>
					</thead>
					<tbody>
						{TeamList}
					</tbody>    
				</Table>
			</div>
		</>
	);
}

export default TeamListingPage;