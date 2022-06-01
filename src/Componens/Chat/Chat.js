import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { blue, red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { green500 } from 'material-ui/styles/colors';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsIcon from '@mui/icons-material/Directions';




export default function Chat() {

    function refreshMessages() {
        const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

        return Array.from(new Array(50)).map(
            () => messageExamples[getRandomInt(messageExamples.length)],
        );
    }

    const [messages, setMessages] = React.useState(() => refreshMessages());

    return (
        <Box sx={{ color: '#fff', Width: '100vw', Height: '100vh', borderRadius: '10px', margin: '10px', }}>
            <Card sx={{ color: '#fff', Width: '100vw', Height: '7vh', backgroundColor: 'rgba(10, 10, 10, 0.55)', borderRadius: '10px', margin: '10px', }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500], width: 56, height: 56 }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <div style={{ display: 'flex' }}>
                            <IconButton aria-label="settings" size="large" style={{ color: '#fff' }}>
                                <MoreVertIcon fontSize="large" />
                            </IconButton>
                        </div>
                    }
                    title={<span style={{ color: '#fff', fontSize: '24px' }}>Robin</span>}
                    subheader={<p style={{ color: '#AFAFAF', margin: '2px 0' }}>online:</p>}
                />
            </Card>

            <List className='scroll' style={{ color: '#fff', maxWidth: '100%', maxHeight: '81vh', backgroundColor: 'rgba(10, 10, 10, 0.55)', borderRadius: '10px', margin: '10px', overflowY: 'scroll' }}>
                {messages.map(({ primary, secondary, person }, index) => (
                    <ListItem button key={index + person} style={{ backgroundColor: 'rgba(10, 10, 10, 0.55)', margin: '10px 0', borderRadius: '10px' }}>
                        <ListItemAvatar>
                            <Avatar alt="Profile Picture" src={person} />
                        </ListItemAvatar>
                        <ListItemText primary={primary} secondary={<p style={{ color: '#AFAFAF', margin: '5px 0' }}>{secondary}</p>} />
                    </ListItem>
                ))}
            </List> 
            
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "98%", margin: '10px 10px 20px'}}
            >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Write a message"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                    <DirectionsIcon />
                </IconButton>
            </Paper>

        </Box>

    );
}

const messageExamples = [
    {
        primary: 'James',
        secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        person: '/static/images/avatar/5.jpg',
    },
    {
        primary: 'Robert',
        secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        primary: 'John',
        secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
        person: '/static/images/avatar/2.jpg',
    },
    {
        primary: 'Michael',
        secondary: 'I have the tickets to the ReactConf for this year.',
        person: '/static/images/avatar/3.jpg',
    },
    {
        primary: "David",
        secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
        person: '/static/images/avatar/4.jpg',
    },
    {
        primary: 'William',
        secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
        person: '/static/images/avatar/5.jpg',
    },
    {
        primary: 'Richard',
        secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
];