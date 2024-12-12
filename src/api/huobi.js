/**
 * 火币
 */
import axios from 'axios';
import { getRequest, postRequest } from '../lib/axios';

const smartAxios = axios.create({
  baseURL: 'https://api.huobi.pro',
});
export const huobiApi = {
  /**
   * 火币单价
   */
  getPrice: async (name) => {

    return await smartAxios.request({
      method: 'get',
      url: `/market/history/kline?period=1day&size=1&symbol=${name?.toLowerCase()}usdt`,
      params: {},
    }).then((res) => {
      return res?.data;
    });
  },
  /**
   * 火币交易历史
   */
  getHistory: async (name, num) => {
    return await smartAxios.request({
      method: 'get',
      url: `/market/history/trade?symbol=${name?.toLowerCase()}usdt&size=${num}`,
      params: {},
    }).then((res) => {
      return res?.data;
    });
  },
  /**
 * 火币交易历史
 */
  getHistoryK: async (ticker, period, size) => {
    return await smartAxios.request({
      method: 'get',
      url: `/market/history/kline?symbol=${ticker}&period=${period}&size=${size}`,
      params: {},
    }).then((res) => {
      return res?.data;
    });
  }
};
