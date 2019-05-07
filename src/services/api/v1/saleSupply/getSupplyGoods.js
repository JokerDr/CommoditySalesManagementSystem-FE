import request from '@/utils/request';

export default async function getSupplyGoods(params) {
  return request(`/api/v1/saleSupply`, {
    method: 'GET',
    data: params,
  });
}
