import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import PersonIcon from '@mui/icons-material/Person';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import LockIcon from '@mui/icons-material/Lock';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';



const useStyles = makeStyles({
    center: {
        textAlign: 'center',
        margin: '20% 0'
    },
    bgc: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: '10px 10px 0 0'
    },
    formControl: {
        color: '#fff',
        position: 'relative',
        rifht: '0'
    },
    btn: {
        width: '100%',
        margin: '5% 0 0 0',
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    checkBox: {
        margin: '15px 0'
    },
    positionForFoto: {
        position: 'relative',
        left: '35px'
    }
});

const theme = createTheme({
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        neutral: {
            main: '#fff',
            contrastText: '#fff',
        },
    },
});


export const RegisterPage = () => {
    const classes = useStyles()




    return (
        <Grid container spacing={1}>
            <Grid item xs={0} sm={2} md={2} lg={4} />
            <Grid item xs={12} sm={8} md={8} lg={4}>
                <div className={classes.center}>
                    <div>
                        <TagFacesIcon className={classes.positionForFoto} sx={{ fontSize: 190, color: grey[50] }} />
                        <Button><AddAPhotoIcon sx={{ fontSize: 29, color: grey[50] }} /></Button>
                    </div>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <PersonIcon sx={{ fontSize: '60px', color: grey[50], mr: 1, my: 0 }} />
                        <FormControl className={classes.bgc} sx={{ m: 1 }} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">USER NAME</InputLabel>
                            <FilledInput
                                id="filled-adornment-userName"
                                type="text"
                            />
                        </FormControl>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <EnhancedEncryptionIcon sx={{ fontSize: '60px', color: grey[50], mr: 1, my: 0 }} />
                        <FormControl className={classes.bgc} sx={{ m: 1 }} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">PASSWORD</InputLabel>
                            <FilledInput
                                id="filled-adornment-password1"
                                type="password"
                            />
                        </FormControl>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <LockIcon sx={{ fontSize: '60px', color: grey[50], mr: 1, my: 0 }} />
                        <FormControl className={classes.bgc} sx={{ m: 1 }} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">PASSWORD</InputLabel>
                            <FilledInput
                                id="filled-adornment-password2"
                                type="password"
                            />
                        </FormControl>
                    </Box>

                    <div className={classes.btn}>
                        <ThemeProvider theme={theme}>
                            <Link style={{ width: '30%', color: '#fff', textDecoration: 'none' }} to="/login"><Button size="large" style={{ width: '100%' }} color="neutral" variant="outlined" >Go back</Button></Link>
                            <Button size="large" style={{ width: '30%' }} color="neutral" variant="outlined" >Register</Button>
                        </ThemeProvider>
                    </div>
                </div>
            </Grid>
            <Grid item xs={0} sm={2} md={2} lg={4} />
        </Grid>
    )
}