import "./index.css";
import MyCenter from "./components/myCenter";
import BottomBar from "../../components/bottomBar";
import { userApi } from "../../api/user-api";
import { useContext, useEffect, useState } from "react";
import { companyApi } from "../../api/company";
import { LoginMsgContext } from "../../router/router";

export default function My() {
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
    <div
      className="page"
      style={{
        backgroundColor: "#fff",
      }}
    >
      <MyCenter userInfo={userInfo} companyData={companyData} loginmsg={loginmsg}/>
      <div
        style={{
          height: "50px",
        }}
      ></div>
      <BottomBar index={4} />
    </div>
  );
}
