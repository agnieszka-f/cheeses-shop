import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCart, getCart } from '../../../redux/cartRedux.js';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {Price} from '../../common/Price/Price.js';
import {Link} from 'react-router-dom';
import {useStyles} from './Products.theme.js';

const Component = ({products,updateCart, cart}) => { 
  const classes = useStyles(); 

  const handleAdd = (product) =>{
    updateCart({...product, option: 0.1, amount: 1});
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {products.map(product => 
          <Grid item xs={12} sm={6} md={3} key={product._id}>
            <Card className={classes.card}> 
              <CardMedia
                className={classes.media}
                image={product.photo}
                title={product.title}
                component={Link} to={'/product/' + product._id}
              > </CardMedia>
              <CardContent className={classes.content} >
                <Typography variant="h6" className={classes.bold} >{product.title}</Typography>
                <Typography variant="subtitle2" gutterBottom>{product.subtitle}</Typography>
                <Box my={3}> 
                  <Price price={product.price} promoPrice={product.promoPrice} per={' / 100 g'}/>
                </Box>           
              </CardContent>
              <Button onClick={()=>handleAdd(product)} className={classes.buttonCart} variant="contained" color="primary" fullWidth>Dodaj do koszyka</Button>  
            </Card>
          </Grid>)
        }
      </Grid>
    </div>
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.array,
  updateCart: PropTypes.func,
  cart: PropTypes.object,
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

const mapDispatchToProps = (dispatch,props) => { 
  return({
    updateCart: (product) => dispatch(updateCart(product)),
  });
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Products,
  Component as ProductsComponent,
};
