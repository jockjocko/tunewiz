import { getAuth, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FirebaseApp from '../firebase';

const SignOut = () => {
    const auth = getAuth(FirebaseApp);
    const navigate = useNavigate();

    useEffect(() => {
        signOut(auth).then(() => {
            navigate('/sign-in');
        });
    });

    return null;
};

export default SignOut;
