import React from 'react';
import { auth, provider} from '../firebase';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({setIsAuth}) => {

    const navigate = useNavigate();

    const signInWithGoogle = () =>{
        signInWithPopup(auth, provider).then(()=> {
            localStorage.setItem('isAuth', true);
            setIsAuth(true);
            navigate('/');
        })
    }

  return (
    <div className='loginPage'>
        <p>Sign In With Email</p>
        <button className='login-btn'>Sign in with Email</button>
        <p>Sign In With Google</p>
        <button className='login-btn' onClick={signInWithGoogle}>Sign in with Google</button>
        
    </div>
  )
}

export default Login