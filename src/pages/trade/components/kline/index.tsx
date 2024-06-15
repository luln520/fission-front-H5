import React, { useEffect, useState, useRef, useContext } from "react";
import {
  KLineChartPro,
  Period,
  SymbolInfo,
  DatafeedSubscribeCallback,
} from "@klinecharts/pro";
import { KLineData } from "klinecharts";
import pako from "pako";
import "./index.css";
import { WSContext } from "../../../../router/router";
import { getText } from "../../../../utils/util";
import { useTranslation } from "react-i18next";
let nowTimeTrade = "";
class CustomDatafeed {
  onSymbolChangeCallback: (data) => void;

  constructor(onSymbolChange: (data) => void) {
    this.onSymbolChangeCallback = onSymbolChange;
  }
  symbols: SymbolInfo[] = [
    { ticker: "BTCUSDT", name: "Bitcoin" },
    { ticker: "ETHUSDT", name: "Ethereum" },
  ];

  searchSymbols(search?: string): Promise<SymbolInfo[]> {
    // if (search) {
    //   const searchLower = search.toLowerCase();
    //   const filteredSymbols = this.symbols.filter(
    //     (symbol) =>
    //       symbol.ticker.toLowerCase().includes(searchLower) ||
    //       symbol.name.toLowerCase().includes(searchLower)
    //   );
    //   return Promise.resolve(filteredSymbols);
    // }
    return Promise.resolve(this.symbols);
  }

  async getHistoryKLineData(
    symbol: SymbolInfo,
    period: Period,
    from: number,
    to: number
  ): Promise<KLineData[]> {
    const baseUrl = "https://api.huobi.pro";
    const huobiPeriod = this.mapPeriodToHuobi(period);
    const url = `${baseUrl}/market/history/kline?symbol=${symbol.ticker.toLowerCase()}&period=${huobiPeriod}&size=2000`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const kLineData = data.data.map((item) => ({
          timestamp: item.id * 1000,
          open: item.open,
          close: item.close,
          high: item.high,
          low: item.low,
          volume: item.vol,
        }));
        this.onSymbolChangeCallback(kLineData[kLineData.length - 1]);
        return kLineData.reverse();
      })
      .catch((error) => {
        console.error("Error fetching Huobi historical KLine data:", error);
        return [];
      });
  }

  // 将自定义周期映射到火币支持的周期
  private mapPeriodToHuobi(period: Period): string {
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
      // 添加更多映射规则...
      default:
        return "1min"; // 默认值
    }
  }
  formatTicker(ticker: string): string {
    // 假设 ticker 总是以 USDT 结尾，我们将在倒数第四个字符前添加 '-'
    const pos = ticker.length - 4;
    return `${ticker.substring(0, pos)}-${ticker.substring(pos)}`;
  }
  private ws: WebSocket | null = null;
  subscribe(
    symbol: SymbolInfo,
    period: Period,
    callback: DatafeedSubscribeCallback
  ): void {
    const huobiPeriod = this.mapPeriodToHuobi(period);
    nowTimeTrade = huobiPeriod;
    if (this.ws === null) {
      this.ws = new WebSocket("wss://api.huobi.pro/ws");
      this.ws.onopen = () => {
        // 订阅消息
        const formattedTicker = this.formatTicker(symbol.ticker); // 使用辅助函数格式化 ticker
        const huobiPeriod = this.mapPeriodToHuobi(period);
        const subMessage = {
          name: symbol.ticker.toLowerCase(),
          sub: `market.${symbol.ticker.toLowerCase()}.kline.${nowTimeTrade}`,
        };
        this.ws.send(JSON.stringify(subMessage));
      };
      this.ws.onmessage = (event) => {
        if (event.data instanceof Blob) {
          event.data.arrayBuffer().then((buffer) => {
            const decompressed = pako.inflate(new Uint8Array(buffer), {
              to: "string",
            });
            const response = JSON.parse(decompressed);
            if (response.ping) {
              this.ws.send(JSON.stringify({ pong: response.ping }));
            } else if (response.tick) {
              const data: KLineData = {
                timestamp: response.tick.id * 1000,
                open: response.tick.open,
                close: response.tick.close,
                high: response.tick.high,
                low: response.tick.low,
                volume: response.tick.vol,
              };
              console.info(nowTimeTrade, response.ch);
              if (response.ch.includes(nowTimeTrade)) {
                this.onSymbolChangeCallback(data);
                callback(data);
              }
            }
          });
        }
      };
      this.ws.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
      this.ws.onclose = () => {
        console.log("WebSocket disconnected");
        this.ws = null;
      };
    } else {
      // 订阅消息
      // const formattedTicker = this.formatTicker(symbol.ticker); // 使用辅助函数格式化 ticker
      const huobiPeriod = this.mapPeriodToHuobi(period);
      const subMessage = {
        id: symbol.ticker.toLowerCase(),
        sub: `market.${symbol.ticker.toLowerCase()}.kline.${huobiPeriod}`,
      };
      this.ws.send(JSON.stringify(subMessage));
    }
  }
  unsubscribe(symbol: SymbolInfo, period: Period): void {
    // const formattedTicker = this.formatTicker(symbol.ticker); // 使用辅助函数格式化 ticker
    // const subMessage = {
    //   unsub: `market.${formattedTicker}.mark_price.${this.mapPeriodToHuobi(
    //     period
    //   )}`,
    // };
    // this.ws.send(JSON.stringify(subMessage));
  }

  // 存储订阅的映射
  private subscriptionMap: { [key: string]: NodeJS.Timeout } = {};
}
export default function MyChartComponent(props) {
  const [coinListData, setCoinListData] = useContext(WSContext);
  const { t: translate } = useTranslation();
  const countDecimalPlaces = (num) => {
    if (num && num % 1 !== 0) {
      let length = `${num}`.split(".")[1]?.length;
      length = length > 4 ? 4 : length;
      return length;
    }
    return 4;
  };
  let initialSymbo = {
    ticker: `${props.nowTab.toUpperCase()}USDT`,
    name: `${props.nowTab.toUpperCase()}USDT`,
  };
  const [currentSymbol, setCurrentSymbol] = useState(
    initialSymbo || { ticker: "BTCUSDT", name: "Bitcoin" }
  );
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.setSymbol(currentSymbol);
    }
  }, [currentSymbol]);

  useEffect(() => {
    const newSymbol = {
      ticker: `${props.nowTab.toUpperCase()}USDT`,
      name: `${props.nowTab.toUpperCase()}`,
      pricePrecision: countDecimalPlaces(coinListData[props.nowTab]?.close),
    };
    setCurrentSymbol(newSymbol);
    const container = document.getElementById("container");
    if (container && !chartRef.current) {
      // 初始化图表实例
      const chart = new KLineChartPro({
        candle: "area",
        container,
        locale: localStorage.getItem("i18n") == "zh" ? "zh-CN" : "en-US",
        watermark: "",
        datafeed: new CustomDatafeed(() => {}),
        drawingBarVisible: false,
        symbol: newSymbol,
        period: { multiplier: 1, timespan: "minute", text: "1m" },
        mainIndicators: ["MA"],
        subIndicators: ["VOL", "MACD"],
        periods: [
          // { multiplier: 1, timespan: "minute", text: "1m" },
          // { multiplier: 5, timespan: "minute", text: "5m" },
          // { multiplier: 15, timespan: "minute", text: "15m" },
          // { multiplier: 1, timespan: "hour", text: "H" },
          // { multiplier: 1, timespan: "day", text: "D" },
        ],
        styles: {
          candle: {
            type: "area",
            area: {
              lineSize: 1,
            },
            point: {
              show: false,
            },
          },
          indicator: {
            tooltip: {
              showType: "rect",
              // showRule: "follow_cross",
            },
          },
          // yAxis: {
          //   inside: true,
          // },
          xAxis: {
            // size:"100px"
          },
        },
      });
      // chartRef.current.setPriceVolumePrecision(()=>{});
      chart.setTheme("dark");
      // chart.setOffsetRightDistance(1);
      chartRef.current = chart;
    }
  }, [props.nowTab]);

  useEffect(() => {
    const toolsSpan = document.querySelectorAll(".tools>span");
    const tools = document.querySelectorAll(".tools");
    const rows = document.querySelectorAll(".row");
    const klinechartsbar = document.querySelector(
      ".klinecharts-pro-period-bar"
    );

    let row1 =
      rows[14]?.querySelector("span").innerText == "BRAR(情绪指标)"
        ? rows[14]?.remove()
        : "";
    row1 =
      rows[17]?.querySelector("span").innerText == "CR(能量指标)"
        ? rows[17]?.remove()
        : "";
    tools[2]?.remove();
    tools[3]?.remove();
    tools[4]?.remove();
    klinechartsbar?.remove();
    for (const tool of toolsSpan) {
      tool.remove();
    }
  });

  useEffect(() => {
    // const periods = document.querySelectorAll(".period");
    // periods[4]?.remove();
    // periods[5]?.remove();
    // periods[7]?.remove();
    // periods[8]?.remove();
    // periods[9]?.remove();
  }, []);
  return (
    <div>
      <div id="container" style={{ height: "580px", width: "100%" }}></div>
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
              props.setIndex(3);
              props.setType(1);
            }}
          >
            {translate(getText("買多"))}
          </button>
          <button
            className="btn-footer1-4"
            onClick={() => {
              props.setIndex(3);
              props.setType(2);
            }}
          >
            {translate(getText("買空"))}
          </button>
        </div>
      </div>
    </div>
  );
}
