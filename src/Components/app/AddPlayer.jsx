import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addPlayer } from '../../actions/index';
import Alert from 'react-bootstrap/Alert';
function AddPlayer() {

	const dispatch = useDispatch();

	const [showAlert, setShowAlert] = useState(false);
	const [name, setName] = useState('');

	const [nationality, setNationality] = useState('');

	const [age, setAge] = useState('');
	const [role, setRole] = useState('');




	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addPlayer({
			name: name,
			nationality: nationality,
			age: age,
			role: role,
		}));
		setName('');
		setNationality('');
		setRole('');
		setAge('');
		setShowAlert(true);

	};



	return (
		<>
			{
				showAlert ? <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
					<Alert.Heading>Success</Alert.Heading>
					<p>
						The player has been added 
					</p>
				</Alert> : null
			}

			<div className="position-absolute top-50 start-50 translate-middle " >
				<form onSubmit={handleSubmit} >
					<div className=" ">
						<div className="form-group ">
							<label htmlFor="inputName" className="m-2">Name of Player</label>
							<input type="text" className="form-control" id="inputName" value={name} onChange={(e) => { setName(e.target.value); }}></input>
						</div>

						<div className="form-group ">
							<label htmlFor="inputAge" className="m-2">Age</label>
							<input type="text" className="form-control" id="inputAge" onChange={(e) => { setAge(e.target.value); }} value={age}></input>
						</div>


						<div className="form-group  ">
							<label htmlFor="inputNationality" className="m-2">Nationality</label>
							<input type="text" className="form-control" id="inputNationality" value={nationality} onChange={(e) => { setNationality(e.target.value); }}></input>
						</div>
						<div className="form-group  ">
							<label htmlFor="inputRole" className="m-2">role</label>
							<input type="text" className="form-control" id="inputRole" value={role} onChange={(e) => { setRole(e.target.value); }}></input>
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

export default AddPlayer;