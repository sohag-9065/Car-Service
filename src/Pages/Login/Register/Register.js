import React ,{ useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [ createUserWithEmailAndPassword, user ,  loading] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating] = useUpdateProfile(auth);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    if(loading || updating){
        return <Loading></Loading>
    }
    if(user){
        console.log("user: ",user)
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();
        const name = nameRef.current.value;
        // const password = passwordRef.current.value; 
        // const agree = event.target.terms.checked;
        // if(agree){
        //     createUserWithEmailAndPassword(email, password);
        // }
        const email = emailRef.current.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name});
          alert('Updated profile');
          console.log('Updated profile');
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

                <input type="password" ref={passwordRef} name='password' id='passwordInputFieldId' placeholder='Enter Password:' className='w-100 mb-3' required/>
                <input onClick={()=>{setAgree(!agree)}} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2 text-primary':'ps-2 text-danger'} htmlFor="terms">Accepts Genious Car terms and condition?</label> */}
                <label className={`ps-2 ${agree ? 'text-primary':'text-danger'}`} htmlFor="terms">Accepts Genious Car terms and condition?</label>
                <input disabled={!agree} className='w-50 d-block mx-auto  mt-3 btn btn-primary' type="submit" value="Register"  />
            </form>
            <p className='pt-3 '>New to Genious Car <span to='/register' className='text-primary login-text' onClick={navigateLogin}>Please Login</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;