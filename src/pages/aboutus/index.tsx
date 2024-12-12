import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { companyApi } from "../../api/company";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function AboutUS() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
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
    <div className="page">
      <TopBar title={translate(getText("关于我们"))} isBack={true} />
      <CenterPage companyData={companyData}/>
    </div>
  );
}
