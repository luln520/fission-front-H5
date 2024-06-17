import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import copy from "copy-to-clipboard";
import { Cell, Dialog } from "react-vant";
import "./index.css";
import { Button } from "antd";
import { Toast } from "antd-mobile";
import { useState } from "react";
import { changeLanguage, languagesData } from "../../../../i18n/i18n";

export default function CenterPage() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");

  const changelan = (languageStr) => {
    //英语
    changeLanguage(languageStr);
  };
  // 列表
  const getArray = () => {
    const nodes = [];
    for (const landata of languagesData) {
      nodes.push(
        <div
          class="languagechange-6"
          onClick={() => {
            changelan(landata?.code);
          }}
        >
          <div class="languagechange-7">
            <span class="languagechange-8">{landata?.title}</span>
          </div>
          {landata?.code == lan && <i class="languagechange-9"></i>}
        </div>
      );
    }
    return nodes;
  };

  return (
    <div class="languagechange-1">
      <div class="languagechange-2">
        <div class="languagechange-3">
          <span class="languagechange-4">{translate(getText("語言選擇"))}</span>
        </div>
      </div>
      <div class="languagechange-5">{getArray()}</div>
    </div>
    // <div className="languagechange-1">
    //   <div
    //     className={lan == "en" ? "languagechange-3" : "languagechange-2"}
    //     onClick={() => {
    //       changelan("en");
    //     }}
    //   >
    //     English
    //   </div>
    //   <div
    //     className={lan == "zh" ? "languagechange-3" : "languagechange-2"}
    //     onClick={() => {
    //       changelan("zh");
    //     }}
    //   >
    //     繁体中文
    //   </div>
    //   <div
    //     className={lan == "ar" ? "languagechange-3" : "languagechange-2"}
    //     onClick={() => {
    //       changelan("ar");
    //     }}
    //   >
    //     اللغة العربية
    //   </div>
    //   <div
    //     className={lan == "ja" ? "languagechange-3" : "languagechange-2"}
    //     onClick={() => {
    //       changelan("ja");
    //     }}
    //   >
    //     日本語
    //   </div>
    //   <div
    //     className={lan == "vi" ? "languagechange-3" : "languagechange-2"}
    //     onClick={() => {
    //       changelan("vi");
    //     }}
    //   >
    //     Tiếng Việt
    //   </div>
    //   <div
    //     className={lan == "es" ? "languagechange-3" : "languagechange-2"}
    //     onClick={() => {
    //       changelan("es");
    //     }}
    //   >
    //     Español
    //   </div>
    //   <div
    //     className={lan == "de" ? "languagechange-3" : "languagechange-2"}
    //     onClick={() => {
    //       changelan("de");
    //     }}
    //   >
    //     Deutsch
    //   </div>
    //   <div
    //     className={lan == "fr" ? "languagechange-3" : "languagechange-2"}
    //     onClick={() => {
    //       changelan("fr");
    //     }}
    //   >
    //     Français
    //   </div>

    //   <div
    //     className={lan == "it" ? "languagechange-3" : "languagechange-2"}
    //     onClick={() => {
    //       changelan("it");
    //     }}
    //   >
    //     Italiano
    //   </div>
    //   <div
    //     className={lan == "pt" ? "languagechange-3" : "languagechange-2"}
    //     onClick={() => {
    //       changelan("pt");
    //     }}
    //   >
    //     Português
    //   </div>
    // </div>
  );
}
