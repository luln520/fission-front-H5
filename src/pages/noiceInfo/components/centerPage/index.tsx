import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import copy from "copy-to-clipboard";
import { Cell, Dialog } from "react-vant";
import "./index.css";
import { Button } from "antd";
import { Toast } from "antd-mobile";
import { useState } from "react";

export default function CenterPage({content}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div className="noiceInfo-1">
      <div className="noiceInfo-2">
        <div className="noiceInfo-3">
          <div className="noiceInfo-4">
            {content}
          </div>
        </div>
        <div className="noiceInfo-5">
          <div className="noiceInfo-6">
            <div className="noiceInfo-7">
              <div className="noiceInfo-8">
                <div className="noiceInfo-9">
                  <img src="" className="noiceInfo-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
