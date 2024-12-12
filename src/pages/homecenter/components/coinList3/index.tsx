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

  const getNodes = () => {
    const nodes = [];
    let coinListDataTemp = coinListData;
    for (let index = 0; index < ctmarketlist.length; index++) {
      const ctmarket = ctmarketlist[index];
      const key = ctmarket.coinname;
      nodes.push(
        <span
          className="newsmarket-11"
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <div className="newsmarket-12">
            <div className="newsmarket-13">
              <img src={getLogo(key)} className="newsmarket-14" />
              <span className="newsmarket-15">{key.toUpperCase()}/USDT</span>
            </div>
            <div className="newsmarket-16">
              <span
                className={
                  coinListData[key]?.close < coinListData[key]?.open
                    ? "newsmarket-17-1"
                    : "newsmarket-17"
                }
              >
                {coinListData[key]?.close}
                {/* <span key={'newsmarketclosea'+index}>{coinListData[key]?.close}</span>
                <span key={'newsmarketcloseb'+index}>{!coinListData[key]?.close && "--.--"}</span> */}
              </span>
            </div>
            <div className="newsmarket-18">
              <span
                className={
                  coinListData[key]?.close < coinListData[key]?.open
                    ? "newsmarket-19-1"
                    : "newsmarket-19"
                }
              >
                {(
                    ((coinListData[key]?.close - coinListData[key]?.open) /
                      coinListData[key]?.open) *
                    100
                  ).toFixed(2)}
                {/* <span key={'newsmarketopena'+index}>{coinListData[key]?.close &&
                  (
                    ((coinListData[key]?.close - coinListData[key]?.open) /
                      coinListData[key]?.open) *
                    100
                  ).toFixed(2)}</span>
                <span key={'newsmarketopenb'+index}>{coinListData[key]?.close?'':"0.00"}</span>% */}
              </span>
            </div>
          </div>
        </span>
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
    <div className="newsmarket-1">
      <div className="newsmarket-2">
        <div className="newsmarket-3">
          <span className="newsmarket-4">{translate(getText("市場名稱"))}</span>
        </div>
        <div className="newsmarket-5">
          <span className="newsmarket-6">{translate(getText("最新價格"))}</span>
        </div>
        <div className="newsmarket-7">
          {/* <span className="newsmarket-8">{translate(getText("24H漲跌"))}</span> */}
          <span className="newsmarket-8">24H</span>
        </div>
      </div>
      <div id="tradebox" className="newsmarket-10">
        {getNodes()}
      </div>
    </div>
  );
}
