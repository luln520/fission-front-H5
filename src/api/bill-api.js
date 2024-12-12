/**
 * 账单
 */
import { getRequest, postRequest } from '../lib/axios';

export const billApi = {
  /**
   * 列表
   */
  list: (param) => {
    return getRequest('/api/pc/bill/list', param);
  }
};
