import { initializeApp } from 'firebase/app';
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from 'firebase/auth';
import {
	getFirestore,
	query,
	getDocs,
	collection,
	where,
	addDoc,
} from 'firebase/firestore';
const firebaseConfig = {
	apiKey: 'AIzaSyB3a-WIJpXuqxGWRf3eh3GoOTH3dv-0JVE',
	authDomain: 'team-management-8df94.firebaseapp.com',
	projectId: 'team-management-8df94',
	storageBucket: 'team-management-8df94.appspot.com',
	messagingSenderId: '658793668937',
	appId: '1:658793668937:web:b08c8b968676a9cb79fa98'
};
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider);
		const user = res.user;
		const q = query(collection(db, 'users'), where('uid', '==', user.uid));
		const docs = await getDocs(q);
		if (docs.docs.length === 0) {
			await addDoc(collection(db, 'users'), {
				uid: user.uid,
				name: user.displayName,
				authProvider: 'google',
				email: user.email,
			});
		}
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};
const logInWithEmailAndPassword = async (email, password) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};
const registerUserWithEmailAndPassword = async (name, email, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;
		await addDoc(collection(db, 'users'), {
			uid: user.uid,
			name,
			authProvider: 'local',
			email,
			type:'user',
			points:{},
		});
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};
const registerShopOwnerWithEmailAndPassword = async (name, email, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;
		await addDoc(collection(db, 'shopowner'), {
			uid: user.uid,
			name,
			authProvider: 'local',
			email,
			type: 'shopowner'
		});
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};
const sendPasswordReset = async (email) => {
	try {
		await sendPasswordResetEmail(auth, email);
		alert('Password reset link sent!');
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};
const logout = () => {
	signOut(auth);
	
};
export {
	auth,
	db,
	signInWithGoogle,
	logInWithEmailAndPassword,
	registerUserWithEmailAndPassword,
	registerShopOwnerWithEmailAndPassword,
	sendPasswordReset,
	logout,
};