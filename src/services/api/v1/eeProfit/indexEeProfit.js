import request from '@/utils/request';

export default async function indexEeProfit(params) {
  return request(`/api/v1/eeProfit`, {
    method: 'GET',
    data: params,
  });
}
