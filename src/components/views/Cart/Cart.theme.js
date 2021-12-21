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
  paper:{
    padding: theme.spacing(2),
    margin: 'auto',
  },
  rowContainer:{
    borderBottom: '1px solid lightgrey',
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
}));