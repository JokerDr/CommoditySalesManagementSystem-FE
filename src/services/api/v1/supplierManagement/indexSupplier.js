import request from '@/utils/request';

export default async function indexSupplier() {
  return request(`/api/v1/supplier`, {
    method: 'GET',
  });
}
