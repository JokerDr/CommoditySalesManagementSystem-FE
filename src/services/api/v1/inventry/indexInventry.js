import request from '@/utils/request';

export default async function indexInventry(params) {
  return request(`/api/v1/inventry`, {
    method: 'GET',
    data: params,
  });
}
