import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import copy from "copy-to-clipboard";
import { Cell, Dialog } from "react-vant";
import "./index.css";
import { Button } from "antd";
import { Toast } from "antd-mobile";
import { useState } from "react";
import { imageConfig } from "../../../../config/config";

export default function CenterPage({ coinList }) {
  const navigate = useNavigate();
  const lan = localStorage.getItem("i18n");
  const c2ctxStatus = localStorage.getItem("c2ctxStatus");
  const { t: translate } = useTranslation();
  const companySkin = localStorage.getItem("companySkin");

  const getNode = () => {
    const nodes = [];
    for (let i = 0; i < coinList.length; i++) {
      const data = coinList[i];
      const node = (
        <div
          className="rechargelist-11"
          onClick={() => {
            navigate(`/recharge/${data?.id}`);
          }}
        >
          <div className="rechargelist-12">
            <div className="rechargelist-13">
              <div className="rechargelist-14">
                <img
                  src={imageConfig.baseImageUrl + data?.img}
                  className="rechargelist-16"
                />
                <div className="rechargelist-17">
                  <div className="rechargelist-18">
                    <div className="rechargelist-19"></div>
                  </div>
                  <div className="rechargelist-20">
                    <div className="rechargelist-21"></div>
                  </div>
                </div>
              </div>
              <div className="rechargelist-22">
                <span className="rechargelist-23">{`${data.name.toUpperCase()}${
                  data.czline ? `(${data.czline})`.toUpperCase() : ""
                }`}</span>
              </div>
            </div>
            <div className="rechargelist-24">
              <span className="rechargelist-25">
                <span className="rechargelist-26">{translate(getText("前往購買"))}</span>
              </span>
              <i className="rechargelist-27"></i>
            </div>
          </div>
        </div>
      );
      nodes.push(node);
    }
    return nodes;
  };

  return (
    <div className="rechargelist-1">
      <div className="rechargelist-2">
        <div className="rechargelist-3">
          <div data-v-01dfbd2e="" className="rechargelist-4">
            <div data-v-01dfbd2e="" id="_top" className="rechargelist-5">
              <div data-v-01dfbd2e="" id="rtf41" className="rechargelist-6">
                <div className="rechargelist-7">
                  <p className="rechargelist-8">
                    {translate(getText("請如實填寫實際轉賬金額，否則可能導致系統審核無法通過，影響充值進度。"))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="rechargelist-9">{translate(getText("請選擇以下充值通道"))}</p>
        <div className="rechargelist-10">
          {getNode()}
          {/* <div
            className="rechargelist-11"
            onClick={() => {
              navigate("/c2cckcenter");
            }}
          >
            <div className="rechargelist-12">
              <div className="rechargelist-13">
                <div className="rechargelist-14">
                  <img
                    src="/costIco/20220324033547378184.png"
                    className="rechargelist-16"
                  />
                  <div className="rechargelist-17">
                    <div className="rechargelist-18">
                      <div className="rechargelist-19"></div>
                    </div>
                    <div className="rechargelist-20">
                      <div className="rechargelist-21"></div>
                    </div>
                  </div>
                </div>
                <div className="rechargelist-22">
                  <span className="rechargelist-23">{translate(getText("C2C充值"))}</span>
                </div>
              </div>
              <div className="rechargelist-24">
                <span className="rechargelist-25">
                  <span className="rechargelist-26">{translate(getText("前往購買"))}</span>
                </span>
                <i className="rechargelist-27"></i>
              </div>
            </div>
          </div> */}
        </div>
        <div className="rechargelist-96"></div>
      </div>
    </div>
  );
}
