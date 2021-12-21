import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { setProductsToDisplay } from '../../../redux/productsRedux.js';
import { useStyles, StyledTextField } from './Footer.theme.js';
import styles from './Footer.module.scss';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import {Link} from 'react-router-dom';

const Component = ({className, children, setProductsToDisplay}) => {
  const classes = useStyles();

  return(
    <div className={clsx(className, styles.root)}>
      <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.mainContainer}>
        <Grid item container direction="row" justifyContent="center" alignItems="flex-start" spacing={3}>
          <Grid item xs={12} md={4} >
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <Typography gutterBottom className={classes.title}>
               Newsletter
                </Typography>
                <StyledTextField id="email" label="Adres e-mail" variant="outlined" required fullWidth/>
                <Button variant="contained" type='submit' fullWidth>Zapisz mnie</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <Typography className={classes.title}>
               Oferta
                </Typography>
                <List>
                  <ListItem className={classes.listIem}>
                    <Button className={classes.item} component={Link} to={'/'} onClick={()=>setProductsToDisplay('france')}>
                        Sery Francuskie
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listIem}>
                    <Button className={classes.item} component={Link} to={'/'} onClick={()=>setProductsToDisplay('spain')}>
                        Sery Hiszpańskie
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listIem}>
                    <Button className={classes.item} component={Link} to={'/'} onClick={()=>setProductsToDisplay('italia')}>
                        Sery Włoskie
                    </Button>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <Typography className={classes.title}>
               Kontakt
                </Typography>
                <List>
                  <ListItem className={classes.item}>
                    <Typography>Telefon: +48 777-777-777</Typography>
                  </ListItem>
                  <ListItem className={classes.item}>
                    <Typography>E-mail: sery@sery.pl</Typography>
                  </ListItem>
                  <ListItem className={classes.item}>
                    <Typography>Adres: ul. Kochanowskiego 37, 37-800 Rzeszów</Typography>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item container justifyContent="center" style={{margin: '45px auto 0 auto'}}>
          <Box className={classes.iconItem} component={Link} to={'/'}>
            <FacebookIcon color="secondary" fontSize="large"/>
          </Box>
          <Box className={classes.iconItem} component={Link} to={'/'}>
            <InstagramIcon color="secondary" fontSize="large" />
          </Box>
          <Box className={classes.iconItem} component={Link} to={'/'}>
            <PinterestIcon color="secondary" fontSize="large"/>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  setProductsToDisplay: PropTypes.func,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  setProductsToDisplay: arg => dispatch(setProductsToDisplay(arg)),
});

const Container = connect(mapStateToProps,mapDispatchToProps)(Component);

export {
  Container as Footer,
  Component as FooterComponent,
};
