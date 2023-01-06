import React from 'react';
import Navbar from '../Nav/NavigationBar';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addPlayer } from '../../actions/index';

function AddPlayer() {

	const dispatch = useDispatch();

	const [name, setName] = useState('');

	const [nationality, setNationality] = useState('');

	const [age, setAge] = useState('');
	const [role, setRole] = useState('');


	

	const handleSubmit = (e)=>{
		e.preventDefault();

		dispatch(addPlayer({
			name : name,
			nationality: nationality,
			age: age,
			role: role,
		}));
		setName('');
		setNationality('');
		setRole('');
		setAge('');
		alert('Player has been added');

	};

	return (
		<>
			<Navbar />

			<div className="position-absolute top-50 start-50 translate-middle " >
				<h1 style={{ color: 'black', textAlign: 'center' }}>Add Player details</h1>
				<form onSubmit={handleSubmit} style={{ marginTop: '2em' }}>
					<div className="row justify-content-center align-items-center ">
						<div className="form-group col-md-12">
							<label htmlFor="inputName" >Name of Player</label>
							<input type="text" className="form-control" id="inputName" placeholder="Player Name" value={name} onChange={(e) => { setName(e.target.value); }}></input>
						</div>

						<div className="form-group col-md-12">
							<label htmlFor="inputAge">Age</label>
							<input type="text" className="form-control" id="inputAge" placeholder="Age" onChange={(e) => { setAge(e.target.value); }} value={age}></input>
						</div>


						<div className="form-group col-md-6 ">
							<label htmlFor="inputNationality">Nationality</label>
							<input type="text" className="form-control" id="inputNationality" placeholder="Nationality" value={nationality} onChange={(e) => { setNationality(e.target.value); }}></input>
						</div>
						<div className="form-group col-md-6 ">
							<label htmlFor="inputRole">role</label>
							<input type="text" className="form-control" id="inputRole" placeholder="Role" value={role} onChange={(e) => { setRole(e.target.value); }}></input>
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