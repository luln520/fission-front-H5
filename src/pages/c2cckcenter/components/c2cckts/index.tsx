import { useTranslation } from "react-i18next";
import { Dropdown, message, Select, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";
import { useState } from "react";

export default function C2CCKTS({}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");

  return (
    <div  className="overlay-content-1">
      <div  className="overlay-content-2">
        <div  className="overlay-content-3"></div>
        <div  className="overlay-content-4"></div>
        <div  className="overlay-content-5"></div>
        <div  className="overlay-content-6"></div>
      </div>
      <p  className="overlay-content-7">
        {translate(getText("匹配C2C商家中，請您耐心等待1-5分鐘"))}
        ...
      </p>
    </div>
  );
}
