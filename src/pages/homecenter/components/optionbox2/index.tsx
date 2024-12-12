import { useNavigate } from "react-router-dom";
import "./index.css";
import { NoticeBar } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { Badge } from "antd";

export default function Optionbox2({ loginmsg }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const la = localStorage.getItem("i18n") ? localStorage.getItem("i18n") : "en";
  const companySkin = localStorage.getItem("companySkin");
  return (
      <div className="optionbox2-1 optionbox2-transaction">
        <div className="optionbox2-2">
          <div className="optionbox2-3"></div>
          <div className="optionbox2-4">
            <div className="optionbox2-5">
              <div className="optionbox2-6"></div>
            </div>
            <div className="optionbox2-7">
              <div className="optionbox2-8"></div>
            </div>
          </div>
          <img
              src={"/home/Quick-transaction.png"}
              draggable="false"
              className="optionbox2-9"
              onClick={() => {
                navigate("/trade/btc");
              }}
          />
        </div>
        <header>Quick transaction</header>
        <footer>Safe and convenient</footer>
        <aside>
          <img src="/home/trans-arrow-right.png"/>
        </aside>

      </div>
  );
}
