/* eslint-disable linebreak-style */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  oldPrice: {
    paddingRight: theme.spacing(2),
    textDecoration: 'line-through black',
  },
  promoPrice: {
    color: theme.palette.primary.important,
  },
  priceContainer:{
    [theme.breakpoints.down('md')]:{
      fontSize: '1rem',
    },
  },
}));