/**
 * 杠杆
 */
import { getRequest, postRequest } from '../lib/axios';

export const leverApi = {
  /**
   * 列表 分页
   */
  list: (param) => {
    return postRequest('/api/pc/leverorder/list', param);
  },
  /**
   * 杠杆倍数设置
   */
  getTwLeverage: (param) => {
    return getRequest('/api/pc/leverorder/getTwLeverage', param);
  },
  /**
 * 获取杠杆止盈止损设置
 */
  getTwLeverSet: (param) => {
    return getRequest('/api/pc/leverorder/getTwLeverSet', param);
  },
  /**
   * 平仓
   */
  closeorder: (param) => {
    return getRequest('/api/pc/leverorder/closeorder', param);
  },
  /**
  * 平仓
  */
  closeorderNew: (param) => {
    return getRequest('/api/pc/leverorder/closeorderNew', param);
  },
  /**
  * 建仓
  */
  creatorder: (param) => {
    return getRequest('/api/pc/leverorder/creatorder', param);
  },
  /**
 * 建仓新
 */
  creatorderNew: (param) => {
    return getRequest('/api/pc/leverorder/creatorderNew', param);
  },
  /**
* 加仓
*/
  addnum: (param) => {
    return getRequest('/api/pc/leverorder/addnum', param);
  },
  /**
* 减仓
*/
  strutcnum: (param) => {
    return getRequest('/api/pc/leverorder/strutcnum', param);
  },
  /*
 * 设置亏盈
*/
  editLossWin: (param) => {
    return getRequest('/api/pc/leverorder/editLossWin', param);
  },
};
