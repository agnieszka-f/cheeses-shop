import React from 'react';
import PropTypes from 'prop-types';

import {useStyles, BootstrapInput} from './CartItems.theme.js';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import {Price} from '../../common/Price/Price.js';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Hidden from '@material-ui/core/Hidden';
import {Link} from 'react-router-dom';

const Component = ({order, changeOrder, deleteProduct}) => { 
  const classes = useStyles();
  const [option, setOption] = React.useState(order.option);
  const [amount, setAmount] = React.useState(order.amount);
  
  React.useEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    () => changeOrder({...order, amount}),[amount]
  );
  
  React.useEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    () => changeOrder({...order, option}),[option]
  );

  const handleChangeOption = (event) => {
    setOption(event.target.value);
  };

  const handleChangeAmount = (event) => {
    setAmount(event.target.value); 
  };
  return(
    <Grid container className={classes.row}>
      <Hidden smDown><Grid sm={2} item component={Link} to={'/product/' + order._id}>
        <Box className={classes.imgContainer}>
          <img className={classes.img} alt={order.title} src={order.photo} />
        </Box>
      </Grid></Hidden>
      <Grid xs={12} md={10} item container className={classes.contentContainer}>
        <Grid item xs={12} sm={4} container direction="column" justifyContent="space-between" alignItems="flex-start" className={classes.product}>
          <Typography variant="body1" className={classes.title} >{order.title}, {option} kg</Typography> 
          <Price price={order.price} promoPrice={order.promoPrice} variant='subtitle2' per=' / 100 g' />
          <Button onClick={ () => deleteProduct(order._id)}><DeleteIcon color="primary" />  Usuń</Button>            
        </Grid>
        <Grid item xs={12} sm={5} container >
          <Grid item xs={6} sm={6} container justifyContent="center" alignItems="center" className={classes.optionContainer}>
            <FormControl > 
              <InputLabel id="option">Gramatura</InputLabel>
              <Select
                labelId="option"
                id="option"
                value={option}
                onChange={handleChangeOption}
                input={<BootstrapInput />}
              >
                <MenuItem value={0.1}>0.1 kg</MenuItem>
                <MenuItem value={0.25}>0.25 kg</MenuItem>
                <MenuItem value={0.5}>0.5 kg</MenuItem>
                <MenuItem value={0.75}>0.75 kg</MenuItem>
                <MenuItem value={1}>1 kg</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={6} container justifyContent="center" alignItems="center" className={classes.amountContainer}>
            <FormControl > 
              <InputLabel id="amount">Ilość</InputLabel>
              <Select
                labelId="amount"
                id="amount"
                value={amount}
                onChange={handleChangeAmount}
                input={<BootstrapInput />}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3} container direction="column" justifyContent="center" alignItems="flex-end" className={classes.priceContainer}>
          <Grid item >
            <Typography variant="body1">Wartość: </Typography>
          </Grid>
          <Grid item >
            <Price price={order.price} promoPrice={order.promoPrice} amount={amount} option={option} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>            
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  order: PropTypes.object,
  changeOrder: PropTypes.func,
  deleteProduct: PropTypes.func,
};

export {
  Component as CartItems,
  Component as CartItemsComponent,
};
