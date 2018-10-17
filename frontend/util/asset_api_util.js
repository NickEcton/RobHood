export const receiveAsset = (symbol) => {
  return $.ajax({
    method: "GET",
    url: `https://api.iextrading.com/1.0/stock/${symbol}/company`
  })
}

export const receiveAllAssets = () => {
  return $.ajax({
    method: "GET",
    url: 'api/assets'
  })
}

export const receiveClosingPrice = (symbol) => {
  return $.ajax({
    method: "GET",
    url: `https://api.iextrading.com/1.0/stock/${symbol}/chart/1d?chartLast=1`
  })
}

export const receivePortAssets = (ids) => {
  return $.ajax({
    method: "GET",
    url: `api/assets/${ids}`
  })
}

export const receiveAssetsPrices = (assets) => {
  return $.ajax({
    method: "GET",
    url: `https://api.iextrading.com/1.0/stock/market/batch?symbols=${assets}&types=quote,chart&range=1d&chartInterval=30`
  })
}