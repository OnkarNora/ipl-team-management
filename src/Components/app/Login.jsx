import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword } from '../../firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../../css/Login.css';

function Login() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (loading) {
			return;
		}
		if (user) {
			navigate('/teamlistingpage');
		}

	}, [user, loading]);

	return (
		<div className="login" style={{backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'
		}}>

			<div className="login__container">
				<h2>Login</h2>
				<input
					type="text"
					className="login__textBox"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="E-mail Address"
				/>
				<input
					type="password"
					className="login__textBox"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<button
					className="login__btn"
					onClick={() => logInWithEmailAndPassword(email, password)}
				>
                    Login
				</button>
				
				<div>
					<Link to="/reset">Forgot Password</Link>
				</div>
				<div>
                    Dont have an account? <Link to="/register">Register</Link>
				</div>
			</div>
		</div>
	);
}

export default Login;