import request from '@/utils/request';

// 商品删除
export default async function deleteSupplyGoods(params) {
  return request(`/api/v1/saleSupply/${params}`, {
    method: 'DELETE',
    data: params,
  });
}
