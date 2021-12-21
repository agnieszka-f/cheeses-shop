import Axios from 'axios';
import { API_URL } from '../config';
/* selectors */
export const getAll = ({products}) => products.data;
export const getLoading = ({products}) => products.loading;
export const getProduct = ({products}) => products.data;
export const getDisplay = ({products}) => products.display;
export const getProductsFromFrance = ({products}) => products.data && products.data.length > 0 ? products.data.filter(product => product.country === 'Francja') :[];
export const getProductsFromSpain = ({products}) => products.data && products.data.length > 0 ? products.data.filter(product => product.country === 'Hiszpania') :[];
export const getProductsFromItalia = ({products}) => products.data && products.data.length > 0 ? products.data.filter(product => product.country === 'Włochy') :[];
/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const PRODUCTS_DISPLAY = createActionName('PRODUCTS_DISPLAY');
/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const setProductsToDisplay = payload => ({ payload, type: PRODUCTS_DISPLAY });
/* thunk creators */
export const fetchProducts = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    
    if(typeof getState.products == 'undefined' || typeof getState.products.data == 'undefined' || getState.products.data.length < 1){
        
      Axios
        .get(API_URL + '/products')
        .then(res => {
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};
export const fetchProduct = (id) => {
  return (dispatch) => { 
    dispatch(fetchStarted());

    Axios
      .get(API_URL + '/product/' + id)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};
/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case PRODUCTS_DISPLAY:{
      return {
        ...statePart,
        display: action.payload,
      };
    }
    default:
      return statePart;
  }
};
