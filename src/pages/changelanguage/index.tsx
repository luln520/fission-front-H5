import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { c2cApi } from "../../api/c2c-api";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function ChangeLanguage() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div className="page">
      <TopBar title={""} isBack={true} />
      <CenterPage />
    </div>
  );
}
