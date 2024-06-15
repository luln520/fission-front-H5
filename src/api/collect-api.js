/**
 * 收藏
 */
import { getRequest, postRequest } from '../lib/axios';

export const collectApi = {
  /**
   * 列表
   */
  list: (param) => {
    return getRequest('/api/pc/usercollect/list', param);
  },
  /**
   * 增加
   */
  add: (param) => {
    return getRequest('/api/pc/usercollect/add', param);
  },
  /**
   * 删除
   */
  del: (param) => {
    return getRequest('/api/pc/usercollect/del', param);
  },
  /**
   * 是否收藏
   */
  sel: (param) => {
    return getRequest('/api/pc/usercollect/sel', param);
  },
};
