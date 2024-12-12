/**
 * 公司
 */
import { getRequest, postRequest } from '../lib/axios';

export const companyApi = {
  /**
   * 列表
   */
  domain: (param) => {
    let host = window.location.host;
    //本地环境放开才能获取到测试数据*****
    host = (host.includes('localhost')||host.includes('206.238.199.169')) ? "1.gqjys.co" : host;
    param = { domain: host }
    return getRequest('/api/pc/company/domain', param);
  }
};
