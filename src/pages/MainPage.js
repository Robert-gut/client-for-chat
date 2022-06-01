import React from "react"

import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import ChatList from './../Componens/ChatList/ChatList';
import MyUserName from "../Componens/MyUserName/MyUserName";
import SearchChat from './../Componens/SearchChat/SearchChat';
import Filter from "../Componens/Filter/Filter";
import Chat from "../Componens/Chat/Chat";


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
                <div>
                    <MyUserName />
                    <SearchChat />
                    <Filter />
                    <ChatList />
                </div>
            </Grid>
            <Grid item xs={8} sm={8} md={8} lg={8}>
                <Chat />
            </Grid>
        </Grid>
    )
}