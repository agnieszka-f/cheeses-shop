import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { getCartLength } from '../../../redux/cartRedux.js';
import { setProductsToDisplay } from '../../../redux/productsRedux.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import {useStyles, StyledBadge} from './Header.theme.js';

const Component = ({className, cartLength, setProductsToDisplay}) => {
  const classes = useStyles();
  return (
    <div className={clsx(className)}>
      <div className={classes.root}>
        <AppBar position="static" >
          <Toolbar className={classes.toolbar}>
            <Button className={classes.logo} component={Link} to={'/'} onClick={()=>setProductsToDisplay('all')}>
              <img src="icons/cheese.svg" alt="Home" />
            </Button> 
            <Button className={classes.title} component={Link} to={'/'} onClick={()=>setProductsToDisplay('france')}>           
              Sery Farncuskie           
            </Button>
            <Button className={classes.title} component={Link} to={'/'} onClick={()=>setProductsToDisplay('spain')}>  
              Sery Hiszpańskie        
            </Button>
            <Button className={classes.title} component={Link} to={'/'} onClick={()=>setProductsToDisplay('italia')}>            
              Sery Włoskie        
            </Button> 
            <IconButton aria-label="cart" className={classes.cart} component={Link} to={'/cart'}>
              <StyledBadge badgeContent={cartLength} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cartLength: PropTypes.number,
  setProductsToDisplay: PropTypes.func,
};

const mapStateToProps = state => ({
  cartLength: getCartLength(state),
});

const mapDispatchToProps = dispatch => ({
  setProductsToDisplay: arg => dispatch(setProductsToDisplay(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Header,
  Component as HeaderComponent,
};
