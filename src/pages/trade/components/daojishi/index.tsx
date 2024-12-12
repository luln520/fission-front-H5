import { Module } from "module";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { WSContext } from "../../../../router/router";
import { Button, Modal, Space, Toast, Divider } from "antd-mobile";
import { format00Time, getText } from "../../../../utils/util";
import { Tiny } from "@ant-design/plots";
import { Flex, Progress } from "antd";
import "./index.css";
import { contractApi } from "../../../../api/contract-api";

export default function DaoJiShi({
  userInfo,
  daojis,
  nowTab,
  sendData,
  hysetInfo,
  coinListData,
  // yqsy,
  // setChangeDaoJiShi,
  setVisible,
  companyData,
  successOrderNo,
}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [time, setTime] = useState(daojis as number);
  const lan = localStorage.getItem("i18n");
  const [xj, setXj] = useState("");
  const [isEndType, setisEndType] = useState(1); //1 计时   2 计时结束
  const [isWin, setisWin] = useState(false);
  const [winNum1, setwinNum1] = useState("");
  const [winNum2, setwinNum2] = useState("");
  const [orderInfo, setorderInfo] = useState({} as any);
  let temporderInfo = {};
  let isWinTemp = false;
  const [jsnum, setjsNum] = useState("");
  let ytime = daojis;
  let timer = null;
  let timer2 = null;

  //加载数 据
  const loadOrderInfo = async () => {
    const data = await contractApi.orderNo({ orderNo: successOrderNo });
    if (data.ok) {
      setorderInfo(data.data?.data);
      temporderInfo = data.data?.data;
    }
  };
  //前端结算
  const jieshuan = () => {
    setisEndType(true);
    let fh =
      (coinListData[nowTab]?.close - xj > 0 && sendData?.ctzfx == 1) ||
      (coinListData[nowTab]?.close - xj < 0 && sendData?.ctzfx == 2)
        ? "+"
        : "-";
    let num =
      (coinListData[nowTab]?.close - xj > 0 && sendData?.ctzfx == 1) ||
      (coinListData[nowTab]?.close - xj < 0 && sendData?.ctzfx == 2)
        ? (sendData.ctzed * sendData.cykbl) / 100
        : sendData.ctzed;
    //判断亏盈设置
    if (userInfo?.winOrLose == 1) {
      fh = "+";
      num = (sendData.ctzed * sendData.cykbl) / 100;
      setjsNum(fh + num.toFixed(2));
      return;
    }
    if (userInfo?.winOrLose == 2) {
      fh = "-";
      num = sendData.ctzed;
      setjsNum(fh + num.toFixed(2));
      return;
    }
    setjsNum(fh + num.toFixed(2));
  };
  useEffect(() => {
    timer = setInterval(() => {
      if (ytime <= 1) {
        clearInterval(timer);
        setisEndType(2);
        //结算
        //jieshuan();
        return;
      }
      setTime(ytime--);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    setXj(coinListData[nowTab]?.close);
  }, []);

  useEffect(() => {
    //判断输赢
    let tempwinNum1 = 0;
    let tempwinNum2 = 0;
    //计算
    tempwinNum1 = (
      (Math.random() * (sendData.ctzed * sendData.cykbl)) /
      100
    ).toFixed(2);
    setwinNum1(tempwinNum1);
    tempwinNum2 = (Math.random() * sendData.ctzed).toFixed(2);
    setwinNum2(tempwinNum2);
  }, [coinListData[nowTab]?.close]);

  useEffect(() => {
    setTime(daojis);
  }, [daojis]);

  // 获取订单信息
  useEffect(() => {
    loadOrderInfo();
    timer2 = setInterval(() => {
      loadOrderInfo();
    }, 2000);
    return () => {
      clearInterval(timer2);
    };
  }, []);
  return (
    <div className="popover-box-1">
      <div className="popover-box-2">
        <p className="popover-box-3">{`${nowTab}`.toUpperCase()}</p>
        <div
          className="popover-box-4"
          onClick={() => {
            //关闭
            setVisible(false);
          }}
        ></div>
      </div>
      <div className="popover-box-5">
        <div className="popover-box-6">
          {/* <div className="daojishi-7">{time}</div> */}
          {/* 倒计时 */}
          {isEndType == 1 && (
            // <Progress
            //   type="circle"
            //   percent={(time / daojis) * 100}
            //   format={(percent) => `${time}`}
            //   strokeColor="var(--boutton-background-color)"
            // />
            <div
              style={{
                fontSize: "30px",
                fontWeight: 600,
                color: "var(--boutton-background-color)",
              }}
            >
              {format00Time(time)}
            </div>
          )}
          {isEndType == 2 && orderInfo?.status == 1 && (
            <div>
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: 600,
                  color: "var(--boutton-background-color)",
                }}
              >
                {translate(getText("結算中"))}...
              </span>
            </div>
          )}
          {/* 计算完成 */}
          {orderInfo?.status == 2 && (
            <div>
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: 600,
                  color: "var(--boutton-background-color)",
                }}
              >
                {orderInfo?.isWin == 1 ? "+" : "-"} {orderInfo?.ploss} USDT
              </span>

              <p
                style={{
                  fontSize: "14px",
                  color: "#888",
                  marginTop: 10,
                }}
              >
                {translate(getText("到期結算完成"))}
              </p>
            </div>
          )}
        </div>
        {/* <div className="popover-box-15">
          <div className="popover-box-16">
            <p className="popover-box-17">現價</p>
          </div>
          <div className="popover-box-18">
            <p className="popover-box-19">64954.68</p>
          </div>
        </div> */}
        <div className="popover-box-20">
          <div className="popover-box-21">
            <p className="popover-box-22">
              {translate(getText("購買"))}
              {lan == "zh" ? "" : <span>&nbsp;</span>}
              {translate(getText("價格"))}
            </p>
            <p className="popover-box-22">{translate(getText("方向"))}</p>
            <p className="popover-box-23">{translate(getText("投資金額"))}</p>
            {orderInfo?.status == 2 && (
              <p className="popover-box-24">{translate(getText("結算價格"))}</p>
            )}
            {orderInfo?.status == 1 && (
              <p className="popover-box-24">{translate(getText("最新價格"))}</p>
            )}
            {orderInfo?.status == 1 && (
              <p
                className="popover-box-25"
                style={{
                  color:
                    (orderInfo?.buyprice < coinListData[nowTab]?.close &&
                      orderInfo?.hyzd == 1) ||
                    (orderInfo?.buyprice > coinListData[nowTab]?.close &&
                      orderInfo?.hyzd == 2)
                      ? "rgb(28, 173, 144)"
                      : "rgb(205, 78, 101)",
                }}
              >
                {translate(getText("預期收入"))}
              </p>
            )}
            {orderInfo?.status == 2 && (
              <p
                className="popover-box-25"
                style={{
                  color:
                    orderInfo?.isWin == 1
                      ? "rgb(28, 173, 144)"
                      : "rgb(205, 78, 101)",
                }}
              >
                {translate(getText("預期收入"))}
              </p>
            )}
          </div>
          <div className="popover-box-26">
            <p className="popover-box-28">&nbsp;{orderInfo?.buyprice}</p>
            <p className="popover-box-27">
              {orderInfo?.hyzd == 1
                ? translate(getText("買多"))
                : translate(getText("買空"))}
            </p>
            <p className="popover-box-28">{orderInfo?.num} USDT</p>
            {orderInfo?.status == 2 && (
              <p className="popover-box-28">{orderInfo?.sellprice}</p>
            )}
            {orderInfo?.status == 1 && (
              <p className="popover-box-29">
                &nbsp;{coinListData[nowTab]?.close}
              </p>
            )}
            {/* 变动 */}
            {orderInfo?.status == 1 && (
              <p
                className="popover-box-30"
                style={{
                  color:
                    (orderInfo?.buyprice < coinListData[nowTab]?.close &&
                      orderInfo?.hyzd == 1) ||
                    (orderInfo?.buyprice > coinListData[nowTab]?.close &&
                      orderInfo?.hyzd == 2)
                      ? "rgb(28, 173, 144)"
                      : "rgb(205, 78, 101)",
                }}
              >
                {(orderInfo?.buyprice < coinListData[nowTab]?.close &&
                  orderInfo?.hyzd == 1) ||
                (orderInfo?.buyprice > coinListData[nowTab]?.close &&
                  orderInfo?.hyzd == 2)
                  ? "+"
                  : "-"}
                {(orderInfo?.buyprice < coinListData[nowTab]?.close &&
                  orderInfo?.hyzd == 1) ||
                (orderInfo?.buyprice > coinListData[nowTab]?.close &&
                  orderInfo?.hyzd == 2)
                  ? winNum1
                  : winNum2}
              </p>
            )}
            {orderInfo?.status == 2 && (
              <p
                className="popover-box-30"
                style={{
                  color:
                    orderInfo?.isWin == 1
                      ? "rgb(28, 173, 144)"
                      : "rgb(205, 78, 101)",
                }}
              >
                {orderInfo?.isWin == 1 ? "+" : "-"}
                {orderInfo?.ploss}
              </p>
            )}
          </div>
        </div>
        <div className="popover-box-31">
          <button
            className="popover-box-32"
            onClick={() => {
              setVisible(false);
            }}
          >
            {translate(getText("確認訂單"))}
          </button>
        </div>
      </div>
    </div>
  );
}
