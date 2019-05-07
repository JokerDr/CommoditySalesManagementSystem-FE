import request from '@/utils/request';

export default async function showSupplier(params) {
  return request(`/api/v1/supplier/${params}`, {
    method: 'GET',
    data: params,
  });
}
