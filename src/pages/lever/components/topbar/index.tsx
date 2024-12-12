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
    <div className="leverTopBarlb-1">
      <div className="leverTopBarlb-2">
        <i
          className="leverTopBarlb-3"
          onClick={() => {
            setIsShowCoin(true);
          }}
        ></i>
        <div className="leverTopBarlb-4">
          <span className="leverTopBarlb-5">
            {coinname?.toUpperCase()}/USDT {translate(getText("永续"))}
          </span>
        </div>
        <div
          className={
            coinListData[coinname]?.close > coinListData[coinname]?.open
              ? "leverTopBarlb-6-1"
              : "leverTopBarlb-6"
          }
        >
          <span className="leverTopBarlb-7">
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
          className="leverTopBarlb-8"
          onClick={() => {
            navigate("/leverroleinfo");
          }}
        ></i>
        {/* <i className="leverTopBarlb-9"></i> */}
      </div>
    </div>
  );
}
