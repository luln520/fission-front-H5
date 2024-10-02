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
    <div class="optionbox-1">
      <div class="optionbox-2 optionbox-box">
        {propertyType == 1 && (
          <div
            className="optionbox-3 optionbox-item"
            onClick={() => {
              navigate("/extractlist");
            }}
          >
            <div class="optionbox-4">
              <img
                src="/home/raise2.png"
                draggable="false"
                class="optionbox-7"
              />
            </div>
            <div class="optionbox-8">
              <span class="optionbox-9">{translate(getText("提币"))}</span>
            </div>
          </div>
        )}
        {propertyType == 1 && (
          <div
            class="optionbox-10 optionbox-item"
            onClick={() => {
              navigate("/rechargelist");
            }}
          >
            <div class="optionbox-11">
              <img
                src="/home/coin2.png"
                draggable="false"
                class="optionbox-14"
              />
            </div>
            <div class="optionbox-15">
              <span class="optionbox-16">{translate(getText("充币"))}</span>
            </div>
          </div>
        )}
        <div
          class="optionbox-17 optionbox-item"
          onClick={() => {
            navigate("/chatcenter");
          }}
        >
          <div class="optionbox-18">
            <img
              src="/home/service.png"
              draggable="false"
              class="optionbox-21"
            />
          </div>
          <div class="optionbox-22">
            <span class="optionbox-23">{translate(getText("客服"))}</span>
          </div>
        </div>
        <div
          class="optionbox-24 optionbox-item"
          onClick={() => {
            navigate("/changelanguage");
          }}
        >
          <div class="optionbox-25">
            <img
              src="/home/Language.png"
              draggable="false"
              class="optionbox-28"
            />
          </div>
          <div class="optionbox-29">
            <span class="optionbox-30">{translate(getText("语言"))}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
