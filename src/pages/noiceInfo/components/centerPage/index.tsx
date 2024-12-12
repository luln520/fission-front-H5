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
    <div class="noiceInfo-1">
      <div class="noiceInfo-2">
        <div class="noiceInfo-3">
          <div class="noiceInfo-4">
            {content}
          </div>
        </div>
        <div class="noiceInfo-5">
          <div class="noiceInfo-6">
            <div class="noiceInfo-7">
              <div class="noiceInfo-8">
                <div class="noiceInfo-9">
                  <img src="" class="noiceInfo-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
