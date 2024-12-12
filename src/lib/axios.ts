import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "../utils/token-util";
import { localClear } from "../utils/local-util";
import { Toast } from "antd-mobile";
//基础请求地址
const hostname = window.location.hostname;
const apiUrlMap = {
  localhost: "http://localhost:1025", //"http://127.0.0.1:1084",
  //"192.168.2.7": "http://192.168.2.7:1025", //"http://127.0.0.1:1084",
  "206.238.199.169": "https://1.gqjys.co",
};
export const BASE_API_URL = apiUrlMap[hostname] ? apiUrlMap[hostname] : "";
export const BASE_IMG_URL = BASE_API_URL.replace(":1025", "");
//
const TOKEN_HEADER: string = "x-access-token";
const smartAxios = axios.create({
  baseURL: BASE_API_URL,
});
const outPath = [
  "/",
  "/login",
  "/login-page",
  "/download",
  "/reloadpassword",
  "/downloadInfo",
  "/register",
  "/homecenter",
  "/murmurchat",
  "/chatcenter",
  "/changelanguage",
];

// ================================= 请求拦截器 =================================

smartAxios.interceptors.request.use(
  (config) => {
    // 在发送请求之前消息头加入token
    const token = getToken();
    let language = localStorage.getItem("i18n");
    let companyIdStr = localStorage.getItem("companyId");
    let userCode = localStorage.getItem("userCode");
    if (!language) {
      language = "en";
    }
    //language
    if (language) {
      if (config.method === "get" || config.method === "GET") {
        if (!config.params) {
          config.params = {};
        }
        config.params["language"] = language;
      }
      //post添加token
      if (config.method === "post" || config.method === "POST") {
        if (!config.data) {
          config.data = {};
        }
        config.data.language = language;
      }
    }
    //userCode
    if (userCode) {
      if (config.method === "get" || config.method === "GET") {
        if (!config.params) {
          config.params = {};
        }
        config.params["userCode"] = userCode;
      }
      //post添加token
      if (config.method === "post" || config.method === "POST") {
        if (!config.data) {
          config.data = {};
        }
        config.data.userCode = userCode;
      }
    }
    //companyIdStr
    if (token) {
      config.headers[TOKEN_HEADER] = token;
      //get添加token
      if (config.method === "get" || config.method === "GET") {
        if (!config.params) {
          config.params = {};
        }
        config.params["token"] = token;
      }
      //post添加token
      if (config.method === "post" || config.method === "POST") {
        if (!config.data) {
          config.data = {};
        }
        config.data.token = token;
      }
    } else {
      //判断是否需要跳转
      if (!outPath.includes(window.location.pathname)) {
        Toast.show({
          content: "Please login",
          duration: 1000,
        });
        setTimeout(() => {
          window.location.href = "/login-page";
        }, 1000);
        return;
      }
      delete config.headers[TOKEN_HEADER];
    }
    //公司id添加
    if (companyIdStr && companyIdStr != "" && companyIdStr != "undefined") {
      const companyId = parseInt(companyIdStr);
      //get添加companyId
      if (config.method === "get" || config.method === "GET") {
        if (!config.params) {
          config.params = {};
        }
        config.params["companyId"] = companyId;
      }
      //post添加companyId
      if (config.method === "post" || config.method === "POST") {
        if (!config.data) {
          config.data = {};
        }
        config.data.companyId = companyId;
      }
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// ================================= 响应拦截器 =================================

// 添加响应拦截器
smartAxios.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const res = response.data;
    if (res.code && res.code !== 1) {
      // `token` 过期或者账号已在别处登录
      if (res.code === 30007) {
        Toast.show({
          content: "Please login",
          duration: 1000,
        });
        localClear();
        //跳转到登录页面，直接使用页面刷新的策略
        setTimeout(() => {
          window.location.href = "/";
        }, 300);
        return Promise.resolve(res);
      }
      return Promise.resolve(res);
    } else {
      return Promise.resolve(res);
    }
  },
  (error) => {
    // 对响应错误做点什么
    if (error) {
      Toast.show({
        content: "error",
        icon: "fail",
        duration: 1000,
      });
    }
    return Promise.resolve({ error });
  }
);

// ================================= 对外提供请求方法：通用请求，get， post, 下载download等 =================================

/**
 * 通用请求封装
 * @param config
 */
export const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  return smartAxios.request(config);
};

/**
 * post请求
 */
export const postRequest = <T = any>(url: string, data: any): Promise<T> => {
  return request({ data, url, method: "post" });
};

/**
 * get请求
 */
export const getRequest = <T = any>(url: string, params?: any): Promise<T> => {
  return request({ url, method: "get", params });
};

/**
 * 下载
 */
export const download = function (
  fileName: string,
  url: string,
  params?: any
): void {
  request({
    method: "get",
    url: url,
    params: params,
    responseType: "blob",
  })
    .then((data) => {
      if (!data) {
        return;
      }
      let url = window.URL.createObjectURL(new Blob([data]));
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
    })
    .catch((error) => {
      console.error(error);
    });
};
