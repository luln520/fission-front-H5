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
  const [type, setType] = useState(1);
  const getUSDTNodes = () => {
    const nodes = [];
    let coinListDataTemp = coinListData;
    for (const key in coinListDataTemp) {
      nodes.push(
        <div
          class="quotation-29"
          key={key}
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <div class="quotation-30">
            <div class="quotation-31">
              <span class="quotation-32">{key.toUpperCase()}/USDT</span>
            </div>
            <div class="quotation-33">
              <span class="quotation-34">
                VOL：{(coinListData[key]?.vol / 10000).toFixed(2)}M
              </span>
            </div>
          </div>
          <div class="quotation-35">
            <span class="quotation-36">
              <div class="quotation-37">
                <span class="quotation-38">{coinListData[key]?.close}</span>
              </div>
              <div class="quotation-39">
                <span class="quotation-40">$ {coinListData[key]?.close}</span>
              </div>
            </span>
          </div>
          <div
            class={
              coinListData[key]?.close < coinListData[key]?.open
                ? "quotation-41"
                : "quotation-54"
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
        // <li
        //   class="quotationcenter-37"
        //   key={key}
        //   onClick={() => {
        //     navigate(`/trade/${key}`);
        //   }}
        // >
        //   <div class="quotationcenter-38">
        //     <div class="quotationcenter-39">
        //       <div class="quotationcenter-40">
        //         <img src={getLogo(key)} class="quotationcenter-42" />
        //       </div>
        //     </div>
        //     <div class="quotationcenter-43">
        //       <span class="quotationcenter-44">
        //         {key.toUpperCase()}
        //         <small class="quotationcenter-45">/USDT</small>
        //       </span>
        //       <p class="quotationcenter-46">
        //         {translate(getText("量"))}：
        //         {(coinListData[key]?.vol / 10000).toFixed(2)}
        //         {translate(getText("萬"))}
        //       </p>
        //     </div>
        //   </div>
        //   <div class="quotationcenter-47">
        //     <span
        //       class={
        //         coinListData[key]?.close < coinListData[key]?.open
        //           ? "quotationcenter-132"
        //           : "quotationcenter-48"
        //       }
        //     >
        //       {coinListData[key]?.close}
        //     </span>
        //   </div>
        //   <div class="quotationcenter-49">
        //     <div
        //       class={
        //         coinListData[key]?.close < coinListData[key]?.open
        //           ? "quotationcenter-134"
        //           : "quotationcenter-50"
        //       }
        //     >
        //       {coinListData[key]?.close < coinListData[key]?.open ? "" : "+"}
        //       {coinListData[key]?.close &&
        //         (
        //           ((coinListData[key]?.close - coinListData[key]?.open) /
        //             coinListData[key]?.open) *
        //           100
        //         ).toFixed(2)}
        //       %
        //     </div>
        //   </div>
        // </li>
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
    <div class="quotation-1">
      <div class="quotation-2">
        <div class="quotation-3">
          <div class="quotation-4">
            <div class="quotation-5">
              <div class="quotation-6">
                <div class="quotation-7">
                  <div
                    class={type == 1 ? "quotation-8" : "quotation-10"}
                    onClick={() => {
                      setType(1);
                    }}
                  >
                    <div class={type == 1 ? "quotation-10" : "quotation-12"}>
                      <span class="quotation-10">{translate(getText("交割合约"))}</span>
                    </div>
                  </div>
                  <div
                    class={type == 2 ? "quotation-8" : "quotation-10"}
                    onClick={() => {
                      setType(2);
                    }}
                  >
                    <div class={type == 2 ? "quotation-10" : "quotation-12"}>
                      <span class="quotation-13">{translate(getText("永续"))}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="quotation-14"></div>
      </div>
      <div class="quotation-15">
        <div class="quotation-16">
          <div class="quotation-17">{translate(getText("交易对"))}</div>
          <div class="quotation-18">{translate(getText("最新价"))}</div>
          <div class="quotation-19">
            {translate(getText("涨跌幅"))}
            <div class="quotation-20">
              <div class="quotation-21"></div>
              <div class="quotation-22">
                <div class="quotation-23">
                  <div class="quotation-24"></div>
                </div>
                <div class="quotation-25">
                  <div class="quotation-26"></div>
                </div>
              </div>
              <img
                src="data:image/png;base64,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"
                draggable="false"
                class="quotation-27"
              />
            </div>
          </div>
        </div>
        <div class="quotation-28">{getUSDTNodes()}</div>
      </div>
    </div>
  );
}
