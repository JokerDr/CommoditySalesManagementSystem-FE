import request from '@/utils/request';

export default async function indexEeStatistics(params) {
  return request(`/api/v1/eeStatistics`, {
    method: 'GET',
    data: params,
  });
}
