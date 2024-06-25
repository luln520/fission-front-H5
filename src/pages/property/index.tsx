import "./index.css";
import { Cell, Dialog } from "react-vant";
import { Toast } from "antd-mobile";
import PropertyCenter from "./components/propertyCenter";
import BottomBar from "../../components/bottomBar";
import TopBar from "../../components/topBar";
import MaoYi from "../trade/components/maoyi";
import { useEffect, useState } from "react";
import { financeApi } from "../../api/finance-api";
import { useTranslation } from "react-i18next";
import { getText } from "../../utils/util";
import C2CCK from "./components/c2cck";
import { c2cApi } from "../../api/c2c-api";
import C2CTk from "./components/c2ctk";
import { useNavigate } from "react-router-dom";
import C2CCKTS from "./components/c2cckts";
import C2CCKTS2 from "./components/c2cckts2";
import { currencyApi } from "../../api/currency-api";
import Propertypop from "./components/propertypop";
import { userApi } from "../../api/user-api";

export default function Property() {
  const uid = localStorage.getItem("uid");
  const navigate = useNavigate();
  const [userInfo, setuserInfo] = useState({} as any);
  const [mockUserInfo, setMockUserInfo] = useState({} as any);
  const [arealist, setarealist] = useState([] as any[]);
  const [currencylist, setcurrencylist] = useState([] as any[]);
  const [cklist, setcklist] = useState([] as any[]);
  const { t: translate } = useTranslation();
  const [qbSum, setQbSum] = useState({} as any);
  const [visibleCK, setVisibleCK] = useState(false);
  const [visibleCKTS, setVisibleCKTS] = useState(false);
  const [visibleCKTS2, setVisibleCKTS2] = useState(false);
  const [visibleTK, setVisibleTK] = useState(false);
  const [isShowZF, setIsShowZF] = useState(false);
  const [isShowPop, setIsShowPop] = useState(false);

  //c2c存款
  const [num, setNum] = useState("");
  const [currencyIdCK, setcurrencyIdCK] = useState(0);
  const [bankType, setbankType] = useState(0);
  //c2c 提款
  const [currencyIdTK, setcurrencyIdTK] = useState(0);

  //加载数 据
  const loadcklistData = async () => {
    const data = await c2cApi.czlist({ uid, type: 1 });
    if (data.ok) {
      setcklist(data.data);
      for (const item of data.data) {
        if (item.status == 1 || item.status == 4) {
          setIsShowZF(true);
          break;
        } else {
          setIsShowZF(false);
        }
      }
    }
  };

  useEffect(() => {
    loadData();
    getMockUserInfo();
  }, []);
  //加载数 据
  const loadData = async () => {
    const data = await financeApi.userCoin({ uid });
    if (data.ok) {
      setuserInfo(data.data);
    }
  };

  //加载数 据
  const getMockUserInfo = async () => {
    const data = await userApi.mockUserInfo({ uid });
    if (data.ok) {
      setMockUserInfo(data.data);
    }
  };

  const changepropertyType = async (type) => {
    const data = await userApi.mockUser({ type, uid });
    if (data.ok) {
      localStorage.setItem("propertyType", type);
      setIsShowPop(false);
    }
  };

  //加载数 据
  const loadCurrencyData = async () => {
    const data = await currencyApi.list({ pageNum: 1, pageSize: 100 });
    if (data.ok) {
      setcurrencylist(data.data?.records);
    }
  };

  //加载数 据
  const loadAreaData = async () => {
    const data = await c2cApi.arealist();
    if (data.ok) {
      setarealist(data.data);
    }
  };
  //加载数 据
  const loadQbSumData = async () => {
    const data = await financeApi.qbSum({ uid });
    if (data.ok) {
      setQbSum(data.data);
    }
  };

  //c2c存款
  const c2cCz = async () => {
    let dataInfo = {
      uid,
      num,
      bankType,
      currenyId: currencyIdCK,
    };
    const data = await c2cApi.cz(dataInfo);
    if (data.ok) {
      Toast.show({ content: data.data });
      setNum("");
      setbankType(0);
      setcurrencyIdCK(0);
      setVisibleCK(false);
      setVisibleCKTS(true);
    } else {
      Toast.show({ content: data.msg });
    }
    loadcklistData();
  };

  useEffect(() => {
    loadData();
    loadQbSumData();
    loadAreaData();
    loadcklistData();
    loadCurrencyData();
  }, []);
  return (
    <div className="page">
      <PropertyCenter
        userInfo={userInfo}
        mockUserInfo={mockUserInfo}
        qbSum={qbSum}
        setVisibleCK={setVisibleCK}
        setVisibleTK={setVisibleTK}
        setVisibleTK2={setVisibleCKTS2}
        isShowZF={isShowZF}
        setIsShowPop={setIsShowPop}
      />
      {/* 侧拉框 */}
      <Propertypop
        mockUserInfo={mockUserInfo}
        userInfo={userInfo}
        isShowPop={isShowPop}
        setIsShowPop={setIsShowPop}
        changepropertyType={changepropertyType}
      />

      <div
        style={{
          height: "50px",
        }}
      ></div>
      <BottomBar index={5} />
    </div>
  );
}
