import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { companyApi } from "../../api/company";
import { userApi } from "../../api/user-api";
import TopBar from "../../components/topBar";
import { LoginMsgContext } from "../../router/router";
import { getText } from "../../utils/util";
import SettingPage from "./components/settingPage";

export default function Setting() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [userInfo, setUserInfo] = useState({});
  const [companyData, setCompanyData] = useState({} as any);
  const [loginmsg, setloginmsg] = useContext(LoginMsgContext);
  const loadUserInfoData = async () => {
    const data = await userApi.userInfo();
    if (data.ok) {
      setUserInfo(data.data);
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
    initCompany();
    loadUserInfoData();
  }, []);
  return (
    <div className="page">
      <TopBar title={""} isBack={true} />
      <SettingPage userInfo={userInfo} />
    </div>
  );
}
