import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { companyApi } from "../../api/company";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function Downland() {
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
    <div className="page">
      <TopBar title={translate(getText("手机下载"))} isBack={true} />
      <CenterPage companyData={companyData}/>
    </div>
  );
}
