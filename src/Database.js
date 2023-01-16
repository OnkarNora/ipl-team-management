import {
	getFirestore,
	query,
	getDocs,
	addDoc,
	collection,
	where,
	updateDoc,
	deleteDoc
} from 'firebase/firestore';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID
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
		await updateDoc(doc.docs[0].ref, {'team_id':player.team_id});
		return 'success';
	} catch (err) {
		console.error(err);
		alert(err.message);
		return 'error';
	}

};

const removePlayerFromTeam = async(player)=>{

	try {
		const q = query(collection(db, 'players'),where('name' ,'==' ,player.name));
        
		const doc = await getDocs(q);
		await updateDoc(doc.docs[0].ref, {'team_id':''});
		return 'success';
	} catch (err) {
		console.error(err);
		alert(err.message);
		return 'error';
	}

};

const removeTeam = async(team_id)=>{

	try {      
		
		const q = query(collection(db, 'teams'),where('team_id' ,'==' ,team_id));
		const doc = await getDocs(q);
		await deleteDoc(doc.docs[0].ref);
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
	addNewPlayerToTeam,
	removePlayerFromTeam,
	removeTeam

};