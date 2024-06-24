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
          class={type2 === index + 1 ? "orderpoplb-63" : "orderpoplb-64"}
          onClick={() => {
            setType2(index + 1);
            setminNum(hyTzed);
            // setNum(hyTzed);
            setcykbl(cykbl);
          }}
        >
          <div>{hyTime} </div>
          <div>{cykbl}%</div>
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
                  {/* <div class="orderpoplb-12">
                    <div class="orderpoplb-18">
                      <div class="orderpoplb-19">
                        <div class="orderpoplb-20">
                          <div class="orderpoplb-21"></div>
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
                          <div class="orderpoplb-28">
                            <div class="orderpoplb-29">
                              <div class="orderpoplb-30">
                                <span class="orderpoplb-31">21:35</span>
                              </div>
                            </div>
                            <div class="orderpoplb-32">
                              <div class="orderpoplb-33">
                                <span class="orderpoplb-34">21:36</span>
                              </div>
                            </div>
                            <div class="orderpoplb-35">
                              <div class="orderpoplb-36">
                                <span class="orderpoplb-37">21:37</span>
                              </div>
                            </div>
                            <div class="orderpoplb-38">
                              <div class="orderpoplb-39">
                                <span class="orderpoplb-40">21:38</span>
                              </div>
                            </div>
                            <div class="orderpoplb-41">
                              <div class="orderpoplb-42">
                                <span class="orderpoplb-43">21:39</span>
                              </div>
                            </div>
                            <div class="orderpoplb-44">
                              <div class="orderpoplb-45">
                                <span class="orderpoplb-46">21:40</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div class="orderpoplb-47">
                    <div class="orderpoplb-48">
                      <div class="orderpoplb-49">
                        <div class="orderpoplb-50">最小</div>
                        <div class="orderpoplb-51">
                          <span class="orderpoplb-52">{minNum}</span>
                        </div>
                      </div>
                      <div class="orderpoplb-53">
                        <div class="orderpoplb-54">可用</div>
                        <div class="orderpoplb-55">
                          <span class="orderpoplb-56">{userInfo?.usdt}</span>
                        </div>
                      </div>
                    </div>
                    <div class="orderpoplb-57">数量</div>
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
                    class={type==1?"orderpoplb-67":"orderpoplb-67-1"}
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
                      buyCoin({
                        ccoinname: `${nowTab.toUpperCase()}/USDT`,
                        ctzed: num,
                        ctzfx: type,
                        ctime: hyTimes[type2 - 1].toUpperCase(),
                        cykbl,
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
