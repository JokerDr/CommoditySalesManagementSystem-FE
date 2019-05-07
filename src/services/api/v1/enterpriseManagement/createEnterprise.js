import request from '@/utils/request';

// 更新单个商品
export default async function createEnterprise(params) {
  return request(`/api/v1/enterprise`, {
    method: 'POST',
    data: params,
  });
}
