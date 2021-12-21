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
}));