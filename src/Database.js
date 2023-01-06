import {
	getFirestore,
	query,
	getDocs,
	addDoc,
	collection,
	where,
	updateDoc,
} from 'firebase/firestore';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyB3a-WIJpXuqxGWRf3eh3GoOTH3dv-0JVE',
	authDomain: 'team-management-8df94.firebaseapp.com',
	projectId: 'team-management-8df94',
	storageBucket: 'team-management-8df94.appspot.com',
	messagingSenderId: '658793668937',
	appId: '1:658793668937:web:b08c8b968676a9cb79fa98'
};
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const fetchTeamsDB = async()=>{
	try{
        
		const q = query(collection(db, 'teams'));
        
		const doc = await getDocs(q);
		return doc.docs.map((val)=>{return val.data();});
        

	} catch (err) {
		console.error(err);
		alert('An error occurred  while fetching  data');
		return 'Failed';
	}
};

const fetchPlayersDB = async()=>{
	try{
        
		const q = query(collection(db, 'players'));
        
		const doc = await getDocs(q);
		return doc.docs.map((val)=>{return val.data();});
        

	} catch (err) {
		console.error(err);
		alert('An error occurred  while fetching  data');
		return 'Failed';
	}
};

const addNewTeam = async(team)=>{

	try {
		await addDoc(collection(db, 'teams'), team);
		return 'success';
	} catch (err) {
		console.error(err);
		alert(err.message);
		return 'error';
	}

};

const addNewPlayer = async(player)=>{

	try {
		await addDoc(collection(db, 'players'), player);
		return 'success';
	} catch (err) {
		console.error(err);
		alert(err.message);
		return 'error';
	}

};

const addNewPlayerToTeam = async(player)=>{

	try {
		const q = query(collection(db, 'players'),where('name' ,'==' ,player.name));
        
		const doc = await getDocs(q);
		await updateDoc(doc.docs[0].ref, {'team_name':player.team_name});
		return 'success';
	} catch (err) {
		console.error(err);
		alert(err.message);
		return 'error';
	}

};

export {
	fetchTeamsDB,
	fetchPlayersDB,
	addNewTeam,
	addNewPlayer,
	addNewPlayerToTeam

};