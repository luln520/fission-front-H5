import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function LockUpCenter() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div
      className="page"
      style={{
        backgroundColor: "#e3e6ea",
      }}
    >
      <TopBar title={translate(getText("鎖倉挖礦"))} isBack={true} />
      <CenterPage />
      <div style={{
        height:10
      }}>

      </div>
    </div>
  );
}
