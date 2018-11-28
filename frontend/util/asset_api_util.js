export const receiveAsset = (symbol) => {
  return $.ajax({
    method: "GET",
    url: `https://api.iextrading.com/1.0//stock/${symbol}/batch?types=quote,company`
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
    url: `https://api.iextrading.com/1.0/stock/${symbol}/quote`
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
    url: `https://api.iextrading.com/1.0/stock/market/batch?symbols=${assets}&types=quote,chart&range=1d`
  })
}

export const receiveCrypto = () => {
  return $.ajax({
    method: "GET",
    url: `https://api.iextrading.com/1.0//stock/market/crypto`
  })
}

export const receiveNews = (symbol) => {
  return $.ajax({
    method: "GET",
    url: `https://newsapi.org/v2/top-headlines?q=${symbol}&apiKey=8e6677f1f51547f693b2652d11ba0a63`
  })
}
