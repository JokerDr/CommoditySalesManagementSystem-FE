import request from '@/utils/request';

// 更新单个商品
export default async function createCustomer(params) {
  return request(`/api/v1/customer`, {
    method: 'POST',
    data: params,
  });
}
