<<<<<<< HEAD
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
=======
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
    //host = (host.includes('localhost')||host.includes('192.168.2.7')) ? "1.gqjys.co" : host;
    param = { domain: host }
    return getRequest('/api/pc/company/domain', param);
  }
};
>>>>>>> 200492d5b0310fcfce9039951debf669ab731894
