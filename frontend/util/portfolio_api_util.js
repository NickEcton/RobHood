export const receivePortfolio = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/portfolios/${id}`
  })
}
