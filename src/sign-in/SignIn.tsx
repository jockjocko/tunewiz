import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import SignInForm from './components/SignInForm';
import { Typography } from '@mui/material';

export default function SignIn() {
    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random?music)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0}>
                <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ p: 3, flex: 1 }}>
                        <Box sx={{ mb: 3, textAlign: 'center' }}>
                            <Typography variant="h4">Tunewiz</Typography>
                        </Box>
                        <SignInForm />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
