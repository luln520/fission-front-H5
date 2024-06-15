import { useNavigate } from "react-router-dom";
import "./index.css";
import { NoticeBar } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import Noice from "../noice";
import { imageConfig } from "../../../../config/config";

export default function Zixunlist({ coinListData, ctmarketlist }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const la = localStorage.getItem("i18n") ? localStorage.getItem("i18n") : "en";
  const getNodes = () => {
    const nodes = [];
    let coinListDataTemp = coinListData;
    const maxLen = ctmarketlist.length > 3 ? 3 : ctmarketlist.length;
    for (let index = 0; index < maxLen; index++) {
      const ctmarket = ctmarketlist[index];
      const key = ctmarket.coinname;
      nodes.push(
        <div
          class="zixunlist-2"
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <div class="zixunlist-3">
            <div class="zixunlist-4">
              <span class="zixunlist-5">{key.toUpperCase()}USDT</span>
            </div>
            <i
              class={
                coinListData[key]?.close > coinListData[key]?.open
                  ? "zixunlist-40"
                  : "zixunlist-6"
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
            </i>
          </div>
          <div
            class={
              coinListData[key]?.close > coinListData[key]?.open
                ? "zixunlist-41"
                : "zixunlist-7"
            }
          >
            {coinListData[key]?.close ? coinListData[key]?.close : "--"}
          </div>
          <div class="zixunlist-8"></div>
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
  return <div class="zixunlist-1">{getNodes()}</div>;
}
