import { combineReducers } from 'redux'
import errorsReducer from './errors_reducer'
import entitiesReducer from './entities_reducer'
import sessionReducer from './session_reducer'
import assetReducer from './asset_reducer'
import chartReducer from './chart_reducer'

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  asset: assetReducer,
  chart: chartReducer
})

export default rootReducer;
