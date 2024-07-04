import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TopBar({
  coinname,
  iscollect,
  collectAdd,
  collectDel,
  setIsShowCoin,
  setvisibleInfoMsg,
  coinListData,
}) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const { t: translate } = useTranslation();
  return (
    <div class="leverTopBarlb-1">
      <div class="leverTopBarlb-2">
        <i
          class="leverTopBarlb-3"
          onClick={() => {
            setIsShowCoin(true);
          }}
        ></i>
        <div class="leverTopBarlb-4">
          <span class="leverTopBarlb-5">
            {coinname?.toUpperCase()}/USDT {translate(getText("永续"))}
          </span>
        </div>
        <div
          class={
            coinListData[coinname]?.close > coinListData[coinname]?.open
              ? "leverTopBarlb-6-1"
              : "leverTopBarlb-6"
          }
        >
          <span class="leverTopBarlb-7">
            {coinListData[coinname]?.close < coinListData[coinname]?.open
              ? ""
              : "+"}
            {coinListData[coinname]?.close &&
              (
                ((coinListData[coinname]?.close -
                  coinListData[coinname]?.open) /
                  coinListData[coinname]?.open) *
                100
              ).toFixed(2)}
            %
          </span>
        </div>
        <i
          class="leverTopBarlb-8"
          onClick={() => {
            navigate("/leverroleinfo");
          }}
        ></i>
        {/* <i class="leverTopBarlb-9"></i> */}
      </div>
    </div>
  );
}
