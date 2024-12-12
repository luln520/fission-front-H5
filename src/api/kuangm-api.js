/**
 * kuangji
 */
import { getRequest, postRequest } from '../lib/axios';

export const kuangjiApi = {
  /**
   * kuangji列表
   */
  pcList: (param) => {
    return postRequest('/api/pc/kuangji/pcList', param);
  },
  /**
  * 获取用户kj列表/获取用户 运行/过期 的kj
  */
  uidList: (param) => {
    return getRequest('/api/pc/kuangji/uidList', param);
  },
  /**
 * 获取kj详情
 */
  detail: (param) => {
    return getRequest('/api/pc/kuangji/detail', param);
  },

  /**
   * kj收益列表
   */
  kjprofit: (param) => {
    return getRequest('/api/pc/kuangji/kjprofit', param);
  },
  /**
  * 购买独资kj
  */
  buyKuangji: (param) => {
    return getRequest('/api/pc/kuangji/buyKuangji', param);
  },
  /**
* 统计
*/
  kjprofitSum: (param) => {
    return getRequest('/api/pc/kuangji/kjprofitSum', param);
  },
  /**
* 统计单个
*/
  kjprofitOneSum: (param) => {
    return getRequest('/api/pc/kuangji/kjprofitOneSum', param);
  }
};
