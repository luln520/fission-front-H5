import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { coinApi } from "../../api/coin-api";
import { financeApi } from "../../api/finance-api";
import TopBar from "../../components/topBar";
import TopBar2 from "../../components/topBar2";
import { getText } from "../../utils/util";
import ListPage from "./components/listPage";
import TopPage from "./components/topPage";

export default function AddressList() {
  const navigate = useNavigate();
  const uid = localStorage.getItem("uid");
  const [addressList, setAddressList] = useState([] as any[]);
  const [coinList, setCoinList] = useState([] as any[]);
  const { t: translate } = useTranslation();
  //加载数据
  const loadData = async () => {
    loadAddressData();
    loadCoinData();
  };

  //加载地址
  const loadAddressData = async () => {
    const data = await financeApi.list({ uid });
    if (data.ok) {
      setAddressList(data.data);
    }
  };

  //加载种类
  const loadCoinData = async () => {
    const data = await coinApi.list();
    if (data.ok) {
      setCoinList(data.data);
    }
  };

  //添加地址
  const addAddress = async (address) => {
    const data = await financeApi.add({ uid, ...address });
    if (data.ok) {
      Toast.show({
        content: translate(getText("操作成功")),
      });
    } else {
      Toast.show({
        content: translate(getText("系統錯誤")),
      });
    }
    loadAddressData();
  };
  //删除 地址
  const delAddress = async (id) => {
    const data = await financeApi.del({ id });
    if (data.ok) {
      Toast.show({
        content: translate(getText("操作成功")),
      });
    } else {
      Toast.show({
        content: translate(getText("系統錯誤")),
      });
    }
    loadAddressData();
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div
      className="page"
      style={{
        backgroundColor: "rgb(245, 245, 245)",
      }}
    >
      <TopBar2 title={translate(getText("地址管理"))} isBack={true} />
      <ListPage addressList={addressList} delAddress={delAddress} coinList={coinList} />
    </div>
  );
}
