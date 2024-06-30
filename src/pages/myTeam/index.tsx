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

export default function MyTeam() {
  const navigate = useNavigate();
  const uid = localStorage.getItem("uid");
  const [teamInfo, setTeamInfo] = useState({});
  const { t: translate } = useTranslation();
  //加载数据
  const loadTeamInfoData = async () => {
    const data = await userApi.userTeams({uid:106});
    if (data.ok) {
      setTeamInfo(data.data);
    }
  };

  useEffect(() => {
    loadTeamInfoData();
  }, []);
  return (
    <div className="page">
      <TopBar title={translate(getText("我的团队"))} isBack={true} />
      <CenterPage
        teamInfo={teamInfo}
      />
    </div>
  );
}
