import request from '@/utils/request';

// 更新单个商品
export default async function createShipmentGoods(params) {
  return request(`/api/v1/purchaseSupply`, {
    method: 'POST',
    data: params,
  });
}
