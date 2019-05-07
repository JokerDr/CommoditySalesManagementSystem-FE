import request from '@/utils/request';

// 单个商品删除
export default async function deleteCustomer(params) {
  return request(`/api/v1/customer/${params}`, {
    method: 'DELETE',
  });
}
