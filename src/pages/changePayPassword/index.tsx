import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function ChangePayPassword() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div className="page">
      <TopBar title={translate(getText("修改交易密碼"))} isBack={true} />
      <CenterPage />
    </div>
  );
}
