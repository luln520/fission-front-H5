/**
 * 获取区号
 */
import { getRequest, postRequest } from '../lib/axios';

export const areaApi = {
  /**
   * 列表
   */
  list: (param) => {
    return getRequest('/api/pc/area/list', param);
  }
};
