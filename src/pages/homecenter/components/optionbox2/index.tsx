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
    <div class="optionbox2-1">
      <div class="optionbox2-2">
        <div class="optionbox2-3"></div>
        <div class="optionbox2-4">
          <div class="optionbox2-5">
            <div class="optionbox2-6"></div>
          </div>
          <div class="optionbox2-7">
            <div class="optionbox2-8"></div>
          </div>
        </div>
        <img
          src="http://h5.tinshwk.xyz/assets/ad-49349ca8.png"
          draggable="false"
          class="optionbox2-9"
        />
      </div>
    </div>
  );
}
