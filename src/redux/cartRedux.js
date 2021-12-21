/* eslint-disable linebreak-style */

/* selectors */
export const getCart = ({cart}) => cart;
export const getCartLength = ({cart}) => cart.orderItems.length;
/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const UPDATE_CART = createActionName('UPDATE_CART');
const CHANGE_CART = createActionName('CHANGE_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const ADD_SUMMARY_CART = createActionName('ADD_SUMMARY_CART');
const CLEAN_CART = createActionName('CLEAN_CART');
/* action creators */
export const updateCart = payload => ({ payload, type: UPDATE_CART });
export const changeCart = payload => ({ payload, type: CHANGE_CART });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
export const addSummaryCart = payload => ({ payload, type: ADD_SUMMARY_CART });
export const cleanCart = payload => ({ payload, type: CLEAN_CART });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => { 
  switch (action.type) {
    case UPDATE_CART: {
      const product = action.payload; 
      const found = statePart.orderItems ? statePart.orderItems.find(item => item._id === product._id):false;
      if(!found) return (
        {...statePart, orderItems: [...statePart.orderItems, action.payload] }
      );
      else return ({...statePart, 
        orderItems: statePart.orderItems.map( item => item._id === product._id ? 
          {...item, amount: item.option===product.option ? item.amount + product.amount : item.amount, 
            option: item.option===product.option ? item.option : product.option } : {...item})});
    }
    case CHANGE_CART:{ 
      const order = action.payload;
      return {...statePart, orderItems: statePart.orderItems.map(item => item._id === order._id ? {...order}:{...item})};
    }
    case REMOVE_FROM_CART: {
      const id = action.payload;
      return {...statePart, orderItems: statePart.orderItems.filter(item => item._id !== id )};
    }
    case ADD_SUMMARY_CART: { 
      return {...statePart, sum:action.payload.sum, sumTotal: action.payload.totalSum};
    }
    case CLEAN_CART:{
      return {...statePart, sum: 0, sumTotal: 0, orderItems: [] };
    }
    default:
      return statePart;
  }
};
