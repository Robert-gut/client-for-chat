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

//validation
import { validationRegister } from "../Componens/validation/validationRegister";
import { Formik, Form, Field, ErrorMessage } from 'formik'


//style
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

    //validation
    const onSubmit = async (values) => {
        const NewUser = {
            userName: values.userName,
            password: values.password,
            confirmPassword: values.confirmPassword,
        }
        console.log(NewUser)
    };

    const initialValues = {
        userName: "",
        password: "",
        confirmPassword: ""
    };



    return (
        <Grid container spacing={1}>
            <Grid item xs={0} sm={2} md={2} lg={4} />
            <Grid item xs={12} sm={8} md={8} lg={4}>
                <div className={classes.center}>
                    <div>
                        <TagFacesIcon className={classes.positionForFoto} sx={{ fontSize: 190, color: grey[50] }} />
                        <Button><AddAPhotoIcon sx={{ fontSize: 29, color: grey[50] }} /></Button>
                    </div>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationRegister}>
                        {(props) => (
                            <Form>

                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <PersonIcon sx={{ fontSize: '60px', color: grey[50], mr: 1, my: 0 }} />
                                    <FormControl className={classes.bgc} sx={{ m: 1 }} variant="filled">
                                        <InputLabel htmlFor="filled-adornment-password">USER NAME</InputLabel>
                                        <Field
                                            as={FilledInput}
                                            name="userName"
                                            type="text"
                                            fullWidth
                                        />
                                    </FormControl>
                                </Box>
                                <ErrorMessage name="userName" component="p" style={{ color: "red", margin: "2px" }} />

                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <EnhancedEncryptionIcon sx={{ fontSize: '60px', color: grey[50], mr: 1, my: 0 }} />
                                    <FormControl className={classes.bgc} sx={{ m: 1 }} variant="filled">
                                        <InputLabel htmlFor="filled-adornment-password">PASSWORD</InputLabel>
                                        <Field
                                            as={FilledInput}
                                            name="password"
                                            type="password"
                                            fullWidth
                                        />
                                    </FormControl>
                                </Box>
                                <ErrorMessage name="password" component="p" style={{ color: "red", margin: "2px" }} />

                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <LockIcon sx={{ fontSize: '60px', color: grey[50], mr: 1, my: 0 }} />
                                    <FormControl className={classes.bgc} sx={{ m: 1 }} variant="filled">
                                        <InputLabel htmlFor="filled-adornment-password">CONFIRM PASSWORD</InputLabel>
                                        <Field
                                            as={FilledInput}
                                            name="confirmPassword"
                                            type="password"
                                            fullWidth
                                        />
                                    </FormControl>
                                </Box>
                                <ErrorMessage name="confirmPassword" component="p" style={{ color: "red", margin: "2px" }} />

                                <div className={classes.btn}>
                                    <ThemeProvider theme={theme}>
                                        <Link style={{ width: '30%', color: '#fff', textDecoration: 'none' }} to="/login"><Button size="large" style={{ width: '100%' }} color="neutral" variant="outlined" >Go back</Button></Link>
                                        <Button type="submit" size="large" style={{ width: '30%' }} color="neutral" variant="outlined" >sign up</Button>
                                    </ThemeProvider>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Grid>
            <Grid item xs={0} sm={2} md={2} lg={4} />
        </Grid>
    )
}