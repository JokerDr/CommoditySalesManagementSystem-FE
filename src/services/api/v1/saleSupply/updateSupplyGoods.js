import request from '@/utils/request';

// 更新单个商品
export default async function updateSupplyGoods(params) {
  return request(`/api/v1/saleSupply`, {
    method: 'put',
    data: params,
  });
}
