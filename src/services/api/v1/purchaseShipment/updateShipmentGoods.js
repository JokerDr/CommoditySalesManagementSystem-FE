import request from '@/utils/request';

// 更新单个商品
export default async function updateShipmentGoods(params) {
  // eslint-disable-next-line no-underscore-dangle
  return request(`/api/v1/purchaseSupply/${params._id}`, {
    method: 'PUT',
    data: params,
  });
}
