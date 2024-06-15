import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import copy from "copy-to-clipboard";
import { Cell, Dialog } from "react-vant";
import "./index.css";
import { Button } from "antd";
import { Toast } from "antd-mobile";
import { useState } from "react";

export default function CenterPage() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const uid = localStorage.getItem("uid");

  return (
    <>
      <div className="chatcenter-16">
        <div className="chatcenter-17">
          <span className="chatcenter-18">{translate(getText("在線客服"))}</span>
        </div>
      </div>
      <div className="chatcenter-19">
        <div className="chatcenter-20">
          <div className="chatcenter-21">
            <div
              className="chatcenter-22"
              onClick={() => {
                if (uid) {
                  navigate("/chat");
                } else {
                  navigate("/murmurchat");
                }
              }}
            >
              <div className="chatcenter-23">
                <span className="chatcenter-24">{translate(getText("在線客服"))}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
