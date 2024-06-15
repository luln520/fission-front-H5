import { Toast } from "antd-mobile";
import { Cell, Dialog } from "react-vant";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { c2cApi } from "../../api/c2c-api";
import { coinApi } from "../../api/coin-api";
import TopBar from "../../components/topBar";
import TopBar2 from "../../components/topBar2";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";
import { financeApi } from "../../api/finance-api";
import { currencyApi } from "../../api/currency-api";
import C2CTk from "./components/c2ctk";

export default function ExtractList() {
  const navigate = useNavigate();
  const [coinList, setCoinList] = useState([] as any[]);
  const uid = localStorage.getItem("uid");
  const [userInfo, setuserInfo] = useState([] as any[]);
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
  }, []);
  //加载数 据
  const loadData = async () => {
    const data = await financeApi.userCoin({ uid });
    if (data.ok) {
      setuserInfo(data.data);
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
    loadData();
    loadQbSumData();
    loadAreaData();
    loadcklistData();
    loadCurrencyData();
  }, []);
  return (
    <div
      className="page"
      style={{
        backgroundColor: "#f7f6fb",
      }}
    >
      <TopBar2
        title={translate(getText("出金"))}
        isBack={true}
        mini={translate(getText("提现明细"))}
        miniClick={() => {
          navigate("/extractorderlist");
        }}
      />
      <CenterPage
        coinList={coinList}
        userInfo={userInfo}
        qbSum={qbSum}
        setVisibleCK={setVisibleCK}
        setVisibleTK={setVisibleTK}
        setVisibleTK2={setVisibleCKTS2}
        isShowZF={isShowZF}
      />

      {/* c2c提现款 */}
      <Dialog
        visible={visibleTK}
        title={translate(getText("温馨提示"))}
        showCancelButton
        confirmButtonText={translate(getText("确认"))}
        cancelButtonText={translate(getText("取消"))}
        onConfirm={() => {
          navigate(`/c2ctx/${currencyIdTK}T${bankType}`);
        }}
        onCancel={() => setVisibleTK(false)}
      >
        <C2CTk
          currencylist={currencylist}
          currencyId={currencyIdTK}
          setcurrencyId={setcurrencyIdTK}
          bankType={bankType}
          setbankType={setbankType}
        />
      </Dialog>
    </div>
  );
}
