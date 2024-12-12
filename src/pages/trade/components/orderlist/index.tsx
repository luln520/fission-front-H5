import { Empty, ErrorBlock } from "antd-mobile";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import DataEmpty from "../../../../components/dataempty";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function OrderList({ hyorders, nowTab }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const tab = nowTab.toUpperCase() + "/USDT";
  const lan = localStorage.getItem("i18n");
  const [type, setType] = useState(0);
  const getNode = () => {
    hyorders = hyorders.filter((data) => data.coinname === tab);
    hyorders = hyorders.filter((data) => data.status === type);
    const nodes = [];
    for (let index = 0; index < hyorders.length; index++) {
      const data = hyorders[index];
      const node = (
        <div
          className="tradelistruning-2"
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
            if (data.status == 1||data.status == 0) {
              return;
            }
            navigate(
              `/marketOrderInfo/${data.id}?data=${JSON.stringify(sendData)}`
            );
          }}
        >
          <div className="tradelistruning-3">
            <div className="tradelistruning-4">
              <div className="tradelistruning-5">
                <span className="tradelistruning-6">
                  {data.status == 0&&translate(getText("计划中"))}
                  {data.status == 1&&translate(getText("委托中"))}
                  {data.status == 2&&translate(getText("已完成"))}
                </span>
              </div>
              {/* <div className="tradelistruning-7">撤单</div> */}
            </div>
            <div className="tradelistruning-8">
              <div className="tradelistruning-9">
                <div className="tradelistruning-10">
                  <span className="tradelistruning-11">{translate(getText("产品"))}</span>
                </div>
                <div className="tradelistruning-12"> {data.coinname}</div>
              </div>
              <div className="tradelistruning-13">
                <div className="tradelistruning-14">
                  <span className="tradelistruning-15">{translate(getText("方向"))}</span>
                </div>
                <div
                  className={
                    data.hyzd == 1
                      ? "tradelistruning-16"
                      : "tradelistruning-16-1"
                  }
                >
                  {data.hyzd == 1
                    ? translate(getText("看涨"))
                    : translate(getText("看跌"))}
                </div>
              </div>
              <div className="tradelistruning-17">
                <div className="tradelistruning-18">
                  <span className="tradelistruning-19">{translate(getText("时间周期"))}</span>
                </div>
                <div className="tradelistruning-20">{data.time}</div>
              </div>
              <div className="tradelistruning-21">
                <div className="tradelistruning-22">
                  <span className="tradelistruning-23">{translate(getText("数量"))}</span>
                </div>
                <div className="tradelistruning-24"> {data.num.toFixed(2)}</div>
              </div>
              <div className="tradelistruning-25">
                <div className="tradelistruning-26">
                  <span className="tradelistruning-27">{translate(getText("下单时间"))}</span>
                </div>
                <div className="tradelistruning-28">
                  {data.plantime?.substring(0, 16)}
                </div>
              </div>
              {data.status==0&&<div className="tradelistruning-25">
                <div className="tradelistruning-26">
                  <span className="tradelistruning-27">{translate(getText("计划时间"))}</span>
                </div>
                <div className="tradelistruning-28">
                  {formatDate(data.plantime)}
                </div>
              </div>}
              <div className="tradelistruning-29">
                <div className="tradelistruning-30">
                  <span className="tradelistruning-31">{translate(getText("开仓价格"))}</span>
                </div>
                <div className="tradelistruning-32"> {data.buyprice}</div>
              </div>
              {(data.status != 0&&data.status != 1) && (
                <div className="tradelistruning-33">
                  <div className="tradelistruning-34">
                    <span className="tradelistruning-35">{translate(getText("结算价格"))}</span>
                  </div>
                  <div className="tradelistruning-36"> {data.sellprice}</div>
                </div>
              )}
              <div className="tradelistruning-33">
                <div className="tradelistruning-34">
                  <span className="tradelistruning-35">{translate(getText("成交量"))}</span>
                </div>
                <div className="tradelistruning-36"> {data.num.toFixed(2)}</div>
              </div>
              {(data.status != 0&&data.status != 1) && (
                <div className="tradelistruning-33">
                  <div className="tradelistruning-34">
                    <span className="tradelistruning-35">{translate(getText("亏盈"))}</span>
                  </div>
                  <div className="tradelistruning-36">
                    {data.isWin == 1 ? "+" : "-"}
                    {data.ploss}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
      nodes.push(node);
    }
    if (nodes.length == 0) {
      nodes.push(<DataEmpty />);
    } else {
      nodes.push(
        <div
          style={{
            textAlign: "center",
          }}
        >
          {translate(getText("暂无更多了"))}
        </div>
      );
    }
    return nodes;
  };

  function formatDate(dateTime) {
    const date=new Date(dateTime);
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    let hour = String(date.getHours()).padStart(2, '0');
    let minute = String(date.getMinutes()).padStart(2, '0');
    let second = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
  return (
    <div
      style={{
      }}
    >
      <div className="tradechangebar-1">
        <div className="tradechangebar-2">
        <div className="tradechangebar-3">
            <div
              className={type == 0 ? "tradechangebar-4" : "tradechangebar-7"}
              onClick={() => {
                setType(0);
              }}
            >
              <span className="tradechangebar-5">{translate(getText("计划订单"))}</span>
            </div>
          </div>
          <div className="tradechangebar-3">
            <div
              className={type == 1 ? "tradechangebar-4" : "tradechangebar-7"}
              onClick={() => {
                setType(1);
              }}
            >
              <span className="tradechangebar-5">{translate(getText("交割订单"))}</span>
            </div>
          </div>
          <div className="tradechangebar-6">
            <div
              className={type == 2 ? "tradechangebar-4" : "tradechangebar-7"}
              onClick={() => {
                setType(2);
              }}
            >
              <span className="tradechangebar-8">{translate(getText("历史订单"))}</span>
            </div>
          </div>
        </div>
        <div className="tradechangebar-12"></div>
      </div>
      <div
        style={{
          boxSizing: "border-box",
          padding: "0 20px",
        }}
      >
        {getNode()}
      </div>
    </div>
  );
}
