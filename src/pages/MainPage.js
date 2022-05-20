import React from "react"

import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { ChatList } from './../Componens/ChatList/ChatList';
import MyUserName from "../Componens/MyUserName/MyUserName";
import SearchChat from './../Componens/SearchChat/SearchChat';


//style
const useStyles = makeStyles({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(6 3 3 0.25)'
    }
});

export const MainPage = () => {
    const classes = useStyles()

    return (
        <Grid container spacing={1} >
            <Grid item xs={4} sm={4} md={4} lg={4} >
                <div className={classes.container}>
                    <MyUserName />
                    <SearchChat />
                    <ChatList />
                </div>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}></Grid>
        </Grid>
    )
}