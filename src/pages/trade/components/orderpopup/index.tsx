import { useNavigate } from "react-router-dom";
import { Popup, Space, Button, Toast } from "antd-mobile";
import "./index.css";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { useEffect, useState } from "react";
import Search from "../../../../components/search";
import { imageConfig } from "../../../../config/config";

export default function OrderPopup({
  nowTab,
  type,
  setType,
  isShowOrder,
  setIsShowOrder,
  coinListData,
  index,
  ctmarketlist,
  userInfo,
  buyCoin,
  hysetInfo,
  setyqsy,
}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [type2, setType2] = useState(1);
  const [num, setNum] = useState("");
  const [hyTimes, setHyTimes] = useState([]);
  const [hyTzeds, setHyTzeds] = useState([]);
  const [hyYkbls, setHyYkbls] = useState([]);
  let [minNum, setminNum] = useState(100);
  const [cykbl, setcykbl] = useState(100);
  const [isUse, setIsUse] = useState(true);
  //加载节点
  const getNodes = () => {
    if (!hyTimes) {
      return "";
    }
    const nodes = [];
    for (let index = 0; index < hyTimes.length; index++) {
      let hyTime = hyTimes[index];
      let hyTzed = hyTzeds[index];
      let cykbl = hyYkbls[index];
      const node = (
        <div
          class={type2 === index + 1 ? "orderPopup-22" : "orderPopup-25"}
          onClick={() => {
            setType2(index + 1);
            setminNum(hyTzed);
            // setNum(hyTzed);
            setcykbl(cykbl);
          }}
        >
          <div class="orderPopup-23">{hyTime}</div>
          <div class="orderPopup-24">{cykbl}%</div>
        </div>
      );
      nodes.push(node);
    }
    return nodes;
  };

  useEffect(() => {
    setHyTimes(hysetInfo.hyTime);
    setHyTzeds(hysetInfo.hyTzed);
    setHyYkbls(hysetInfo.hyYkbl);
    setcykbl(hysetInfo.hyYkbl ? hysetInfo.hyYkbl[0] : 100);
    // setNum(hysetInfo.hyTzed ? hysetInfo.hyTzed[0] : 100);
    setminNum(hysetInfo.hyTzed ? hysetInfo.hyTzed[0] : 100);
  }, [hysetInfo]);
  return (
    <Popup
      visible={isShowOrder}
      onMaskClick={() => {
        setIsShowOrder(false);
      }}
      position="bottom"
      bodyStyle={{ width: "100vw", backgroundColor: "#f5f5f5" }}
    >
      <div class="orderPopup-1">
        <div class="orderPopup-2">
          <p class="orderPopup-3">{translate(getText("訂單確認"))}</p>
          <div
            class="orderPopup-4"
            onClick={() => {
              setIsShowOrder(false);
            }}
          ></div>
        </div>
        <div class="orderPopup-5">
          <div class="orderPopup-6">
            <div class="orderPopup-7">
              <p class="orderPopup-8">{translate(getText("名稱"))}</p>
              <p class="orderPopup-9">
                {nowTab?.toUpperCase()}
                <span class="orderPopup-10">/USDT</span>
              </p>
            </div>
            <div class="orderPopup-11">
              <p class="orderPopup-12">{translate(getText("方向"))}</p>
              <p class={type==1?"orderPopup-13":"orderPopup-13-1"} >{translate(getText(type == 1 ? "買多" : "買空"))}</p>
            </div>
            <div class="orderPopup-14">
              <p class="orderPopup-15">{translate(getText("現價"))}</p>
              <p class="orderPopup-16">{coinListData[nowTab]?.close}</p>
            </div>
          </div>
          <div class="orderPopup-17">
            <div class="orderPopup-18">
              <div class="orderPopup-19">
                <div class="orderPopup-20">
                  <div class="orderPopup-21">{getNodes()}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="orderPopup-37">
            <div class="orderPopup-38">
              <div class="orderPopup-39">
                <p class="orderPopup-40">{translate(getText("買入數量"))}</p>
              </div>
            </div>
            <div class="orderPopup-41">
              <div class="orderPopup-42">
                <input
                  placeholder={translate(getText("最少10起買"))}
                  class="orderPopup-44"
                  type="number"
                  min={minNum}
                  name="num"
                  value={num}
                  onChange={(e) => {
                    setNum(parseInt(e.target.value));
                    setTimeout(() => {
                      if (e.target.value && cykbl) {
                        setyqsy(parseInt(e.target.value) * cykbl * 0.01);
                      } else {
                        setyqsy(0);
                      }
                    }, 0);
                  }}
                />
              </div>
            </div>
            <div class="orderPopup-45">
              <p class="orderPopup-46">{translate(getText("可用餘額"))}:{userInfo?.usdt}</p>
              {/* <p class="orderPopup-47">手續費:0%</p> */}
            </div>
          </div>
          <div class="orderPopup-48">
            <div
              class="orderPopup-49"
              onClick={() => {
                if (num < minNum) {
                  Toast.show({
                    content: `${translate(getText("最低投資額"))} ${minNum}`,
                  });
                  return;
                }
                if (!isUse) {
                  return;
                }
                setIsUse(false);
                setTimeout(() => {
                  setIsUse(true);
                }, 3000);
                buyCoin({
                  ccoinname: `${nowTab.toUpperCase()}/USDT`,
                  ctzed: num,
                  ctzfx: type,
                  ctime: hyTimes[type2 - 1].toUpperCase(),
                  cykbl,
                });
              }}
            >
              {translate(getText("確認下單"))}
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
}
