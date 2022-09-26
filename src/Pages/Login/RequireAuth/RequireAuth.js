import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return (
            <div>
                <h1>Please Email Verified</h1>
                <button
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Sent email');
                    }}
                >
                    Verify email
                </button>
                <ToastContainer />
            </div>
        )
    }
    return children;
}

export default RequireAuth;