import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { c2cApi } from "../../api/c2c-api";
import { companyApi } from "../../api/company";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function ChatCenter() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [companyData, setCompanyData] = useState({} as any);
  //初始化获取公司
  async function initCompany() {
    const res = await companyApi.domain();
    if (res.ok) {
      setCompanyData(res.data);
    }
  }
  useEffect(() => {
    initCompany();
  }, []);
  return (
    <div
      className="page"
    >
      <TopBar title={translate(getText("在線客服"))} isBack={true} />
      <CenterPage companyData={companyData}/>
    </div>
  );
}
