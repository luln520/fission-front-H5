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
  }
};
