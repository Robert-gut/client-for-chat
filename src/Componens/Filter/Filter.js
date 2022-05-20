import * as React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import ForumIcon from '@mui/icons-material/Forum';

export default function Filter() {
    const [value, setValue] = React.useState(0);


    return (
        
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                style={{ color: '#fff', maxWidth: '100%', backgroundColor: 'rgba(10, 10, 10, 0.55)', borderRadius: '10px', margin: '10px' }}
            >
            <BottomNavigationAction style={{ color: '#fff' }} label="Chat" icon={<ChatIcon />} />
            <BottomNavigationAction style={{ color: '#fff' }} label="All" icon={<ForumIcon />} />
            <BottomNavigationAction style={{ color: '#fff' }} label="Group" icon={<GroupIcon />} />
            </BottomNavigation>
        
    );
}
