import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { convertToSeconds, getText } from "../../../../utils/util";

import "./index.css";

export default function TopBar({
  coinname,
  iscollect,
  collectAdd,
  collectDel,
  setIsShowCoin,
  setvisibleInfoMsg,
  coinListData,
  zq,
  setzq,
  hysetInfo,
}) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const { t: translate } = useTranslation();
  const [hyTimes, setHyTimes] = useState([]);

  //加载节点
  const getNodes = () => {
    if (!hyTimes) {
      return "";
    }
    const nodes = [];
    for (let index = 0; index < hyTimes.length; index++) {
      let hyTime = hyTimes[index];
      const node = (
        <div
          class={zq === index + 1 ? "marketTopBarlb-39" : "marketTopBarlb-40"}
          onClick={() => {
            setzq(index + 1);
          }}
        >
          {hyTime}
        </div>
      );
      nodes.push(node);
    }
    return nodes;
  };

  function convertGMT4() {
    let now = new Date();
    let timezoneOffset = now.getTimezoneOffset();
    let offsetInHours = timezoneOffset / 60;
    let gmt4Offset = -4 + offsetInHours;
    let gmt4Timestamp = now.getTime() + (gmt4Offset * 60 * 60 * 1000);
    let gmt4Time = new Date(gmt4Timestamp);
    return gmt4Time;
  }

  function getCurrentDateTime() {
    const errorTimeStr = localStorage.getItem("errortime");
    const errorTime = parseInt(errorTimeStr);
    let now = convertGMT4();
    
    // 将当前时间转换为 GMT-4
    //now = new Date(now.getTime() + errorTime);
    
    //间隔秒
    if (hyTimes) {
      const jgs = convertToSeconds(hyTimes[zq - 1]);
      now = roundDownToNearestInterval(now, jgs);
      now.setSeconds(now.getSeconds() + jgs);
    }
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
    const errorTimeStr = localStorage.getItem("errortime");
    const errorTime = parseInt(errorTimeStr);
    let now = convertGMT4();
    // 将当前时间转换为 GMT-4
    //now = new Date(now.getTime() + errorTime);
    if (hyTimes) {
      const jgs = convertToSeconds(hyTimes[zq - 1]);
      now = roundDownToNearestInterval(now, jgs);
    }
    let year = now.getFullYear();
    let hour = String(now.getHours()).padStart(2, "0");
    let minute = String(now.getMinutes()).padStart(2, "0");
    let time1 = hour + ":" + minute;
    //获取时间
    //间隔秒
    if (hyTimes) {
      const jgs = convertToSeconds(hyTimes[zq - 1]);
      now.setSeconds(now.getSeconds() + jgs);
    }
    minute = String(now.getMinutes()).padStart(2, "0");
    hour = String(now.getHours()).padStart(2, "0");
    let time2 = hour + ":" + minute;
    return time1 + "~" + time2;
  }

  function getCurrents() {
    let starts = 0;
    let ends = 0;
    const errorTimeStr = localStorage.getItem("errortime");
    const errorTime = parseInt(errorTimeStr);
    let now = convertGMT4();
    // 将当前时间转换为 GMT-4
    //now = new Date(now.getTime() + errorTime);
    starts = parseInt(now.getTime() / 1000);
    if (hyTimes) {
      const jgs = convertToSeconds(hyTimes[zq - 1]);
      now = roundDownToNearestInterval(now, jgs);
      now.setSeconds(now.getSeconds() + jgs);
      ends = parseInt(now.getTime() / 1000);
    }
    return ends - starts;
  }

  //时间向下取值
  function roundDownToNearestInterval(currentDate, seconds) {
    let currentSeconds = currentDate.getSeconds();
    let currentMinutes = currentDate.getMinutes();
    let currentHours = currentDate.getHours();
    // 计算当前时间总秒数
    let totalSeconds =
      currentHours * 3600 + currentMinutes * 60 + currentSeconds;
    // 计算向下取整后的总秒数
    let roundedTotalSeconds = Math.floor(totalSeconds / seconds) * seconds;
    // 将向下取整后的总秒数转换为小时、分钟、秒
    let roundedHours = Math.floor(roundedTotalSeconds / 3600);
    let remainingSeconds = roundedTotalSeconds % 3600;
    let roundedMinutes = Math.floor(remainingSeconds / 60);
    let roundedSeconds = remainingSeconds % 60;
    // 创建一个新的 Date 对象，设置小时、分钟、秒数为向下取整后的值
    let roundedDate = new Date(currentDate);
    roundedDate.setHours(roundedHours);
    roundedDate.setMinutes(roundedMinutes);
    roundedDate.setSeconds(roundedSeconds);
    return roundedDate;
  }
//   function getCurrentDateTime() {
//     try {
//         const errorTimeStr = localStorage.getItem("errortime");
//         const errorTime = Number(errorTimeStr) || 0;
        
//         // 使用基准时间
//         let now = new Date(Date.now() + errorTime);

//         if (hyTimes) {
//             const jgs = convertToSeconds(hyTimes[zq - 1]);
//             now = roundDownToNearestInterval(now, jgs);
//             now = new Date(now.getTime() + jgs * 1000);
//         }

//         let year = now.getFullYear();
//         let month = String(now.getMonth() + 1).padStart(2, "0");
//         let day = String(now.getDate()).padStart(2, "0");
//         let hour = String(now.getHours()).padStart(2, "0");
//         let minute = String(now.getMinutes()).padStart(2, "0");

//         return `${year}/${month}/${day} ${hour}:${minute}:00`;
//     } catch (error) {
//         console.error("getCurrentDateTime处理错误:", error);
//         return new Date().toLocaleString();
//     }
// }

// function getCurrentTime() {
//     try {
//         const errorTimeStr = localStorage.getItem("errortime");
//         const errorTime = Number(errorTimeStr) || 0;
        
//         // 使用基准时间
//         let now = new Date(Date.now() + errorTime);

//         if (hyTimes) {
//             const jgs = convertToSeconds(hyTimes[zq - 1]);
//             now = roundDownToNearestInterval(now, jgs);
//         }

//         let hour1 = String(now.getHours()).padStart(2, "0");
//         let minute1 = String(now.getMinutes()).padStart(2, "0");
//         let time1 = `${hour1}:${minute1}`;

//         // 增加间隔
//         if (hyTimes) {
//             const jgs = convertToSeconds(hyTimes[zq - 1]);
//             now = new Date(now.getTime() + jgs * 1000);
//         }

//         let hour2 = String(now.getHours()).padStart(2, "0");
//         let minute2 = String(now.getMinutes()).padStart(2, "0");
//         let time2 = `${hour2}:${minute2}`;

//         return `${time1}~${time2}`;
//     } catch (error) {
//         console.error("getCurrentTime处理错误:", error);
//         return "00:00~00:00";
//     }
// }

// function getCurrents() {
//     try {
//         const errorTimeStr = localStorage.getItem("errortime");
//         const errorTime = Number(errorTimeStr) || 0;
        
//         // 使用基准时间
//         let now = new Date(Date.now() + errorTime);
//         let starts = Math.floor(now.getTime() / 1000);

//         if (hyTimes) {
//             const jgs = convertToSeconds(hyTimes[zq - 1]);
//             now = roundDownToNearestInterval(now, jgs);
//             now = new Date(now.getTime() + jgs * 1000);
//             let ends = Math.floor(now.getTime() / 1000);
//             return ends - starts;
//         }

//         return 0;
//     } catch (error) {
//         console.error("getCurrents处理错误:", error);
//         return 0;
//     }
// }

// function roundDownToNearestInterval(currentDate, seconds) {
//     try {
//         let currentSeconds = currentDate.getSeconds();
//         let currentMinutes = currentDate.getMinutes();
//         let currentHours = currentDate.getHours();

//         // 计算当前时间总秒数
//         let totalSeconds = currentHours * 3600 + currentMinutes * 60 + currentSeconds;
        
//         // 计算向下取整后的总秒数
//         let roundedTotalSeconds = Math.floor(totalSeconds / seconds) * seconds;
        
//         // 将向下取整后的总秒数转换为小时、分钟、秒
//         let roundedHours = Math.floor(roundedTotalSeconds / 3600);
//         let remainingSeconds = roundedTotalSeconds % 3600;
//         let roundedMinutes = Math.floor(remainingSeconds / 60);
//         let roundedSeconds = remainingSeconds % 60;
        
//         // 创建一个新的 Date 对象，设置小时、分钟、秒数为向下取整后的值
//         let roundedDate = new Date(currentDate);
//         roundedDate.setHours(roundedHours);
//         roundedDate.setMinutes(roundedMinutes);
//         roundedDate.setSeconds(roundedSeconds);
        
//         return roundedDate;
//     } catch (error) {
//         console.error("roundDownToNearestInterval处理错误:", error);
//         return currentDate;
//     }
// }
  useEffect(() => {
    setHyTimes(hysetInfo?.hyTime);
  }, [hysetInfo]);

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
        {getNodes()}
        {/* <div
          class={zq == 1 ? "marketTopBarlb-39" : "marketTopBarlb-40"}
          onClick={() => {
            setzq(1);
          }}
        >
          60s1
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
        </div> */}
      </div>
      <div class="marketTopBarlb-43">
        <div class="marketTopBarlb-44">
          <div class="marketTopBarlb-45">
            {translate(getText("截止下单"))}(GMT-4)
          </div>
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
