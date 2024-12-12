import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function JianJie({ nowTab, ctmarketlist }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [ctmarket, setCtmarket] = useState({} as any);
  const la = localStorage.getItem("i18n");
  const getData = () => {
    let data = {};
    if (ctmarketlist?.length) {
      for (let index = 0; index < ctmarketlist.length; index++) {
        const ctmarket = ctmarketlist[index];
        if (ctmarket?.coinname === nowTab) {
          data = ctmarket;
          break;
        }
      }
    }
    setCtmarket(data);
  };
  useEffect(() => {
    getData();
  });
  return (
    <div role="tabpanel" id="jianjie" className="jianjie-1">
      <div className="jianjie-2">
        <div className="jianjie-3">
          <h3 className="jianjie-4">{nowTab.toUpperCase()}/USDT</h3>
        </div>
        <div className="jianjie-5">
          <div className="jianjie-6">
            <span className="jianjie-7">{translate(getText("推出日期"))}</span>
          </div>
          <div className="jianjie-8">
            <span className="jianjie-9">{ctmarket?.publishTime}</span>
          </div>
        </div>
        <div className="jianjie-10">
          <div className="jianjie-11">
            <span className="jianjie-12">{translate(getText("問題數量"))}</span>
          </div>
          <div className="jianjie-13">
            <span className="jianjie-14">{ctmarket?.publishNum}</span>
          </div>
        </div>
        {ctmarket?.whitePape && (
          <div className="jianjie-10">
            <div className="jianjie-11">
              <span className="jianjie-12">{translate(getText("白皮书"))}</span>
            </div>
            <div className="jianjie-13">
              <span className="jianjie-14">{ctmarket?.whitePaper}</span>
            </div>
          </div>
        )}
        {ctmarket?.website && (
          <div className="jianjie-10">
            <div className="jianjie-11">
              <span className="jianjie-12">{translate(getText("官网"))}</span>
            </div>
            <div className="jianjie-13">
              <span className="jianjie-14">{ctmarket?.website}</span>
            </div>
          </div>
        )}
        {ctmarket?.blockQuery && (
          <div className="jianjie-10">
            <div className="jianjie-11">
              <span className="jianjie-12">
                {translate(getText("区块查询"))}
              </span>
            </div>
            <div className="jianjie-13">
              <span className="jianjie-14">{ctmarket?.blockQuery}</span>
            </div>
          </div>
        )}
        <div className="jianjie-15">
          <h3 className="jianjie-16">{translate(getText("簡介"))}</h3>
          <span className="jianjie-17">
            {ctmarket[`info${la ? la[0].toUpperCase() : ""}${la ? la[1] : ""}`]}
          </span>
        </div>
      </div>
    </div>
  );
}
