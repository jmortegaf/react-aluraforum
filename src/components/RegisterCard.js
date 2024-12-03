import { Link } from 'react-router-dom';
import '../assets/RegisterCard.css';
import { useState } from 'react';
import WarningMessage from './WarningMessage';

function RegisterCard({onRegister}){

    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password1,setPassword1]=useState("");
    const [password2,setPassword2]=useState("");

    const [mismatchPassword,setMismatchPassword]=useState(false);

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(password1!==password2){
            setMismatchPassword(true);
            setTimeout(() => {
              setMismatchPassword(false);
            }, 1000);
        }
        else{
            onRegister({username,email,password1});
        }
        // onRegister({username,email,password1,password2});
    }

    return (
        <div className='content'>
            <div className="register-card">
                <h1>Register</h1>
                <form className="register-form"  onSubmit={handleSubmit}>
                    <div className="register-input">
                        <input
                            type="text" 
                            id="username" 
                            placeholder="Username" 
                            required
                            onChange={(e)=>{setUsername(e.target.value)}}
                        />
                    </div>
                    <div className="register-input">
                        <input
                            type="email" 
                            id="email" 
                            placeholder="Email" 
                            required
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </div>
                    <div className="register-input">
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            required
                            onChange={(e)=>setPassword1(e.target.value)}
                        />
                    </div>
                    <div className="register-input">
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm Password"
                            required
                            onChange={(e)=>setPassword2(e.target.value)}
                        />
                    </div>
                    <WarningMessage
                        className={"password-mismatch-warning"}
                        state={mismatchPassword}
                        message={"Passwords don't match"}
                        duration={1000}
                    />
                    <button>Register</button>
                </form>
                <Link to="/login">Back to Login</Link>
            </div>
        </div>
    );

}

export default RegisterCard;