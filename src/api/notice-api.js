/**
 * 通知
 */
import { getRequest, postRequest } from '../lib/axios';

export const noticeApi = {
  /**
   * 通知列表
   */
  list: (param) => {
    return getRequest('/api/pc/notice/list', param);
  },
  /**
  * 通知详情
  */
  noticeDetail: (param) => {
    return getRequest('/api/pc/notice/noticeDetail', param);
  },
  /**
  * 标记全部读取
  */
   read: (param) => {
    return getRequest('/api/pc/notice/read', param);
  },
  /**
  * 标记单个读取
  */
   readone: (param) => {
    return getRequest('/api/pc/notice/readone', param);
  },
  /**
  * 删除全部通知
  */
   delete: (param) => {
    return getRequest('/api/pc/notice/delete', param);
  },
  /**
  * 删除单个通知
  */
   deleteOne: (param) => {
    return getRequest('/api/pc/notice/deleteOne', param);
  }
};
