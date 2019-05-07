import request from '@/utils/request';

export default async function indexGoodsProfit(params) {
  return request(`/api/v1/goodsProfit`, {
    method: 'GET',
    data: params,
  });
}
