import request from '@/utils/request';

// 单个商品删除
export default async function deleteShipmentGoods(params) {
  return request(`/api/v1/saleShipment/${params}`, {
    method: 'DELETE',
  });
}
