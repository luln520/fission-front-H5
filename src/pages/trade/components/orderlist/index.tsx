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
  const [type, setType] = useState(1);
  const getNode = () => {
    hyorders = hyorders.filter((data) => data.coinname === tab);
    hyorders = hyorders.filter((data) => data.status === type);
    const nodes = [];
    for (let index = 0; index < hyorders.length; index++) {
      const data = hyorders[index];
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
                    {data.num.toFixed(2)}
                    <span className="hyjyjl-12">
                      <span className="hyjyjl-13">USDT</span>
                    </span>
                  </span>
                </span>
              </div>
              <div className="hyjyjl-14">
                {translate(getText("盈虧"))}
                {data.status != 1 && (
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
                <div className="hyjyjl-23">
                  {translate(getText("結算價格"))}
                </div>
                <div className="hyjyjl-24">{data.sellprice}</div>
              </div>
              <div className="hyjyjl-25">
                <div className="hyjyjl-26">{translate(getText("周期"))}</div>
                <div className="hyjyjl-27">{data.time}</div>
              </div>
            </div>
          </div>
        </li>
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
  return (
    <div style={{
      borderTop: ".625rem solid #030708"
    }}>
      <div class="tradechangebar-1">
        <div class="tradechangebar-2">
          <div class="tradechangebar-3">
            <div
              class={type == 1 ? "tradechangebar-4" : "tradechangebar-7"}
              onClick={() => {
                setType(1);
              }}
            >
              <span class="tradechangebar-5">交割订单</span>
            </div>
          </div>
          <div class="tradechangebar-6">
            <div
              class={type == 2 ? "tradechangebar-4" : "tradechangebar-7"}
              onClick={() => {
                setType(2);
              }}
            >
              <span class="tradechangebar-8">历史订单</span>
            </div>
          </div>
        </div>
        <div class="tradechangebar-12"></div>
      </div>
      <div>{getNode()}</div>
    </div>
  );
}
