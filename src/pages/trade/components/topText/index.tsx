import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TopText({ setIsShowCoin, nowTab, coinListData }) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const { t: translate } = useTranslation();
  return (
    <div class="marketTopText-1">
      <div
        class={
          coinListData[nowTab]?.open > coinListData[nowTab]?.close
            ? "marketTopText-2-1"
            : "marketTopText-2"
        }
      >
        <div
          class="marketTopText-3"
          onClick={() => {
            setIsShowCoin(true);
          }}
        >
          <p class="marketTopText-4">
            {nowTab?.toUpperCase()}
            <span class="marketTopText-5">/USDT</span>
          </p>
          <i class="marketTopText-6"></i>
        </div>
        <h1 class="marketTopText-7">{coinListData[nowTab]?.close}</h1>
        <p class="marketTopText-8">
          <span class="marketTopText-9">
            {(
              coinListData[nowTab]?.close - coinListData[nowTab]?.open
            )?.toFixed(2)}
          </span>
          <span class="marketTopText-10">
            {" "}
            {coinListData[nowTab]?.close &&
              (
                ((coinListData[nowTab]?.close - coinListData[nowTab]?.open) /
                  coinListData[nowTab]?.open) *
                100
              ).toFixed(2)}
            {!coinListData[nowTab]?.close && "0.00"}%
          </span>
        </p>
      </div>
      <div class="marketTopText-11">
        <ul class="marketTopText-12">
          <li class="marketTopText-13">
            <p class="marketTopText-14">{translate(getText("開盤"))}</p>
            <div class="marketTopText-15">{coinListData[nowTab]?.open}</div>
          </li>
          <li class="marketTopText-13">
            <p class="marketTopText-14">{translate(getText("成交量"))}</p>
            <div class="marketTopText-15">
              {" "}
              {(coinListData[nowTab]?.vol / 10000).toFixed(2)}{translate(getText("萬"))}
            </div>
          </li>
          <li class="marketTopText-13">
            <p class="marketTopText-14">{translate(getText("最低"))}</p>
            <div class="marketTopText-15">{coinListData[nowTab]?.low}</div>
          </li>
          <li class="marketTopText-13">
            <p class="marketTopText-14">{translate(getText("最高"))}</p>
            <div class="marketTopText-15">
              {JSON.stringify(coinListData[nowTab]?.high)}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
