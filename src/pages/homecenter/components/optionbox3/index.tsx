import { useNavigate } from "react-router-dom";
import "./index.css";
import { NoticeBar } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { Badge } from "antd";

export default function Optionbox3({ index, setindex }) {
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
                <div
                  class={index == 1 ? "optionbox3-7" : "optionbox3-10"}
                  onClick={() => {
                    setindex(1);
                  }}
                >
                  <div class="optionbox3-8">
                    <span class="optionbox3-9">{translate(getText("涨幅榜"))}</span>
                  </div>
                </div>
                <div
                  class={index == 2 ? "optionbox3-7" : "optionbox3-10"}
                  onClick={() => {
                    setindex(2);
                  }}
                >
                  <div class="optionbox3-11">
                    <span class="optionbox3-12">{translate(getText("跌幅榜"))}</span>
                  </div>
                </div>
                <div
                  class={index == 3 ? "optionbox3-7" : "optionbox3-10"}
                  onClick={() => {
                    setindex(3);
                  }}
                >
                  <div class="optionbox3-14">
                    <span class="optionbox3-15">{translate(getText("24H成交额"))}</span>
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
