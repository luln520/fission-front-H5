/**
 * 新闻
 */
import { getRequest, postRequest } from '../lib/axios';

export const newsApi = {
  /**
   * 列表
   */
  list: (param) => {
    return getRequest('/api/pc/news/list', param);
  },
  /**
   * 新闻类型
   */
  listType: (param) => {
    return getRequest('/api/pc/news/listType', param);
  },
  /**
 * 新闻类型单个
 */
  findType: (param) => {
    return getRequest('/api/pc/news/findType', param);
  },
  /**
* 新闻单个
*/
  find: (param) => {
    return getRequest('/api/pc/news/find', param);
  },

};
