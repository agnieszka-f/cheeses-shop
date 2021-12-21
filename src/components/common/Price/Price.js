import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './Price.theme.js';

export const calculatePrice = (value=0.1, price, amount=1) => {
  return parseFloat(price) * parseFloat(value) * 10 * amount;
};

const Component = ({className, children, promoPrice, price, option, variant = 'h6', per='', amount}) => {
  const classes = useStyles();
  
  return (promoPrice ? 
    <Typography variant={variant} className={classes.priceContainer}>
      <span className={classes.oldPrice}>{calculatePrice(option, price, amount).toFixed(2)} zł.</span> 
      <span className={classes.promoPrice}>{calculatePrice(option, promoPrice, amount).toFixed(2)} zł.{per}</span>
    </Typography> : <Typography variant={variant} className={classes.priceContainer}>{calculatePrice(option,price, amount).toFixed(2) } zł.{per}</Typography>);
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  promoPrice: PropTypes.node, 
  price: PropTypes.node,
  option:PropTypes.node,
  variant: PropTypes.node, 
  per: PropTypes.node, 
  amount: PropTypes.node,
};

export {
  Component as Price,
  Component as PriceComponent,
};
