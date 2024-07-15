import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TopBar({
  coinname,
  iscollect,
  collectAdd,
  collectDel,
  setIsShowCoin,
  setvisibleInfoMsg,
  coinListData,
}) {
  const [zq, setzq] = useState(1);
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const { t: translate } = useTranslation();

  function getCurrentDateTime() {
    let now = new Date();
    // 将当前时间转换为 GMT-4
    now = new Date(now.getTime() - (12 * 60 * 60 * 1000));
    now.setMinutes(now.getMinutes() + 1);
    let year = now.getFullYear();
    // 注意：月份是从0开始的，所以需要加1
    let month = String(now.getMonth() + 1).padStart(2, "0");
    let day = String(now.getDate()).padStart(2, "0");
    let hour = String(now.getHours()).padStart(2, "0");
    let minute = String(now.getMinutes()).padStart(2, "0");
    let second = String(now.getSeconds()).padStart(2, "0");
    return (
      year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + "00"
    );
  }

  function getCurrentTime() {
    let now = new Date();
    now = new Date(now.getTime() - (12 * 60 * 60 * 1000));
    let year = now.getFullYear();
    let hour = String(now.getHours()).padStart(2, "0");
    let minute = String(now.getMinutes()).padStart(2, "0");
    let time1 = hour + ":" + minute;
    now.setMinutes(now.getMinutes() + zq);
    minute = String(now.getMinutes()).padStart(2, "0");
    hour = String(now.getHours()).padStart(2, "0");
    let time2 = hour + ":" + minute;
    return time1 + "~" + time2;
  }

  function getCurrents() {
    let now = new Date();
    now = new Date(now.getTime() - (12 * 60 * 60 * 1000));
    let second = String(now.getSeconds()).padStart(2, "0");
    return 60 - second + (zq - 1) * 60;
  }

  return (
    <div class="marketTopBarlb-1">
      <div class="marketTopBarlb-2">
        <i
          class="marketTopBarlb-3"
          onClick={() => {
            setIsShowCoin(true);
          }}
        ></i>
        <div class="marketTopBarlb-4">
          <span class="marketTopBarlb-5">{coinname?.toUpperCase()}/USDT</span>
        </div>
        <div
          class={
            coinListData[coinname]?.close > coinListData[coinname]?.open
              ? "marketTopBarlb-6-1"
              : "marketTopBarlb-6"
          }
        >
          <span class="marketTopBarlb-7">
            {coinListData[coinname]?.close < coinListData[coinname]?.open
              ? ""
              : "+"}
            {coinListData[coinname]?.close &&
              (
                ((coinListData[coinname]?.close -
                  coinListData[coinname]?.open) /
                  coinListData[coinname]?.open) *
                100
              ).toFixed(2)}
            %
          </span>
        </div>
        <i
          class="marketTopBarlb-8"
          onClick={() => {
            setvisibleInfoMsg(true);
          }}
        ></i>
      </div>
      <div class="marketTopBarlb-38">
        <div
          class={zq == 1 ? "marketTopBarlb-39" : "marketTopBarlb-40"}
          onClick={() => {
            setzq(1);
          }}
        >
          60s
        </div>
        <div
          class={zq == 2 ? "marketTopBarlb-39" : "marketTopBarlb-40"}
          onClick={() => {
            setzq(2);
          }}
        >
          120s
        </div>
        <div
          class={zq == 3 ? "marketTopBarlb-39" : "marketTopBarlb-40"}
          onClick={() => {
            setzq(3);
          }}
        >
          5min
        </div>
        <div
          class={zq == 4 ? "marketTopBarlb-39" : "marketTopBarlb-40"}
          onClick={() => {
            setzq(4);
          }}
        >
          10min
        </div>
      </div>
      <div class="marketTopBarlb-43">
        <div class="marketTopBarlb-44">
          <div class="marketTopBarlb-45">{translate(getText("截止下单"))}(GMT-4)</div>
          <div class="marketTopBarlb-46">{translate(getText("倒计时"))}</div>
          <div class="marketTopBarlb-47">{translate(getText("时间周期"))}</div>
        </div>
        <div class="marketTopBarlb-48">
          <div class="marketTopBarlb-49">{getCurrentDateTime()}</div>
          <div class="marketTopBarlb-50">
            <span class="marketTopBarlb-51">{getCurrents()} s</span>
          </div>
          <div class="marketTopBarlb-52">{getCurrentTime()}</div>
        </div>
      </div>
    </div>
  );
}
