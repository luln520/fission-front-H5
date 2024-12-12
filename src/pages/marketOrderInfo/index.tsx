import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { json, useLocation, useNavigate, useParams } from "react-router-dom";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function MarketOrderInfo() {
  const navigate = useNavigate();
  const param = useParams();
  const location = useLocation();
  const [data, setData] = useState();
  const { t: translate } = useTranslation();
  useEffect(() => {
    const strJson = decodeURIComponent(location.search.replace("?data=", ""));
    setData(JSON.parse(strJson));
  }, []);
  return (
    <div className="page">
      <TopBar title={translate(getText("交易明細"))} isBack={true} />
      <CenterPage data={data} />
    </div>
  );
}
