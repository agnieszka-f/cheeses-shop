export const initialState = {
  products: {
    data: {},
    loading: {
      active: false,
      error: false,
    },
    display: 'all',
  },
  cart:{
    sum: 0,
    sumTotal: 0,
    delivery: 9.99,
    orderItems: [],
  },
  orders:{
    loading:{
      active: false,
      error: false,
    },
  },
};
