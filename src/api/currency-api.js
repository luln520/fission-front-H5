/**
 * 货币
 */
import { getRequest, postRequest } from '../lib/axios';

export const currencyApi = {
  /**
   *列表
   */
  list: (param) => {
    return postRequest('/api/pc/c2c/list', param);
  }
};
