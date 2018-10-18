export const receivePortfolio = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/portfolios/${id}`
  })
}

export const receiveAllSnapshots = (id) =>  {
  return $.ajax({
    method: "GET",
    url: `api/portfolio_snapshots/${id}`
  })
}
