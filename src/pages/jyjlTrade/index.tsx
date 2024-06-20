import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { contractApi } from "../../api/contract-api";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function JYJLTrade() {
  const uid = localStorage.getItem("uid");
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [hyorders, sethyorders] = useState([] as any[]);

  //加载数 据
  const loadhyorderData = async () => {
    const data = await contractApi.gethyorder({ uid });
    if (data.ok) {
      sethyorders(data.data);
    }
  };
  useEffect(() => {
    loadhyorderData();
  }, []);
  return (
    <div className="page">
      <TopBar title={translate(getText("期權"))} isBack={true} />
      <CenterPage hyorders={hyorders} />
    </div>
  );
}
