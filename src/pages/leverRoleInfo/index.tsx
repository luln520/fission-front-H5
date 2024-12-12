import "./index.css";
import PageCenter from "./components/pagecenter";
import { userApi } from "../../api/user-api";
import { areaApi } from "../../api/area-api";
import { smsApi } from "../../api/sms-api";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { getText } from "../../utils/util";
import { useTranslation } from "react-i18next";
import TopBar from "../../components/topBar";

export default function LeverRoleInfo() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div className="page">
      <TopBar title={translate(getText("规则说明"))} isBack={true} />
      <PageCenter />
    </div>
  );
}
