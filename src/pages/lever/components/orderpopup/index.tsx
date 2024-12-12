import { useNavigate } from "react-router-dom";
import { Popup, Space, Button, Toast, CenterPopup } from "antd-mobile";
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
  leverSet1,
  leverSet2,
  leverage,
}) {
  leverSet1.sort((a, b) => a.num - b.num);
  leverSet2.sort((a, b) => a.num - b.num);
  leverage.sort((a, b) => a.num - b.num);
  const [zyNum, setzyNum] = useState(0);
  const [type1, setType1] = useState(0);
  const [zsNum, setzsNum] = useState(0);
  const [type2, setType2] = useState(0);
  const [leverageIndex, setLeverageIndex] = useState(1);
  const [num, setNum] = useState("");
  const [bsnum, setbsNum] = useState("");
  const [lossPrice, setlossPrice] = useState("");
  const [winPrice, setwinPrice] = useState("");
  const [boomPrice, setboomPrice] = useState(0);
  let [minNum, setminNum] = useState(1000);
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [isUse, setIsUse] = useState(true);
  //
  const [visible, setVisible] = useState(false);

  //止盈
  const getLeverSet2Nodes = () => {
    const nodes = [];
    for (let index = 0; index < leverSet2.length; index++) {
      let data = leverSet2[index];
      const node = (
        <div
          className={
            type2 === index + 1 ? "leverOrderPopup-64" : "leverOrderPopup-61"
          }
          onClick={() => {
            setType2(index + 1);
            setzyNum(data.num);
          }}
        >
          {data.num}%
        </div>
      );
      nodes.push(node);
    }
    return nodes;
  };

  //止损
  const getLeverSet1Nodes = () => {
    const nodes = [];
    for (let index = 0; index < leverSet1.length; index++) {
      let data = leverSet1[index];
      const node = (
        <div
          className={
            type1 === index + 1 ? "leverOrderPopup-64" : "leverOrderPopup-61"
          }
          onClick={() => {
            setType1(index + 1);
            setzsNum(data.num);
          }}
        >
          {data.num}%
        </div>
      );
      nodes.push(node);
    }
    return nodes;
  };

  //倍数
  const getLeverageNodes = () => {
    const nodes = [];
    for (let index = 0; index < leverage.length; index++) {
      let data = leverage[index];
      const node = (
        <div
          className={
            leverageIndex === index + 1
              ? "leverOrderPopup-64"
              : "leverOrderPopup-61"
          }
          onClick={() => {
            setLeverageIndex(index + 1);
            setminNum(data.min ? data.min : 0);
          }}
        >
          {data.num}
        </div>
      );
      nodes.push(node);
    }
    return nodes;
  };

  const getchangeNum = () => {
    const openprice = coinListData[nowTab]?.close;
    const type1num = zsNum;
    const type2num = zyNum;
    if (type == 1) {
      setlossPrice(openprice * (1 - type1num * 0.01));
      setwinPrice(openprice * (1 + type2num * 0.01));
    } else {
      setwinPrice(openprice * (1 - type1num * 0.01));
      setlossPrice(openprice * (1 + type2num * 0.01));
    }
  };

  const getboomPrice = () => {
    const openPrice = coinListData[nowTab]?.close;
    let price = 0;
    if (type == 1) {
      price = openPrice * (1 - 1 / bsnum + 0.005);
      setboomPrice(price);
    }
    if (type == 2) {
      price = openPrice * (1 + 1 / bsnum - 0.005);
      setboomPrice(price);
    }
    return price;
  };

  useEffect(() => {
    setminNum(
      leverage && leverage.length > 0
        ? leverage[0]?.min
          ? leverage[0]?.min
          : 0
        : 100
    );
    setbsNum(leverage[0]?.num);
  }, [leverage]);

  useEffect(() => {
    if (leverageIndex) {
      setbsNum(leverage[leverageIndex - 1]?.num);
    }
  }, [leverageIndex]);

  useEffect(() => {
    getboomPrice();
  }, [bsnum, type, coinListData[nowTab]?.close]);

  useEffect(() => {
    //判断下标
    let ishave = false;
    for (let index = 0; index < leverage.length; index++) {
      let data = leverage[index];
      if (data.num == bsnum) {
        ishave = true;
        setLeverageIndex(index + 1);
      }
    }
    //判断是否有
    if (!ishave) {
      setLeverageIndex(0);
    }
    //判断大小
    if (bsnum <= 0) {
      setbsNum("");
    }
    if (bsnum >= 200) {
      setbsNum(200);
    }
  }, [bsnum]);

  useEffect(() => {
    getchangeNum();
    //判断下标
    let ishave1 = false;
    let ishave2 = false;
    for (let index = 0; index < leverSet1.length; index++) {
      let data = leverSet1[index];
      if (data.num == zsNum) {
        ishave1 = true;
        setType1(index + 1);
      }
    }
    for (let index = 0; index < leverSet2.length; index++) {
      let data = leverSet2[index];
      if (data.num == zyNum) {
        ishave2 = true;
        setType2(index + 1);
      }
    }
    //判断是否有
    if (!ishave1) {
      setType1(0);
    }
    if (!ishave2) {
      setType2(0);
    }
  }, [type, type1, type2, num, zyNum, zsNum, coinListData[nowTab]?.close]);

  useEffect(() => {
    if (leverSet1) {
      setType1(1);
      setzsNum(leverSet1[0]?.num);
    }
    if (leverSet2) {
      setType2(1);
      setzyNum(leverSet2[0]?.num);
    }
  }, [leverSet1, leverSet2]);

  return (
    <Popup
      visible={isShowOrder}
      destroyOnClose={true}
      onMaskClick={() => {
        setIsShowOrder(false);
      }}
      position="bottom"
      bodyStyle={{ width: "100vw", height: "90vh", backgroundColor: "#f5f5f5" }}
    >
      <div className="leverOrderPopup-1">
        <div className="leverOrderPopup-2">
          <div className="leverOrderPopup-3">
            <div className="leverOrderPopup-4">
              <div className="leverOrderPopup-5">
                <p className="leverOrderPopup-6">{translate(getText("訂單確認"))}</p>
                <div
                  className="leverOrderPopup-7"
                  onClick={() => {
                    setIsShowOrder(false);
                  }}
                ></div>
              </div>
              <div className="leverOrderPopup-8">
                <div className="leverOrderPopup-9">
                  <div className="leverOrderPopup-10">
                    <div className="leverOrderPopup-11">
                      <div className="leverOrderPopup-12">
                        <div className="leverOrderPopup-13">
                          <div className="leverOrderPopup-14">
                            <div className="leverOrderPopup-15">{translate(getText("市價"))}</div>
                            {/* <div className="leverOrderPopup-16">掛單</div> */}
                          </div>
                          <div className="leverOrderPopup-17">
                            <div
                              className={
                                type == 1
                                  ? "leverOrderPopup-18"
                                  : "leverOrderPopup-19"
                              }
                              onClick={() => {
                                setType(1);
                              }}
                            >
                              {translate(getText("買多"))}
                            </div>
                            <div
                              className={
                                type == 2
                                  ? "leverOrderPopup-18-1"
                                  : "leverOrderPopup-19"
                              }
                              onClick={() => {
                                setType(2);
                              }}
                            >
                              {translate(getText("買空"))}
                            </div>
                          </div>
                          <div className="leverOrderPopup-80">
                            {translate(getText("保证金"))}
                          </div>
                          <div className="leverOrderPopup-81">
                            <div className="leverOrderPopup-82">
                              <div className="leverOrderPopup-83">
                                <div className="leverOrderPopup-84">
                                  <span
                                    className="leverOrderPopup-85"
                                    onClick={() => {
                                      if (num && num > 0.1) {
                                        setNum(num - 0.1);
                                      }
                                    }}
                                  >
                                    -
                                  </span>
                                </div>
                              </div>
                              <div className="leverOrderPopup-86">
                                <div className="leverOrderPopup-87">
                                  <div className="leverOrderPopup-88"></div>
                                  <input
                                    maxlength="140"
                                    enterkeyhint="done"
                                    autocomplete="off"
                                    type="number"
                                    min={minNum}
                                    className="leverOrderPopup-89"
                                    value={num}
                                    onChange={(e) => {
                                      setNum(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="leverOrderPopup-90">
                                <div className="leverOrderPopup-91">
                                  <span
                                    className="leverOrderPopup-92"
                                    onClick={() => {
                                      if (num) {
                                        setNum(num + 0.1);
                                      } else {
                                        setNum(0.1);
                                      }
                                    }}
                                  >
                                    +
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="leverOrderPopup-53">
                            <div className="leverOrderPopup-54">
                              {translate(getText("止盈"))}
                            </div>
                            <div className="leverOrderPopup-55">
                              <div className="leverOrderPopup-56"></div>
                            </div>
                          </div>
                          <div className="leverOrderPopup-57">
                            <div className="leverOrderPopup-58">
                              <div className="leverOrderPopup-59">
                                {leverSet2 && getLeverSet2Nodes()}
                              </div>
                            </div>
                          </div>
                          <div className="leverOrderPopup-81">
                            <div className="leverOrderPopup-82">
                              <div className="leverOrderPopup-83">
                                <div className="leverOrderPopup-84">
                                  <span
                                    className="leverOrderPopup-85"
                                    onClick={() => {
                                      if (zyNum && zyNum > 1) {
                                        setzyNum(zyNum - 1);
                                      }
                                    }}
                                  >
                                    -
                                  </span>
                                </div>
                              </div>
                              <div className="leverOrderPopup-86">
                                <div className="leverOrderPopup-87">
                                  <div className="leverOrderPopup-88"></div>
                                  <input
                                    maxlength="140"
                                    enterkeyhint="done"
                                    autocomplete="off"
                                    type="number"
                                    className="leverOrderPopup-89"
                                    value={zyNum}
                                    onChange={(e) => {
                                      setzyNum(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="leverOrderPopup-90">
                                <div className="leverOrderPopup-91">
                                  <span
                                    className="leverOrderPopup-92"
                                    onClick={() => {
                                      if (zyNum) {
                                        setzyNum(zyNum + 1);
                                      } else {
                                        setzyNum(1);
                                      }
                                    }}
                                  >
                                    +
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*  */}
                          <div className="leverOrderPopup-53">
                            <div className="leverOrderPopup-54">
                              {translate(getText("止損"))}
                            </div>
                            <div className="leverOrderPopup-55">
                              <div className="leverOrderPopup-56"></div>
                            </div>
                          </div>
                          <div className="leverOrderPopup-57">
                            <div className="leverOrderPopup-58">
                              <div className="leverOrderPopup-59">
                                {leverSet1 && getLeverSet1Nodes()}
                              </div>
                            </div>
                          </div>
                          <div className="leverOrderPopup-81">
                            <div className="leverOrderPopup-82">
                              <div className="leverOrderPopup-83">
                                <div className="leverOrderPopup-84">
                                  <span
                                    className="leverOrderPopup-85"
                                    onClick={() => {
                                      if (zsNum && zsNum > 1) {
                                        setzsNum(zsNum - 1);
                                      }
                                    }}
                                  >
                                    -
                                  </span>
                                </div>
                              </div>
                              <div className="leverOrderPopup-86">
                                <div className="leverOrderPopup-87">
                                  <div className="leverOrderPopup-88"></div>
                                  <input
                                    maxlength="140"
                                    enterkeyhint="done"
                                    autocomplete="off"
                                    type="number"
                                    className="leverOrderPopup-89"
                                    value={zsNum}
                                    onChange={(e) => {
                                      setzsNum(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="leverOrderPopup-90">
                                <div className="leverOrderPopup-91">
                                  <span
                                    className="leverOrderPopup-92"
                                    onClick={() => {
                                      if (zsNum) {
                                        setzsNum(zsNum + 1);
                                      } else {
                                        setzsNum(1);
                                      }
                                    }}
                                  >
                                    +
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="leverOrderPopup-41">
                            <div className="leverOrderPopup-42">
                              <div className="leverOrderPopup-46">
                                <div className="leverOrderPopup-47">{translate(getText("手續費"))}:</div>
                                <div className="leverOrderPopup-48">
                                  {hysetInfo?.hySxf}
                                </div>
                              </div>
                              {/* <div className="leverOrderPopup-46">
                                <div className="leverOrderPopup-47">强平价格:</div>
                                <div className="leverOrderPopup-48">
                                  {boomPrice}
                                </div>
                              </div> */}
                              <div className="leverOrderPopup-49">
                                <div className="leverOrderPopup-50">{translate(getText("可用餘額"))}:</div>
                                <div className="leverOrderPopup-51">
                                  {userInfo?.usdt?.toFixed(2)} USDT
                                </div>
                              </div>
                              <div className="leverOrderPopup-49">
                                <div className="leverOrderPopup-50">
                                  {translate(getText("最低投資額"))}:
                                </div>
                                <div className="leverOrderPopup-51">
                                  10{/*  {minNum}*/}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="leverOrderPopup-53">
                            <div className="leverOrderPopup-54">{translate(getText("杠杆倍數"))}</div>
                            <div className="leverOrderPopup-55">
                              <div className="leverOrderPopup-56"></div>
                            </div>
                          </div>
                          <div className="leverOrderPopup-57">
                            <div className="leverOrderPopup-58">
                              <div className="leverOrderPopup-59">
                                {leverage && getLeverageNodes()}
                              </div>
                            </div>
                          </div>
                          <div className="leverOrderPopup-65">
                            <div className="leverOrderPopup-67">
                              <div className="leverOrderPopup-68">
                                <div className="leverOrderPopup-69">
                                  <div className="leverOrderPopup-70">
                                    <span
                                      className="leverOrderPopup-71"
                                      onClick={() => {
                                        if (bsnum && bsnum > 1) {
                                          setbsNum(bsnum - 1);
                                        }
                                      }}
                                    >
                                      -
                                    </span>
                                  </div>
                                </div>
                                <div className="leverOrderPopup-72">
                                  <div className="leverOrderPopup-73">
                                    <div className="leverOrderPopup-74"></div>
                                    <input
                                      maxlength="140"
                                      step="0.000000000000000001"
                                      enterkeyhint="done"
                                      autocomplete="off"
                                      type="number"
                                      className="leverOrderPopup-75"
                                      value={bsnum}
                                      onChange={(e) => {
                                        setbsNum(e.target.value);
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="leverOrderPopup-76">
                                  <div className="leverOrderPopup-77">
                                    <span
                                      className="leverOrderPopup-78"
                                      onClick={() => {
                                        setbsNum(bsnum + 1);
                                      }}
                                    >
                                      +
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="leverOrderPopup-65">
                            <div className="leverOrderPopup-66">{translate(getText("止損價"))}</div>
                            <div className="leverOrderPopup-67">
                              <div className="leverOrderPopup-68">
                                <div className="leverOrderPopup-69">
                                  <div className="leverOrderPopup-70">
                                    <span
                                      className="leverOrderPopup-71"
                                      onClick={() => {
                                        if (lossPrice && lossPrice > 0.1) {
                                          setlossPrice(lossPrice - 0.1);
                                        }
                                      }}
                                    >
                                      -
                                    </span>
                                  </div>
                                </div>
                                <div className="leverOrderPopup-72">
                                  <div className="leverOrderPopup-73">
                                    <div className="leverOrderPopup-74"></div>
                                    <input
                                      maxlength="140"
                                      step="0.000000000000000001"
                                      enterkeyhint="done"
                                      autocomplete="off"
                                      type="number"
                                      className="leverOrderPopup-75"
                                      value={lossPrice}
                                      onChange={(e) => {
                                        setlossPrice(e.target.value);
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="leverOrderPopup-76">
                                  <div className="leverOrderPopup-77">
                                    <span
                                      className="leverOrderPopup-78"
                                      onClick={() => {
                                        if (lossPrice) {
                                          setlossPrice(lossPrice + 0.1);
                                        } else {
                                          setlossPrice(0.1);
                                        }
                                      }}
                                    >
                                      +
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="leverOrderPopup-79">
                            <div className="leverOrderPopup-80">{translate(getText("止盈價"))}</div>
                            <div className="leverOrderPopup-81">
                              <div className="leverOrderPopup-82">
                                <div className="leverOrderPopup-83">
                                  <div className="leverOrderPopup-84">
                                    <span
                                      className="leverOrderPopup-85"
                                      onClick={() => {
                                        if (winPrice && winPrice > 0.1) {
                                          setwinPrice(winPrice - 0.1);
                                        }
                                      }}
                                    >
                                      -
                                    </span>
                                  </div>
                                </div>
                                <div className="leverOrderPopup-86">
                                  <div className="leverOrderPopup-87">
                                    <div className="leverOrderPopup-88"></div>
                                    <input
                                      maxlength="140"
                                      enterkeyhint="done"
                                      autocomplete="off"
                                      type="number"
                                      className="leverOrderPopup-89"
                                      value={winPrice}
                                      onChange={(e) => {
                                        setwinPrice(e.target.value);
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="leverOrderPopup-90">
                                  <div className="leverOrderPopup-91">
                                    <span
                                      className="leverOrderPopup-92"
                                      onClick={() => {
                                        if (winPrice) {
                                          setwinPrice(winPrice + 0.1);
                                        } else {
                                          setwinPrice(0.1);
                                        }
                                      }}
                                    >
                                      +
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="leverOrderPopup-93">
                        <div
                          className={
                            type == 1
                              ? "leverOrderPopup-94"
                              : "leverOrderPopup-94-1"
                          }
                          onClick={() => {
                            if (num < minNum) {
                              Toast.show({
                                content: `${translate("trade.min")} ${minNum}`,
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
                            setVisible(true);
                          }}
                        >
                          {translate(getText(type == 1 ? "買多" : "買空"))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 确认框 */}
      <CenterPopup
        visible={visible}
        destroyOnClose={true}
        onMaskClick={() => {
          setVisible(false);
        }}
      >
        <div className="orderconfim-1">
          <div className="orderconfim-2">
            <p className="orderconfim-3">{translate(getText("訂單確認"))}</p>
            <div className="orderconfim-4"></div>
          </div>
          <div className="orderconfim-5">
            <div className="orderconfim-6">
              <div className="orderconfim-7">
                <p className="orderconfim-8">{translate(getText("名稱"))}</p>
                <p className="orderconfim-9">{translate(getText("方向"))}</p>
                <p className="orderconfim-10">{translate(getText("現價"))}</p>
                <p className="orderconfim-11">{translate(getText("保证金"))}</p>
              </div>
              <div className="orderconfim-12">
                <p className="orderconfim-13">
                  {nowTab?.toUpperCase()}
                  <span className="orderconfim-14">/USDT</span>
                </p>
                <p className={type == 1 ? "orderconfim-15" : "orderconfim-15-1"}>
                  {translate(getText(type == 1 ? "買多" : "買空"))}
                </p>
                <p className="orderconfim-16">{coinListData[nowTab]?.close}</p>
                <p className="orderconfim-17">{num}</p>
              </div>
            </div>
            <div className="orderconfim-18">
              <div className="orderconfim-19">
                <p className="orderconfim-20">{translate(getText("可用餘額"))}:{userInfo?.usdt}</p>
                <p className="orderconfim-21">{translate(getText("手續費"))}:{hysetInfo?.hySxf}</p>
              </div>
            </div>
            <div className="orderconfim-22">
              <div
                className="orderconfim-23"
                onClick={() => {
                  buyCoin({
                    ccoinname: `${nowTab.toUpperCase()}/USDT`,
                    win: zyNum,
                    loss: zsNum,
                    fold: bsnum,
                    hyzd: type,
                    num: num,
                    ploss: zyNum * bsnum * num * 0.01,
                    premium: hysetInfo?.hySxf,
                    lossPrice,
                    winPrice,
                    boomPrice,
                  });
                  setTimeout(() => {
                    setVisible(false);
                  }, 1000);
                }}
              >
                {translate(getText("確認下單"))}
              </div>
            </div>
          </div>
        </div>
      </CenterPopup>
    </Popup>
  );
}
