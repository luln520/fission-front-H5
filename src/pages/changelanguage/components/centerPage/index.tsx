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
  );
}
