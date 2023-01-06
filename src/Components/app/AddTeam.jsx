import React from 'react'; 
import { useState } from 'react';
import Navbar from '../Nav/NavigationBar';
import { useDispatch } from 'react-redux';
import { addTeam } from '../../actions/index';

function AddTeam() {

	const dispatch = useDispatch();

	const [teamName,setTeamName] = useState('');
	const [homeGround,setHomeGround] = useState('');
	const [city,setCity] = useState('');

	const [coach,setCoach] = useState('');
	const [debute,setDebute] = useState('');

	const handleSubmit = (e)=>{
		e.preventDefault();

		dispatch(addTeam({
			team_name : teamName,
			home_ground: homeGround,
			city: city,

			coach: coach,
			debute: debute
		}));
		setTeamName('');
		setHomeGround('');
		setCity('');
		setCoach('');
		setDebute('');
		alert('team has been added');
		
	};

	


	return (
		<>
			<Navbar />
			<div className="position-absolute top-50 start-50 translate-middle " >
				<h1 style={{color:'black',textAlign: 'center'}}>Add Team details</h1>
				<form onSubmit={handleSubmit} style={{marginTop:'2em'}}>
					<div className="row justify-content-center align-items-center ">
						<div className="form-group col-md-12">
							<label htmlFor="inputName" >Name of Team</label>
							<input type="text" className="form-control" id="inputName" placeholder="Team Name" value={teamName} onChange={(e)=>{setTeamName(e.target.value);}}></input>
						</div>
						<div className="form-group col-md-12 ">
							<label htmlFor="inputHomeGround">Name of the Home Ground</label>
							<input type="text" className="form-control" id="inputHomeGround" placeholder="Home Ground" value={homeGround} onChange={(e)=>{setHomeGround(e.target.value);}}></input>
						</div>
						<div className="form-group col-md-12">
							<label htmlFor="inputCity">Name of City</label>
							<input type="text" className="form-control" id="inputCity" placeholder="City" onChange={(e)=>{setCity(e.target.value);}} value={city}></input>
						</div>


						<div className="form-group col-md-6 ">
							<label htmlFor="inputCoach">Coach</label>
							<input type="text" className="form-control" id="inputCoach" placeholder="Coach" value={coach} onChange={(e)=>{setCoach(e.target.value);}}></input>
						</div>
						<div className="form-group col-md-6 ">
							<label htmlFor="inputDebute">Debute Year</label>
							<input type="text" className="form-control" id="inputDebute" placeholder="Debute Year" value={debute} onChange={(e)=>{setDebute(e.target.value);}}></input>
						</div>
					</div>
					<center>
						<button type="submit" className="submit btn btn-primary m-3"  >
                        Submit<i className="icon-angle-right" ></i>
						</button>
					</center>
				</form>
			</div>

		</>
	);
}

export default AddTeam;