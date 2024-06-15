import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { newsApi } from "../../api/news-api";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function HelpInfo() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [help, setHelp] = useState({} as any);
  const lan = localStorage.getItem("i18n");
  const name = lan == "zh" ? "" : lan.charAt(0).toUpperCase() + lan.slice(1);
  const params = useParams();
  //加载数 据
  const loadData = async () => {
    const data = await newsApi.list();
    if (data.ok) {
      for (const help of data.data) {
        if (params?.id == help.id) {
          setHelp(help);
          break;
        }
      }
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="page">
      <TopBar title={translate(getText("帮助详情"))} isBack={true} />
      <CenterPage help={help} />
    </div>
  );
}
