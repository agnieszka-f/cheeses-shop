/* eslint-disable linebreak-style */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card:{
    position: 'relative',
    height: 480,
  },
  media:{
    height: 250,
    position: 'relative',
    transitionDuration: '2s',
    margin: '0 auto',
    display: 'block',
    overflow: 'hidden',
    '&:hover': {
      transform: 'scale(1.1)',
      '-webkit-transform': 'scale(1.1)',
      '-moz-transform': 'scale(1.1)',
      zIndex: 0,
    },
  },
  content:{
    padding: theme.spacing(1),
    textAlign: 'center',
  },
  buttonCart:{
    position: 'absolute',
    bottom: 0,
    fontWeight: 600,
    backgroundImage: 'linear-gradient(90deg, #f7c527 50%, transparent 90%)',
    backgroundPosition: '100% 0',
    backgroundSize: '300%',
    transition: 'all 1s',
    '&:hover':{
      backgroundPosition: '0 100%',
      color: 'black',
    },
  },
  bold: {
    fontWeight: 600,
  },
}));
  