/**
 * 首页
 */
import { getRequest, postRequest } from '../lib/axios';

export const homeApi = {
  /**
   * 所有公告数据
   */
  contentlist: () => {
    return postRequest('/api/pc/index/contentlist');
  },
  /**
  * 获取所有市场信息
  */
  ctmarketlist: (prarm) => {
    return postRequest('/api/pc/index/ctmarketlist',prarm);
  },
};
