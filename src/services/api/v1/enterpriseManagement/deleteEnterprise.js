import request from '@/utils/request';

// 单个商品删除
export default async function deleteEnterprise(params) {
  return request(`/api/v1/enterprise/${params}`, {
    method: 'DELETE',
  });
}
