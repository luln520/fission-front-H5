import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import copy from "copy-to-clipboard";
import { Cell, Dialog } from "react-vant";
import "./index.css";
import { Button } from "antd";
import { Toast } from "antd-mobile";
import { useState } from "react";

export default function CenterPage() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const line = localStorage.getItem("line");
  const changeline = (linenum) => {
    localStorage.setItem("line", linenum);
    navigate(-1);
  };

  return (
    <div className="xhxl-1">
      <div
        className={line == 1 ? "xhxl-2" : "xhxl-5"}
        onClick={() => {
          changeline(1);
        }}
      >
        {translate(getText("線路"))} 1[926ms]
      </div>
      <div
        className={line == 2 ? "xhxl-2" : "xhxl-5"}
        onClick={() => {
          changeline(2);
        }}
      >
        {translate(getText("線路"))} 2[-ms]
      </div>
    </div>
  );
}
