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
          className="languagechange-6"
          onClick={() => {
            changelan(landata?.code);
          }}
        >
          <div className="languagechange-7">
            <span className="languagechange-8">{landata?.title}</span>
          </div>
          {landata?.code == lan && <i className="languagechange-9"></i>}
        </div>
      );
    }
    return nodes;
  };

  return (
    <div className="languagechange-1">
      <div className="languagechange-2">
        <div className="languagechange-3">
          <span className="languagechange-4">{translate(getText("語言選擇"))}</span>
        </div>
      </div>
      <div className="languagechange-5">{getArray()}</div>
    </div>
  );
}
