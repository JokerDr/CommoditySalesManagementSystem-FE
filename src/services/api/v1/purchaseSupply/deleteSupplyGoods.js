import request from '@/utils/request';

// 单个商品删除
export default async function deleteSupplyGoods(params) {
  return request(`/api/v1/purchaseSupply/${params}`, {
    method: 'DELETE',
  });
}
