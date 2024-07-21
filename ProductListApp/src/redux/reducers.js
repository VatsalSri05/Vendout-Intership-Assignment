import { combineReducers } from 'redux';
import products from '../data/products';

const initialState = {
  products,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productReducer,
});

export default rootReducer;
