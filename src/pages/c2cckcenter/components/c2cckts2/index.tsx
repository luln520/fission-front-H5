import { useTranslation } from "react-i18next";
import { Dropdown, message, Select, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";
import { useState } from "react";

export default function C2CCKTS2({}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");

  return (
    <p className="C2CCKTS2-1">{translate(getText("您还有支付订单未完成,去完成"))}</p>
  );
}
