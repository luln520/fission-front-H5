import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CenterPage({
  coinListData,
  ctmarketlist,
  collectlist,
}) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const { t: translate } = useTranslation();
  const [type, setType] = useState(2);
  const getUSDTNodes = () => {
    const nodes = [];
    let coinListDataTemp = coinListData;
    for (const key in coinListDataTemp) {
      nodes.push(
        <li
          class="quotationcenter-37"
          key={key}
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <div class="quotationcenter-38">
            <div class="quotationcenter-39">
              <div class="quotationcenter-40">
                <img src={getLogo(key)} class="quotationcenter-42" />
              </div>
            </div>
            <div class="quotationcenter-43">
              <span class="quotationcenter-44">
                {key.toUpperCase()}
                <small class="quotationcenter-45">/USDT</small>
              </span>
              <p class="quotationcenter-46">
                {translate(getText("量"))}：{(coinListData[key]?.vol / 10000).toFixed(2)}{translate(getText("萬"))}
              </p>
            </div>
          </div>
          <div class="quotationcenter-47">
            <span
              class={
                coinListData[key]?.close < coinListData[key]?.open
                  ? "quotationcenter-132"
                  : "quotationcenter-48"
              }
            >
              {coinListData[key]?.close}
            </span>
          </div>
          <div class="quotationcenter-49">
            <div
              class={
                coinListData[key]?.close < coinListData[key]?.open
                  ? "quotationcenter-134"
                  : "quotationcenter-50"
              }
            >
              {coinListData[key]?.close < coinListData[key]?.open ? "" : "+"}
              {coinListData[key]?.close &&
                (
                  ((coinListData[key]?.close - coinListData[key]?.open) /
                    coinListData[key]?.open) *
                  100
                ).toFixed(2)}
              %
            </div>
          </div>
        </li>
      );
    }
    return nodes;
  };
  const getZXNodes = () => {
    const nodes = [];
    for (const data of collectlist) {
      const key = data.coinname;
      nodes.push(
        <li
          class="quotationcenter-37"
          key={key}
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <div class="quotationcenter-38">
            <div class="quotationcenter-39">
              <div class="quotationcenter-40">
                <img src={getLogo(key)} class="quotationcenter-42" />
              </div>
            </div>
            <div class="quotationcenter-43">
              <span class="quotationcenter-44">
                {key.toUpperCase()}
                <small class="quotationcenter-45">/USDT</small>
              </span>
              <p class="quotationcenter-46">
                {translate(getText("量"))}：{(coinListData[key]?.vol / 10000).toFixed(2)}{translate(getText("萬"))}
              </p>
            </div>
          </div>
          <div class="quotationcenter-47">
            <span
              class={
                coinListData[key]?.close < coinListData[key]?.open
                  ? "quotationcenter-132"
                  : "quotationcenter-48"
              }
            >
              {coinListData[key]?.close}
            </span>
          </div>
          <div class="quotationcenter-49">
            <div
              class={
                coinListData[key]?.close < coinListData[key]?.open
                  ? "quotationcenter-134"
                  : "quotationcenter-50"
              }
            >
              {coinListData[key]?.close < coinListData[key]?.open ? "" : "+"}
              {coinListData[key]?.close &&
                (
                  ((coinListData[key]?.close - coinListData[key]?.open) /
                    coinListData[key]?.open) *
                  100
                ).toFixed(2)}
              %
            </div>
          </div>
        </li>
      );
    }
    return nodes;
  };
  const getLogo = (name) => {
    let logo = "";
    for (const ctmarket of ctmarketlist) {
      if (name == ctmarket.coinname) {
        logo = imageConfig.baseImageUrl + ctmarket.logo;
        break;
      }
    }
    return logo;
  };
  return (
    <div class="quotationcenter-1">
      <div class="quotationcenter-2">
        <div class="quotationcenter-3">
          <ul class="quotationcenter-4">
            <li
              class={type == 1 ? "quotationcenter-6" : "quotationcenter-5"}
              onClick={() => {
                setType(1);
              }}
            >
              {translate(getText("自選"))}
            </li>
            <li
              class={type == 2 ? "quotationcenter-6" : "quotationcenter-5"}
              onClick={() => {
                setType(2);
              }}
            >
              USDT
            </li>
          </ul>
        </div>
        <div class="quotationcenter-7">
          <div class="quotationcenter-8">
            <div class="quotationcenter-9">
              <div class="quotationcenter-10">
                <div class="quotationcenter-31">
                  <div class="quotationcenter-32">
                    <div class="quotationcenter-33">
                      <div class="quotationcenter-34">
                        <div class="quotationcenter-35">
                          <ul class="quotationcenter-36">
                            {type == 2 && getUSDTNodes()}
                            {type == 1 && getZXNodes()}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
