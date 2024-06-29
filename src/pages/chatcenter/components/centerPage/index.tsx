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

export default function CenterPage({companyData}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const uid = localStorage.getItem("uid");

  return (
    <>
      <div class="chatcenter-1">
        <div class="chatcenter-2">
          <div class="chatcenter-3">{translate(getText("客服中心"))}</div>
          <div class="chatcenter-4">
            <div class="chatcenter-5">
              <img
                src={imageConfig.baseImageUrl + companyData?.companyLogo}
                draggable="false"
                class="chatcenter-8"
              />
            </div>
            <div
              class="chatcenter-9"
              onClick={() => {
                if (uid) {
                  navigate("/chat");
                } else {
                  navigate("/murmurchat");
                }
              }}
            >
              <span class="chatcenter-10">
                {translate(getText("在線客服"))}
              </span>
            </div>
            <i class="chatcenter-11"></i>
          </div>
        </div>
      </div>
    </>
  );
}
