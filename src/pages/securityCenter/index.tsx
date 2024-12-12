import "./index.css";
import BottomBar from "../../components/bottomBar";
import TopBar from "../../components/topBar";
import Chart from "./components/chart";
import pako from "pako";
import { useState } from "react";
import { useEffect } from "react";
import Center from "./components/center";
import { Toast } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../utils/util";
import { userApi } from "../../api/user-api";

export default function SecurityCenter() {
  const uid = localStorage.getItem("uid");
  const [userInfo, setUserInfo] = useState({});
  const [type, setType] = useState(true);
  const { t: translate } = useTranslation();

  const loadUserInfoData = async () => {
    const data = await userApi.userInfo();
    if (data.ok) {
      setUserInfo(data.data);
    }
  };

  useEffect(() => {
    loadUserInfoData();
  }, []);
  return (
    <div className="page">
      <TopBar title={translate(getText("安全中心"))} isBack={true} />
      <Chart
        userInfo={userInfo}
      />
      <Center
        userInfo={userInfo}
      />
    </div>
  );
}
