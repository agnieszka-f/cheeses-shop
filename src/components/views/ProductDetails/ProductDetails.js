/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { connect } from 'react-redux';
import {getProduct, fetchProduct } from '../../../redux/productsRedux.js';
import { updateCart, getCart } from '../../../redux/cartRedux.js';
import {Price} from '../../common/Price/Price.js';
import {Tabs} from '../../common/Tabs/Tabs.js';
import {Gallery} from '../../common/Gallery/Gallery.js';
import styles from './ProductDetails.module.scss';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useStyles} from './ProductDetails.theme.js';

const Component = ({className, product, fetchProduct, match: { params: {id}}, cart, updateCart}) => {
  const classes = useStyles(); 
  
  React.useEffect(() => {
    const getResult = async () =>{
      await fetchProduct(id);
    };
    getResult(); 
  }, [fetchProduct, id]);

  const [value, setValue] = React.useState(0.10);

  const handleChange = (event) => {
    setValue(parseFloat(event.target.value));
  };
  
  const handleAdd = (product) =>{
    updateCart({...product, option: value, amount: 1});
  };

  return (
    <div className={clsx(className, styles.root, classes.root)}>
      <Grid container>
        <Grid item container xs={12} md={7}>
          <Box className={classes.image} component={Paper}>
            <img className={classes.img} alt={product.title} src={product.photo} />
          </Box>
        </Grid>
        <Grid item container xs={12} md={5} >
          <Box className={classes.content}>
            <Typography variant="h6" className={classes.title} gutterBottom >{product.title}</Typography>
            <Typography variant="body2" gutterBottom>Kraj pochodzenia: {product.country}</Typography>
            <Typography variant="body2" gutterBottom>Surowiec: {product.material}</Typography>
            <Typography variant="body2" gutterBottom>Typ: {product.type}</Typography>
            <FormControl fullWidth >            
              <Box pr={1} pl={1} mt={3}>
                <RadioGroup aria-label="gramatura" name="gramatura1" value={value} onChange={handleChange}>
                  <Grid container justifyContent="space-between" alignItems="center" className={classes.option}>
                    <FormControlLabel value={0.10} control={<Radio color="primary"/>} label="0,10 kg" />
                    <Price price={product.price} promoPrice={product.promoPrice} option={0.1}/>
                  </Grid>
                  <Grid container justifyContent="space-between" alignItems="center" className={classes.option}>
                    <FormControlLabel value={0.25} control={<Radio color="primary"/>} label="0,25 kg" />
                    <Price price={product.price} promoPrice={product.promoPrice} option={0.25}/>
                  </Grid>
                  <Grid container justifyContent="space-between" alignItems="center" className={classes.option}>
                    <FormControlLabel value={0.5} control={<Radio color="primary"/>} label="0,5 kg" />
                    <Price price={product.price} promoPrice={product.promoPrice} option={0.5}/>
                  </Grid>
                  <Grid container justifyContent="space-between" alignItems="center" className={classes.option}>
                    <FormControlLabel value={0.75} control={<Radio color="primary"/>} label="0,75 kg" />
                    <Price price={product.price} promoPrice={product.promoPrice} option={0.75}/>
                  </Grid>
                  <Grid container justifyContent="space-between" alignItems="center" className={classes.option}>
                    <FormControlLabel value={1}  control={<Radio color="primary"/>} label="1 kg" />
                    <Price price={product.price} promoPrice={product.promoPrice} option={1}/>
                  </Grid>
                </RadioGroup>
              </Box>
              <Button onClick={()=>handleAdd(product)} variant="contained" color="primary" className={classes.buttonSubmit}>Dodaj do koszyka</Button>
            </FormControl>
          </Box>
        </Grid>
        <Grid container className={classes.details}>
          <Tabs description={product.description} country={product.country} region={product.region} material={product.material} taste={product.taste} purpose={product.purpose} type={product.type}/>
        </Grid> 
        <Grid container>
          <Gallery photo1={product.photo1} photo2={product.photo2} photo3={product.photo3} />
        </Grid>
      </Grid>   
    </div>
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fetchProduct: PropTypes.func,
  product: PropTypes.any,
  id: PropTypes.string,
  match: PropTypes.object,
  cart: PropTypes.object,
  updateCart: PropTypes.func,
};

const mapStateToProps = state => ({
  product: getProduct(state),
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: id => dispatch(fetchProduct(id)),
  updateCart: (product) => dispatch(updateCart(product)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as ProductDetails,
  Component as ProductDetailsComponent,
};