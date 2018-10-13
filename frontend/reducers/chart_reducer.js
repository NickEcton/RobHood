import { RECEIVE_CHART_ONE_DAY, RECEIVE_CHART_ONE_MONTH, RECEIVE_CHART_THREE_MONTH, RECEIVE_CHART_ONE_YEAR, RECEIVE_CHART_FIVE_YEAR } from '../actions/chart_actions'

export const chartReducer = (oldState = {}, action) => {

  Object.freeze(oldState)
  switch(action.type) {
    case RECEIVE_CHART_ONE_DAY:
      return Object.assign({}, oldState, { oneDay: action.data })
    case RECEIVE_CHART_ONE_MONTH:
      return Object.assign({}, oldState, { oneMonth: action.data })
    case RECEIVE_CHART_THREE_MONTH:
      return Object.assign({}, oldState, { threeMonth: action.data })
    case RECEIVE_CHART_ONE_YEAR:
      return Object.assign({}, oldState, { oneYear: action.data })
    case RECEIVE_CHART_FIVE_YEAR:
      return Object.assign({}, oldState, { fiveYear: action.data })
    default:
      return oldState
  }
}

export default chartReducer;
