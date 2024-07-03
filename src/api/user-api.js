/**
 * 用户
 */
import { getRequest, postRequest } from '../lib/axios';

export const userApi = {
  /**
   * 登录
   */
  login: (param) => {
    return postRequest('/api/pc/userLoginOrRegister/login', param);
  },
  /**
  *注册
  */
  register: (param) => {
    return postRequest('/api/pc/userLoginOrRegister/register', param);
  },
  /**
   * 用户提交实名认证
   */
  auth: (param) => {
    return postRequest('/api/pc/user/auth', param);
  },
  /**
   * 用户高级认证
   */
  cardsc: (param) => {
    return getRequest('/api/pc/user/cardsc', param);
  },
  /**
   *修改密码
   */
  editpassword: (param) => {
    return postRequest('/api/pc/user/editpassword', param);
  },
  editPwd: (param) => {
    return getRequest('/api/pc/user/editPwd', param);
  },
  /**
  *用户详情
  */
  userInfo: (param) => {
    return getRequest('/api/pc/user/userInfo', param);
  },
  /**
 *领取模拟
 */
  mockUserAmount: (param) => {
    return getRequest('/api/pc/user/mockUserAmount', param);
  },
  /**
 *切换 1真   2 模拟
 */
  mockUser: (param) => {
    return getRequest('/api/pc/user/mockUser', param);
  },
  /**
 *模拟用户信息
 */
  mockUserInfo: (param) => {
    return getRequest('/api/pc/user/mockUserInfo', param);
  },
  /**
*用户团队
*/
  userTeams: (param) => {
    return getRequest('/api/pc/user/userTeams', param);
  },
   /**
*获取配置
*/
getTwLeverSet: (param) => {
  return getRequest('/api/pc/teamset/getTwLeverSet', param);
},
  
};
