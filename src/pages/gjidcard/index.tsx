import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { userApi } from "../../api/user-api";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import Info from "./components/info";

export default function GJIdCard() {
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

  const sendCardsc = async (authData) => {
    const data = await userApi.cardsc({
      cardsc: authData.cardsc,
      uid: authData.id,
    });
    if (data.ok) {
      setUserInfo(data.data);
    }
    Toast.show({ content: data.msg });
    loadUserInfoData();
  };
  useEffect(() => {
    loadUserInfoData();
  }, []);
  return (
    <div className="page">
      <TopBar title={translate(getText("高级認證"))} isBack={true} />
      <Info userInfo={userInfo} sendCardsc={sendCardsc} />
    </div>
  );
}
