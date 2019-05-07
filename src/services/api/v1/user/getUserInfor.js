import request from '@/utils/request';
import { getTokenOwner } from '@/utils/tokenHandle';

export default async function getUserInfor(params) {
  return request(`/api/v1/user/${getTokenOwner()}`, {
    method: 'GET',
    data: params,
  });
}
