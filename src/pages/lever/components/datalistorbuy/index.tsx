import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function DataListAndBuy({
  huobigetHistory,
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

  const getArray1 = () => {
    const nodes = [];
    for (const i in huobigetHistory) {
      const data = huobigetHistory[i]?.data[0];
      if (i >= 6) {
        break;
      }
      nodes.push(
        <div class="leverListAndBuy-102">
          <div class="leverListAndBuy-103">
            <span class="leverListAndBuy-104">{data.price}</span>
          </div>
          <div class="leverListAndBuy-105">
            <span class="leverListAndBuy-106">{data.amount?.toFixed(5)}</span>
          </div>
          <div class="leverListAndBuy-107"></div>
        </div>
      );
    }
    return nodes;
  };

  const getArray2 = () => {
    const nodes = [];
    for (const i in huobigetHistory) {
      const data = huobigetHistory[i]?.data[0];
      if (i <= 6 || i > 12) {
        continue;
      }
      nodes.push(
        <div class="leverListAndBuy-144">
          <div class="leverListAndBuy-145">
            <span class="leverListAndBuy-146">{data.price}</span>
          </div>
          <div class="leverListAndBuy-147">
            <span class="leverListAndBuy-148">{data.amount?.toFixed(5)}</span>
          </div>
          <div
            class="leverListAndBuy-149"
            style={{
              width: "110%",
            }}
          ></div>
        </div>
      );
    }
    return nodes;
  };

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
    <div class="leverListAndBuy-1">
      <div class="leverListAndBuy-2">
        <div class="leverListAndBuy-3">
          <div class="leverListAndBuy-4">
            <span class="leverListAndBuy-5">{translate(getText("逐仓"))}</span>
          </div>
          <div class="leverListAndBuy-6">
            <div class="leverListAndBuy-7">
              <div
                class={type == 1 ? "leverListAndBuy-8" : "leverListAndBuy-12"}
                onClick={() => {
                  setType(1);
                }}
              >
                <div class="leverListAndBuy-10">
                  <span class="leverListAndBuy-11">{translate(getText("做多"))}</span>
                </div>
              </div>
              <div
                class={type == 2 ? "leverListAndBuy-8-1" : "leverListAndBuy-12"}
                onClick={() => {
                  setType(2);
                }}
              >
                <div class="leverListAndBuy-10">
                  <span class="leverListAndBuy-11">{translate(getText("做空"))}</span>
                </div>
              </div>
            </div>

            <div class="leverListAndBuy-71">
              <div
                class="leverListAndBuy-72"
                onClick={() => {
                  if (num && num > 0.1) {
                    setNum(num - 0.1);
                  }
                }}
              ></div>
              <div class="leverListAndBuy-73">
                <div class="leverListAndBuy-74">
                  <input
                    placeholder={translate(getText("输入数量"))}
                    type="number"
                    maxlength="140"
                    class="leverListAndBuy-76"
                    value={num}
                    onChange={(e) => {
                      setNum(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div
                class="leverListAndBuy-77"
                onClick={() => {
                  if (num) {
                    setNum(num + 0.1);
                  } else {
                    setNum(0.1);
                  }
                }}
              ></div>
            </div>
            <div class="leverListAndBuy-71">
              <div
                class="leverListAndBuy-72"
                onClick={() => {
                  if (bsnum && bsnum > 1) {
                    setbsNum(bsnum - 1);
                  }
                }}
              ></div>
              <div class="leverListAndBuy-73">
                <div class="leverListAndBuy-74">
                  <input
                    placeholder={translate(getText("输入倍数"))}
                    type="number"
                    maxlength="140"
                    step="1"
                    pattern="[0-9]*"
                    autocomplete="off"
                    class="leverListAndBuy-76"
                    value={bsnum}
                    onChange={(e) => {
                      setbsNum(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div
                class="leverListAndBuy-77"
                onClick={() => {
                  setbsNum(bsnum + 1);
                }}
              ></div>
            </div>
            {/* <div class="leverListAndBuy-78">
              <div class="leverListAndBuy-79">25%</div>
              <div class="leverListAndBuy-80">50%</div>
              <div class="leverListAndBuy-81">75%</div>
              <div class="leverListAndBuy-82">100%</div>
            </div> */}
            <div class="leverListAndBuy-83">
              <div class="leverListAndBuy-84">
                {/* <i class="leverListAndBuy-85"></i> */}
                <div class="leverListAndBuy-86">
                  <span class="leverListAndBuy-87">{translate(getText("止盈止损"))}</span>
                </div>
              </div>
            </div>
            <div class="leverListAndBuy-71">
              <div class="leverListAndBuy-73">
                <div class="leverListAndBuy-74">
                  <input
                    placeholder={translate(getText("请输入止盈价格(USDT)"))}
                    type="number"
                    maxlength="140"
                    step="0.000000000000000001"
                    pattern="[0-9]*"
                    autocomplete="off"
                    class="leverListAndBuy-76"
                    value={winPrice}
                    onChange={(e) => {
                      setwinPrice(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div class="leverListAndBuy-71">
              <div class="leverListAndBuy-73">
                <div class="leverListAndBuy-74">
                  <input
                    placeholder={translate(getText("请输入止损价格(USDT)"))}
                    type="number"
                    maxlength="140"
                    step="0.000000000000000001"
                    pattern="[0-9]*"
                    autocomplete="off"
                    class="leverListAndBuy-76"
                    value={lossPrice}
                    onChange={(e) => {
                      setlossPrice(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div class="leverListAndBuy-88">
              <span class="leverListAndBuy-89">
                {translate(getText("可用数量"))} {userInfo?.usdt} USDT
              </span>
            </div>
          </div>
        </div>
        <div
          class={type == 2 ? "leverListAndBuy-92-1" : "leverListAndBuy-92"}
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
          }}
        >
          {type == 1 ? translate(getText("做多买入")) : translate(getText("做空买入"))}
        </div>
        <div class="leverListAndBuy-93">
          <span class="leverListAndBuy-94">
            {translate(getText("最新价"))} {coinListData[nowTab]?.close}
          </span>
        </div>
      </div>
      <div class="leverListAndBuy-95">
        <div class="leverListAndBuy-96"></div>
      </div>
      <div class="leverListAndBuy-97">
        <div class="leverListAndBuy-98">
          <div class="leverListAndBuy-99">{translate(getText("价格"))}(USDT)</div>
          <div class="leverListAndBuy-100">{translate(getText("数量"))}({nowTab?.toUpperCase()})</div>
        </div>
        <div class="leverListAndBuy-101">
          {/*  */}
          {getArray1()}
        </div>
        <div class="leverListAndBuy-138">
          <div class="leverListAndBuy-139">
            <span class="leverListAndBuy-140">
              {coinListData[nowTab]?.close}
            </span>
          </div>
          <div class="leverListAndBuy-141">
            <span class="leverListAndBuy-142">
              ≈ ${coinListData[nowTab]?.close}
            </span>
          </div>
        </div>
        <div class="leverListAndBuy-143">
          {/*  */}
          {getArray2()}
        </div>
      </div>
    </div>
  );
}
