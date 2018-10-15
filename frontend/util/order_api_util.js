export const createOrder = (data) => {
  return $.ajax({
    method: "POST",
    url: `api/orders`,
    data: {order: data}
  })
}
