import { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import '../assets/LoginCard.css'
import { useAuth } from './AuthContext';
import WarningMessage from './WarningMessage';

function LoginCard({onLogin}){

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [loginError,setLoginError]=useState(false);

    const {login}=useAuth();
    
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(login({username,password}))navigate("/home");
        else{
            setLoginError(true);
            setTimeout(() => {
                setLoginError(false);
            }, 1000);
        }
    }

    return (
        <div className='content'>
            <div className="login-card">
                <h1>Login</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className='login-input'>
                        <input type="text" autoComplete="off" placeholder="Username" required
                        onChange={(e)=>setUsername(e.target.value)}></input>
                    </div>
                    <div className='login-input'>
                        <input type="password" autoComplete="off" placeholder="Password" required
                        onChange={(e)=>setPassword(e.target.value)}></input>
                    </div>
                    <WarningMessage
                        className={"warning-message"}
                        state={loginError}
                        message={"Wrong username or password"}
                        duration={1000}
                    />
                    <button>Login</button>
                </form>
                <Link to="under-construction.html">Forgot your password?</Link>
                <Link to="/register">Create an account</Link>
                <Link to="/home">Home</Link>
            </div>
        </div>
    );
}

export default LoginCard;