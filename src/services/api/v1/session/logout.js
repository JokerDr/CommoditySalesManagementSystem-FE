import request from '@/utils/request';

export default async function logout(params) {
  return request('/api/v1/session', {
    method: 'DESTROY',
    data: params,
  });
}
