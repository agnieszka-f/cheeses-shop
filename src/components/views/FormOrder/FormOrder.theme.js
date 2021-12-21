/* eslint-disable linebreak-style */
import { makeStyles, withStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';

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
  
export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.grey[700],
    fontWeight: 600,
  },
  body: {
    fontSize: '1.1rem',
    fontWeight: 600,
  },
}))(TableCell);
  
export const StyledTextField = withStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      '& input': {
        backgroundColor: theme.palette.background.paper,
      },
    },
  },
}))(TextField);