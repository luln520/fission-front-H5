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
    <div id="homebar" className="optionbox3-1">
      <div className="optionbox3-2">
        <div className="optionbox3-3">
          <div className="optionbox3-4">
            <div className="optionbox3-5">
              <div className="optionbox3-6">
                <div
                  className={index == 1 ? "optionbox3-7" : "optionbox3-10"}
                  onClick={() => {
                    setindex(1);
                  }}
                >
                  <div className="optionbox3-8">
                    <span className="optionbox3-9">{translate(getText("涨幅榜"))}</span>
                  </div>
                </div>
                <div
                  className={index == 2 ? "optionbox3-7" : "optionbox3-10"}
                  onClick={() => {
                    setindex(2);
                  }}
                >
                  <div className="optionbox3-11">
                    <span className="optionbox3-12">{translate(getText("跌幅榜"))}</span>
                  </div>
                </div>
                <div
                  className={index == 3 ? "optionbox3-7" : "optionbox3-10"}
                  onClick={() => {
                    setindex(3);
                  }}
                >
                  <div className="optionbox3-14">
                    <span className="optionbox3-15">{translate(getText("24H成交额"))}</span>
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
