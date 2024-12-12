import React, { Component, useEffect } from "react";
import pako from "pako";
//BrowserRouter没有#   HashRouter 有#
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import Login from "../pages/login";
import ScrollToTop from "../components/scrollToTop";
import { homeApi } from "../api/home-api";
import { onlineApi } from "../api/online-api";
import ChangeLine from "../pages/changeLine";
import ChangeLanguage from "../pages/changelanguage";
import ChatCenter from "../pages/chatcenter";
import Register from "../pages/register";
import HomeCenter from "../pages/homecenter";
import My from "../pages/my";
import Property from "../pages/property";
import NoiceInfo from "../pages/noiceInfo";
import RechargeList from "../pages/rechargelist";
import Recharge from "../pages/recharge";
import HelpList from "../pages/helplist";
import HelpInfo from "../pages/helpInfo";
import ExtractList from "../pages/extractlist";
import Extract from "../pages/extract";
import RechargeOrderList from "../pages/rechargeorderlist";
import LockUp from "../pages/lockUp";
import LockUpInfo from "../pages/lockUpInfo";
import LockUpOrder from "../pages/lockUpOrder";
import LockUpCenter from "../pages/lockUpCenter";
import QuotationCenter from "../pages/quotation";
import JieKuan from "../pages/jiekuan";
import Chat from "../pages/chat";
import SecurityCenter from "../pages/securityCenter";
import ChangePassword from "../pages/changePassword";
import Setting from "../pages/setting";
import C2Ctx from "../pages/c2ctx";
import C2CckImage from "../pages/c2cckImage";
import C2CckInfo from "../pages/c2cckinfo";
import C2CtkList from "../pages/c2ctkList";
import C2CckList from "../pages/c2cckList";
import ExtractOrderList from "../pages/extractorderlist";
import C2CckCenter from "../pages/c2cckcenter";
import Trade from "../pages/trade";
import Idcard from "../pages/idcard";
import IdCard from "../pages/idcard";
import JYJL from "../pages/jyjlCenter";
import JYJLLever from "../pages/jyjlLever";
import JYJLTrade from "../pages/jyjlTrade";
import MarketOrderInfo from "../pages/marketOrderInfo";
import Noice from "../pages/noice";
import MurmurChat from "../pages/murmurChat";
import Address from "../pages/addressAdd";
import AddressAdd from "../pages/addressAdd";
import AddressList from "../pages/addresslist";
import Lever from "../pages/lever";
import JYJLLever2 from "../pages/jyjlLever2";
import GJIdCard from "../pages/gjidcard";
import MoreMenus from "../pages/moreMenus";
import ShareCenter from "../pages/sharecenter";
import Downland from "../pages/download";
import DownlandInfo from "../pages/downloadInfo";
import DownlandBook from "../pages/downloadbook";
import AboutUS from "../pages/aboutus";
import ReloadPassword from "../pages/reloadPassword";
import LeverRoleInfo from "../pages/leverRoleInfo";
import GetProperty from "../pages/getProperty";
import { huobiApi } from "../api/huobi";
import MyTeam from "../pages/myTeam";
//全局
export const WSContext = createContext([] as any[]);
export const WSMinContext = createContext([] as any[]);
export const LoginContext = createContext([] as any[]);
export const LoginMsgContext = createContext([] as any[]);
export const NoLoginMsgContext = createContext([] as any[]);

export default function AppRouter() {
  const [login, setLogin] = useState(false);
  const [loginmsg, setloginmsg] = useState({} as any);
  const [nologinmsg, setnologinmsg] = useState({} as any);
  const [ctmarketlist, setCtmarketlist] = useState([] as any[]);
  const reader = new FileReader();
  let WS = null;
  let timer: any;
  const [coinListData, setCoinListData] = useState({} as any);
  const [coinListMinData, setCoinListMinData] = useState({} as any);
  let coinListDataMap = {} as any;
  let coinListDataMinMap = {} as any;
  const postKDataDay = {};
  const postKDataMin = {};
  //开始链接 wss
  const startWS = () => {
    WS = new WebSocket("wss://api.huobi.pro/ws");
    WS.onopen = () => {
      console.info("链接打开");
      for (const key in postKDataDay) {
        WS.send(JSON.stringify(postKDataDay[key])); //实时
      }
      for (const key in postKDataMin) {
        WS.send(JSON.stringify(postKDataMin[key])); //实时
      }
    };
    WS.onclose = () => {
      console.info("链接关闭");
    };
    WS.onmessage = async (event) => {
      reader.onload = (e) => {
        let ploydata = new Uint8Array(e.target?.result as ArrayBufferLike);
        let msg = pako.inflate(ploydata, { to: "string" });
        handleData(msg);
      };
      try {
        reader.readAsArrayBuffer(event.data);
      } catch (e) {}
    };
    WS.onerror = () => {
      console.info("链接失败");
    };
  };

  // 发送响应信息
  const sendHeartMessage = (ping) => {
    WS?.send(JSON.stringify({ pong: ping }));
  };

  //关闭WSS
  const closeWS = () => {
    WS?.close();
  };

  //处理响应数据
  const handleData = (msg: string) => {
    let data = JSON.parse(msg);
    if (data.ping) {
      // 如果是 ping 消息
      sendHeartMessage(data.ping);
    } else if (data.status === "ok") {
      //历史数据
    } else {
      //eos/bch/eth
      const datat = data.tick;
      for (let key in postKDataDay) {
        key = key.substring(0, key.length - 1);
        if (data.ch === `market.${key}usdt.kline.1day`) {
          coinListDataMap = { ...coinListDataMap, [key]: datat };
          setCoinListData(coinListDataMap);
        }
      }
      for (let key in postKDataMin) {
        key = key.substring(0, key.length - 1);
        if (data.ch === `market.${key}usdt.kline.1min`) {
          coinListDataMinMap = { ...coinListDataMinMap, [key]: datat };
          setCoinListMinData(coinListDataMinMap);
        }
      }
    }
  };

  const loadctmarketlistData = async () => {
    const data = await homeApi.ctmarketlist({ pageNum: 1, pageSize: 100 });
    if (data.ok) {
      setCtmarketlist(data.data.records);
      const list = data.data.records;
      list.sort((d, e) => d.sort - e.sort);
      let postKDataDayTemp = {};
      let postKDataMinTemp = {};
      for (const ctmarket of list) {
        if (ctmarket.status == 1) {
          coinListDataMap[ctmarket.coinname] = {};
          postKDataDay[ctmarket.coinname + "K"] = {
            name: ctmarket.coinname,
            sub: `market.${ctmarket.coinname}usdt.kline.1day`,
          };
          postKDataMin[ctmarket.coinname + "K"] = {
            name: ctmarket.coinname,
            sub: `market.${ctmarket.coinname}usdt.kline.1min`,
          };
        }
      }
      setCoinListData(coinListDataMap);
    }
  };

  const loaduserMsgData = async () => {
    let uid = localStorage.getItem("uid");
    uid = uid ? uid : 0;
    const data = await onlineApi.userMsg({ uid });
    if (data.ok) {
      setloginmsg(data.data?.data);
    }
  };
  const loaduserUuidMsgData = async () => {
    let uuid = localStorage.getItem("murmur");
    uuid = uuid ? uuid : 0;
    const data = await onlineApi.userUuidMsg({ uuid });
    if (data.ok) {
      setnologinmsg(data.data?.data);
    }
  };
  const loadHttpData = async () => {
    // const temp = {};
    for (const key in coinListDataMap) {
      const data = await huobiApi.getPrice(key);
      if (data.status == "ok") {
        coinListDataMap = { ...coinListDataMap, [key]: data.data[0] };
      }
    }
    setCoinListData(coinListDataMap);
  };
  const getElement = (element) => {
    //关键信息
    const uid = localStorage.getItem("uid");
    const userCode = localStorage.getItem("userCode");
    const companyId = localStorage.getItem("companyId");
    if (uid && userCode && companyId) {
      return element;
    } else {
      return <Navigate to="/login-page" />;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      loaduserMsgData();
      loaduserUuidMsgData();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    loadctmarketlistData().then(() => {
      //调取http 初始化
      loadHttpData();
      startWS();
    });
    return () => {
      closeWS();
    };
  }, []);
  useEffect(() => {
    const uid = localStorage.getItem("uid");
    if (uid) {
      setLogin(true);
    }
  }, []);
  return (
    <WSContext.Provider value={[coinListData, setCoinListData]}>
      <WSMinContext.Provider value={[coinListMinData, setCoinListMinData]}>
        <LoginContext.Provider value={[login, setLogin]}>
          <LoginMsgContext.Provider value={[loginmsg, setloginmsg]}>
            <NoLoginMsgContext.Provider value={[nologinmsg, setnologinmsg]}>
              <BrowserRouter>
                <ScrollToTop>
                  <Routes>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/login-page" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/homecenter" element={<HomeCenter />}></Route>
                    <Route
                      path="/mycenter"
                      element={getElement(<My />)}
                    ></Route>
                    <Route path="/changeline" element={<ChangeLine />}></Route>
                    <Route
                      path="/propertycenter"
                      element={getElement(<Property />)}
                    ></Route>
                    <Route
                      path="/changelanguage"
                      element={<ChangeLanguage />}
                    ></Route>
                    <Route path="/chatcenter" element={<ChatCenter />}></Route>
                    <Route path="/chat" element={getElement(<Chat />)}></Route>
                    <Route path="/murmurchat" element={<MurmurChat />}></Route>
                    <Route
                      path="/securitycenter"
                      element={getElement(<SecurityCenter />)}
                    ></Route>
                    <Route
                      path="/changePassword"
                      element={getElement(<ChangePassword />)}
                    ></Route>
                    <Route
                      path="/noiceInfo"
                      element={getElement(<NoiceInfo />)}
                    ></Route>
                    <Route
                      path="/extractlist"
                      element={getElement(<ExtractList />)}
                    ></Route>
                    <Route
                      path="/extractorderlist"
                      element={getElement(<ExtractOrderList />)}
                    ></Route>
                    <Route
                      path="/extract/:id"
                      element={getElement(<Extract />)}
                    ></Route>
                    <Route
                      path="/rechargelist"
                      element={getElement(<RechargeList />)}
                    ></Route>
                    <Route
                      path="/leverroleinfo"
                      element={getElement(<LeverRoleInfo />)}
                    ></Route>
                    <Route
                      path="/getproperty"
                      element={getElement(<GetProperty />)}
                    ></Route>
                    <Route
                      path="/rechargeorderlist"
                      element={getElement(<RechargeOrderList />)}
                    ></Route>
                    <Route
                      path="/setting"
                      element={getElement(<Setting />)}
                    ></Route>
                    <Route
                      path="/sharecenter"
                      element={getElement(<ShareCenter />)}
                    ></Route>

                    <Route
                      path="/recharge/:id"
                      element={getElement(<Recharge />)}
                    ></Route>
                    <Route
                      path="/reloadpassword"
                      element={<ReloadPassword />}
                    ></Route>
                    <Route path="/aboutus" element={<AboutUS />}></Route>
                    <Route path="/download" element={<Downland />}></Route>
                    <Route
                      path="/downloadbook"
                      element={<DownlandBook />}
                    ></Route>
                    <Route
                      path="/downloadInfo"
                      element={<DownlandInfo />}
                    ></Route>
                    <Route
                      path="/helplist"
                      element={getElement(<HelpList />)}
                    ></Route>
                    <Route
                      path="/helpinfo/:id"
                      element={getElement(<HelpInfo />)}
                    ></Route>
                    <Route
                      path="/lockUpCenter"
                      element={getElement(<LockUpCenter />)}
                    ></Route>
                    <Route
                      path="/lockUp"
                      element={getElement(<LockUp />)}
                    ></Route>
                    <Route
                      path="/lockUpInfo/:id"
                      element={getElement(<LockUpInfo />)}
                    ></Route>
                    <Route
                      path="/lockUpOrder"
                      element={getElement(<LockUpOrder />)}
                    ></Route>
                    <Route
                      path="/quotation"
                      element={getElement(<QuotationCenter />)}
                    ></Route>
                    <Route
                      path="/trade/:name"
                      element={getElement(<Trade />)}
                    ></Route>
                    <Route
                      path="/borrowmoney"
                      element={getElement(<JieKuan />)}
                    ></Route>
                    <Route
                      path="/c2cckcenter"
                      element={getElement(<C2CckCenter />)}
                    ></Route>
                    <Route
                      path="/c2cckList"
                      element={getElement(<C2CckList />)}
                    ></Route>
                    <Route
                      path="/c2ctkList"
                      element={getElement(<C2CtkList />)}
                    ></Route>
                    <Route
                      path="/c2cckinfo/:orderNo"
                      element={getElement(<C2CckInfo />)}
                    ></Route>
                    <Route
                      path="/c2cckimage/:orderNo"
                      element={getElement(<C2CckImage />)}
                    ></Route>
                    <Route
                      path="/c2ctx/:currencyId"
                      element={getElement(<C2Ctx />)}
                    ></Route>
                    <Route
                      path="/idcard"
                      element={getElement(<IdCard />)}
                    ></Route>
                    <Route
                      path="/moremenus"
                      element={getElement(<MoreMenus />)}
                    ></Route>

                    <Route
                      path="/gjidcard"
                      element={getElement(<GJIdCard />)}
                    ></Route>
                    <Route path="/jyjl" element={getElement(<JYJL />)}></Route>
                    <Route
                      path="/jyjlLever"
                      element={getElement(<JYJLLever />)}
                    ></Route>
                    <Route
                      path="/jyjlLever2"
                      element={getElement(<JYJLLever2 />)}
                    ></Route>
                    <Route
                      path="/jyjlTrade"
                      element={getElement(<JYJLTrade />)}
                    ></Route>
                    <Route
                      path="/marketOrderInfo/:id"
                      element={getElement(<MarketOrderInfo />)}
                    ></Route>
                    <Route
                      path="/noice"
                      element={getElement(<Noice />)}
                    ></Route>
                    <Route
                      path="/addressadd"
                      element={getElement(<AddressAdd />)}
                    ></Route>
                    <Route
                      path="/addresslist"
                      element={getElement(<AddressList />)}
                    ></Route>
                    <Route
                      path="/myteam"
                      element={getElement(<MyTeam />)}
                    ></Route>
                    <Route
                      path="/lever/:name"
                      element={getElement(<Lever />)}
                    ></Route>
                    {/* 404 */}
                    <Route
                      path="*"
                      element={<Navigate to="/homecenter" />}
                    ></Route>
                  </Routes>
                </ScrollToTop>
              </BrowserRouter>
            </NoLoginMsgContext.Provider>
          </LoginMsgContext.Provider>
        </LoginContext.Provider>
      </WSMinContext.Provider>
    </WSContext.Provider>
  );
}
