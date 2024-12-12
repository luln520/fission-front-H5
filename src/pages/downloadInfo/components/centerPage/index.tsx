import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "antd-mobile";
import { getText } from "../../../../utils/util";
import "./index.css";
import { imageConfig } from "../../../../config/config";

export default function DownlandPage({ url }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const title = localStorage.getItem("title");
  return <iframe src={url} className="iframeDiv"></iframe>;
}
