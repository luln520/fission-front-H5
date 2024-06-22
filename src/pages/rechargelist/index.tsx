import { Toast } from "antd-mobile";
import { Cell, Dialog } from "react-vant";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { c2cApi } from "../../api/c2c-api";
import { coinApi } from "../../api/coin-api";
import { currencyApi } from "../../api/currency-api";
import { financeApi } from "../../api/finance-api";
import TopBar from "../../components/topBar";
import TopBar2 from "../../components/topBar2";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";
import C2CCKTS from "./components/c2cckts";
import C2CCKTS2 from "./components/c2cckts2";
import C2CCK from "../c2cckcenter/components/c2cck";

export default function RechargeList() {
  const navigate = useNavigate();
  const uid = localStorage.getItem("uid");
  const { t: translate } = useTranslation();
  const [coinList, setCoinList] = useState([] as any[]);
  //加载种类
  const loadCoinData = async () => {
    const data = await coinApi.list();
    if (data.ok) {
      //排序
      data.data.sort(function (a, b) {
        return a.sort - b.sort;
      });
      setCoinList(data.data);
    }
  };

  useEffect(() => {
    loadCoinData();
  }, []);
  return (
    <div className="page">
      <TopBar2
        title={translate(getText("入金"))}
        isBack={true}
        mini={translate(getText("充值明细"))}
        miniClick={() => {
          navigate("/rechargeorderlist");
        }}
      />
      <CenterPage coinList={coinList} />
    </div>
  );
}
