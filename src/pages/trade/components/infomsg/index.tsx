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
        {translate(getText("預測未來一段時間的漲跌。以下單時間的價格為起始價，以預測週期最後一秒的價格為結算價，結算價大於起始價則為漲，結算價小於起始價則為跌。"))}
      </div>
      <div class="tradeinfomsg-5">
        <div class="tradeinfomsg-6" onClick={()=>{
          setvisibleInfoMsg(false);
        }}>{translate(getText("我知道了"))}</div>
      </div>
    </div>
  );
}
