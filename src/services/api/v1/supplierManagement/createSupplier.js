import request from '@/utils/request';

// 更新单个商品
export default async function createSupplier(params) {
  return request(`/api/v1/supplier`, {
    method: 'POST',
    data: params,
  });
}
