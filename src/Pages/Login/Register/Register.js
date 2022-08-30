import React ,{ useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        
      ] = useCreateUserWithEmailAndPassword(auth);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event =>{
        event.preventDefault();
        // const name = nameRef.current.value;
        const email = emailRef.current.value;
        // const password = passwordRef.current.value; 
        // console.log(event.target.name.value);
        // console.log(event.target.email.value);
        const password = event.target.password.value;
        console.log( email, password);
        createUserWithEmailAndPassword(email, password);
    }
    if(user){
        console.log(user)
        navigate('/home')
    }
    // try{
    //     if(user){
    //         console.log(user)
    //         navigate('/home')
    //     }
    // }
    // catch{
    //     console.log(user)
    // }

    const navigateLogin = event => {
        navigate('/login')
    }
    return (
        <div className='register-form container w-50 mx-auto'>
            <h1 className='text-primary text-center my-4'>Please Register.</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} name="name" id='nameInputFieldId' placeholder='Your Name:' className='w-100 '/>
                
                <input type="email" ref={emailRef} name="email" id="emailInputFieldId" placeholder='Enter Email:' className='w-100 my-3' required/>

                <input type="password" ref={passwordRef} name='password' id='passwordInputFieldId' placeholder='Enter Password:' className='w-100' required/>

                <input type="submit" value="Register" className='w-100 mt-3' />
            </form>
            <p className='pt-3 '>New to Genious Car <span to='/register' className='text-danger login-text' onClick={navigateLogin}>Please Login</span></p>
        </div>
    );
};

export default Register;