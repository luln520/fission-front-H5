import "./index.css";
import PageLogin from "./components/pageLogin";
import { userApi } from "../../api/user-api";
import { saveToken } from "../../utils/token-util";
import { useNavigate } from "react-router-dom";
import { Toast } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../utils/util";
import { companyApi } from "../../api/company";
import { useContext, useEffect, useState } from "react";
import TopBar4 from "../../components/topBar4";
import { NoLoginMsgContext } from "../../router/router";

export default function Login() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [companyData, setCompanyData] = useState({} as any);
  const [nologinmsg, setnologinmsg] = useContext(NoLoginMsgContext);
  //执行登录
  const doLogin = async (loginData) => {
    if (loginData.username && loginData.password) {
      const data = await userApi.login(loginData);
      if (data.ok) {
        const userInfo = data.data;
        saveToken(userInfo.token);
        localStorage.setItem("uid", userInfo.id);
        localStorage.setItem("username", userInfo.username);
        localStorage.setItem("userCode", userInfo.userCode);
        Toast.show(translate(getText("登錄成功")));
        setTimeout(() => {
          window.location.href = "/homecenter";
        }, 500);
      } else {
        Toast.show(data.msg);
      }
    } else {
      Toast.show(translate(getText("請填寫完整信息")));
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
  }, []);
  return (
    <div className="page">
      <PageLogin
        companyData={companyData}
        doLogin={doLogin}
        nologinmsg={nologinmsg}
      />
    </div>
  );
}
