import authReducer from './auth/reducers';
import productReducer from './product/reducers';
import categoriesReducer from './categories/reducers';

export default ({ auth, product, category }, action) => ({
  auth: authReducer(auth, action),
  product: productReducer(product, action),
  categories: categoriesReducer(category, action)
});
