import request from '@/utils/request';

export default async function getShipmentGoods(params) {
  return request(`/api/v1/saleShipment`, {
    method: 'GET',
    data: params,
  });
}
