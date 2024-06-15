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
          class="rechargelist-11"
          onClick={() => {
            navigate(`/recharge/${data?.id}`);
          }}
        >
          <div class="rechargelist-12">
            <div class="rechargelist-13">
              <div class="rechargelist-14">
                <img
                  src={imageConfig.baseImageUrl + data?.img}
                  class="rechargelist-16"
                />
                <div class="rechargelist-17">
                  <div class="rechargelist-18">
                    <div class="rechargelist-19"></div>
                  </div>
                  <div class="rechargelist-20">
                    <div class="rechargelist-21"></div>
                  </div>
                </div>
              </div>
              <div class="rechargelist-22">
                <span class="rechargelist-23">{`${data.name.toUpperCase()}${
                  data.czline ? `(${data.czline})`.toUpperCase() : ""
                }`}</span>
              </div>
            </div>
            <div class="rechargelist-24">
              <span class="rechargelist-25">
                <span class="rechargelist-26">{translate(getText("前往購買"))}</span>
              </span>
              <i class="rechargelist-27"></i>
            </div>
          </div>
        </div>
      );
      nodes.push(node);
    }
    return nodes;
  };

  return (
    <div class="rechargelist-1">
      <div class="rechargelist-2">
        <div class="rechargelist-3">
          <div data-v-01dfbd2e="" class="rechargelist-4">
            <div data-v-01dfbd2e="" id="_top" class="rechargelist-5">
              <div data-v-01dfbd2e="" id="rtf41" class="rechargelist-6">
                <div class="rechargelist-7">
                  <p class="rechargelist-8">
                    {translate(getText("請如實填寫實際轉賬金額，否則可能導致系統審核無法通過，影響充值進度。"))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="rechargelist-9">{translate(getText("請選擇以下充值通道"))}</p>
        <div class="rechargelist-10">
          {getNode()}
          <div
            class="rechargelist-11"
            onClick={() => {
              navigate("/c2cckcenter");
            }}
          >
            <div class="rechargelist-12">
              <div class="rechargelist-13">
                <div class="rechargelist-14">
                  <img
                    src="/costIco/20220324033547378184.png"
                    class="rechargelist-16"
                  />
                  <div class="rechargelist-17">
                    <div class="rechargelist-18">
                      <div class="rechargelist-19"></div>
                    </div>
                    <div class="rechargelist-20">
                      <div class="rechargelist-21"></div>
                    </div>
                  </div>
                </div>
                <div class="rechargelist-22">
                  <span class="rechargelist-23">{translate(getText("C2C充值"))}</span>
                </div>
              </div>
              <div class="rechargelist-24">
                <span class="rechargelist-25">
                  <span class="rechargelist-26">{translate(getText("前往購買"))}</span>
                </span>
                <i class="rechargelist-27"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="rechargelist-96"></div>
      </div>
    </div>
  );
}
