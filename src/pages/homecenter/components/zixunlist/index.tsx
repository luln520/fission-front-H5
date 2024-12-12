import { useNavigate } from "react-router-dom";
import "./index.css";
import { NoticeBar } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import Noice from "../noice";
import { imageConfig } from "../../../../config/config";
import { useEffect, useRef, useState } from "react";
import { huobiApi } from "../../../../api/huobi";

export default function Zixunlist({ coinListData, ctmarketlist }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const la = localStorage.getItem("i18n") ? localStorage.getItem("i18n") : "en";
  const canvas1Ref = useRef(null);
  const canvas2Ref = useRef(null);
  const canvas3Ref = useRef(null);

  const getNodes = () => {
    const nodes = [];
    let coinListDataTemp = coinListData;
    const maxLen = ctmarketlist.length > 3 ? 3 : ctmarketlist.length;
    for (let index = 0; index < maxLen; index++) {
      const ctmarket = ctmarketlist[index];
      const key = ctmarket.coinname;
      nodes.push(
        <div
          className="zixunlist-2"
          onClick={() => {
            navigate(`/trade/${key}`);
          }}
        >
          <div className="zixunlist-3">
            <div className="zixunlist-4">
              <span className="zixunlist-5">{key.toUpperCase()}USDT</span>
            </div>
          </div>
          <div
            className={
              coinListData[key]?.close > coinListData[key]?.open
                ? "zixunlist-41"
                : "zixunlist-7"
            }
          >
            {coinListData[key]?.close ? coinListData[key]?.close : "--"}
          </div>
          <div className="zixunlist-8">
            <canvas
              ref={
                index == 0 ? canvas1Ref : index == 1 ? canvas2Ref : canvas3Ref
              }
              style={{
                width: "100%",
                height: "1.5rem",
              }}
            ></canvas>
          </div>
          <i
            className={
              coinListData[key]?.close > coinListData[key]?.open
                ? "zixunlist-40"
                : "zixunlist-6"
            }
          >
            {coinListData[key]?.close < coinListData[key]?.open ? "" : "+"}
            {coinListData[key]?.close &&
              (
                ((coinListData[key]?.close - coinListData[key]?.open) /
                  coinListData[key]?.open) *
                100
              ).toFixed(2)}
            %
          </i>
        </div>
      );
    }
    return nodes;
  };

  const getLogo = (name) => {
    let logo = "";
    for (const ctmarket of ctmarketlist) {
      if (name == ctmarket.coinname) {
        logo = imageConfig.baseImageUrl + ctmarket.logo;
        break;
      }
    }
    return logo;
  };
  //货币
  const loadHistoryData = async () => {
    const maxLen = ctmarketlist.length > 3 ? 3 : ctmarketlist.length;
    for (let index = 0; index < maxLen; index++) {
      const ctmarket = ctmarketlist[index];
      const name = ctmarket.coinname;
      const drawData = [];
      let type = 1; //1 绿 2红
      let data = await huobiApi.getHistoryK(name + "usdt", "1day", 40);
      if (data) {
        data = data.data;
        //判断颜色
        if (data[0].open > data[0].close) {
          type = 2;
        }
        data = data.reverse();
        for (const item of data) {
          drawData.push(item.close);
        }
        //画图
        draw(index, drawData, type);
      }
    }
  };
  //画图
  const draw = (index, data, type) => {
    let canvas;
    if (index == 0) {
      canvas = canvas1Ref.current;
    } else if (index == 1) {
      canvas = canvas2Ref.current;
    }
    if (index == 2) {
      canvas = canvas3Ref.current;
    }
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");

    // 模拟股票价格数据
    const stockData = data;

    // 计算数据的最大值和最小值
    const maxValue = Math.max(...stockData);
    const minValue = Math.min(...stockData);

    // 定义画布的宽度和高度
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // 计算单位高度和单位宽度
    const unitX = canvasWidth / (stockData.length - 1);
    const unitY = canvasHeight / (maxValue - minValue);

    // 清空画布
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // 创建渐变
    const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
    if (type == 1) {
      gradient.addColorStop(0, "rgba(4, 207, 153, 0.5)"); // 顶部颜色
      gradient.addColorStop(1, "rgba(4, 207, 153, 0)"); // 底部颜色
    } else {
      gradient.addColorStop(0, "rgba(243, 100, 100, 0.5)"); // 顶部颜色
      gradient.addColorStop(1, "rgba(243, 100, 100, 0)"); // 底部颜色
    }

    // 绘制折线图
    ctx.beginPath();
    ctx.strokeStyle = type == 1 ? "rgb(4, 207, 153)" : "rgb(243, 100, 100)"; // 线条颜色
    ctx.lineWidth = 2;
    ctx.moveTo(0, canvasHeight - (stockData[0] - minValue) * unitY);
    for (let i = 1; i < stockData.length; i++) {
      ctx.lineTo(i * unitX, canvasHeight - (stockData[i] - minValue) * unitY);
    }
    ctx.stroke();

    // 填充渐变色
    ctx.lineTo(canvasWidth, canvasHeight); // 将线条连接到右下角
    ctx.lineTo(0, canvasHeight); // 将线条连接到左下角
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
  };
  //定时器画图
  useEffect(() => {
    let timeer;
    setTimeout(() => {
      loadHistoryData();
    }, 2000);
    //判断是否开启定时器
    if (ctmarketlist && ctmarketlist.length > 0) {
      timeer = setInterval(() => {
        loadHistoryData();
      }, 2000);
    }
    return () => {
      clearInterval(timeer);
    };
  }, [ctmarketlist]);
  return (
    <div className="zixunlist-over-x">
      <div className="zixunlist-1">{getNodes()}</div>
    </div>
  );
}
