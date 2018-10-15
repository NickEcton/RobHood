import * as ApiUtil from '../util/order_api_util';
export const CREATE_ORDER = 'CREATE_ORDER';

export const createCurrentOrder = order => ({
  type: CREATE_ORDER,
  order
})

export const createOrder = (data) => dispatch => (
  ApiUtil.createOrder(data).then((order) => dispatch(createCurrentOrder(order)))
)
