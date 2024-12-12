/**
 * 行情
 */
import { getRequest, postRequest } from '../lib/axios';

export const tradeApi = {
  /**
   * 所有市场行情
   */
  getallsymbol: (param) => {
    return getRequest('/api/pc/trade/getallsymbol', param);
  },
  /**
  * 获取当前价格
  */
  getcoinprice: (param) => {
    return getRequest('/api/pc/trade/getcoinprice', param);
  }
};
