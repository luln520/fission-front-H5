import "./index.css";
import React, { Component } from "react";
import pako from "pako";
import * as echarts from "echarts";
import { useEffect } from "react";
import { useState } from "react";
type EChartsOption = echarts.EChartsOption;
type DataItem = (string | number)[];
export default function KLine({ nowTab,loadNowData }) {
  const reader = new FileReader();
  let kDataDates = [];
  let kDatas = [];
  let kVols = [];
  let nowValue = 0;
  let startValue = 0;
  let myChart;
  let WS;
  const reqK = {
    name: nowTab,
    sub: `market.${nowTab}usdt.kline.1day`,
  };

  //图标参数
  const getOption = () => {
    const option = {
      tooltip: {
        triggerOn: "none",
        transitionDuration: 0,
        confine: true,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#333",
        backgroundColor: "rgba(255,255,255,0.9)",
        textStyle: {
          fontSize: 10,
          color: "#333",
        },
        position: function (pos, params, el, elRect, size) {
          var obj = {
            top: 60,
          };
          obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 5;
          return obj;
        },
      },
      axisPointer: {
        link: [
          {
            xAxisIndex: [0, 1],
          },
        ],
      },
      grid: [
        {
          left: "5%",
          top: "2%",
          right: "60px",
          height: "70%",
        },
        {
          left: "5%",
          right: "60px",
          top: "80%",
          height: "10%",
        },
      ],
      xAxis: [
        {
          scale: true,
          type: "category",
          data: kDataDates,
          axisLine: {
            onZero: false,
            lineStyle: {
              color: "#B9C4C8",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#B9C4C8",
              type: "dasherd",
            },
          },
          axisLabel: {
            show: true,
            interval: 9,
            formatter: function (value) {
              return echarts.format.formatTime("MM-dd hh:mm", value);
            },
            fontSize: 9,
          },
          axisPointer: {
            show: true,
          },
        },
        {
          type: "category",
          gridIndex: 1,
          scale: true,
          boundaryGap: false,
          data: kDataDates,
          axisLabel: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLine: { lineStyle: { color: "#ccc" } },
          axisPointer: {
            type: "shadow",
            label: { show: false },
            triggerTooltip: true,
            handle: {
              show: true,
              margin: 20,
              color: "black",
              size: 30,
              icon: "image://data:image/png;base64,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",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          scale: true,
          splitLine: {
            show: true,
            lineStyle: {
              color: "#B9C4C8",
              type: "dasherd",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#B9C4C8",
            },
          },
          position: "right",
        },
        {
          gridIndex: 1,
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: "#fff",
            },
          },
          position: "right",
        },
      ],
      series: [
        {
          name: "Volume",
          type: "bar",
          xAxisIndex: 1,
          yAxisIndex: 1,
          itemStyle: {
            color: "#14b95c",
          },
          emphasis: {
            itemStyle: {
              color: "black",
            },
          },
          data: kVols,
        },
        {
          name: "日k",
          type: "candlestick",
          data: kDatas,
          itemStyle: {
            color: "#14b95c",
            color0: "#f6185b",
            borderColor: "#14b95c",
            borderColor0: "#f6185b",
          },
          markLine: {
            symbol: ["none", "none"],
            lineStyle: {
              width: 0,
            },
            label: {
              show: true,
              position: "end",
              formatter: "- {c}",
              color: "#000",
            },
            animation: false,
            data: 0,
          },
        },
        {
          name: "MA5",
          type: "line",
          data: calculateMA(5),
          smooth: true,
          lineStyle: {
            width: 1,
            normal: {
              opacity: 0.5,
            },
          },
        },
        {
          name: "MA10",
          type: "line",
          data: calculateMA(10),
          smooth: true,
          lineStyle: {
            width: 1,
            normal: {
              opacity: 0.5,
            },
          },
        },
        {
          name: "MA20",
          type: "line",
          data: calculateMA(20),
          smooth: true,
          lineStyle: {
            width: 1,
            normal: {
              opacity: 0.5,
            },
          },
        },
        {
          type: "line",
          markLine: {
            symbol: "none",
            animation: false, // 禁用动画效果
            data: [
              {
                yAxis: nowValue, // 自定义下限值
                // name: '', // 基准线名称
                label: {
                  // 不显示基准线名称
                  show: false,
                  backgroundColor: nowValue > startValue ? "#14B95C" : "red",
                  fontSize: 12, // 标签文字大小
                  padding: 4, // 标签内边距
                  color: "white",
                },
                lineStyle: {
                  type: "dashed", // 基准线样式为虚线
                  color: nowValue > startValue ? "#14B95C" : "red",
                  width: 1, // 设置线宽度
                },
              },
            ],
          },
        },
      ],
      dataZoom: [
        {
          type: "inside",
          xAxisIndex: [0, 1],
          start: 90, // 根据需求调整开始百分比
          end: 100, // 根据需求调整结束百分比
        },
      ],
    };
    return option;
  };
  //时间格式化
  const dateFormat = (fmt, date) => {
    let ret;
    const opt = {
      "Y+": date.getFullYear().toString(), // 年
      "m+": (date.getMonth() + 1).toString(),
      "d+": date.getDate().toString(),
      "H+": date.getHours().toString(),
      "M+": date.getMinutes().toString(),
      "S+": date.getSeconds().toString(), // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(
          ret[1],
          ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
        );
      }
    }
    return fmt;
  };

  // ma均线函数
  const calculateMA = (count) => {
    let result = [];
    for (let i = 0, len = kDatas.length; i < len; i++) {
      if (i < count) {
        result.push("-");
        continue;
      }
      let sum = 0;
      for (let j = 0; j < count; j++) {
        sum += kDatas[i - j][1];
      }
      result.push((sum / count).toFixed(3));
    }
    return result;
  };
  //图表
  const startEcharts = () => {
    let chartDom = document.getElementById("echartContainer")!;
    myChart = echarts.init(chartDom);
    console.info(getOption());
    myChart.setOption(getOption());
  };

  //拼接历史数据
  const makeHistory = (data) => {
    loadNowData(data[data.length-1]);
    const kDataDates1 = data.map((v, i) => {
      return dateFormat("YYYY-mm-dd HH:MM", new Date(v.id * 1000));
    });
    const kDatas1 = data.map((v, i) => {
      return [v.open, v.close, v.low, v.high];
    });
    const kVols1 = data.map((v, i) => {
      return v.vol;
    });
    kDataDates = kDataDates1;
    kDatas = kDatas1;
    kVols = kVols1;
    setTimeout(() => {
      startEcharts();
    }, 1000);
  };
  //构建获取历史数据参数
  const historyK = (k) => {
    const dataNum = 500;
    const shijian = 1 * 60 * 24;
    let form = Math.trunc(Date.now() / 1000) - 60 * dataNum * shijian;
    const historySubK = {
      req: k.sub,
      id: k.name,
      from: form, // 1min 对应一条数据 最小粒度为 1 min
      to: Math.trunc(Date.now() / 1000),
    };
    return historySubK;
  };

  //开始链接 wss
  const startWS = () => {
    kDatas = [];
    WS = new WebSocket("wss://api.huobi.pro/ws");
    WS.onopen = () => {
      console.info(reqK);
      WS.send(JSON.stringify(historyK(reqK))); //历史
      WS.send(JSON.stringify(reqK)); //实时
    };
    WS.onclose = () => {
      console.info("链接关闭");
    };
    WS.onmessage = async (event) => {
      reader.onload = (e) => {
        let ploydata = new Uint8Array(e.target?.result as ArrayBufferLike);
        let msg = pako.inflate(ploydata, { to: "string" });
        handleData(msg);
      };
      try {
        reader.readAsArrayBuffer(event.data);
      } catch (e) {}
    };
    WS.onerror = () => {
      console.info("链接失败");
    };
  };

  // 发送响应信息
  const sendHeartMessage = (ping) => {
    WS.send(JSON.stringify({ pong: ping }));
  };

  //关闭WSS
  const closeWS = () => {
    WS.close();
  };

  //处理响应数据
  const handleData = (msg: string) => {
    let data = JSON.parse(msg);
    if (data.ping) {
      // 如果是 ping 消息
      sendHeartMessage(data.ping);
    } else if (data.status === "ok") {
      if (data.data) {
        //历史数据
        makeHistory(data.data);
      }
    } else {
      data = data.tick;
      loadNowData(data);
      const KDate = dateFormat("YYYY-mm-dd HH:MM", new Date(data.id * 1000));
      const KData = [data.open, data.close, data.low, data.high];
      const KVols = data.vol;
      let index = kDataDates.indexOf(KDate);
      if (index !== -1) {
        kDatas[index] = KData;
        kVols[index] = KVols;
        startValue = data.open;
        nowValue = data.close;
        try {
          myChart.setOption(getOption());
        } catch (e) {
          console.info(e);
        }
      }
    }
  };

  useEffect(() => {
    startWS();
    return () => {
      closeWS();
    };
  }, [nowTab]);
  return <div id="echartContainer" className="echartContainer"></div>;
}
