/**
 * 内容 公告
 */
import { getRequest, postRequest } from '../lib/axios';

export const contentApi = {
  /**
   * 列表
   */
  list: (param) => {
    return postRequest('/api/pc/content/list', param);
  },
  /**
  * 得到单个详情
  */
   detail: (param) => {
    return getRequest('/api/pc/content/detail', param);
  }
};
