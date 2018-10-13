import * as ApiUtil from '../util/chart_api_util'
export const RECEIVE_CHART_ONE_DAY = 'RECEIVE_CHART_ONE_DAY'
export const RECEIVE_CHART_ONE_MONTH = 'RECEIVE_CHART_ONE_MONTH'
export const RECEIVE_CHART_THREE_MONTH = 'RECEIVE_CHART_THREE_MONTH'
export const RECEIVE_CHART_ONE_YEAR = 'RECEIVE_CHART_ONE_YEAR'
export const RECEIVE_CHART_FIVE_YEAR = 'RECEIVE_CHART_FIVE_YEAR'

export const receiveChartSingleDay = data => {
  return ({
    type: RECEIVE_CHART_ONE_DAY,
    data
  })
}

export const receiveChartSingleMonth = data => {
  return ({
    type: RECEIVE_CHART_ONE_MONTH,
    data
  })
}

export const receiveChartThreeMonths = data => {
  return ({
    type: RECEIVE_CHART_THREE_MONTH,
    data
  })
}

export const receiveChartSingleYear = data => {
  return ({
    type: RECEIVE_CHART_ONE_YEAR,
    data
  })
}

export const receiveChartFiveYears = data => {
  return ({
    type: RECEIVE_CHART_FIVE_YEAR,
    data
  })
}

export const receiveChartOneDay = symbol => dispatch => (
  ApiUtil.receiveChartOneDay(symbol).then(data => dispatch(receiveChartSingleDay(data)))
)

export const receiveChartOneMonth = symbol => dispatch => (
  ApiUtil.receiveChartOneMonth(symbol).then(data => dispatch(receiveChartSingleMonth(data)))
)

export const receiveChartThreeMonth = symbol => dispatch => (
  ApiUtil.receiveChartThreeMonth(symbol).then(data => dispatch(receiveChartThreeMonths(data)))
)

export const receiveChartOneYear = symbol => dispatch => (
  ApiUtil.receiveChartOneYear(symbol).then(data => dispatch(receiveChartSingleYear(data)))
)

export const receiveChartFiveYear = symbol => dispatch => (
  ApiUtil.receiveChartFiveYear(symbol).then(data => dispatch(receiveChartFiveYears(data)))
)
