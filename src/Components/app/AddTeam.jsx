import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTeam } from '../../actions/index';
import Alert from 'react-bootstrap/Alert';

function AddTeam() {

	const dispatch = useDispatch();
	const [showAlert, setShowAlert] = useState(false);
	const [teamName, setTeamName] = useState('');
	const [homeGround, setHomeGround] = useState('');
	const [city, setCity] = useState('');

	const [coach, setCoach] = useState('');
	const [debute, setDebute] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const tid = new Date().getTime().toString();
		dispatch(addTeam({
			team_id: tid,
			team_name: teamName,
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
		setShowAlert(true);

	};




	return (
		<>

			{
				showAlert ? <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
					<Alert.Heading>Success</Alert.Heading>
					<p>
						The Team has been added
					</p>
				</Alert> : null
			}
			<div className="position-absolute top-50 start-50 translate-middle mt-5" >
				<form onSubmit={handleSubmit} >
					<div className="">
						<div className="form-group">
							<label htmlFor="inputName" className="m-2">Name of Team</label>
							<input type="text" className="form-control" id="inputName" value={teamName} onChange={(e) => { setTeamName(e.target.value); }}></input>
						</div>
						<div className=" form-group">
							<label className="m-2" htmlFor="inputHomeGround">Name of the Home Ground</label>
							<input type="text" className="form-control" id="inputHomeGround" value={homeGround} onChange={(e) => { setHomeGround(e.target.value); }}></input>
						</div>
						<div className="form-group">
							<label className="m-2" htmlFor="inputCity">Name of City</label>
							<input type="text" className="form-control" id="inputCity" onChange={(e) => { setCity(e.target.value); }} value={city}></input>
						</div>


						<div className="form-group ">
							<label className="m-2" htmlFor="inputCoach">Coach</label>
							<input type="text" className="form-control" id="inputCoach" value={coach} onChange={(e) => { setCoach(e.target.value); }}></input>
						</div>
						<div className="form-group ">
							<label className="m-2" htmlFor="inputDebute">Debute Year</label>
							<input type="text" className="form-control" id="inputDebute" value={debute} onChange={(e) => { setDebute(e.target.value); }}></input>
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