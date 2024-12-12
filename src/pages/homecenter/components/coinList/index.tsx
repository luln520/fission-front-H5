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
    let coinListDataTemp = [];
    let coinListDataTempSortUp = [];
    let coinListDataTempSortDowon = [];
    //排序
    for (const key in coinListData) {
      if (coinListData[key]?.close > coinListData[key]?.open) {
        coinListDataTempSortUp.push(key);
      } else {
        coinListDataTempSortDowon.push(key);
      }
    }
    coinListDataTemp = [
      ...coinListDataTempSortUp,
      ...coinListDataTempSortDowon,
    ];
    for (const key of coinListDataTemp) {
      nodes.push(
        <div
          className={
            coinListData[key]?.close > coinListData[key]?.open
              ? "homecoinlist-7 homecoinlist-item"
              : "homecoinlist-46 homecoinlist-item"
          }
          key={key}
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <div className="homecoinlist-8">
            <div className="homecoinlist-9">
              <img
                src={getLogo(key)}
                draggable="false"
                className="homecoinlist-12"
              />
            </div>
            <div className="homecoinlist-name">
              <span className="homecoinlist-key">{key.toUpperCase()}</span>
              <span className="homecoinlist-usdt">USDT</span>
            </div>
          </div>
          <div className="homecoinlist-close">{coinListData[key]?.close}</div>
          <div
            className="homecoinlist-up"
            style={{
              background:
                coinListData[key]?.close < coinListData[key]?.open
                  ? "#FF0000"
                  : "#04CF99",
            }}
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

  const get2Nodes = () => {
    const nodes = [];
    let coinListDataTemp = [];
    let coinListDataTempSortUp = [];
    let coinListDataTempSortDowon = [];
    //排序
    for (const key in coinListData) {
      if (coinListData[key]?.close > coinListData[key]?.open) {
        coinListDataTempSortUp.push(key);
      } else {
        coinListDataTempSortDowon.push(key);
      }
    }
    coinListDataTemp = [
      ...coinListDataTempSortDowon,
      ...coinListDataTempSortUp,
    ];
    for (const key of coinListDataTemp) {
      nodes.push(
        <div
          className={
            coinListData[key]?.close > coinListData[key]?.open
              ? "homecoinlist-7 homecoinlist-item"
              : "homecoinlist-46 homecoinlist-item"
          }
          key={key}
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <div className="homecoinlist-8">
            <div className="homecoinlist-9">
              <img
                src={getLogo(key)}
                draggable="false"
                className="homecoinlist-12"
              />
            </div>
            <div className="homecoinlist-name">
              <span className="homecoinlist-key">{key.toUpperCase()}</span>
              <span className="homecoinlist-usdt">USDT</span>
            </div>
          </div>
          <div
            style={{ justifyContent: "space-between" }}
            className="homecoinlist-close"
          >
            <header>{coinListData[key]?.close}</header>
            <footer
              className={
                coinListData[key]?.close < coinListData[key]?.open
                  ? "homecoinlist-red"
                  : ""
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
            </footer>
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
          className={
            coinListData[key]?.close > coinListData[key]?.open
              ? "homecoinlist-7 homecoinlist-item"
              : "homecoinlist-46 homecoinlist-item"
          }
          key={key}
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <div className="homecoinlist-8">
            <div className="homecoinlist-9">
              <img
                src={getLogo(key)}
                draggable="false"
                className="homecoinlist-12"
              />
            </div>
            <div className="homecoinlist-name">
              <span className="homecoinlist-key">{key.toUpperCase()}</span>
              <span className="homecoinlist-usdt">USDT</span>
            </div>
          </div>
          <div className="homecoinlist-close">
            <header>{coinListData[key]?.close}</header>
            <footer className="homecoinlist-19-1">
              {(coinListData[key]?.vol / 10000).toFixed(2)}
              {translate(getText("萬"))}
            </footer>
          </div>
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
    <div className="homecoinlist-1">
      {/*<div className="homecoinlist-2">*/}
      {/*  <div className="homecoinlist-3">{translate(getText("交易对"))}</div>*/}
      {/*  <div className="homecoinlist-4">{translate(getText("最新价"))}</div>*/}
      {/*  <div className="homecoinlist-5">{translate(getText("24H"))}</div>*/}
      {/*</div>*/}
      <div className="homecoinlist-6">
        {index == 1 && get1Nodes()}
        {index == 2 && get2Nodes()}
        {index == 3 && get3Nodes()}
      </div>
    </div>
  );
}
