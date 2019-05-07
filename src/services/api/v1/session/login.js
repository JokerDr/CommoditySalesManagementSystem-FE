import request from '@/utils/request';

export default async function login(params) {
  return request('/api/v1/session', {
    method: 'POST',
    data: params,
  });
}
