import { useNavigate } from "react-router-dom";
import "./index.css";
import { NoticeBar } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { Badge } from "antd";

export default function Optionbox3({ loginmsg }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const la = localStorage.getItem("i18n") ? localStorage.getItem("i18n") : "en";
  const companySkin = localStorage.getItem("companySkin");
  return (
    <div id="homebar" class="optionbox3-1">
      <div class="optionbox3-2">
        <div class="optionbox3-3">
          <div class="optionbox3-4">
            <div class="optionbox3-5">
              <div class="optionbox3-6">
                <div class="optionbox3-7">
                  <div class="optionbox3-8">
                    <span class="optionbox3-9">涨幅榜</span>
                  </div>
                </div>
                <div class="optionbox3-10">
                  <div class="optionbox3-11">
                    <span class="optionbox3-12">跌幅榜</span>
                  </div>
                </div>
                <div class="optionbox3-13">
                  <div class="optionbox3-14">
                    <span class="optionbox3-15">24H成交额</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
