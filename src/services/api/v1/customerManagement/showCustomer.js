import request from '@/utils/request';

export default async function showCustomer(params) {
  return request(`/api/v1/customer/${params}`, {
    method: 'GET',
    data: params,
  });
}
