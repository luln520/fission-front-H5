import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { WSContext } from "../../../../router/router";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TradeTop({ setIsShow, nowTab }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const [coinListData, setCoinListData] = useContext(WSContext);
  useEffect(() => {
    // console.info(kInfo);
  }, []);
  return (
    <div className="tradeInfo-1">
      <div className="tradeInfo-2">
        <div
          className={
            (coinListData[nowTab]?.close - coinListData[nowTab]?.open) /
              coinListData[nowTab]?.open >
            0
              ? "tradeInfo-3-1"
              : "tradeInfo-3"
          }
        >
          <div className="tradeInfo-4">{coinListData[nowTab]?.close}</div>
          <div className="tradeInfo-5">
            {translate(getText("成交"))}:{" "}
            {coinListData[nowTab]?.vol?.toFixed(2)}
          </div>
          <div className="tradeInfo-6">
            <span className="tradeInfo-7">
              {translate(getText("涨幅"))}:
              {coinListData[nowTab]?.close &&
                (
                  ((coinListData[nowTab]?.close - coinListData[nowTab]?.open) /
                    coinListData[nowTab]?.open) *
                  100
                ).toFixed(2)}
              {!coinListData[nowTab]?.close && "0.00"}%
            </span>
            <span
              className="tradeInfo-8"
              style={{
                display: lan == "zh" ? "" : "none",
              }}
            >
              {coinListData[nowTab]?.close &&
                (
                  ((coinListData[nowTab]?.close - coinListData[nowTab]?.open) /
                    coinListData[nowTab]?.open) *
                  100
                ).toFixed(2)}
              {!coinListData[nowTab]?.close && "0.00"}{" "}
              {translate(getText("点"))}
            </span>
          </div>
        </div>
        <div className="tradeInfo-9">
          <div className="tradeInfo-10">
            <div className="tradeInfo-11">
              <div className="tradeInfo-12">{translate(getText("买"))}</div>
              <div className="tradeInfo-13">{coinListData[nowTab]?.close}</div>
            </div>
            <div className="tradeInfo-14">
              <div className="tradeInfo-15">{translate(getText("卖"))}</div>
              <div className="tradeInfo-16">{coinListData[nowTab]?.close}</div>
            </div>
            <div className="tradeInfo-17">
              <div className="tradeInfo-18">{translate(getText("开"))}</div>
              <div className="tradeInfo-19">{coinListData[nowTab]?.open}</div>
            </div>
            <div className="tradeInfo-20">
              <div className="tradeInfo-21">{translate(getText("收"))}</div>
              <div className="tradeInfo-22">{coinListData[nowTab]?.low}</div>
            </div>
            <div className="tradeInfo-23">
              <div className="tradeInfo-24">{translate(getText("高"))}</div>
              <div className="tradeInfo-25">{coinListData[nowTab]?.high}</div>
            </div>
            <div className="tradeInfo-26">
              <div className="tradeInfo-27">{translate(getText("低"))}</div>
              <div className="tradeInfo-28">{coinListData[nowTab]?.low}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
