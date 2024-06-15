import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { c2cApi } from "../../api/c2c-api";
import { financeApi } from "../../api/finance-api";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function C2Ctx() {
  const navigate = useNavigate();
  const uid = localStorage.getItem("uid");
  const [userInfo, setuserInfo] = useState({} as any);
  const { t: translate } = useTranslation();
  const [info, setinfo] = useState({} as any);
  const params = useParams();
  const currencyId = params.currencyId?.split("T")[0];
  const bankType = params.currencyId?.split("T")[1];
  //加载数据
  const loadUserInfoData = async () => {
    const data = await financeApi.userCoin({ uid });
    if (data.ok) {
      setuserInfo(data.data);
    }
  };

  //发送
  const sendTx = async (sendData) => {
    // sendData.currencyId = currencyId;
    sendData.bankType = bankType;
    sendData.uid = uid;
    const data = await c2cApi.tx(sendData);
    if (data.ok) {
      Toast.show({ content: translate(getText("提交成功，等待審核")) });
      navigate(`/c2ctkList`, { replace: true });
    } else {
      Toast.show({ content: data.msg });
    }
  };

  useEffect(() => {
    loadUserInfoData();
  }, []);
  return (
    <div className="page">
      <TopBar title={translate(getText("C2C提款"))} isBack={true} />
      <CenterPage info={info} userInfo={userInfo} sendTx={sendTx} />
    </div>
  );
}
