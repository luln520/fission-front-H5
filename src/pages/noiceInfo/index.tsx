import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { c2cApi } from "../../api/c2c-api";
import { contentApi } from "../../api/content-api";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function NoiceInfo() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [content, setContent] = useState({} as any);
  const la = localStorage.getItem("i18n") ? localStorage.getItem("i18n") : "en";

  const loadContentList = async () => {
    let data = await contentApi.list({ pageNum: 1, pageSize: 1 });
    if (data.ok) {
      data = data.data.records;
      if (data.length >= 1) {
        setContent(data[0]);
      }
    }
  };
  const getContent = () => {
    const contentStr =
      content[la == "zh" ? "content" : `content${la[0].toUpperCase()}${la[1]}`];
    return <span key={"contentStrSpan" + Math.random()}>{contentStr}</span>;
  };

  useEffect(() => {
    loadContentList();
  }, []);
  return (
    <div
      className="page"
      style={{
        backgroundColor: "#f7f6fb",
      }}
    >
      <TopBar title={getContent()} isBack={true} />
      <CenterPage content={getContent()}/>
    </div>
  );
}
