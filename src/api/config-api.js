/**
 * 配置
 */
import { getRequest, postRequest } from '../lib/axios';

export const configApi = {
  /**
   * 查询网站信息，系统配置
   */
   find: () => {
    return getRequest('/api/pc/config/find');
  },
};
