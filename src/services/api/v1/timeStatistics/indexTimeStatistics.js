import request from '@/utils/request';

export default async function indexTimeStatistics(params) {
  return request(`/api/v1/timeStatistics`, {
    method: 'GET',
    data: params,
  });
}
