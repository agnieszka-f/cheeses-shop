import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { fetchProducts, getAll, getLoading, getDisplay, getProductsFromFrance, getProductsFromSpain, getProductsFromItalia} from '../../../redux/productsRedux.js';
import styles from './Homepage.module.scss';
import {useStyles} from './Hompage.theme.js';
import {Products} from '../Products/Products.js';
import Pagination from '@material-ui/lab/Pagination';

const Component = function ({className, fetchProducts, products, loading, display, getProductsFromFrance, getProductsFromSpain, getProductsFromItalia}){ 
  const classes = useStyles(); 

  React.useEffect(() => {
    const getResult = async () =>{
      await fetchProducts();
    };
    getResult();
  }, [fetchProducts]);
  
  const [currentPage, setCurrentPage] = React.useState(1);
  const [productsPerPage] = React.useState(8);
  React.useEffect(()=>setCurrentPage(1),[display]);
  //Get current product
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  
  let currentProducts = [];
  
  if(products.length > 0){
    switch (display) {
      case 'france': {
        currentProducts = getProductsFromFrance.slice(indexOfFirstProduct, indexOfLastProduct);
        break;
      }    
      case 'spain': {
        currentProducts = getProductsFromSpain.slice(indexOfFirstProduct, indexOfLastProduct);
        break;
      }  
      case 'italia': {
        currentProducts = getProductsFromItalia.slice(indexOfFirstProduct, indexOfLastProduct);
        break;
      } 
      default:
        currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
        break; 
    }
  }
  if(loading.active){
    return (<h2>Trwa wczytywanie danych...</h2>);
  } 

  const handleChange = (e, value) => { 
    e.preventDefault(); 
    setCurrentPage(value);
  };
  return (
    <div className={clsx(className, styles.root)}>
      {
        currentProducts.length > 0 ? <Products products={currentProducts}/> : <h2>Brak produków w ofercie</h2>
      }
      <div className={classes.paginate}>
        { products.length > 8 && display === 'all' ? <Pagination page={currentPage} count ={ Math.ceil(products.length/productsPerPage)} onChange={handleChange} /> :'' }
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fetchProducts: PropTypes.func,
  products: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  loading: PropTypes.shape({active: PropTypes.bool, error: PropTypes.bool }),
  display: PropTypes.string,
  getProductsFromFrance: PropTypes.array,
  getProductsFromSpain: PropTypes.array,
  getProductsFromItalia: PropTypes.array,
};

const mapStateToProps = state => ({
  products: getAll(state),
  loading: getLoading(state),
  display: getDisplay(state),
  getProductsFromFrance: getProductsFromFrance(state),
  getProductsFromSpain: getProductsFromSpain(state),
  getProductsFromItalia: getProductsFromItalia(state),
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Homepage,
  Component as HomepageComponent,
};
