import React, { useEffect } from 'react';
import { Formik, Field } from 'formik';
import { Box, Button, Divider, LinearProgress, Skeleton } from '@mui/material';
import { TextField } from 'formik-mui';
import { GoogleIcon } from './SocialIcons';
import { useSnackbar } from 'notistack';
import { AuthError, getAuth } from 'firebase/auth';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import FirebaseApp from '../../firebase';
import { useNavigate } from 'react-router-dom';

type FormInputs = {
    email: string;
    password: string;
};

export const SignInFormLoading: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Box mb={3}>
                <Skeleton variant="rectangular" height={56} />
            </Box>
            <Box mb={3}>
                <Skeleton variant="rectangular" height={56} />
            </Box>
            <Box mb={3}>
                <Skeleton variant="rectangular" height={36} />
            </Box>
            <Divider />
            <Box mt={3}>
                <Skeleton variant="rectangular" height={56} />
            </Box>
        </React.Fragment>
    );
};

export const SignInForm: React.FunctionComponent = () => {
    const auth = getAuth(FirebaseApp);

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [signInWithEmailAndPassword, , , emailError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, , , googleError] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const logError = (error: AuthError) => {
        console.error(error);
        closeSnackbar();
        if (error && error.code === 'auth/wrong-password') {
            enqueueSnackbar(`Invalid email or password`, { variant: 'error' });
        } else if (error) {
            enqueueSnackbar(`Unable to Sign in`, { variant: 'error' });
        }
    };

    useEffect(() => {
        if (user) navigate('/');
    }, [user]);

    useEffect(() => {
        if (emailError) logError(emailError);
    }, [emailError]);

    useEffect(() => {
        if (googleError) logError(googleError);
    }, [googleError]);

    const signInWithEmail = async (email: string, password: string) => {
        if (email && password) signInWithEmailAndPassword(email, password);
    };

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validate={(values) => {
                const errors: Partial<FormInputs> = {};
                if (!values.email) errors.email = 'Email is required';
                else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Invalid email address';

                if (!values.password) errors.password = 'Password is required';

                return errors;
            }}
            onSubmit={(values) => {
                return signInWithEmail(values.email, values.password);
            }}
        >
            {({ submitForm, isSubmitting }) => (
                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', position: 'relative' }}>
                    <Box mb={3}>
                        <Field fullWidth component={TextField} variant="outlined" name="email" type="email" label="Email" />
                    </Box>
                    <Box mb={3}>
                        <Field fullWidth component={TextField} variant="outlined" type="password" label="Password" name="password" />
                    </Box>

                    <Box mb={3}>
                        <Button fullWidth variant="contained" color="primary" disabled={isSubmitting} onClick={submitForm}>
                            Sign in
                        </Button>
                    </Box>

                    <Divider />

                    <Box mt={3} display="flex" justifyContent="center" flexWrap="wrap">
                        <Button
                            sx={{ background: 'white' }}
                            onClick={() => signInWithGoogle()}
                            startIcon={<GoogleIcon />}
                            variant="contained"
                            disabled={isSubmitting}
                        >
                            Sign in with Google
                        </Button>
                    </Box>

                    {isSubmitting && <LinearProgress sx={{ position: 'absolute', width: '100%', bottom: 0 }} />}
                </Box>
            )}
        </Formik>
    );
};

export default SignInForm;
