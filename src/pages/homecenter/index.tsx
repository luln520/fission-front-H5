import "./index.css";
import Optionbox from "./components/optionbox";
import HomeTopBar from "../../components/homeTopBar";
import BottomBar from "../../components/bottomBar";
import Swipper from "./components/swipper";
import pako from "pako";
import Noice from "./components/noice";
import Tabs from "./components/tabs";
import NewsList from "./components/list";
import { useContext, useEffect, useState } from "react";
import { newsApi } from "../../api/news-api";
import { contentApi } from "../../api/content-api";
import { homeApi } from "../../api/home-api";
import Zixunlist from "./components/zixunlist";
import CoinList from "./components/coinList";
import { companyApi } from "../../api/company";
import { LoginMsgContext, WSContext } from "../../router/router";
import Optionbox2 from "./components/optionbox2";
import Optionbox3 from "./components/optionbox3";
import HomePopup from "./components/homepopup";
import { userApi } from "../../api/user-api";

export default function HomeCenter() {
  const reader = new FileReader();
  let WS = null;
  const [content, setContent] = useState({} as any);
  const [companyData, setCompanyData] = useState(null as any);
  const [coinListData, setCoinListData] = useContext(WSContext);
  const [loginmsg, setloginmsg] = useContext(LoginMsgContext);
  const [isShowHomePop, setIShowHomePop] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [index, setindex] = useState(1);
  let coinListDataMap = {} as any;
  const [ctmarketlist, setCtmarketlist] = useState([] as any[]);

  const loadUserInfoData = async () => {
    const data = await userApi.userInfo();
    if (data.ok) {
      setUserInfo(data.data);
    }
  };
  const loadContentList = async () => {
    let data = await contentApi.list({ pageNum: 1, pageSize: 1 });
    if (data.ok) {
      data = data.data.records;
      if (data.length >= 1) {
        setContent(data[0]);
      }
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

  //初始化获取公司
  async function initCompany() {
    const res = await companyApi.domain();
    if (res.ok) {
      setCompanyData(res.data);
    }
  }
  useEffect(() => {
    loadUserInfoData();
    initCompany();
    loadContentList();
  }, []);
  useEffect(() => {
    loadctmarketlistData();
  }, []);
  return (
    <div className="page">
      <HomeTopBar companyData={companyData} setIShowHomePop={setIShowHomePop} />
      <Swipper companyData={companyData} />
      <Noice content={content} />
      <Zixunlist coinListData={coinListData} ctmarketlist={ctmarketlist} />
      <Optionbox loginmsg={loginmsg} />
      <Optionbox2 loginmsg={loginmsg} />
      <Optionbox3 index={index} setindex={setindex} />
      <CoinList coinListData={coinListData} ctmarketlist={ctmarketlist} index={index}/>
      {/* 个人弹窗 */}
      <HomePopup
        isShowHomePop={isShowHomePop}
        setIShowHomePop={setIShowHomePop}
        userInfo={userInfo}
      />
      <div
        style={{
          height: "50px",
        }}
      ></div>
      <BottomBar index={1} />
    </div>
  );
}