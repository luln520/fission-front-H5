import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Search from "../../../../components/search";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CoinList({ coinListData, ctmarketlist }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [name, setName] = useState("");
  const [type, setType] = useState(1);
  const getZFNodes = () => {
    const nodes = [];
    let coinListDataTemp = coinListData;
    for (const key in coinListDataTemp) {
      if (name) {
        if (name.toLowerCase() !== key) {
          continue;
        }
      }
      nodes.push(
        <div
          className="homecoinlist-6"
          key={key}
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <div className="homecoinlist-7">
            <div className="homecoinlist-8">
              <img src={getLogo(key)} className="homecoinlist-10" />
            </div>
            <h1 className="homecoinlist-11">
              {key.toUpperCase()}
              <span className="homecoinlist-12">/USDT</span>
            </h1>
            <p className="homecoinlist-13">{coinListData[key]?.close}</p>
            <p
              className={
                coinListData[key]?.close < coinListData[key]?.open
                  ? "homecoinlist-383"
                  : "homecoinlist-14"
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
            </p>
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
      if (name) {
        if (name.toLowerCase() !== key) {
          continue;
        }
      }
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
        <div class="homecoinlist-7">
          <div class="homecoinlist-8">
            <div class="homecoinlist-9">
              <div class="homecoinlist-10"></div>
              <span class="homecoinlist-11"></span>
              <img
                src="http://qt.tinshwk.xyz:8810/upload_file/2024-04-22/d0qmxqsmot0r71uoex.png"
                draggable="false"
                class="homecoinlist-12"
              />
            </div>
            <div class="homecoinlist-13">
              <span class="homecoinlist-14">LTC</span>
            </div>
            <div class="homecoinlist-15">
              <span class="homecoinlist-16">/USDT</span>
            </div>
          </div>
          <div class="homecoinlist-17">
            <span class="homecoinlist-18">79.859</span>
          </div>
          <div class="homecoinlist-19">+1.49%</div>
        </div>
        <div class="homecoinlist-46">
          <div class="homecoinlist-47">
            <div class="homecoinlist-48">
              <div class="homecoinlist-49"></div>
              <span class="homecoinlist-50"></span>
              <img
                src="http://qt.tinshwk.xyz:8810/upload_file/2024-04-22/d0qmxqslbr49xndoxd.png"
                draggable="false"
                class="homecoinlist-51"
              />
            </div>
            <div class="homecoinlist-52">
              <span class="homecoinlist-53">DAI</span>
            </div>
            <div class="homecoinlist-54">
              <span class="homecoinlist-55">/USDT</span>
            </div>
          </div>
          <div class="homecoinlist-56">
            <span class="homecoinlist-57">0.9996</span>
          </div>
          <div class="homecoinlist-58">-0.02%</div>
        </div>
      </div>
    </div>
  );
}
