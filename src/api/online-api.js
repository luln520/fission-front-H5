/**
 * 客服
 */
import { getRequest, postRequest } from '../lib/axios';

export const onlineApi = {
  /**
  * 得到单个用户对话信息
  */
  list: (param) => {
    return getRequest('/api/pc/online/list', param);
  },
  /**
   * 发送
   */
  sendMsg: (param) => {
    return getRequest('/api/pc/online/sendMsg', param);
  },
  /**
   * 未读通知
   */
  userMsg: (param) => {
    return getRequest('/api/pc/online/userMsg', param);
  },
  /**
   * 未读通知
   */
  userUuidMsg: (param) => {
    return getRequest('/api/pc/online/userUuidMsg', param);
  },
  /**
  * 修改未读
  */
  upStatus: (param) => {
    return getRequest('/api/pc/online/upStatus', param);
  },
  /**
 * 修改未读
 */
  upUuidStatus: (param) => {
    return getRequest('/api/pc/online/upUuidStatus', param);
  }
};
