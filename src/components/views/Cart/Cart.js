import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { connect } from 'react-redux';
import { getCart, changeCart, removeFromCart, getCartLength, addSummaryCart } from '../../../redux/cartRedux.js';
import styles from './Cart.module.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {CartItems} from '../../common/CartItems/CartItems.js';
import {calculatePrice} from '../../common/Price/Price.js';
import {Link} from 'react-router-dom';
import {useStyles} from './Cart.theme.js';

const Component = ({className, children, myCart,changeCart,removeFromCart, cartLength, addSummaryCart}) => { 
  const classes = useStyles();
  
  const calculateSum = () =>{ 
    return (myCart.orderItems.reduce((previousValue, currentValue)=>(previousValue + calculatePrice(currentValue.option, currentValue.promoPrice ? currentValue.promoPrice : currentValue.price, currentValue.amount)), 0));
  };

  const [sum, setSum] = React.useState(calculateSum());
  const [totalSum, setTotalSum] = React.useState(sum + myCart.delivery);
  
  React.useEffect(()=>setTotalSum(sum + myCart.delivery),[sum]);
  React.useEffect(()=>setSum(calculateSum()),[calculateSum]);

  const handleChangeOrder = (order) =>{ 
    changeCart(order);
    setSum(calculateSum());
  };
  const handleDeleteProduct = (id) => {
    removeFromCart(id);
    setSum(calculateSum());
  };
  const handleSummaryCart = () => {
    addSummaryCart({sum, totalSum});
  };
  return (
    cartLength > 0 ? <div className={clsx(className, styles.root, classes.root)}>
      <h2>Twój koszyk</h2>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          {myCart.orderItems.map(order =><Grid key={order._id} item container xs={12} className={classes.rowContainer}>
            <CartItems order={order} changeOrder={handleChangeOrder} deleteProduct={handleDeleteProduct}/>
          </Grid>
          )}
          <Grid item container justifyContent="flex-end">
            <Grid item xs={12} sm={6} container style={{borderBottom:'1px solid lightgrey', paddingTop: '10px'}}>
              <Grid item xs={6}><Typography variant="body2">Suma pośrednia:</Typography></Grid>
              <Grid item xs={6} ><Typography variant="body2" align="right">{sum.toFixed(2)} zł.</Typography></Grid>
            </Grid>
          </Grid>
          <Grid item container justifyContent="flex-end">
            <Grid item xs={12} sm={6}  container style={{borderBottom:'1px solid lightgrey', paddingTop: '10px'}}>
              <Grid item xs={6}><Typography variant="body2">Koszt wysyłki:</Typography></Grid>
              <Grid item xs={6} ><Typography variant="body2" align="right">{myCart.delivery.toFixed(2)} zł.</Typography></Grid>
            </Grid>
          </Grid>
          <Grid item container justifyContent="flex-end" style={{paddingTop: '20px', paddingBottom: '20px'}}>
            <Grid item xs={12} sm={6} container >
              <Grid item xs={6}><Typography variant="h6" style={{fontWeight: 600}}>Suma całkowita:</Typography></Grid>
              <Grid item xs={6} ><Typography variant="h6" align="right" style={{fontWeight: 600}}>{totalSum.toFixed(2)} zł.</Typography></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={2} justifyContent="flex-end">
        <Grid item xs={12} sm={6}><Button onClick={handleSummaryCart} component={Link} to={'/order'} variant="contained" color="primary" fullWidth className={classes.buttonSubmit}>Zamawiam</Button></Grid>
      </Grid>
    </div> : <div className={clsx(className, styles.root, classes.root)}><h2>Twój koszyk jest pusty</h2></div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  myCart: PropTypes.object,
  changeCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  cartLength: PropTypes.number,
  addSummaryCart: PropTypes.func,
};

const mapStateToProps = state => ({
  myCart: getCart(state),
  cartLength: getCartLength(state),
});

const mapDispatchToProps = dispatch => ({
  changeCart: order => dispatch(changeCart(order)),
  removeFromCart: id => dispatch(removeFromCart(id)),
  addSummaryCart: (data) => dispatch(addSummaryCart(data)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
