import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        neutral: {
            main: '#025602',
            contrastText: '#025602',
        },
    },
});

export const NotFound = () => (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img alt='404 Not Found!' src='https://www.initcoms.com/wp-content/uploads/2020/07/404-error-not-found-1.png' />
        <ThemeProvider theme={theme}>
        <Link style={{ borderRadius: '5px', fontWeight: '700', textDecoration: 'none' }} to="/"><Button size="large" style={{ width: '100%' }} color="neutral" variant="outlined">GO BACK</Button></Link>
        </ThemeProvider>
    </div>
);
