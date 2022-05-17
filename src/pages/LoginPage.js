import React from "react"
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
    center: {
        textAlign: 'center'
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
        width: '130px',
        backgroundColor: 'rgb(51 48 73)',
        color: '#fff',
        borderColor: 'rgb(51 48 73)'
    },
    btnR: {
        width: '130px'
    }
});


export const LoginPage = () => {
    const classes = useStyles()
    const [values, setValues] = React.useState({
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <Grid container spacing={1}>
            <Grid item xs={4} />
            <Grid item xs={4}>
                <div className={classes.center}>
                    <AccountCircleIcon sx={{ fontSize: 190, color: grey[50] }} />
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <PersonIcon sx={{ fontSize: '60px', color: grey[50], mr: 1, my: 0 }} />
                        <FormControl className={classes.bgc} sx={{ m: 1 }} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">USER NAME</InputLabel>
                            <FilledInput
                                id="filled-adornment-userName"
                                type={values.text}
                                value={values.text}
                            />
                        </FormControl>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <LockIcon sx={{ fontSize: '60px', color: grey[50], mr: 1, my: 0 }} />
                        <FormControl className={classes.bgc} sx={{ m: 1 }} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">PASSWORD</InputLabel>
                            <FilledInput
                                id="filled-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Box>

                    <FormControlLabel
                        className={classes.formControl}
                        value="end"
                        control={<Checkbox />}
                        label="Remember me"
                        labelPlacement="end"
                    />
                    <div>
                        <Button className={classes.btn} variant="outlined" >Login</Button>
                        <Button className={classes.btnR} variant="outlined" >Register</Button>
                    </div>
                </div>
            </Grid>
            <Grid item xs={4} />
        </Grid>
    )
}