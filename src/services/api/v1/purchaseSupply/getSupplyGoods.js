import request from '@/utils/request';

export default async function getSupplyGoods(params) {
  return request(`/api/v1/purchaseSupply`, {
    method: 'GET',
    data: params,
  });
}
