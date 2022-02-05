import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#000',
            paper: '#111',
        },
        secondary: {
            contrastText: '#222',
            main: '#fff',
        },
        primary: {
            contrastText: '#fff',
            main: '#1dc759',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
