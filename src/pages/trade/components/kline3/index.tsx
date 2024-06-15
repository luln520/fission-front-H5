import React, { useEffect, useState, useRef, useContext } from "react";
import { init, KLineData, dispose } from "klinecharts";
import pako from "pako";
import "./index.css";
import { WSContext, WSMinContext } from "../../../../router/router";
import { getText } from "../../../../utils/util";
import { useTranslation } from "react-i18next";
import { huobiApi } from "../../../../api/huobi";
export default function MyChartComponent({
  nowTab,
  setIndex,
  setType,
  timeindex,
  settimeindex,
}) {
  const [coinListData, setCoinListData] = useContext(WSContext);
  const [coinListMinData, _] = useContext(WSMinContext);
  const { t: translate } = useTranslation();
  const [kLineDatas, setkLineDatas] = useState([] as any[]);
  const [kchart, setkchart] = useState();
  const klinePeriod = [
    { multiplier: 1, timespan: "minute" },
    { multiplier: 1, timespan: "minute" },
    { multiplier: 5, timespan: "minute" },
    { multiplier: 15, timespan: "minute" },
    { multiplier: 30, timespan: "minute" },
    { multiplier: 1, timespan: "hour" },
    { multiplier: 1, timespan: "day" },
    { multiplier: 1, timespan: "week" },
  ];

  //获取历史
  const getHistoryKLineData = async (symbol, period) => {
    const baseUrl = "https://api.huobi.pro";
    const huobiPeriod = mapPeriodToHuobi(period);
    const data = await huobiApi.getHistoryK(
      symbol.ticker.toLowerCase(),
      huobiPeriod,
      2000
    );
    let kLineData = data.data.map((item) => ({
      timestamp: item.id * 1000,
      open: item.open,
      close: item.close,
      high: item.high,
      low: item.low,
      volume: item.vol,
    }));
    kLineData = kLineData.reverse();
    setkLineDatas(kLineData);
    return kLineData;
  };

  // 将自定义周期映射到火币支持的周期
  const mapPeriodToHuobi = (period) => {
    // 假设我们基于 timespan 属性来进行映射
    switch (period.timespan) {
      case "minute":
        // 假设 multiplier 为 1 时映射为 '1min', 为 5 时映射为 '5min'
        return `${period.multiplier}min`;
      case "hour":
        // 假设 multiplier 为 1 时映射为 '60min'（火币没有小时表示，所以用分钟表示）
        return `${period.multiplier * 60}min`;
      case "day":
        // 假设 multiplier 为 1 时映射为 '1day'
        return `${period.multiplier}day`;
      case "week":
        return `${period.multiplier}week`;
      // 添加更多映射规则...
      default:
        return "1min"; // 默认值
    }
  };

  //初始化图标
  const initChart = async () => {
    if (kchart) {
      dispose("k-line-chart");
    }
    const chart = init("k-line-chart");
    setkchart(chart);
    chart.setStyles({
      grid: {
        horizontal: {
          size: 0.1,
          style: "solid",
        },
        vertical: {
          size: 0.1,
          style: "solid",
        },
      },
      candle: {
        type: timeindex == 1 ? "area" : "candle_solid",
        area: {
          lineSize: 1,
        },
        point: {
          show: false,
        },
        tooltip: {
          text: {
            size: 10,
          },
          //清空头部
          custom: [],
        },
      },
      indicator: {
        tooltip: {
          // showType: "rect",
          text: {
            size: 9,
          },
        },
      },
      yAxis: {
        // position: "left",
        axisLine: {
          size: 1,
          color: "#3E444D",
        },
      },
      xAxis: {
        axisLine: {
          size: 1,
          color: "#3E444D",
        },
      },
      separator: {
        size: 1,
        color: "#3E444D",
      },
    });
    chart.setOffsetRightDistance(0);
    chart.setTimezone("America/Los_Angeles");
    chart.createIndicator("MA", true, { id: "candle_pane" });
    chart.createIndicator("VOL");
    chart.createIndicator("MACD");
    const data = await getHistoryKLineData(
      {
        ticker: `${nowTab.toUpperCase()}USDT`,
        name: `${nowTab.toUpperCase()}USDT`,
      },
      klinePeriod[timeindex - 1]
    );
    chart.applyNewData(data);
  };
  //监控变化
  useEffect(() => {
    const item = coinListData[nowTab];
    const item1 = coinListMinData[nowTab];
    if (kchart && item && item1) {
      kchart.updateData({
        timestamp: item1.id * 1000,
        open: item1.open,
        close: item.close,
        high: item1.high,
        low: item1.low,
        volume: item1.vol,
      });
    }
  }, [coinListMinData[nowTab]?.close, coinListData[nowTab]?.close]);
  useEffect(() => {
    initChart();
  }, [timeindex, nowTab]);
  return (
    <div>
      <div id="k-line-chart" style={{ height: "580px", width: "100%" }}></div>
      <div
        style={{
          height: "70px",
        }}
      ></div>
      {/* 底部按钮 */}
      <div className="btn-footer1-1">
        <div className="btn-footer1-2">
          <button
            className="btn-footer1-3"
            onClick={() => {
              setIndex(3);
              setType(1);
            }}
          >
            {translate(getText("買多"))}
          </button>
          <button
            className="btn-footer1-4"
            onClick={() => {
              setIndex(3);
              setType(2);
            }}
          >
            {translate(getText("買空"))}
          </button>
        </div>
      </div>
    </div>
  );
}
