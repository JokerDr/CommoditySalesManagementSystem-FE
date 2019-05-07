import request from '@/utils/request';

export default async function register(params) {
  return request('/api/v1/user', {
    method: 'POST',
    data: params,
  });
}
