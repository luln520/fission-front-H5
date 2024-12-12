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
    const uri = "lever";
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
          className={
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
      <div className="coinPopupTopTitlelb-1">
        <div className="coinPopupTopTitlelb-2">
          <div className="coinPopupTopTitlelb-3">
            <div className="coinPopupTopTitlelb-4">
              <div className="coinPopupTopTitlelb-5">
                <div className="coinPopupTopTitlelb-6">
                  <div className="coinPopupTopTitlelb-7">
                    <i
                      className="coinPopupTopTitlelb-8"
                      onClick={() => {
                        setIsShowCoin(false);
                      }}
                    ></i>
                  </div>
                  <div className="coinPopupTopTitlelb-9">
                    <span className="coinPopupTopTitlelb-10">{translate(getText("永续合约"))}</span>
                  </div>
                  <div className="coinPopupTopTitlelb-11">{getNodes()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
}
