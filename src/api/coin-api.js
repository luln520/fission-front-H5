/**
 * 币种
 */
import { getRequest, postRequest } from '../lib/axios';

export const coinApi = {
  /**
   * 列表 分页
   */
  list: (param) => {
    return getRequest('/api/pc/coin/list', param);
  },
  /**
  * 得到单个详情
  */
  find: (param) => {
    return getRequest('/api/pc/coin/find', param);
  },

  address: (param) => {
    return getRequest('/api/pc/coin/address', param);
  },
};
