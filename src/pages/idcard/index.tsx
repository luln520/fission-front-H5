import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { userApi } from "../../api/user-api";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import Info from "./components/info";

export default function IdCard() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [type, setType] = useState(true);
  const { t: translate } = useTranslation();

  const loadUserInfoData = async () => {
    const data = await userApi.userInfo();
    if (data.ok) {
      setUserInfo(data.data);
    }
  };

  const sendAuth = async (authData) => {
    const data = await userApi.auth({ ...authData, uid: authData.id });
    if (data.ok) {
      setUserInfo(data.data);
      navigate(-1);
    }
    Toast.show({ content: data.msg });
    loadUserInfoData();
  };
  useEffect(() => {
    loadUserInfoData();
  }, []);
  return (
    <div className="page">
      <TopBar title={translate(getText("身份驗證"))} isBack={true} />
      <Info userInfo={userInfo} sendAuth={sendAuth} />
    </div>
  );
}
