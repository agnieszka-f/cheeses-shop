import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';

import TableRow from '@material-ui/core/TableRow';

import styles from './Details.module.scss';

const useStyles = makeStyles({
  table: {
    maxWidth: 900,
  },
});

const Component = ({className, children, country, region, type, taste, purpose, material}) => {
  const classes = useStyles(); 

  return (
    <div className={clsx(className, styles.root)}>
      <TableContainer>
        <Table className={classes.table} >
          <TableBody>  
            <TableRow ><TableCell width="150px" component="th" scope="row">Kraj</TableCell><TableCell align="left">{country}</TableCell></TableRow>    
            <TableRow ><TableCell width="150px" component="th" scope="row">Region</TableCell><TableCell align="left">{region}</TableCell></TableRow>
            <TableRow ><TableCell width="150px" component="th" scope="row">Typ</TableCell><TableCell align="left">{type}</TableCell></TableRow>  
            <TableRow ><TableCell width="150px" component="th" scope="row">Rodzaj mleka</TableCell><TableCell align="left">{material}</TableCell></TableRow>    
            <TableRow ><TableCell width="150px" component="th" scope="row">Smak i zapach</TableCell><TableCell align="left">{taste}</TableCell></TableRow>    
            <TableRow ><TableCell width="150px" component="th" scope="row">Zastosowanie kulinarne</TableCell><TableCell align="left">{purpose}</TableCell></TableRow>    
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  country: PropTypes.string,
  region: PropTypes.string,
  type: PropTypes.string,
  taste: PropTypes.string,
  purpose: PropTypes.string,
  material: PropTypes.string,
};

export {
  Component as Details,
  Component as DetailsComponent,
};
