import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import PlaygroundSpeedDial from '../AddBtns/AddBtns'



export default function MyUserName() {

    return (
        <Card sx={{
            maxWidth: '100%', backgroundColor: 'rgba(10, 10, 10, 0.55)', borderRadius: '10px', margin: '10px'
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500], width: 56, height: 56 }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <div style={{ display: 'flex' }}>
                        <PlaygroundSpeedDial aria-label="settings" size="large" style={{ color: '#fff' }} />
                        <IconButton aria-label="settings" size="large" style={{ color: '#fff' }}>
                            <MoreVertIcon fontSize="large" />
                        </IconButton>
                    </div>
                }
                title={
                    <span style={{ color: '#fff', fontSize: '24px' }}>Username</span>
                }
            />
        </Card>
    );
}
