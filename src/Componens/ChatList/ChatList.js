import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(6 3 3 0.25)'
    }
});

export const ChatList = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            
        </div>
    )
}