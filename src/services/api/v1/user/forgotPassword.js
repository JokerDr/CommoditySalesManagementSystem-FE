import request from '@/utils/request';

export default async function forgotPassword(params) {
  return request('/api/auth/forgotPassword', {
    method: 'POST',
    data: params,
  });
}
