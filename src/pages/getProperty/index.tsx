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

export default function GetProperty() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const uid = localStorage.getItem("uid");
  
  //领取
  const mockUserAmount = async () => {
    const data = await userApi.mockUserAmount({uid});
    Toast.show(data?.msg);
  };
  return (
    <div className="page">
      <TopBar title={translate(getText("领取"))} isBack={true} />
      <PageCenter mockUserAmount={mockUserAmount}/>
    </div>
  );
}
