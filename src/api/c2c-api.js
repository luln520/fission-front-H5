/**
 * c2c
 */
import { getRequest, postRequest } from '../lib/axios';

export const c2cApi = {
  /**
   *国家列表
   */
  arealist: (param) => {
    return getRequest('/api/pc/c2c/arealist', param);
  },
  /**
   * 充值
   */
  cz: (param) => {
    return getRequest('/api/pc/c2c/cz', param);
  },
  /**
   * 充值交易图片
   */
  czImg: (param) => {
    return getRequest('/api/pc/c2c/czImg', param);
  },
  /**
   * 充值提现记录列表
   */
  czlist: (param) => {
    return getRequest('/api/pc/c2c/czList', param);
  },
  /**
   * 单条充值提现记录
   */
  info: (param) => {
    return getRequest('/api/pc/c2c/info', param);
  },
  /**
   * 取消
   */
  close: (param) => {
    return getRequest('/api/pc/c2c/close', param);
  },
  /**
   * 提现
   */
  tx: (param) => {
    return postRequest('/api/pc/c2c/tx', param);
  },
};
