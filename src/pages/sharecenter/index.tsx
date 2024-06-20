import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { contentApi } from "../../api/content-api";
import { noticeApi } from "../../api/notice-api";
import { userApi } from "../../api/user-api";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function ShareCenter() {
  const navigate = useNavigate();
  const uid = localStorage.getItem("uid");
  const [userInfo, setUserInfo] = useState({});
  const { t: translate } = useTranslation();
  //加载数据
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
      <TopBar title={translate(getText("分享好友"))} isBack={true} />
      <CenterPage
        userInfo={userInfo}
      />
    </div>
  );
}
