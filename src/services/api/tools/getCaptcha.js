import request from '@/utils/request';

export default async function getCaptcha() {
  return request('/api/auth/getCaptcha', {
    method: 'GET',
  });
}
