/* eslint-disable linebreak-style */
import { makeStyles,  withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export const useStyles = makeStyles((theme) => ({
  mainContainer:{
    marginTop: theme.spacing(25),
    background: theme.palette.primary.main,
    padding: theme.spacing(5),
    [theme.breakpoints.down('md')]:{
      marginTop: theme.spacing(15),
    },
    [theme.breakpoints.down('sm')]:{
      marginTop: theme.spacing(10),
    },
    [theme.breakpoints.down('xs')]:{
      marginTop: theme.spacing(5),
    },
  },
  card:{
    background: theme.palette.primary.main,
    border: '1px solid white',
    height: 220,
  },
  title:{
    fontSize: 20,
    letterSpacing: 1.5,
    color: theme.palette.background.default,
  },
  listIem:{
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },
  item:{
    color: theme.palette.background.default,
    textTransform: 'capitalize',
    fontSize: '1rem',
  },
  socialMedia:{
    margin: '45px auto 0 auto',
  },
  iconItem:{
    marginRight: theme.spacing(2),
    '&:hover':{
      transform: 'scale(1.2)',
      transition: 'all 1s',
    },
  },
}));

export const StyledTextField = withStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    '& label.Mui-focused': {
      color: 'grey',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'grey',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'silver',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'grey',
      },
    },
  },
}))(TextField);