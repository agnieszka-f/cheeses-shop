/* eslint-disable linebreak-style */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]:{
      display: 'none',
    },
  },
  imageList: {
    width: '100%',
    height: 340,
  },
}));