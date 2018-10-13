export const receiveChartOneDay = (symbol) => {
  return $.ajax({
    method: "GET",
    url: `https://api.iextrading.com/1.0/stock/${symbol}/chart/1d?chartInterval=5`
  })
}

export const receiveChartOneWeek = (symbol) => {
  return $.ajax({
    method: "GET",
    url: `https://api.iextrading.com/1.0/stock/${symbol}/chart/1m`
  })
}

export const receiveChartOneMonth = (symbol) => {
  return $.ajax({
    method: "GET",
    url: `https://api.iextrading.com/1.0/stock/${symbol}/chart/1m`
  })
}

export const receiveChartThreeMonth = (symbol) => {
  return $.ajax({
    method: "GET",
    url: `https://api.iextrading.com/1.0/stock/${symbol}/chart/3m`
  })
}

export const receiveChartOneYear = (symbol) => {
  return $.ajax({
    method: "GET",
    url: `https://api.iextrading.com/1.0/stock/${symbol}/chart/ytd`
  })
}

export const receiveChartFiveYear = (symbol) => {
  return $.ajax({
    method: "GET",
    url: `https://api.iextrading.com/1.0/stock/${symbol}/chart/5y`
  })
}
