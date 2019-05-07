import request from '@/utils/request';

export default async function showEnterprise(params) {
  return request(`/api/v1/enterprise/${params}`, {
    method: 'GET',
    data: params,
  });
}
