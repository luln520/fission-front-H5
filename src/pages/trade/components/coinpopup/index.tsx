import { useNavigate } from "react-router-dom";
import { Popup, Space, Button } from "antd-mobile";
import "./index.css";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { useState } from "react";
import Search from "../../../../components/search";
import { imageConfig } from "../../../../config/config";

export default function CoinPopup({
  nowTab,
  isShowCoin,
  setIsShowCoin,
  coinListData,
  index,
  ctmarketlist,
  collectlist,
}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [popIndex, setPopIndex] = useState(index);
  const [name, setName] = useState("");
  const toPage = (name) => {
    const uri = "trade";
    navigate(`/${uri}/${name}`);
    setIsShowCoin(false);
  };

  //去重
  function uniqueBySet(arr, key) {
    const uniqueSet = new Set();
    const uniqueArray = [];
    for (const item of arr) {
      const keyValue = item[key];
      if (!uniqueSet.has(keyValue)) {
        uniqueArray.push(item);
        uniqueSet.add(keyValue);
      }
    }
    return uniqueArray;
  }
  const getNodes = () => {
    const nodes = [];
    let coinListDataTemp = coinListData;
    for (const key in coinListDataTemp) {
      nodes.push(
        <div
          class={
            nowTab == key ? "coinPopupTopTitlelb-13" : "coinPopupTopTitlelb-12"
          }
          onClick={() => {
            toPage(key);
          }}
        >
          {key.toUpperCase()}/USDT
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
    <Popup
      visible={isShowCoin}
      onMaskClick={() => {
        setIsShowCoin(false);
      }}
      position="left"
      bodyStyle={{ backgroundColor: "#f5f5f5" }}
    >
      <div class="coinPopupTopTitlelb-1">
        <div class="coinPopupTopTitlelb-2">
          <div class="coinPopupTopTitlelb-3">
            <div class="coinPopupTopTitlelb-4">
              <div class="coinPopupTopTitlelb-5">
                <div class="coinPopupTopTitlelb-6">
                  <div class="coinPopupTopTitlelb-7">
                    <i
                      class="coinPopupTopTitlelb-8"
                      onClick={() => {
                        setIsShowCoin(false);
                      }}
                    ></i>
                  </div>
                  <div class="coinPopupTopTitlelb-9">
                    <span class="coinPopupTopTitlelb-10">{translate(getText("合约交易"))}</span>
                  </div>
                  <div class="coinPopupTopTitlelb-11">{getNodes()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
}
