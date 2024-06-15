import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { c2cApi } from "../../api/c2c-api";
import { coinApi } from "../../api/coin-api";
import { financeApi } from "../../api/finance-api";
import { huobiApi } from "../../api/huobi";
import TopBar from "../../components/topBar";
import TopBar2 from "../../components/topBar2";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function Extract() {
  const navigate = useNavigate();
  const uid = localStorage.getItem("uid");
  const [userInfo, setuserInfo] = useState([] as any[]);
  const [coinList, setCoinList] = useState([] as any[]);
  const [addressList, setAddressList] = useState([] as any[]);
  const [coinPriceData, setcoinPriceData] = useState({} as any);
  const [use, setUse] = useState({} as any);
  const { t: translate } = useTranslation();
  const param = useParams();

  //加载地址
  const loadAddressData = async () => {
    const data = await financeApi.list({ uid });
    if (data.ok) {
      setAddressList(data.data);
    }
  };
  //加载数据
  const loadData = async () => {
    const data = await financeApi.userCoin({ uid });
    if (data.ok) {
      setuserInfo(data.data);
    }
  };
  //申请
  const tbhandle = async (tbhandleData) => {
    const data = await financeApi.tbhandle({ ...tbhandleData, uid });
    Toast.show({ content: data.msg });
    loadData();
  };

  //加载种类
  const loadCoinData = async () => {
    const data = await coinApi.list();
    if (data.ok) {
      setCoinList(data.data);
      //设置使用
      for (const item of data.data) {
        if (param?.id == item.id) {
          setUse(item);
          //加载价格
          if (item.name != "usdt") {
            loadCoinPriceData(item.name);
          }
        }
      }
    }
  };

  //加载价格
  const loadCoinPriceData = async (name) => {
    const data = await huobiApi.getPrice(name);
    if (data.status == "ok") {
      setcoinPriceData(data.data[0]);
    }
  };

  useEffect(() => {
    loadData();
    loadCoinData();
    loadAddressData();
  }, []);
  return (
    <div
      className="page"
      style={{
        backgroundColor: "#f7f6fb",
      }}
    >
      <TopBar2
        title={translate(getText("提现")) + `(${use?.name?.toUpperCase()})`}
        isBack={true}
      />
      <CenterPage
        userInfo={userInfo}
        addressList={addressList}
        coinList={coinList}
        tbhandle={tbhandle}
        use={use}
        setUse={setUse}
        coinPriceData={coinPriceData}
      />
    </div>
  );
}
