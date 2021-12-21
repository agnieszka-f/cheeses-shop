/* eslint-disable linebreak-style */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root:{
    maxWidth: 950,
    margin: '20px auto 10px auto',
    [theme.breakpoints.down('md')]: {
      maxWidth: '80%', 
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '95%', 
    },
  },
  image:{
    overflow: 'hidden',
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('sm')]:{
      margin: '10px auto 20px auto',
    },
  },
  img: {
    height: 'auto',
    width: '100%',
    objectFit: 'scale-down',
    [theme.breakpoints.up('md')]:{
      maxHeight:490,
    },
      
  },
  title:{
    fontWeight: 600,  
    width: '100%',
  },
  content:{
    width: '95%',
    [theme.breakpoints.down('sm')]: {
      margin: '20px auto 10px auto',
    },
  },
  option:{
    padding: theme.spacing(1),
    borderBottom: '1px solid lightgrey',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  buttonSubmit:{
    padding: theme.spacing(1.5),
    fontWeight: 600,
    marginTop: theme.spacing(2),
    backgroundImage: 'linear-gradient(90deg, #f7c527 50%, transparent 90%)',
    backgroundPosition: '100% 0',
    backgroundSize: '300%',
    transition: 'all 1s',
    '&:hover':{
      backgroundPosition: '0 100%',
      color: 'black',
    },
  },
  details:{
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
}));