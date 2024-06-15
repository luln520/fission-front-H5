import { CenterPopup, Toast } from "antd-mobile";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { companyApi } from "../../api/company";
import { contractApi } from "../../api/contract-api";
import { financeApi } from "../../api/finance-api";
import { homeApi } from "../../api/home-api";
import { kuangjiApi } from "../../api/kuangm-api";
import { userApi } from "../../api/user-api";
import BottomBar from "../../components/bottomBar";
import { WSContext } from "../../router/router";
import { convertToSeconds, getText } from "../../utils/util";
import DataList from "./components/datalist";
import CoinPopup from "./components/coinpopup";
import TopBar from "./components/topbar";
import TopBuy from "./components/topbuy";
import TopText from "./components/topText";
import OrderPopup from "./components/orderpopup";
import { collectApi } from "../../api/collect-api";
import OrderList from "./components/orderlist";
import { leverApi } from "../../api/lever-api";
import { huobiApi } from "../../api/huobi";

export default function Lever() {
  //贸易
  const [userInfoData, setUserInfoData] = useState({});
  const [companyData, setCompanyData] = useState({} as any);
  const [iscollect, setiscollect] = useState(false);
  const [orderindex, setorderindex] = useState(1);
  const [isShowCoin, setIsShowCoin] = useState(false);
  const [isShowOrder, setIsShowOrder] = useState(false);
  ///
  const uid = localStorage.getItem("uid");
  const { t: translate } = useTranslation();
  const [daojishi, setDaojis] = useState(60);
  const [sendData, setSendData] = useState({});
  const [isShow, setIsShow] = useState(false);
  const [nowTab, setNowTab] = useState("");
  const [hysetInfo, setHysetInfo] = useState({});
  const [userInfo, setuserInfo] = useState([] as any[]);
  const [huobigetHistory, sethuobigetHistory] = useState([] as any[]);
  const [ctmarketlist, setCtmarketlist] = useState([] as any[]);
  const [collectlist, setcollectlist] = useState([] as any[]);
  const [leverorders, setleverorders] = useState([] as any[]);
  const [leverSet1, setLeverSet1] = useState([] as any[]);
  const [leverSet2, setLeverSet2] = useState([] as any[]);
  const [leverage, setLeverage] = useState([] as any[]);
  const location = useLocation();
  const param = useParams();
  let timer: any;
  const [hyorders, sethyorders] = useState([] as any[]);
  const [coinListData, setCoinListData] = useContext(WSContext);
  //贸易
  const [type, setType] = useState(1);

  //加载用户资产
  const loadUserCoinData = async () => {
    const data = await financeApi.userCoin({ uid });
    if (data.ok) {
      setuserInfo(data.data);
    }
  };

  //平仓
  const closeorder = async (lid, num, ploss) => {
    const data = await leverApi.closeorder({ uid, lid, num, ploss });
    if (data.ok) {
      Toast.show({ content: data.msg });
    } else {
      Toast.show({ content: data.msg });
    }
    loadData();
  };

  const loadcollectlistData = async () => {
    const data = await collectApi.list({ uid, pageNum: 1, pageSize: 100 });
    if (data.ok) {
      setcollectlist(data.data);
    }
  };
  //加仓
  const addnum = async (param) => {
    const data = await leverApi.addnum({ uid, ...param });
    if (data.ok) {
      Toast.show({ content: data.msg });
    } else {
      Toast.show({ content: data.msg });
    }
    loadData();
  };

  //减仓
  const strutcnum = async (param) => {
    const data = await leverApi.strutcnum({ uid, ...param });
    if (data.ok) {
      Toast.show({ content: data.msg });
    } else {
      Toast.show({ content: data.msg });
    }
    loadData();
  };

  //设置亏损盈利值
  const editLossWin = async (param) => {
    const data = await leverApi.editLossWin({ uid, ...param });
    if (data.ok) {
      Toast.show({ content: data.msg });
    } else {
      Toast.show({ content: data.msg });
    }
    loadData();
  };
  //订单信息
  const loadLeverListData = async () => {
    const data = await leverApi.list({ uid, pageNum: 1, pageSize: 100 });
    if (data.ok) {
      setleverorders(data.data.records);
    }
  };

  //订单信息
  const loadhuobigetHistoryData = async () => {
    if (!nowTab) {
      return;
    }
    const data = await huobiApi.getHistory(nowTab, 20);
    if (data) {
      sethuobigetHistory(data.data);
    }
  };

  //市场信息
  const loadctmarketlistData = async () => {
    const data = await homeApi.ctmarketlist({ pageNum: 1, pageSize: 100 });
    if (data.ok) {
      const list = data.data.records;
      list.sort((d, e) => d.sort - e.sort);
      setCtmarketlist(list);
    }
  };
  //设置
  const loadhysetInfoData = async () => {
    const data = await contractApi.hysetInfo();
    if (data.ok) {
      let hysetInfoT = data.data;
      let hyTimes = hysetInfoT?.hyTime.split(",");
      let hyTzeds = hysetInfoT?.hyTzed.split(",");
      let hyYkbls = hysetInfoT?.hyYkbl.split(",");
      for (let index = 0; index < hyTimes.length; index++) {
        let hyTime = hyTimes[index];
        let hyTzed = hyTzeds[index];
        let hyYkbl = hyYkbls[index];
        hyTimes[index] = parseInt(hyTime);
        hyTzeds[index] = parseInt(hyTzed);
        hyYkbls[index] = parseInt(hyYkbl);
      }
      hysetInfoT.hyTime = hyTimes;
      hysetInfoT.hyTzed = hyTzeds;
      hysetInfoT.hyYkbl = hyYkbls;
      setHysetInfo(hysetInfoT);
    }
  };

  //加载倍数
  const getTwLeverage = async () => {
    // if (!nowTab) {
    //   return;
    // }
    // const data = await leverApi.getTwLeverage({
    //   symbol: `${nowTab.toUpperCase()}/USDT`,
    // });
    // if (data.ok) {
    //setLeverage(data.data);
    setLeverage([
      {
        num: 3,
      },
      {
        num: 5,
      },
      {
        num: 10,
      },
      {
        num: 20,
      },
      {
        num: 50,
      },
    ]);
    // }
  };

  //加载上下限制
  const getTwLeverSet = async (type) => {
    if (!nowTab) {
      return;
    }
    const data = await leverApi.getTwLeverSet({
      symbol: `${nowTab.toUpperCase()}/USDT`,
      type,
    });
    if (data.ok) {
      if (type === 1) {
        setLeverSet1(data.data);
      }
      if (type === 2) {
        setLeverSet2(data.data);
      }
    }
  };

  //下单
  const buyCoin = async (dataInfo) => {
    dataInfo.uid = uid;
    const data = await leverApi.creatorderNew(dataInfo);
    if (data.ok) {
      Toast.show({ content: data.msg });
      setIsShowOrder(false);
    } else {
      Toast.show({ content: data.msg });
    }
    loadData();
  };

  const loadData = async () => {
    loadcollectlistData();
    loadUserCoinData();
    loadLeverListData();
  };

  const loadSetData = async () => {
    loadhuobigetHistoryData();
    getTwLeverage();
    getTwLeverSet(1);
    getTwLeverSet(2);
    loadhysetInfoData();
    loadctmarketlistData();
  };

  const loadiscollectData = async () => {
    const data = await collectApi.sel({ uid, coinname: param.name });
    if (data.ok) {
      if (data.data) {
        setiscollect(true);
      } else {
        setiscollect(false);
      }
    }
  };

  const collectAdd = async () => {
    const data = await collectApi.add({ uid, coinname: param.name });
    if (data.ok) {
      Toast.show(translate(getText("添加自选成功")));
    }
    loadiscollectData();
  };

  const collectDel = async () => {
    const data = await collectApi.del({ uid, coinname: param.name });
    if (data.ok) {
      Toast.show(translate(getText("取消自选成功")));
    }
    loadiscollectData();
  };

  //加载当前币种
  useEffect(() => {
    setNowTab(param?.name);
  }, [param]);

  //加载是否收藏
  useEffect(() => {
    loadiscollectData();
  }, []);

  //加载数据
  useEffect(() => {
    loadLeverListData();
  }, [orderindex]);

  //定时加载数据
  useEffect(() => {
    loadData();
    timer = setInterval(() => {
      loadData();
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  //定时加载数据
  useEffect(() => {
    timer = setInterval(() => {
      loadhuobigetHistoryData();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  //当前币种修改后加载设置数据
  useEffect(() => {
    loadSetData();
  }, [nowTab]);

  useEffect(() => {
    //判断是否弹窗
    const pop = location.search.replace("?isPop=", "");
    if (pop == "1") {
      setIsShow(true);
    }
  }, []);
  return (
    <div
      className="page"
      style={{
        backgroundColor: "#1b1d23",
      }}
    >
      <TopBar
        coinname={param.name}
        iscollect={iscollect}
        collectAdd={collectAdd}
        collectDel={collectDel}
      />
      <TopText
        setIsShowCoin={setIsShowCoin}
        nowTab={nowTab}
        coinListData={coinListData}
      />
      <DataList huobigetHistory={huobigetHistory} />
      <OrderList
        closeorder={closeorder}
        addnumFun={addnum}
        strutcnumFun={strutcnum}
        editLossWinFun={editLossWin}
        coinListData={coinListData}
        orderindex={orderindex}
        setorderindex={setorderindex}
        nowTab={nowTab}
        leverorders={leverorders}
      />

      <TopBuy setIsShowOrder={setIsShowOrder} setType={setType} />
      <div
        style={{
          height: "50px",
        }}
      ></div>
      {/* 左边弹框  */}
      <CoinPopup
        isShowCoin={isShowCoin}
        setIsShowCoin={setIsShowCoin}
        coinListData={coinListData}
        ctmarketlist={ctmarketlist}
        collectlist={collectlist}
        index={2}
      />
      {/* 订单底部弹框 */}
      <OrderPopup
        leverSet1={leverSet1}
        leverSet2={leverSet2}
        leverage={leverage}
        type={type}
        setyqsy={0}
        setType={setType}
        userInfo={userInfo}
        hysetInfo={hysetInfo}
        buyCoin={buyCoin}
        isShowOrder={isShowOrder}
        setIsShowOrder={setIsShowOrder}
        nowTab={nowTab}
        coinListData={coinListData}
        ctmarketlist={ctmarketlist}
        index={1}
      />
      <BottomBar index={3} />
    </div>
  );
}
