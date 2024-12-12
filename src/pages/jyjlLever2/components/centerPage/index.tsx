import { Empty } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Dialog } from "react-vant";
import { newsApi } from "../../../../api/news-api";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CenterPage({
  coinListData,
  leverorders,
  closeorder,
  addnumFun,
  strutcnumFun,
  editLossWinFun,
}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const [index, setindex] = useState(1);
  //加 减 改
  const [tempData, settempData] = useState({} as any);
  const [addnum, setaddnum] = useState("");
  const [addnumVisible, setaddnumVisible] = useState(false);
  const [strutcnum, setstrutcnum] = useState("");
  const [strutcnumVisible, setstrutcnumVisible] = useState(false);
  const [lossnum, setlossnum] = useState("");
  const [winnum, setwinnum] = useState("");
  const [editLossWinVisible, seteditLossWinVisible] = useState(false);

  const getboomPrice = (type, bsnum, nowTab) => {
    nowTab = nowTab?.replace("/USDT", "")?.toLowerCase();
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

  const getNode1 = () => {
    const nodes = [];
    const leverorderstemp = leverorders.filter(
      (data) => data.status === (index == 1 ? 1 : 2)
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
        <li class="leverorderlistItem11-4-1">
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
                  <p class="leverorderlistItem1-9">
                    {translate(getText("交易品種"))}
                  </p>
                  <p class="leverorderlistItem1-10">{data.coinname}</p>
                  <p class="leverorderlistItem1-11">
                    {translate(getText("保证金"))}
                  </p>
                  <p class="leverorderlistItem1-12">{data.num?.toFixed(4)}</p>
                  <p class="leverorderlistItem1-13">
                    {translate(getText("倍数"))}
                  </p>
                  <p class="leverorderlistItem1-14">{data.fold}</p>
                </div>
              </div>
              <div class="leverorderlistItem11-15">
                <div class="leverorderlistItem11-16">
                  <p class="leverorderlistItem1-17">
                    {translate(getText("開倉價"))}
                  </p>
                  <p class="leverorderlistItem1-18">
                    {data.buyprice?.toFixed(4)}
                  </p>
                  <p class="leverorderlistItem1-19">
                    {translate(getText(data.status == 1 ? "現價" : "结算價"))}
                  </p>
                  <p class="leverorderlistItem1-20">
                    {data.status == 1 &&
                      coinListData[
                        data.coinname.replace("/USDT", "").toLowerCase()
                      ]?.close}{" "}
                    {data.status != 1 && data.sellprice}
                    &nbsp;
                  </p>
                  <p class="leverorderlistItem1-21">
                    {translate(getText("强平价格"))}
                  </p>
                  <p class="leverorderlistItem1-22">
                    {data.boomPrice?.toFixed(4)}
                  </p>
                </div>
              </div>
              <div class="leverorderlistItem1-23">
                <div class="leverorderlistItem1-24">
                  <p class="leverorderlistItem1-25">
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
                  <p class="leverorderlistItem1-25">
                    {translate(getText("止損價"))}
                  </p>
                  <p class="leverorderlistItem1-26">{data.lossPrice}</p>
                  <p class="leverorderlistItem1-27">
                    {translate(getText("止盈價"))}
                  </p>
                  <p class="leverorderlistItem1-28">{data.winPrice}</p>
                </div>
              </div>
            </div>
            <div class="leverorderlistItem11-29">
              {data.status == 1 && (
                <div class="leverorderlistItem11-30">
                  <p class="leverorderlistItem1-31">
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
                  <p class="leverorderlistItem11-3">
                    {translate(getText("收益"))}
                  </p>
                  <p
                    class={
                      data.ploss > 0
                        ? "leverorderlistItem11-32"
                        : "leverorderlistItem11-32-1"
                    }
                    style={{
                      padding: "0 0 0 10px",
                    }}
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
                    cancelButtonText:translate(getText("取消")),
                    confirmButtonText:translate(getText("确认")),
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

  const getNode2 = () => {
    const nodes = [];
    const leverorderstemp = leverorders.filter(
      (data) => data.status === (index == 1 ? 1 : 2)
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
        <li
          className="hyjyjl-2"
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
          <div className="hyjyjl-3">
            <div className="hyjyjl-4">
              <div className="hyjyjl-5">
                {data.coinname}
                <div className={data.hyzd == 1 ? "hyjyjl-32" : "hyjyjl-6"}>
                  {data.hyzd == 1
                    ? translate(getText("買多"))
                    : translate(getText("買空"))}
                </div>
              </div>
              <div className="hyjyjl-7">{data.buytime?.substring(0, 16)}</div>
            </div>
            <div className="hyjyjl-8">
              <div className="hyjyjl-9">
                <span className="hyjyjl-10">
                  <span className="hyjyjl-11">
                    {data.num.toFixed(4)}
                    <span className="hyjyjl-12">
                      <span className="hyjyjl-13">USDT</span>
                    </span>
                  </span>
                </span>
              </div>
              <div className="hyjyjl-14">
                {translate(getText("盈虧"))}
                {data?.status == 2 && (
                  <span className={data.isWin == 1 ? "hyjyjl-41" : "hyjyjl-15"}>
                    <span className="hyjyjl-16">
                      {data.isWin == 1 ? "+" : "-"}
                      {data.ploss}
                    </span>
                  </span>
                )}
              </div>
            </div>
            <div className="hyjyjl-17"></div>
            <div className="hyjyjl-18">
              <div className="hyjyjl-19">
                <div className="hyjyjl-20">
                  {translate(getText("購買"))}
                  {lan == "zh" ? "" : <span>&nbsp;</span>}
                  {translate(getText("價格"))}
                </div>
                <div className="hyjyjl-21">{data.buyprice}</div>
              </div>
              <div className="hyjyjl-22">
                <div className="hyjyjl-23">{translate(getText("倍数"))}</div>
                <div className="hyjyjl-24">{data.fold}X</div>
              </div>
              <div className="hyjyjl-25">
                <div className="hyjyjl-26">{translate(getText("操作"))}</div>
                <div className="hyjyjl-27">
                  {data?.status == 1 && (
                    <button
                      className="pingcang"
                      onClick={(e) => {
                        closeorder(
                          data.id,
                          data?.num,
                          (priceyd < 0 && data.hyzd == 1) ||
                            (priceyd > 0 && data.hyzd == 2)
                            ? Math.abs(priceyd)
                            : -Math.abs(priceyd)
                        );
                        e.stopPropagation();
                      }}
                    >
                      {translate(getText("平仓"))}
                    </button>
                  )}
                  {data?.status != 1 && (
                    <span className="jyjl-18">
                      {translate(getText("詳情"))}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </li>
      );
      nodes.push(node);
    }
    return nodes;
  };
  return (
    <div>
      {/* 头部 */}
      <div class="leverorderlistTopBar-1">
        <div
          class={
            index == 1 ? "leverorderlistTopBar-2" : "leverorderlistTopBar-3"
          }
          onClick={() => {
            setindex(1);
          }}
        >
          {translate(getText("在持"))}
        </div>
        <div
          class={
            index == 2 ? "leverorderlistTopBar-2" : "leverorderlistTopBar-3"
          }
          onClick={() => {
            setindex(2);
          }}
        >
          {translate(getText("已成交"))}
        </div>
        <div
          class={
            index == 3 ? "leverorderlistTopBar-2" : "leverorderlistTopBar-3"
          }
          onClick={() => {
            setindex(3);
          }}
        >
          {translate(getText("已平倉"))}
        </div>
      </div>
      {/* 列表 */}
      <ul class="leverorderlistItem1-3">
        {index == 1 && getNode1()}
        {index != 1 && getNode2()}
      </ul>

      <div className="jyjl-99">{translate(getText("暂无更多了"))}</div>
      {/* 加仓 */}
      <Dialog
        visible={addnumVisible}
        title="加仓"
        showCancelButton
        confirmButtonText={translate(getText("确认"))}
        cancelButtonText={translate(getText("取消"))}
        onConfirm={() => {
          //调取
          addnumFun({
            orderNo: tempData?.orderNo,
            num: addnum,
            boomPrice: getboomPrice(
              tempData?.hyzd,
              tempData?.fold,
              tempData?.coinname
            ),
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
            boomPrice: getboomPrice(
              tempData?.hyzd,
              tempData?.fold,
              tempData?.coinname
            ),
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
            boomPrice: getboomPrice(
              tempData?.hyzd,
              tempData?.fold,
              tempData?.coinname
            ),
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
  );
}
