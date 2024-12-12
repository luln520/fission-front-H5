/**
 * 用户钱包
 */
import { getRequest, postRequest } from '../lib/axios';

export const financeApi = {
  /**
   * 提币列表
   */
  listPcpage: (param) => {
    return getRequest('/api/pc/finance/listPcpage', param);
  },
  /**
   * 充币列表
   */
  listRecharge: (param) => {
    return getRequest('/api/pc/finance/listRecharge', param);
  },
  /**
   * 申请提币
   */
   tbhandle: (param) => {
    return getRequest('/api/pc/finance/tbhandle', param);
  },
  /**
   * 上传转账号凭证
   */
  paycoin: (param) => {
    return getRequest('/api/pc/finance/paycoin', param);
  },
  /**
   * 获取折合资产
   */
  userCoin: (param) => {
    return getRequest('/api/pc/finance/userCoin', param);
  },
  /**
   * 提币地址管理
   */
  list: (param) => {
    return getRequest('/api/pc/qianbao/list', param);
  },
  /**
   * 删除提币地址
   */
  del: (param) => {
    return getRequest('/api/pc/qianbao/del', param);
  },
  /**
   * 删除
   */
  add: (param) => {
    return getRequest('/api/pc/qianbao/add', param);
  },
  /**
   * 统计
   */
   qbSum: (param) => {
    return getRequest('/api/pc/qianbao/qbSum', param);
  },
};
