import { useNavigate } from "react-router-dom";
import "./index.css";
import { NoticeBar } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { Badge } from "antd";

export default function Optionbox({ loginmsg }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const la = localStorage.getItem("i18n") ? localStorage.getItem("i18n") : "en";
  const companySkin = localStorage.getItem("companySkin");
  const propertyType = localStorage.getItem("propertyType");
  return (
    <div className="optionbox-1">
      <div className="optionbox-2 optionbox-box">
        {propertyType == 1 && (
          <div
            className="optionbox-3 optionbox-item"
            onClick={() => {
              navigate("/extractlist");
            }}
          >
            <div className="optionbox-4">
              <img
                src="/home/raise2.png"
                draggable="false"
                className="optionbox-7"
              />
            </div>
            <div className="optionbox-8">
              <span className="optionbox-9">{translate(getText("提币"))}</span>
            </div>
          </div>
        )}
        {propertyType == 1 && (
          <div
            className="optionbox-10 optionbox-item"
            onClick={() => {
              navigate("/rechargelist");
            }}
          >
            <div className="optionbox-11">
              <img
                src="/home/coin2.png"
                draggable="false"
                className="optionbox-14"
              />
            </div>
            <div className="optionbox-15">
              <span className="optionbox-16">{translate(getText("充币"))}</span>
            </div>
          </div>
        )}
        <div
          className="optionbox-17 optionbox-item"
          onClick={() => {
            navigate("/chatcenter");
          }}
        >
          <div className="optionbox-18">
            <img
              src="/home/service.png"
              draggable="false"
              className="optionbox-21"
            />
          </div>
          <div className="optionbox-22">
            <span className="optionbox-23">{translate(getText("客服"))}</span>
          </div>
        </div>
        <div
          className="optionbox-24 optionbox-item"
          onClick={() => {
            navigate("/changelanguage");
          }}
        >
          <div className="optionbox-25">
            <img
              src="/home/Language.png"
              draggable="false"
              className="optionbox-28"
            />
          </div>
          <div className="optionbox-29">
            <span className="optionbox-30">{translate(getText("语言"))}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
