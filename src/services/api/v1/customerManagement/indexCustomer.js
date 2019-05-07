import request from '@/utils/request';

export default async function indexCustomer(params) {
  return request(`/api/v1/customer`, {
    method: 'GET',
    data: params,
  });
}
