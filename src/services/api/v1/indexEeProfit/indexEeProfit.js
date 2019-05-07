import request from './node_modules/@/utils/request';

export default async function indexEePerformance(params) {
  return request(`/api/v1/eePerformance`, {
    method: 'GET',
    data: params,
  });
}
