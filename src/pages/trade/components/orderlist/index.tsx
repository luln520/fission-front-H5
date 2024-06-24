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
        <div
          class="tradelistruning-2"
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
          <div class="tradelistruning-3">
            <div class="tradelistruning-4">
              <div class="tradelistruning-5">
                <span class="tradelistruning-6">
                  {data.status == 1 ? "委托中" : "已完成"}
                </span>
              </div>
              {/* <div class="tradelistruning-7">撤单</div> */}
            </div>
            <div class="tradelistruning-8">
              <div class="tradelistruning-9">
                <div class="tradelistruning-10">
                  <span class="tradelistruning-11">产品</span>
                </div>
                <div class="tradelistruning-12"> {data.coinname}</div>
              </div>
              <div class="tradelistruning-13">
                <div class="tradelistruning-14">
                  <span class="tradelistruning-15">方向</span>
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
              <div class="tradelistruning-17">
                <div class="tradelistruning-18">
                  <span class="tradelistruning-19">时间周期</span>
                </div>
                <div class="tradelistruning-20">{data.time}</div>
              </div>
              <div class="tradelistruning-21">
                <div class="tradelistruning-22">
                  <span class="tradelistruning-23">数量</span>
                </div>
                <div class="tradelistruning-24"> {data.num.toFixed(2)}</div>
              </div>
              <div class="tradelistruning-25">
                <div class="tradelistruning-26">
                  <span class="tradelistruning-27">下单时间</span>
                </div>
                <div class="tradelistruning-28">
                  {data.buytime?.substring(0, 16)}
                </div>
              </div>
              <div class="tradelistruning-29">
                <div class="tradelistruning-30">
                  <span class="tradelistruning-31">开仓价格</span>
                </div>
                <div class="tradelistruning-32"> {data.buyprice}</div>
              </div>
              {data.status != 1 && (
                <div class="tradelistruning-33">
                  <div class="tradelistruning-34">
                    <span class="tradelistruning-35">结算价格</span>
                  </div>
                  <div class="tradelistruning-36"> {data.sellprice}</div>
                </div>
              )}
              <div class="tradelistruning-33">
                <div class="tradelistruning-34">
                  <span class="tradelistruning-35">成交量</span>
                </div>
                <div class="tradelistruning-36"> {data.num.toFixed(2)}</div>
              </div>
              {data.status != 1 && (
                <div class="tradelistruning-33">
                  <div class="tradelistruning-34">
                    <span class="tradelistruning-35">亏盈</span>
                  </div>
                  <div class="tradelistruning-36">
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
  return (
    <div
      style={{
        borderTop: ".625rem solid #030708",
      }}
    >
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
