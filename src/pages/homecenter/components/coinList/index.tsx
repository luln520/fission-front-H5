import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Search from "../../../../components/search";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CoinList({ coinListData, ctmarketlist, index }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [type, setType] = useState(1);
  const get1Nodes = () => {
    const nodes = [];
    let coinListDataTemp = coinListData;
    //排序
    for (const key in coinListDataTemp) {
      nodes.push(
        <div
          class="homecoinlist-7"
          key={key}
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <div class="homecoinlist-8">
            <div class="homecoinlist-9">
              <img
                src={getLogo(key)}
                draggable="false"
                class="homecoinlist-12"
              />
            </div>
            <div class="homecoinlist-13">
              <span class="homecoinlist-14">{key.toUpperCase()}</span>
            </div>
            <div class="homecoinlist-15">
              <span class="homecoinlist-16">/USDT</span>
            </div>
          </div>
          <div class="homecoinlist-17">
            <span class="homecoinlist-18">{coinListData[key]?.close}</span>
          </div>
          <div
            class={
              coinListData[key]?.close < coinListData[key]?.open
                ? "homecoinlist-58"
                : "homecoinlist-19"
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
      );
    }
    return nodes;
  };

  const get3Nodes = () => {
    const nodes = [];
    let coinListDataTemp = coinListData;
    //排序
    for (const key in coinListDataTemp) {
      nodes.push(
        <div
          class="homecoinlist-7"
          key={key}
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <div class="homecoinlist-8">
            <div class="homecoinlist-9">
              <img
                src={getLogo(key)}
                draggable="false"
                class="homecoinlist-12"
              />
            </div>
            <div class="homecoinlist-13">
              <span class="homecoinlist-14">{key.toUpperCase()}</span>
            </div>
            <div class="homecoinlist-15">
              <span class="homecoinlist-16">/USDT</span>
            </div>
          </div>
          <div class="homecoinlist-17">
            <span class="homecoinlist-18">{coinListData[key]?.close}</span>
          </div>
          <div
            class="homecoinlist-19-1"
            style={{
              textAlign: "end",
            }}
          >
            {(coinListData[key]?.vol / 10000).toFixed(2)}
            {translate(getText("萬"))}
          </div>
        </div>
      );
    }
    return nodes;
  };

  const getCGNodes = () => {
    const nodes = [];
    let coinListDataTemp = coinListData;
    for (const key in coinListDataTemp) {
      nodes.push(
        <div
          class="jiaoyiliang-3"
          key={key}
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <div class="jiaoyiliang-4">
            <img src={getLogo(key)} class="jiaoyiliang-6" />
          </div>
          <h1 class="jiaoyiliang-7">
            {key.toUpperCase()}
            <span class="jiaoyiliang-8">/USDT</span>
          </h1>
          <p class="jiaoyiliang-9">{coinListData[key]?.close}</p>
          <p class="jiaoyiliang-10">
            {(coinListData[key]?.vol / 10000).toFixed(2)}
            {translate(getText("萬"))}
          </p>
        </div>
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
    <div class="homecoinlist-1">
      <div class="homecoinlist-2">
        <div class="homecoinlist-3">交易对</div>
        <div class="homecoinlist-4">最新价</div>
        <div class="homecoinlist-5">24H跌涨幅</div>
      </div>
      <div class="homecoinlist-6">
        {index == 1 && get1Nodes()}
        {index == 2 && get1Nodes()}
        {index == 3 && get3Nodes()}
      </div>
    </div>
  );
}
