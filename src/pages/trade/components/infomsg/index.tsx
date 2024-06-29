import { useNavigate } from "react-router-dom";
import { Popup, Space, Button } from "antd-mobile";
import "./index.css";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { useState } from "react";
import Search from "../../../../components/search";
import { imageConfig } from "../../../../config/config";

export default function InfoMsg({setvisibleInfoMsg}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div class="tradeinfomsg-1">
      <div class="tradeinfomsg-2">
        <strong class="tradeinfomsg-3">{translate(getText("交割合约规则说明"))}</strong>
      </div>
      <div class="tradeinfomsg-4">
        {translate(getText("预测未来一段时间的涨跌。以下单时间的价格为起始价，以预测周期最后一秒的价格为结算价，结算价大于起始价则为涨，结算价小于起始价则为跌。"))}
      </div>
      <div class="tradeinfomsg-5">
        <div class="tradeinfomsg-6" onClick={()=>{
          setvisibleInfoMsg(false);
        }}>{translate(getText("我知道了"))}</div>
      </div>
    </div>
  );
}
