import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/cartRedux.js';
import { createOrder } from '../../../redux/ordersRedux.js';
import styles from './FormOrder.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Price} from '../../common/Price/Price.js';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useStyles, StyledTableCell, StyledTextField} from './FormOrder.theme.js';

const Component = ({className, myCart, createOrder, history}) => {
  const classes = useStyles();
  const [fields, setFields] = React.useState({});
  
  const fieldChange = function(e){ 
    setFields({...fields, [e.target.id]: e.target.value});
  };
  const handleSubmit = () => {  
    createOrder({...fields, sum: parseFloat(myCart.sum).toFixed(2), sumTotal: parseFloat(myCart.sumTotal).toFixed(2), delivery: parseFloat(myCart.delivery).toFixed(2), productsId: [myCart.orderItems.map(item => item._id)]}); 
    history.push('/order/status');
  };
  return(
    <div className={clsx(className, styles.root, classes.root)}>
      <h2>Wybrane produkty</h2>
      <TableContainer component={Paper}>
        <Table >
          <TableHead>
            <TableRow> 
              <StyledTableCell>Produkt</StyledTableCell>
              <StyledTableCell align="right">Kg</StyledTableCell>
              <StyledTableCell align="right">Ilość</StyledTableCell>
              <StyledTableCell align="right">Wartość</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myCart.orderItems.map((row) => (
              <TableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.title} 
                </StyledTableCell>
                <TableCell align="right">{row.option}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right"><Price price={row.price} promoPrice={row.promoPrice} option={row.option} amount={row.amount} variant='subtitle2' /></TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2} align="right">Suma pośrednia:</TableCell>
              <TableCell align="right">{myCart.sum.toFixed(2)} zł.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} align="right">Koszt wysyłki:</TableCell>
              <TableCell align="right">{myCart.delivery.toFixed(2)} zł.</TableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell colSpan={2} align="right">Suma całkowita:</StyledTableCell>
              <StyledTableCell align="right">{myCart.sumTotal.toFixed(2)} zł.</StyledTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <h2>Dane zamówienia</h2>
      <form onSubmit={()=>handleSubmit()}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <StyledTextField onChange={(e) => fieldChange(e)} id="firstName" label="Imię" variant="outlined" required fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="lastName" label="Nazwisko" variant="outlined" required fullWidth/>
          </Grid>
          <Grid item xs={12} sm={3}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="postCode" label="Kod pocztowy" variant="outlined" required fullWidth/>
          </Grid>
          <Grid item xs={12} sm={9}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="city" label="Miasto" variant="outlined" required fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="street" label="Ulica" variant="outlined" required fullWidth/>
          </Grid>
          <Grid item xs={12} sm={3}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="nrHouse" label="Numer budynku" variant="outlined" required fullWidth/>
          </Grid>
          <Grid item xs={12} sm={3}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="nrFlat" label="Numer mieszkania" variant="outlined"  fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledTextField onChange={(e) => fieldChange(e)} id="email" label="Adres e-mail" variant="outlined" required fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="phone" label="Numer telefonu" variant="outlined" required fullWidth/>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="moreInfo" label="Dodatkowe informacje" variant="outlined" fullWidth/>
          </Grid>
          <Grid item container xs={12} justifyContent="flex-end" >
            <Grid item xs={12} sm={6}><Button className={classes.buttonSubmit} variant="contained" color="primary" type='submit' fullWidth>Zamawiam</Button></Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  myCart: PropTypes.object,
  createOrder: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = state => ({
  myCart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  createOrder: data => dispatch(createOrder(data)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as FormOrder,
  Component as FormOrderComponent,
};
