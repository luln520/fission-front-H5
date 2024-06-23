import { CenterPopup, Toast } from "antd-mobile";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { companyApi } from "../../api/company";
import { contractApi } from "../../api/contract-api";
import { financeApi } from "../../api/finance-api";
import { homeApi } from "../../api/home-api";
import { kuangjiApi } from "../../api/kuangm-api";
import { userApi } from "../../api/user-api";
import BottomBar from "../../components/bottomBar";
import { WSContext } from "../../router/router";
import { convertToSeconds, getText } from "../../utils/util";
import KineCenter from "./components/kinecenter";
import CoinPopup from "./components/coinpopup";
import TopBar from "./components/topbar";
import TopBuy from "./components/topbuy";
import TopText from "./components/topText";
import OrderPopup from "./components/orderpopup";
import DaoJiShi from "./components/daojishi";
import { collectApi } from "../../api/collect-api";
import { Dialog } from "react-vant";
import InfoMsg from "./components/infomsg";

export default function Trade() {
  const uid = localStorage.getItem("uid");
  const { t: translate } = useTranslation();
  // const [changeDaoJiShi, setChangeDaoJiShi] = useState(false);
  const [daojishi, setDaojis] = useState(60);
  const [timeindex, settimeindex] = useState(2);
  const [sendData, setSendData] = useState({});
  const [index, setIndex] = useState(3);
  const [isShowCoin, setIsShowCoin] = useState(false);
  const [isShowOrder, setIsShowOrder] = useState(false);
  const [nowTab, setNowTab] = useState("");
  const [successOrderNo, setsuccessOrderNo] = useState("");
  const [hysetInfo, setHysetInfo] = useState({});
  const [userInfo, setuserInfo] = useState([] as any[]);
  const [ctmarketlist, setCtmarketlist] = useState([] as any[]);
  const [collectlist, setcollectlist] = useState([] as any[]);
  const param = useParams();
  const [coinListData, setCoinListData] = useContext(WSContext);
  const [userInfoData, setUserInfoData] = useState({});
  const [hyorders, sethyorders] = useState([] as any[]);
  const [iscollect, setiscollect] = useState(false);
  const [visibleInfoMsg, setvisibleInfoMsg] = useState(false);
  let timer: any;
  const [companyData, setCompanyData] = useState({} as any);
  //贸易
  const [type, setType] = useState(1);
  //倒计时显示
  const [visible, setVisible] = useState(false);
  //预期收益
  const [yqsy, setyqsy] = useState(0);
  //初始化获取公司
  async function initCompany() {
    const res = await companyApi.domain();
    if (res.ok) {
      setCompanyData(res.data);
    }
  }

  //用户信息
  const loadUserInfoData = async () => {
    const data = await userApi.userInfo();
    if (data.ok) {
      setUserInfoData(data.data);
    }
  };
  //加载数 据
  const loadhyorderData = async () => {
    const data = await contractApi.gethyorder({ uid });
    if (data.ok) {
      sethyorders(data.data);
    }
  };
  const loadctmarketlistData = async () => {
    const data = await homeApi.ctmarketlist({ pageNum: 1, pageSize: 100 });
    if (data.ok) {
      const list = data.data.records;
      list.sort((d, e) => d.sort - e.sort);
      setCtmarketlist(list);
    }
  };

  const loadcollectlistData = async () => {
    const data = await collectApi.list({ uid, pageNum: 1, pageSize: 100 });
    if (data.ok) {
      setcollectlist(data.data);
    }
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

  //加载数 据
  const loadUserCoinData = async () => {
    const data = await financeApi.userCoin({ uid });
    if (data.ok) {
      setuserInfo(data.data);
    }
  };

  //合约设置
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
        hyTimes[index] = hyTime;
        hyTzeds[index] = parseInt(hyTzed);
        hyYkbls[index] = parseInt(hyYkbl);
      }
      hysetInfoT.hyTime = hyTimes;
      hysetInfoT.hyTzed = hyTzeds;
      hysetInfoT.hyYkbl = hyYkbls;
      setHysetInfo(hysetInfoT);
    }
  };

  //下单
  const buyCoin = async (dataInfo) => {
    dataInfo.uid = uid;
    //时间转化
    const time = convertToSeconds(dataInfo?.ctime);
    setDaojis(time);
    setSendData(dataInfo);
    const data = await contractApi.creatorder(dataInfo);
    if (data.ok) {
      Toast.show({ content: data.msg });
      //设置成功orderno
      setsuccessOrderNo(data.data);
      //开始倒计时
      // setChangeDaoJiShi(true);
      setIndex(1);
      setIsShowOrder(false);
      setVisible(true);
    } else {
      Toast.show({ content: data.msg });
    }
    loadData();
  };

  const loadData = async () => {
    loadcollectlistData();
    loadUserCoinData();
    loadhyorderData();
    loadiscollectData();
  };
  useEffect(() => {
    initCompany();
    setIndex(1);
  }, []);
  useEffect(() => {
    setNowTab(param.name);
  }, [param]);

  useEffect(() => {
    loadhyorderData();
    // setChangeDaoJiShi(false);
  }, [index]);
  useEffect(() => {
    loadhysetInfoData();
    loadctmarketlistData();
    loadData();
    timer = setInterval(() => {
      loadData();
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, [nowTab]);
  useEffect(() => {
    loadUserInfoData();
  }, []);
  return (
    <div className="page">
      <TopBar
        coinname={param.name}
        iscollect={iscollect}
        collectAdd={collectAdd}
        collectDel={collectDel}
        setIsShowCoin={setIsShowCoin}
        setvisibleInfoMsg={setvisibleInfoMsg}
      />
      {/* <TopText
        setIsShowCoin={setIsShowCoin}
        nowTab={nowTab}
        coinListData={coinListData}
      /> */}
      {nowTab && (
        <KineCenter
          nowTab={nowTab}
          setIndex={setIndex}
          setType={setType}
          timeindex={timeindex}
          settimeindex={settimeindex}
        />
      )}

      <TopBuy setIsShowOrder={setIsShowOrder} setType={setType} />
      <div
        style={{
          height: "50px",
        }}
      ></div>
      {/* 左边弹框  */}
      <CoinPopup
        nowTab={nowTab}
        isShowCoin={isShowCoin}
        setIsShowCoin={setIsShowCoin}
        coinListData={coinListData}
        ctmarketlist={ctmarketlist}
        collectlist={collectlist}
        index={2}
      />
      {/* 订单底部弹框 */}
      <OrderPopup
        type={type}
        setyqsy={setyqsy}
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

      {/* 倒计时 */}
      <CenterPopup
        visible={visible}
        destroyOnClose={true}
        onMaskClick={() => {
          setVisible(false);
        }}
      >
        <DaoJiShi
          userInfo={userInfoData}
          yqsy={yqsy}
          setVisible={setVisible}
          coinListData={coinListData}
          daojis={daojishi}
          nowTab={nowTab}
          sendData={sendData}
          hysetInfo={hysetInfo}
          companyData={companyData}
          successOrderNo={successOrderNo}
        />
      </CenterPopup>

      {/* 消息提示 */}
      <CenterPopup
        visible={visibleInfoMsg}
        onMaskClick={() => {
          setvisibleInfoMsg(false);
        }}
      >
        <InfoMsg  setvisibleInfoMsg={setvisibleInfoMsg}/>
      </CenterPopup>
      <BottomBar index={3} />
    </div>
  );
}
