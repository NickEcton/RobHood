export const receiveAsset = (symbol) => {
  return $.ajax({
    method: "GET",
    url: `https://api.iextrading.com/1.0/stock/${symbol}/company`
  })
}

export const receiveClosingPrice = (symbol) => {
  return $.ajax({
    method: "GET",
    url: `https://api.iextrading.com/1.0/stock/${symbol}/chart/1d?chartLast=1`
  })
}
