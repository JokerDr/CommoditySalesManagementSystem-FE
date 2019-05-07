import request from '@/utils/request';

// 单个商品删除
export default async function deleteSupplier(params) {
  return request(`/api/v1/supplier/${params}`, {
    method: 'DELETE',
  });
}
