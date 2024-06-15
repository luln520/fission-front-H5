/**
 * 验证码
 */
import { getRequest, postRequest } from '../lib/axios';

export const smsApi = {
  /**
   * 发送
   */
  code: (param) => {
    return getRequest('/api/pc/code/code', param);
  },
  /**
   * 返回
   */
  codeResp: (param) => {
    return getRequest('/api/pc/code/codeResp', param);
  }
};
