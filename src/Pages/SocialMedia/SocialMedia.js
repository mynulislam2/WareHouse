import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SocialMedia = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);

    const GoogleSignIn = (event) => {
        event.preventDefault()
        signInWithGoogle()
    }
    const FaceBookSignIn = (event) => {
        event.preventDefault()
        signInWithFacebook()
    
    }     

    return (
        <div>
            <div className="d-grid mb-2">
                <p className='text-danger'>{error1 && error1?.message.slice(22)}</p>
                <p className='text-danger'>{error2 && error2?.message.slice(22)}</p>
                <button onClick={GoogleSignIn} className="btn btn-google btn-login text-uppercase fw-bold" type="submit">

                    <span className='me-1'>
                        <GoogleIcon></GoogleIcon>
                    </span>
                    Sign in with Google
                </button>
            </div>
            <div className="d-grid">
                <button onClick={FaceBookSignIn} className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                    <span className='me-1'>
                        <FacebookIcon></FacebookIcon>
                    </span>
                    Sign in with Facebook
                </button>
            </div>
        </div>
    );
};

export default SocialMedia;