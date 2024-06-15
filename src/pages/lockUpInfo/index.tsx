import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { financeApi } from "../../api/finance-api";
import { kuangjiApi } from "../../api/kuangm-api";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function LockUpInfo() {
  const uid = localStorage.getItem("uid");
  const navigate = useNavigate();
  const prarm = useParams();
  const [kjInfo, setKjInfo] = useState({} as any);
  const [userCoinInfo, setuserCoinInfo] = useState({});
  const { t: translate } = useTranslation();
  //详情
  const loadKjinfo = async () => {
    let data = await kuangjiApi.detail({ id: prarm?.id, uid });
    if (data.ok) {
      setKjInfo(data.data);
    }
  };

  //用户钱包数据
  const loadUserCoinInfoData = async () => {
    const data = await financeApi.userCoin({ uid });
    if (data.ok) {
      setuserCoinInfo(data.data);
    }
  };

  //购买kj
  const bubKj = async (buyData) => {
    const data = await kuangjiApi.buyKuangji({ uid, ...buyData });
    Toast.show({ content: data.msg });
    loadUserCoinInfoData();
  };
  useEffect(() => {
    loadKjinfo();
    loadUserCoinInfoData();
  }, []);
  return (
    <div
      className="page"
      style={{
        backgroundColor: "#e3e6ea",
      }}
    >
      <TopBar title={translate(getText("產品詳細"))} isBack={true} />
      <CenterPage userCoinInfo={userCoinInfo} kjInfo={kjInfo} bubKj={bubKj} />
    </div>
  );
}
