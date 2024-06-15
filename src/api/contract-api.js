/**
 * 合约
 */
import { getRequest, postRequest } from '../lib/axios';

export const contractApi = {
  /**
   * 合约倒计时
   */
  getHyorderOne: (param) => {
    return getRequest('/api/pc/contract/getHyorderOne', param);
  },
  /**
   * 获取合约记录
   */
  gethyorder: (param) => {
    return getRequest('/api/pc/contract/gethyorder', param);
  },
  /**
   * 合约未平仓、已平仓订单
   */
  contractTy: (param) => {
    return getRequest('/api/pc/contract/contractTy', param);
  },
  /**
   * 购买合约详情
   */
  cbillinfo: (param) => {
    return getRequest('/api/pc/contract/cbillinfo', param);
  },
  /**
   * 获取合约设置
   */
  hysetInfo: (param) => {
    return getRequest('/api/pc/contract/hysetInfo', param);
  },
  /**
   * 合约购买记录
   */
  cbillList: (param) => {
    return getRequest('/api/pc/contract/cbillList', param);
  },
  /**
   * 秒合约建仓
   */
  creatorder: (param) => {
    return getRequest('/api/pc/contract/creatorder', param);
  },
  /**
   * 合约单号查询
   */
  orderNo: (param) => {
    return getRequest('/api/pc/contract/orderNo', param);
  },
};
