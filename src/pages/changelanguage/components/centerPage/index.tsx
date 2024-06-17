import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import copy from "copy-to-clipboard";
import { Cell, Dialog } from "react-vant";
import "./index.css";
import { Button } from "antd";
import { Toast } from "antd-mobile";
import { useState } from "react";
import { changeLanguage } from "../../../../i18n/i18n";

export default function CenterPage() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const changelan = (languageStr) => {
    //英语
    changeLanguage(languageStr);
    navigate(-1);
  };

  return (
    <div class="languagechange-1">
      <div class="languagechange-2">
        <div class="languagechange-3">
          <span class="languagechange-4">设置语言</span>
        </div>
      </div>
      <div class="languagechange-5">
        <div class="languagechange-6">
          <div class="languagechange-7">
            <span class="languagechange-8">简体中文</span>
          </div>
          <i class="languagechange-9"></i>
        </div>
        <div class="languagechange-10">
          <div class="languagechange-11">
            <span class="languagechange-12">English</span>
          </div>
        </div>
        <div class="languagechange-13">
          <div class="languagechange-14">
            <span class="languagechange-15">عربي</span>
          </div>
        </div>
      </div>
    </div>
  );
}
