import { useNavigate } from "react-router-dom";
import { Popup, Space, Button, Toast } from "antd-mobile";
import "./index.css";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
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
  let [minNum, setminNum] = useState(100);
  const [cykbl, setcykbl] = useState(100);
  const [isUse, setIsUse] = useState(true);
  const propertyType = localStorage.getItem("propertyType");
  const [addtimes, setaddtimes] = useState([1, 2, 5, 10]);
  const [selectTimes, setSelectTimes] = useState([]);
  //滚动
  const [scrollDistance, setScrollDistance] = useState(0);
  const divRef = useRef(null);
  const [selectIndex, setselectIndex] = useState(1);
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
    const addTime = addtimes[zq - 1];
    const timesStrArr = [];
    for (let index = 1; index <= 6; index++) {
      // 获取当前时间
      let currentTime = new Date();
      // 将当前时间转换为 GMT-4
      currentTime = new Date(currentTime.getTime() - 12 * 60 * 60 * 1000);
      // 增加x分钟
      currentTime.setMinutes(currentTime.getMinutes() + addTime * index);
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
  useEffect(() => {
    setHyTimes(hysetInfo.hyTime);
    setHyTzeds(hysetInfo.hyTzed);
    setHyYkbls(hysetInfo.hyYkbl);
    setcykbl(hysetInfo.hyYkbl ? hysetInfo.hyYkbl[0] : 100);
    // setNum(hysetInfo.hyTzed ? hysetInfo.hyTzed[0] : 100);
    setminNum(hysetInfo.hyTzed ? hysetInfo.hyTzed[0] : 100);
  }, [hysetInfo]);

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
                              <div class="orderpoplb-29">
                                <div
                                  class={
                                    selectIndex == index + 1
                                      ? "orderpoplb-30"
                                      : "orderpoplb-36"
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
                  <div class="orderpoplb-47">
                    <div class="orderpoplb-48">
                      <div class="orderpoplb-49">
                        <div class="orderpoplb-50">
                          {translate(getText("最小"))}
                        </div>
                        <div class="orderpoplb-51">
                          <span class="orderpoplb-52">{minNum}</span>
                        </div>
                      </div>
                      <div class="orderpoplb-53">
                        <div class="orderpoplb-54">
                          {translate(getText("可用"))}
                        </div>
                        <div class="orderpoplb-55">
                          <span class="orderpoplb-56">
                            {propertyType == 1
                              ? userInfo?.usdt
                              : mockUserInfo?.money}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="orderpoplb-57">
                      {translate(getText("数量"))}
                    </div>
                    <div class="orderpoplb-58">
                      <div class="orderpoplb-59">
                        <input
                          placeholder={translate(getText("最少10起買")).replace(
                            "10",
                            minNum
                          )}
                          type="number"
                          maxlength="140"
                          autocomplete="off"
                          class="orderpoplb-61"
                          min={minNum}
                          name="num"
                          value={num}
                          onChange={(e) => {
                            setNum(parseInt(e.target.value));
                            setTimeout(() => {
                              if (e.target.value && cykbl) {
                                setyqsy(
                                  parseInt(e.target.value) * cykbl * 0.01
                                );
                              } else {
                                setyqsy(0);
                              }
                            }, 0);
                          }}
                        />
                      </div>
                    </div>
                    <div class="orderpoplb-62">{getNodes()}</div>
                  </div>
                  <div
                    class={type == 1 ? "orderpoplb-67" : "orderpoplb-67-1"}
                    onClick={() => {
                      if (num < minNum) {
                        Toast.show({
                          content: `${translate(
                            getText("最低投資額")
                          )} ${minNum}`,
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
                      //计划时间戳
                      const plantime = formatDate(
                        new Date(selectTimes[selectIndex - 1]?.time)
                      );
                      //结算时间戳
                      const intplantime =
                        selectTimes[selectIndex - 1]?.time +
                        addtimes[zq - 1] * 60 * 1000;
                      buyCoin({
                        ccoinname: `${nowTab.toUpperCase()}/USDT`,
                        ctzed: num,
                        ctzfx: type,
                        ctime: hyTimes[type2 - 1].toUpperCase(),
                        cykbl,
                        plantime,
                        intplantime,
                      });
                    }}
                  >
                    {translate(getText(type == 1 ? "看涨" : "看跌"))}
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
