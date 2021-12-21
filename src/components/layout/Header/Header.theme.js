/* eslint-disable linebreak-style */
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 600,
    color: theme.palette.secondary.main,
    letterSpacing: '1.5px',
    fontSize: '1.2rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.down('xs')]:{
      fontSize: '0.7rem',
    },
    '&:hover':{
      background: theme.palette.primary.main,
    },
  },
  logo:{
    width: 70, 
    height: 70, 
    padding: theme.spacing(1),
    [theme.breakpoints.down('xs')]:{
      width: 60, 
      height: 60,
    },
    '&:hover':{
      background: theme.palette.primary.main,
    },
  },
  cart:{
    color: theme.palette.background.paper,
  },
  toolbar:{
    [theme.breakpoints.down('xs')]:{
      flexDirection: 'column',
    },
  },
}));
  
export const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 4,
    padding: '0 4px',
  },
}))(Badge);