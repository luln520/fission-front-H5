<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { Popup, Space, Button, Toast } from "antd-mobile";
import "./index.css";
import { useTranslation } from "react-i18next";
import { convertToSeconds, getText } from "../../../../utils/util";
import { useEffect, useRef, useState } from "react";
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
  mockUserInfo,
  buyCoin,
  hysetInfo,
  setyqsy,
  zq,
}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [type2, setType2] = useState(1);
  const [num, setNum] = useState("");
  const [hyTimes, setHyTimes] = useState([]);
  const [hyTzeds, setHyTzeds] = useState([]);
  const [hyYkbls, setHyYkbls] = useState([]);
  const [hyTzbls, setHyTzbls] = useState([]);
  let [minNum, setminNum] = useState(100);
  const [cykbl, setcykbl] = useState(100);
  const [isUse, setIsUse] = useState(true);
  const propertyType = localStorage.getItem("propertyType");
  const [selectTimes, setSelectTimes] = useState([]);
  //滚动
  const [scrollDistance, setScrollDistance] = useState(0);
  const divRef = useRef(null);
  const [selectIndex, setselectIndex] = useState(1);
  //加载节点
  //百分比
  const [bfbIndex, setbfbIndex] = useState(0);
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
          className={type2 === index + 1 ? "orderpoplb-63" : "orderpoplb-64"}
          onClick={() => {
            setType2(index + 1);
            setminNum(hyTzed);
            // setNum(hyTzed);
            setcykbl(cykbl);
          }}
        >
          {/* <div>{hyTime} </div> */}
          <div>{cykbl}%</div>
        </div>
      );
      nodes.push(node);
    }
    return nodes;
  };

  //合约投资比例
  const getNodesHytzbl = () => {
    if (!hyTzbls) {
      return "";
    }
    const nodes = [];
    for (let index = 0; index < hyTzbls.length; index++) {
      let hytzbl = hyTzbls[index];
      const node = (
        <div
          className={`${bfbIndex === index + 1 ? "orderpoplb-63 orderpoplb-item-act" : "orderpoplb-64"} orderpoplb-item`}
          onClick={() => {
            setNum(
              parseFloat(
                propertyType == 1
                  ? userInfo?.usdt * 0.01 * hytzbl
                  : mockUserInfo?.money * 0.01 * hytzbl
              )?.toFixed(2)
            );
            setbfbIndex(index + 1);
          }}
        >
          <div>{hytzbl}%</div>
        </div>
      );
      nodes.push(node);
    }
    return nodes;
  };

  const handleScroll = () => {
    const scrollTop = divRef.current.scrollTop;
    const scrollAmount = 41; // 每次滚动的基础值，可以根据需求调整
    const index = parseInt(scrollTop / scrollAmount);
    setselectIndex(index + 1);
    // // 计算滚动的目标位置，向上滚动时需要减去一个滚动基础值
    // const targetScrollTop = scrollTop-(index + 2)*scrollAmount;
    // // 使用动画效果滚动到目标位置
    // divRef.current.scrollTo({
    //   top: targetScrollTop,
    //   behavior: "smooth", // 可以选择 smooth 或者 auto
    // });
  };

  const getTimesStr = () => {
    const timesStrArr = [];
    for (let index = 1; index <= 6; index++) {
      const errorTimeStr = localStorage.getItem("errortime");
      const errorTime = parseInt(errorTimeStr);
      let currentTime = new Date();
      // 将当前时间转换为 GMT-4
      currentTime = new Date(currentTime.getTime() + errorTime);
      //向下取整时间
      if (hyTimes) {
        const jgs = convertToSeconds(hyTimes[zq - 1]);
        currentTime = roundDownToNearestInterval(currentTime, jgs);
        currentTime.setSeconds(currentTime.getSeconds() + jgs * index);
      }
      // 增加时间
      // currentTime.setMinutes(currentTime.getMinutes() + addTime * index);
      // 格式化为 HH:mm 格式
      let hours = currentTime.getHours().toString().padStart(2, "0"); // 获取小时，并确保两位数格式
      let minutes = currentTime.getMinutes().toString().padStart(2, "0"); // 获取分钟，并确保两位数格式
      let formattedTime = `${hours}:${minutes}`;
      console.log("当前时间：", formattedTime, currentTime.getTime());
      timesStrArr.push({
        time: currentTime.getTime(),
        str: formattedTime,
      });
    }
    setSelectTimes(timesStrArr);
  };

  function formatDate(date) {
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let day = String(date.getDate()).padStart(2, "0");
    let hour = String(date.getHours()).padStart(2, "0");
    let minute = String(date.getMinutes()).padStart(2, "0");
    let second = String(date.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
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
  useEffect(() => {
    setHyTimes(hysetInfo.hyTime);
    setHyTzeds(hysetInfo.hyTzed);
    setHyYkbls(hysetInfo.hyYkbl);
    setHyTzbls(hysetInfo.hyTzbl);
    setcykbl(hysetInfo.hyYkbl ? hysetInfo.hyYkbl[zq - 1] : 100);
    // setNum(hysetInfo.hyTzed ? hysetInfo.hyTzed[0] : 100);
    setminNum(hysetInfo.hyTzed ? hysetInfo.hyTzed[zq - 1] : 100);
  }, [hysetInfo, zq]);

  useEffect(() => {
    getTimesStr();
  }, [zq, isShowOrder]);
  return (
    <Popup
      visible={isShowOrder}
      onMaskClick={() => {
        setIsShowOrder(false);
      }}
      position="bottom"
      bodyStyle={{ width: "100vw", backgroundColor: "#f5f5f5" }}
    >
      <div className="orderpoplb-1">
        <div className="orderpoplb-2">
          <div className="orderpoplb-3"></div>
          <div className="orderpoplb-4">
            <span className="orderpoplb-5">{nowTab?.toUpperCase()}/USDT</span>
          </div>
          <i
            className="orderpoplb-6"
            onClick={() => {
              setIsShowOrder(false);
            }}
          ></i>
        </div>
        <div className="orderpoplb-7">
          <div className="orderpoplb-8">
            <div className="orderpoplb-9">
              <div className="orderpoplb-10">
                <div className="orderpoplb-11">
                  {/* 时间选择 */}
                  <div className="orderpoplb-12">
                    {/* 固定 */}
                    <div className="orderpoplb-22">
                      <div className="orderpoplb-23">
                        <div className="orderpoplb-24">
                          <div className="orderpoplb-25"></div>
                        </div>
                        <div className="orderpoplb-26">
                          <div className="orderpoplb-27"></div>
                        </div>
                      </div>
                    </div>
                    {/* 选项 */}
                    <div
                        className="orderpoplb-18"
                        ref={divRef}
                        onScroll={handleScroll}
                    >
                      <div className="orderpoplb-19">
                        <div className="orderpoplb-20">
                          <div className="orderpoplb-21"></div>
                          <div className="orderpoplb-28">
                            {selectTimes.map((item, index) => (
                                <div className={`orderpoplb-29 ${selectIndex == index + 1
                                    ? 'orderpoplb-act'
                                    : ''}`}>
                                  <div
                                      className={
                                        selectIndex == index + 1
                                            ? 'orderpoplb-30'
                                            : 'orderpoplb-36'
                                      }
                                  >
                                    <span className="orderpoplb-31">{item.str}</span>
                                  </div>
                                </div>
                            ))}
                            {/* <div className="orderpoplb-29">
                              <div className="orderpoplb-36">
                                <span className="orderpoplb-31">21:35</span>
                              </div>
                            </div>
                            <div className="orderpoplb-35">
                              <div className="orderpoplb-30">
                                <span className="orderpoplb-37">21:37</span>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="orderpoplb-47">
                    <div className="orderpoplb-58">
                      <div className="orderpoplb-59">
                        <input
                            placeholder={translate(getText('最少10起買')).replace(
                                '10',
                                minNum,
                            )}
                            type="number"
                            maxLength="140"
                            autoComplete="off"
                            className="orderpoplb-61"
                            min={minNum}
                            name="num"
                            value={num}
                            onChange={(e) => {
                              //清空百分比选项
                              setbfbIndex(0)
                              let value = e.target.value
                              value = value.match(/\d+\.?\d{0,2}/, '')
                              setNum(value ? value[0] : '')
                              setTimeout(() => {
                                if (e.target.value && cykbl) {
                                  setyqsy(
                                      parseInt(e.target.value) * cykbl * 0.01,
                                  )
                                } else {
                                  setyqsy(0)
                                }
                              }, 0)
                            }}
                        />
                      </div>
                    </div>
                    <div className="orderpoplb-62">{getNodesHytzbl()}</div>
                    <div className="orderpoplb-48">
                      <div className="orderpoplb-49">
                        <div className="orderpoplb-50">
                          {translate(getText('最小'))}
                        </div>
                        <div className="orderpoplb-51">
                          <span className="orderpoplb-52">{minNum}</span>
                        </div>
                      </div>
                      <div className="orderpoplb-53">
                        <div className="orderpoplb-54">
                          {translate(getText('可用'))}
                        </div>
                        <div className="orderpoplb-55">
                          <span className="orderpoplb-56">
                            {propertyType == 1
                                ? userInfo?.usdt
                                : mockUserInfo?.money}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/*<div className="orderpoplb-57">*/}
                    {/*  {translate(getText('数量'))}*/}
                    {/*</div>*/}


                  </div>
                  <div
                      className={type == 1 ? 'orderpoplb-67' : 'orderpoplb-67-1'}
                      onClick={() => {
                        if (num < minNum) {
                          Toast.show({
                            content: `${translate(
                                getText('最低投資額'),
                            )} ${minNum}`,
                          })
                          return
                        }
                        if (!isUse) {
                          return
                        }
                        setIsUse(false)
                        setTimeout(() => {
                          setIsUse(true)
                        }, 3000)
                        //计划时间戳
                        const plantime = formatDate(
                            new Date(selectTimes[selectIndex - 1]?.time),
                        )
                        //计划时间戳
                        let intplantime = selectTimes[selectIndex - 1]?.time
                        intplantime = parseInt(intplantime / 1000)
                        buyCoin({
                          ccoinname: `${nowTab.toUpperCase()}/USDT`,
                          ctzed: num,
                          ctzfx: type,
                          ctime: hyTimes[zq - 1],
                          cykbl,
                          plantime,
                          intplantime,
                        })
                      }}
                  >
                    {translate(getText(type == 1 ? '看涨' : '看跌'))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
}
=======
import { useNavigate } from "react-router-dom";
import { Popup, Space, Button, Toast } from "antd-mobile";
import "./index.css";
import { useTranslation } from "react-i18next";
import { convertToSeconds, getText } from "../../../../utils/util";
import { useEffect, useRef, useState } from "react";
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
  mockUserInfo,
  buyCoin,
  hysetInfo,
  setyqsy,
  zq,
}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [type2, setType2] = useState(1);
  const [num, setNum] = useState("");
  const [hyTimes, setHyTimes] = useState([]);
  const [hyTzeds, setHyTzeds] = useState([]);
  const [hyYkbls, setHyYkbls] = useState([]);
  const [hyTzbls, setHyTzbls] = useState([]);
  let [minNum, setminNum] = useState(100);
  const [cykbl, setcykbl] = useState(100);
  const [isUse, setIsUse] = useState(true);
  const propertyType = localStorage.getItem("propertyType");
  const [selectTimes, setSelectTimes] = useState([]);
  //滚动
  const [scrollDistance, setScrollDistance] = useState(0);
  const divRef = useRef(null);
  const [selectIndex, setselectIndex] = useState(1);
  //加载节点
  //百分比
  const [bfbIndex, setbfbIndex] = useState(0);
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
          class={type2 === index + 1 ? "orderpoplb-63" : "orderpoplb-64"}
          onClick={() => {
            setType2(index + 1);
            setminNum(hyTzed);
            // setNum(hyTzed);
            setcykbl(cykbl);
          }}
        >
          {/* <div>{hyTime} </div> */}
          <div>{cykbl}%</div>
        </div>
      );
      nodes.push(node);
    }
    return nodes;
  };

  //合约投资比例
  const getNodesHytzbl = () => {
    if (!hyTzbls) {
      return "";
    }
    const nodes = [];
    for (let index = 0; index < hyTzbls.length; index++) {
      let hytzbl = hyTzbls[index];
      const node = (
        <div
          class={`${bfbIndex === index + 1 ? "orderpoplb-63 orderpoplb-item-act" : "orderpoplb-64"} orderpoplb-item`}
          onClick={() => {
            setNum(
              parseFloat(
                propertyType == 1
                  ? userInfo?.usdt * 0.01 * hytzbl
                  : mockUserInfo?.money * 0.01 * hytzbl
              )?.toFixed(2)
            );
            setbfbIndex(index + 1);
          }}
        >
          <div>{hytzbl}%</div>
        </div>
      );
      nodes.push(node);
    }
    return nodes;
  };

  const handleScroll = () => {
    const scrollTop = divRef.current.scrollTop;
    const scrollAmount = 41; // 每次滚动的基础值，可以根据需求调整
    const index = parseInt(scrollTop / scrollAmount);
    setselectIndex(index + 1);
    // // 计算滚动的目标位置，向上滚动时需要减去一个滚动基础值
    // const targetScrollTop = scrollTop-(index + 2)*scrollAmount;
    // // 使用动画效果滚动到目标位置
    // divRef.current.scrollTo({
    //   top: targetScrollTop,
    //   behavior: "smooth", // 可以选择 smooth 或者 auto
    // });
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

  const getTimesStr = () => {
    const timesStrArr = [];
    for (let index = 1; index <= 6; index++) {
      const errorTimeStr = localStorage.getItem("errortime");
      const errorTime = parseInt(errorTimeStr);
      let currentTime = convertGMT4();
      // 将当前时间转换为 GMT-4
      //currentTime = new Date(currentTime.getTime() + errorTime);
      //向下取整时间
      if (hyTimes) {
        const jgs = convertToSeconds(hyTimes[zq - 1]);
        currentTime = roundDownToNearestInterval(currentTime, jgs);
        currentTime.setSeconds(currentTime.getSeconds() + jgs * index);
      }
      // 增加时间
      // currentTime.setMinutes(currentTime.getMinutes() + addTime * index);
      // 格式化为 HH:mm 格式
      let hours = currentTime.getHours().toString().padStart(2, "0"); // 获取小时，并确保两位数格式
      let minutes = currentTime.getMinutes().toString().padStart(2, "0"); // 获取分钟，并确保两位数格式
      let formattedTime = `${hours}:${minutes}`;
      console.log("当前时间：", formattedTime, currentTime.getTime());
      timesStrArr.push({
        time: currentTime.getTime(),
        str: formattedTime,
      });
    }
    setSelectTimes(timesStrArr);
  };

//   const getTimesStr = () => {
//     const timesStrArr = [];
//     const errorTimeStr = localStorage.getItem("errortime");
//     const errorTime = Number(errorTimeStr) || 0;

//     // 获取基准时间
//     const baseTime = new Date();
    
//     for (let index = 1; index <= 6; index++) {
//         try {
//             // 从基准时间开始计算
//             let currentTime = new Date(baseTime.getTime() + errorTime);

//             if (hyTimes && hyTimes[zq - 1]) {
//                 const jgs = convertToSeconds(hyTimes[zq - 1]);
                
//                 // 使用基准时间 + 间隔时间
//                 currentTime = new Date(
//                     baseTime.getTime() + 
//                     errorTime + 
//                     (jgs * index * 1000)
//                 );
//             }

//             // 手动格式化时间
//             const hours = currentTime.getHours().toString().padStart(2, '0');
//             const minutes = currentTime.getMinutes().toString().padStart(2, '0');
//             const formattedTime = `${hours}:${minutes}`;

//             console.log("当前时间：", formattedTime, currentTime.getTime());
            
//             timesStrArr.push({
//                 time: currentTime.getTime(),
//                 str: formattedTime,
//             });
//         } catch (error) {
//             console.error("日期处理错误:", error);
//             timesStrArr.push({
//                 time: Date.now(),
//                 str: "00:00",
//             });
//         }
//     }
//     setSelectTimes(timesStrArr);
// };

  function formatDate(date) {
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let day = String(date.getDate()).padStart(2, "0");
    let hour = String(date.getHours()).padStart(2, "0");
    let minute = String(date.getMinutes()).padStart(2, "0");
    let second = String(date.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }
  // function formatDate(dateTime) {
  //   try {
  //       // 使用更安全的日期解析方法
  //       const date = new Date(Date.parse(dateTime));
        
  //       // 检查日期是否有效
  //       if (isNaN(date.getTime())) {
  //           console.error("Invalid date input:", dateTime);
  //           return dateTime; // 如果解析失败，返回原始输入
  //       }
  
  //       let year = date.getFullYear();
  //       let month = String(date.getMonth() + 1).padStart(2, '0');
  //       let day = String(date.getDate()).padStart(2, '0');
  //       let hour = String(date.getHours()).padStart(2, '0');
  //       let minute = String(date.getMinutes()).padStart(2, '0');
  //       let second = String(date.getSeconds()).padStart(2, '0');
        
  //       return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  //   } catch (error) {
  //       console.error("formatDate处理错误:", error);
  //       return dateTime; // 出错时返回原始输入
  //   }
  // }

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
  useEffect(() => {
    setHyTimes(hysetInfo.hyTime);
    setHyTzeds(hysetInfo.hyTzed);
    setHyYkbls(hysetInfo.hyYkbl);
    setHyTzbls(hysetInfo.hyTzbl);

    setcykbl(hysetInfo.hyYkbl ? hysetInfo.hyYkbl[zq - 1] : 100);

    if(hysetInfo.hyYkbl) {
      const rangeStr = hysetInfo.hyYkbl ? hysetInfo.hyYkbl[zq - 1] : 100;

      if (!String(rangeStr).includes('-')) {
        setcykbl(rangeStr);
      }else {
        const [min, max] = rangeStr.split('-').map(Number);
        const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        setcykbl(randomValue);
      }
      
    }
    
    // setNum(hysetInfo.hyTzed ? hysetInfo.hyTzed[0] : 100);
    setminNum(hysetInfo.hyTzed ? hysetInfo.hyTzed[zq - 1] : 100);
  }, [hysetInfo, zq]);

  useEffect(() => {
    getTimesStr();
  }, [zq, isShowOrder]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     getTimesStr();
  //   }, 10000); // 每 60 秒执行一次
  //   return () => clearInterval(intervalId); // 清理定时器
  // }, [zq,hyTimes]);

  return (
    <Popup
      visible={isShowOrder}
      onMaskClick={() => {
        setIsShowOrder(false);
      }}
      position="bottom"
      bodyStyle={{ width: "100vw", backgroundColor: "#f5f5f5" }}
    >
      <div class="orderpoplb-1">
        <div class="orderpoplb-2">
          <div class="orderpoplb-3"></div>
          <div class="orderpoplb-4">
            <span class="orderpoplb-5">{nowTab?.toUpperCase()}/USDT</span>
          </div>
          <i
            class="orderpoplb-6"
            onClick={() => {
              setIsShowOrder(false);
            }}
          ></i>
        </div>
        <div class="orderpoplb-7">
          <div class="orderpoplb-8">
            <div class="orderpoplb-9">
              <div class="orderpoplb-10">
                <div class="orderpoplb-11">
                  {/* 时间选择 */}
                  <div class="orderpoplb-12">
                    {/* 固定 */}
                    <div class="orderpoplb-22">
                      <div class="orderpoplb-23">
                        <div class="orderpoplb-24">
                          <div class="orderpoplb-25"></div>
                        </div>
                        <div class="orderpoplb-26">
                          <div class="orderpoplb-27"></div>
                        </div>
                      </div>
                    </div>
                    {/* 选项 */}
                    <div
                        class="orderpoplb-18"
                        ref={divRef}
                        onScroll={handleScroll}
                    >
                      <div class="orderpoplb-19">
                        <div class="orderpoplb-20">
                          <div class="orderpoplb-21"></div>
                          <div class="orderpoplb-28">
                            {selectTimes.map((item, index) => (
                                <div class={`orderpoplb-29 ${selectIndex == index + 1
                                    ? 'orderpoplb-act'
                                    : ''}`}>
                                  <div
                                      class={
                                        selectIndex == index + 1
                                            ? 'orderpoplb-30'
                                            : 'orderpoplb-36'
                                      }
                                  >
                                    <span class="orderpoplb-31">{item.str}</span>
                                  </div>
                                </div>
                            ))}
                            {/* <div class="orderpoplb-29">
                              <div class="orderpoplb-36">
                                <span class="orderpoplb-31">21:35</span>
                              </div>
                            </div>
                            <div class="orderpoplb-35">
                              <div class="orderpoplb-30">
                                <span class="orderpoplb-37">21:37</span>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="orderpoplb-47">
                    <div className="orderpoplb-58">
                      <div className="orderpoplb-59">
                        <input
                            placeholder={translate(getText('最少10起買')).replace(
                                '10',
                                minNum,
                            )}
                            type="number"
                            maxLength="140"
                            autoComplete="off"
                            className="orderpoplb-61"
                            min={minNum}
                            name="num"
                            value={num}
                            onChange={(e) => {
                              //清空百分比选项
                              setbfbIndex(0)
                              let value = e.target.value
                              value = value.match(/\d+\.?\d{0,2}/, '')
                              setNum(value ? value[0] : '')
                              setTimeout(() => {
                                if (e.target.value && cykbl) {
                                  setyqsy(
                                      parseInt(e.target.value) * cykbl * 0.01,
                                  )
                                } else {
                                  setyqsy(0)
                                }
                              }, 0)
                            }}
                        />
                      </div>
                    </div>
                    <div className="orderpoplb-62">{getNodesHytzbl()}</div>
                    <div className="orderpoplb-48">
                      <div className="orderpoplb-49">
                        <div className="orderpoplb-50">
                          {translate(getText('最小'))}
                        </div>
                        <div className="orderpoplb-51">
                          <span class="orderpoplb-52">{minNum}</span>
                        </div>
                      </div>
                      <div className="orderpoplb-53">
                        <div className="orderpoplb-54">
                          {translate(getText('可用'))}
                        </div>
                        <div className="orderpoplb-55">
                          <span class="orderpoplb-56">
                            {propertyType == 1
                                ? userInfo?.usdt
                                : mockUserInfo?.money}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/*<div className="orderpoplb-57">*/}
                    {/*  {translate(getText('数量'))}*/}
                    {/*</div>*/}


                  </div>
                  <div
                      class={type == 1 ? 'orderpoplb-67' : 'orderpoplb-67-1'}
                      onClick={() => {
                        if (num < minNum) {
                          Toast.show({
                            content: `${translate(
                                getText('最低投資額'),
                            )} ${minNum}`,
                          })
                          return
                        }
                        if (!isUse) {
                          return
                        }
                        setIsUse(false)
                        setTimeout(() => {
                          setIsUse(true)
                        }, 3000)
                        //计划时间戳
                        const plantime = formatDate(
                            new Date(selectTimes[selectIndex - 1]?.time),
                        )
                        //计划时间戳
                        let intplantime = selectTimes[selectIndex - 1]?.time
                        intplantime = parseInt(intplantime / 1000)
                        buyCoin({
                          ccoinname: `${nowTab.toUpperCase()}/USDT`,
                          ctzed: num,
                          ctzfx: type,
                          ctime: hyTimes[zq - 1],
                          cykbl,
                          plantime,
                          intplantime,
                        })
                      }}
                  >
                    {translate(getText(type == 1 ? '看涨' : '看跌'))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
}
>>>>>>> 200492d5b0310fcfce9039951debf669ab731894
