import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { isError } from '../../../redux/ordersRedux.js';
import { cleanCart } from '../../../redux/cartRedux.js';
import {useStyles} from './InfoOrder.theme.js';
import styles from './InfoOrder.module.scss';

const Component = ({className, isError, cleanCart}) => { 
  const classes = useStyles(); 
  if(!isError) cleanCart();
  return (
    <div className={clsx(className, styles.root, classes.root)}>
      {!isError? <h2>Twoje zamówienie zostało przyjete do realizacji!</h2> : <h2>Wystąpił błąd. Spróbuj ponownie później.</h2>}
    </div> 
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  cleanCart: PropTypes.func,
};

const mapStateToProps = state => ({
  isError: isError(state),
});

const mapDispatchToProps = (dispatch,props) => { 
  return({
    cleanCart: () => dispatch(cleanCart()),
  });
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as InfoOrder,
  Component as InfoOrderComponent,
};
