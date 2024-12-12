/**
 * 文件方法
 */
import { getRequest, postRequest } from '../lib/axios';

export const fileApi = {
  /**
   * 下载文件，根据fileKey
   */
   downLoad: (param) => {
    return getRequest('/api/pc/file/file/downLoad', param);
  },
  /**
  * 获取文件URL：根据fileKey
  */
   getFileUrl: (param) => {
    return getRequest('/api/pc/file/file/getFileUrl', param);
  },

  /**
   * 文件上传
   */
  upload: (param) => {
    return postRequest('/api/pc/file/file/upload', param);
  },

  /**
   * 文件上传，通过url上传
   */
  addOrUpdate: (param) => {
    return postRequest('/api/pc/file/file/upload/url', param);
  }
};
