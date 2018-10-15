import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import portfoliosReducer from './portfolios_reducer'
import ordersReducer from './orders_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  portfolios: portfoliosReducer,
  orders: ordersReducer
});

export default entitiesReducer
