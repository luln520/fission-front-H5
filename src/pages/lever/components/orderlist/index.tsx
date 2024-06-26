import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Dialog } from "react-vant";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function OrderList({
  closeorder,
  addnumFun,
  strutcnumFun,
  editLossWinFun,
  coinListData,
  orderindex,
  setorderindex,
  leverorders,
  nowTab,
}) {
  const navigate = useNavigate();
  const tab = nowTab.toUpperCase() + "/USDT";
  const { t: translate } = useTranslation();
  //加 减 改
  const [tempData, settempData] = useState({} as any);
  const [addnum, setaddnum] = useState("");
  const [addnumVisible, setaddnumVisible] = useState(false);
  const [strutcnum, setstrutcnum] = useState("");
  const [strutcnumVisible, setstrutcnumVisible] = useState(false);
  const [lossnum, setlossnum] = useState("");
  const [winnum, setwinnum] = useState("");
  const [editLossWinVisible, seteditLossWinVisible] = useState(false);
  const [type, setType] = useState(1);

  const getboomPrice = (type, bsnum) => {
    const openPrice = coinListData[nowTab]?.close;
    let price = 0;
    if (type == 1) {
      price = openPrice * (1 - 1 / bsnum + 0.005);
    }
    if (type == 2) {
      price = openPrice * (1 + 1 / bsnum - 0.005);
    }
    return price;
  };

  const getArray = () => {
    const nodes = [];
    leverorders = leverorders.filter((data) => data.coinname === tab);
    leverorders = leverorders.filter(
      (data) => data.status === (orderindex == 1 ? 1 : 2)
    );
    for (const data of leverorders) {
      nodes.push(
        <li class="orderlisttab-24">
          <span class="orderlisttab-25">{data.coinname}</span>
          {orderindex == 1 && <span class="orderlisttab-26">{data.num}</span>}
          <span class="orderlisttab-27">{data.sellprice}</span>
          <span
            class={data.hyzd == 1 ? "orderlisttab-28" : "orderlisttab-28-1"}
          >
            {data.hyzd == 1
              ? translate(getText("買多"))
              : translate(getText("買空"))}
          </span>
          {/* <span class="orderlisttab-29">0</span> */}
        </li>
      );
    }
    return nodes;
  };

  const getNode1 = () => {
    const nodes = [];
    let leverorderstemp=leverorders.filter((data) => data.coinname === tab);
    leverorderstemp = leverorderstemp.filter(
      (data) => data.status === (orderindex == 1 ? 1 : 2)
    );
    for (let index = 0; index < leverorderstemp.length; index++) {
      const data = leverorderstemp[index];
      const priceyd = (
        data.num *
        data.fold *
        ((data.buyprice -
          coinListData[data.coinname.replace("/USDT", "").toLowerCase()]
            ?.close) /
          data.buyprice)
      ).toFixed(4);
      const node = (
        <li class="leverorderlistItem11-4">
          <div
            class="leverorderlistItem11-5"
            onClick={() => {
              const sendData = {
                orderNo: data.orderNo,
                coinname: data.coinname,
                num: data.num,
                ploss: data.ploss,
                buytime: data.buytime,
                status: data.status,
                isWin: data.isWin,
              };
              if (data.status == 1) {
                return;
              }
              navigate(
                `/marketOrderInfo/${data.id}?data=${JSON.stringify(sendData)}`
              );
            }}
          >
            <div class="leverorderlistItem11-6">
              <div class="leverorderlistItem11-7">
                <div class="leverorderlistItem11-8">
                  <p class="leverorderlistItem11-9">
                    {translate(getText("交易品種"))}
                  </p>
                  <p class="leverorderlistItem11-10">{data.coinname}</p>
                  <p class="leverorderlistItem11-11">
                    {translate(getText("保证金"))}
                  </p>
                  <p class="leverorderlistItem11-12">{data.num?.toFixed(4)}</p>
                  <p class="leverorderlistItem11-13">
                    {translate(getText("倍数"))}
                  </p>
                  <p class="leverorderlistItem11-14">{data.fold}</p>
                </div>
              </div>
              <div class="leverorderlistItem11-15">
                <div class="leverorderlistItem11-16">
                  <p class="leverorderlistItem11-17">
                    {translate(getText("開倉價"))}
                  </p>
                  <p class="leverorderlistItem11-18">
                    {data.buyprice?.toFixed(4)}
                  </p>
                  <p class="leverorderlistItem11-19">
                    {translate(getText(data.status == 1 ? "現價" : "结算價"))}
                  </p>
                  <p class="leverorderlistItem11-20">
                    {data.status == 1 &&
                      coinListData[
                        data.coinname.replace("/USDT", "").toLowerCase()
                      ]?.close}{" "}
                    {data.status != 1 && data.sellprice}
                    &nbsp;
                  </p>
                  <p class="leverorderlistItem11-21">
                    {translate(getText("强平价格"))}
                  </p>
                  <p class="leverorderlistItem11-22">
                    {data.boomPrice?.toFixed(4)}
                  </p>
                </div>
              </div>
              <div class="leverorderlistItem11-23">
                <div class="leverorderlistItem11-24">
                  <p class="leverorderlistItem11-25">
                    {translate(getText("方向"))}
                  </p>
                  <p
                    class={
                      data.hyzd == 1
                        ? "leverorderlistItem11-32"
                        : "leverorderlistItem11-32-1"
                    }
                  >
                    {translate(getText(data.hyzd == 1 ? "買多" : "買空"))}
                  </p>
                  <p class="leverorderlistItem11-25">
                    {translate(getText("止損價"))}
                  </p>
                  <p class="leverorderlistItem11-26">
                    {data.lossPrice?.toFixed(4)}
                  </p>
                  <p class="leverorderlistItem11-27">
                    {translate(getText("止盈價"))}
                  </p>
                  <p class="leverorderlistItem11-28">
                    {data.winPrice?.toFixed(4)}
                  </p>
                </div>
              </div>
            </div>
            <div class="leverorderlistItem11-29">
              {data.status == 1 && (
                <div class="leverorderlistItem11-30">
                  <p class="leverorderlistItem11-31">
                    {translate(getText("預期收益"))}
                  </p>
                  <p
                    class={
                      (priceyd < 0 && data.hyzd == 1) ||
                      (priceyd > 0 && data.hyzd == 2)
                        ? "leverorderlistItem11-32"
                        : "leverorderlistItem11-32-1"
                    }
                  >
                    {(priceyd < 0 && data.hyzd == 1) ||
                    (priceyd > 0 && data.hyzd == 2)
                      ? Math.abs(priceyd)
                      : -Math.abs(priceyd)}
                  </p>
                </div>
              )}
              {data.status == 2 && (
                <div class="leverorderlistItem11-30">
                  <p class="leverorderlistItem11-31">
                    {translate(getText("收益"))}
                  </p>
                  <p
                    class={
                      data.ploss > 0
                        ? "leverorderlistItem11-32"
                        : "leverorderlistItem11-32-1"
                    }
                  >
                    {data.ploss > 0 ? "+" : ""}
                    {data.ploss}
                  </p>
                </div>
              )}
            </div>
          </div>
          {data.status == 1 && (
            <div class="leverorderlistItem11-33">
              <p
                class="leverorderlistItem11-34"
                onClick={(e) => {
                  Dialog.confirm({
                    title: translate(getText("提示")),
                    message: translate(getText("是否确认平仓？")),
                    cancelButtonText: translate(getText("取消")),
                    confirmButtonText: translate(getText("确认")),
                    onConfirm: () => {
                      closeorder(
                        data.id,
                        data?.num,
                        (priceyd < 0 && data.hyzd == 1) ||
                          (priceyd > 0 && data.hyzd == 2)
                          ? Math.abs(priceyd)
                          : -Math.abs(priceyd)
                      );
                    },
                  });
                }}
              >
                {translate(getText("平倉"))}
              </p>
              <p
                class="leverorderlistItem11-35"
                onClick={() => {
                  settempData(data);
                  setaddnumVisible(true);
                  setaddnum("");
                }}
              >
                {translate(getText("加仓"))}
              </p>
              <p
                class="leverorderlistItem11-35"
                onClick={() => {
                  settempData(data);
                  setstrutcnumVisible(true);
                  setstrutcnum("");
                }}
              >
                {translate(getText("减仓"))}
              </p>
              <p
                class="leverorderlistItem11-36"
                onClick={() => {
                  settempData(data);
                  seteditLossWinVisible(true);
                  setlossnum(data?.lossPrice);
                  setwinnum(data?.winPrice);
                }}
              >
                {translate(getText("設定止盈止損"))}
              </p>
            </div>
          )}
          {data.status == 1 && (
            <div class="leverorderlistItem11-37">
              {/* <p class="leverorderlistItem11-38">設定止盈止損</p> */}
              {/* <p class="leverorderlistItem11-39">鎖倉</p> */}
              {/* <p
                        class="leverorderlistItem11-40"
                      >
                        詳細
                      </p> */}
            </div>
          )}
        </li>
      );
      nodes.push(node);
    }
    return nodes;
  };
  return (
    <div
      style={{
        borderTop: ".625rem solid #030708",
      }}
    >
      <div class="leverchangebar-1">
        <div class="leverchangebar-2">
          <div class="leverchangebar-3">
            <div
              class={orderindex == 1 ? "leverchangebar-4" : "leverchangebar-7"}
              onClick={() => {
                setorderindex(1);
              }}
            >
              <span class="leverchangebar-5">持仓</span>
            </div>
          </div>
          <div class="leverchangebar-6">
            <div
              class={orderindex == 2 ? "leverchangebar-4" : "leverchangebar-7"}
              onClick={() => {
                setorderindex(2);
              }}
            >
              <span class="leverchangebar-8">历史委托</span>
            </div>
          </div>
        </div>
        <div class="leverchangebar-12"></div>
      </div>
      <div
        style={{
          boxSizing: "border-box",
          padding: "0 20px",
        }}
      >
        {getNode1()}
      </div>
      {/* 加仓 */}
      <Dialog
        visible={addnumVisible}
        title={translate(getText("加仓"))}
        confirmButtonText={translate(getText("确认"))}
        cancelButtonText={translate(getText("取消"))}
        showCancelButton
        onConfirm={() => {
          //调取
          addnumFun({
            orderNo: tempData?.orderNo,
            num: addnum,
            boomPrice: getboomPrice(tempData?.hyzd, tempData?.fold),
          });
          setaddnumVisible(false);
        }}
        onCancel={() => setaddnumVisible(false)}
      >
        <div
          style={{
            padding: "0 20px",
          }}
        >
          {translate(getText("订单号"))}：{tempData?.orderNo}
          <div class="leverOrderPopup-80">{translate(getText("数量"))}：</div>
          <div class="leverOrderPopup-81">
            <div class="leverOrderPopup-82">
              <div class="leverOrderPopup-83">
                <div class="leverOrderPopup-84">
                  <span
                    class="leverOrderPopup-85"
                    onClick={() => {
                      if (addnum && addnum > 0.1) {
                        setaddnum(addnum - 0.1);
                      }
                    }}
                  >
                    -
                  </span>
                </div>
              </div>
              <div class="leverOrderPopup-86">
                <div class="leverOrderPopup-87">
                  <div class="leverOrderPopup-88"></div>
                  <input
                    maxlength="140"
                    enterkeyhint="done"
                    autocomplete="off"
                    type="number"
                    class="leverOrderPopup-89"
                    value={addnum}
                    onChange={(e) => {
                      setaddnum(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="leverOrderPopup-90">
                <div class="leverOrderPopup-91">
                  <span
                    class="leverOrderPopup-92"
                    onClick={() => {
                      if (addnum) {
                        setaddnum(addnum + 0.1);
                      } else {
                        setaddnum(0.1);
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
      </Dialog>
      {/* 减仓 */}
      <Dialog
        visible={strutcnumVisible}
        title={translate(getText("减仓"))}
        confirmButtonText={translate(getText("确认"))}
        cancelButtonText={translate(getText("取消"))}
        showCancelButton
        onConfirm={() => {
          //调取
          strutcnumFun({
            orderNo: tempData?.orderNo,
            num: strutcnum,
            boomPrice: getboomPrice(tempData?.hyzd, tempData?.fold),
          });
          setstrutcnumVisible(false);
        }}
        onCancel={() => setstrutcnumVisible(false)}
      >
        <div
          style={{
            padding: "0 20px",
          }}
        >
          {translate(getText("订单号"))}：{tempData?.orderNo}
          <div class="leverOrderPopup-80">{translate(getText("数量"))}：</div>
          <div class="leverOrderPopup-81">
            <div class="leverOrderPopup-82">
              <div class="leverOrderPopup-83">
                <div class="leverOrderPopup-84">
                  <span
                    class="leverOrderPopup-85"
                    onClick={() => {
                      if (strutcnum && strutcnum > 0.1) {
                        setstrutcnum(strutcnum - 0.1);
                      }
                    }}
                  >
                    -
                  </span>
                </div>
              </div>
              <div class="leverOrderPopup-86">
                <div class="leverOrderPopup-87">
                  <div class="leverOrderPopup-88"></div>
                  <input
                    maxlength="140"
                    enterkeyhint="done"
                    autocomplete="off"
                    type="number"
                    class="leverOrderPopup-89"
                    value={strutcnum}
                    onChange={(e) => {
                      setstrutcnum(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="leverOrderPopup-90">
                <div class="leverOrderPopup-91">
                  <span
                    class="leverOrderPopup-92"
                    onClick={() => {
                      if (strutcnum) {
                        setstrutcnum(strutcnum + 0.1);
                      } else {
                        setstrutcnum(0.1);
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
      </Dialog>

      {/* 設定止盈止損 */}
      <Dialog
        visible={editLossWinVisible}
        title={translate(getText("設定止盈止損"))}
        confirmButtonText={translate(getText("确认"))}
        cancelButtonText={translate(getText("取消"))}
        showCancelButton
        onConfirm={() => {
          //调取
          editLossWinFun({
            orderNo: tempData?.orderNo,
            lossPrice: lossnum,
            winPrice: winnum,
            boomPrice: getboomPrice(tempData?.hyzd, tempData?.fold),
          });
          seteditLossWinVisible(false);
        }}
        onCancel={() => seteditLossWinVisible(false)}
      >
        <div
          style={{
            padding: "0 20px",
          }}
        >
          {translate(getText("订单号"))}：{tempData?.orderNo}
          <div class="leverOrderPopup-80">{translate(getText("止盈"))}：</div>
          <div class="leverOrderPopup-81">
            <div class="leverOrderPopup-82">
              <div class="leverOrderPopup-83">
                <div class="leverOrderPopup-84">
                  <span
                    class="leverOrderPopup-85"
                    onClick={() => {
                      if (winnum && winnum > 0.1) {
                        setwinnum(winnum - 0.1);
                      }
                    }}
                  >
                    -
                  </span>
                </div>
              </div>
              <div class="leverOrderPopup-86">
                <div class="leverOrderPopup-87">
                  <div class="leverOrderPopup-88"></div>
                  <input
                    maxlength="140"
                    enterkeyhint="done"
                    autocomplete="off"
                    type="number"
                    class="leverOrderPopup-89"
                    value={winnum}
                    onChange={(e) => {
                      setwinnum(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="leverOrderPopup-90">
                <div class="leverOrderPopup-91">
                  <span
                    class="leverOrderPopup-92"
                    onClick={() => {
                      if (winnum) {
                        setwinnum(winnum + 0.1);
                      } else {
                        setwinnum(0.1);
                      }
                    }}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="leverOrderPopup-80">{translate(getText("止損"))}：</div>
          <div class="leverOrderPopup-81">
            <div class="leverOrderPopup-82">
              <div class="leverOrderPopup-83">
                <div class="leverOrderPopup-84">
                  <span
                    class="leverOrderPopup-85"
                    onClick={() => {
                      if (lossnum && lossnum > 0.1) {
                        setlossnum(lossnum - 0.1);
                      }
                    }}
                  >
                    -
                  </span>
                </div>
              </div>
              <div class="leverOrderPopup-86">
                <div class="leverOrderPopup-87">
                  <div class="leverOrderPopup-88"></div>
                  <input
                    maxlength="140"
                    enterkeyhint="done"
                    autocomplete="off"
                    type="number"
                    class="leverOrderPopup-89"
                    value={lossnum}
                    onChange={(e) => {
                      setlossnum(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="leverOrderPopup-90">
                <div class="leverOrderPopup-91">
                  <span
                    class="leverOrderPopup-92"
                    onClick={() => {
                      if (lossnum) {
                        setlossnum(lossnum + 0.1);
                      } else {
                        setlossnum(0.1);
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
      </Dialog>
    </div>
    // <div class="orderlisttab-1">
    //   <div class="orderlisttab-2">
    //     <div class="orderlisttab-3">
    //       <div class="orderlisttab-4">
    //         <div class="orderlisttab-5">
    //           <div
    //             class={orderindex == 1 ? "orderlisttab-6" : "orderlisttab-7"}
    //             onClick={() => {
    //               setorderindex(1);
    //             }}
    //           >
    //             {translate(getText("持倉"))}
    //           </div>
    //           <div
    //             class={orderindex == 2 ? "orderlisttab-6" : "orderlisttab-7"}
    //             onClick={() => {
    //               setorderindex(2);
    //             }}
    //           >
    //             {translate(getText("已成交"))}
    //           </div>
    //           <div
    //             class={orderindex == 3 ? "orderlisttab-6" : "orderlisttab-7"}
    //             onClick={() => {
    //               setorderindex(3);
    //             }}
    //           >
    //             {translate(getText("已平倉"))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="orderlisttab-11">
    //     {getNode1()}
    //     <div style={{ height: "10px" }}></div>
    //   </div>

    // </div>
  );
}
