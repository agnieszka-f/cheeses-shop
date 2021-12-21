/* eslint-disable linebreak-style */
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

export const useStyles = makeStyles((theme) => ({
  row:{ 
    padding: '20px 0',
  },
  imgContainer:{ 
    height: 100,
    width: 'auto',
    border: '3px solid lightgrey',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  img:{
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  title:{
    fontWeight: 600,  
  },
  amountContainer:{
    [theme.breakpoints.down('sm')]:{
      justifyContent: 'flex-start',
    },
  },
  optionContainer:{
    [theme.breakpoints.down('sm')]:{
      justifyContent: 'flex-start', 
    },
    [theme.breakpoints.down('xs')]:{
      flexBasis: '30%',
    },
  },
  priceContainer:{
    [theme.breakpoints.only('xs')]:{
      alignItems: 'flex-start',
    },
    [theme.breakpoints.down('sm')]:{
      paddingTop: 10,
    },
  },
  product:{
    [theme.breakpoints.down('sm')]:{
      paddingBottom: 10,
    },
  },
  contentContainer:{
    [theme.breakpoints.down('sm')]:{
      width: '100%',
    },
  },
}));


export const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid lightgrey',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
  },
}))(InputBase);