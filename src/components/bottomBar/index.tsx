import { Badge } from "antd";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { LoginMsgContext } from "../../router/router";
import { getText } from "../../utils/util";
import "./index.css";

export default function BottomBar({ index }) {
  const { t: translate } = useTranslation();
  const [loginmsg, setloginmsg] = useContext(LoginMsgContext);
  const navigate = useNavigate();
  const companySkin = localStorage.getItem("companySkin");
  return (
    <div class="bottomBar-1">
      <div class="bottomBar-2">
        <div class="bottomBar-3">
          <img
            src={`http://h5.tinshwk.xyz/static/tabbarDark/1${
              index == 1 ? "s" : ""
            }.png`}
            draggable="false"
            class="bottomBar-6"
          />
        </div>
        <div class={index == 1 ? "bottomBar-7" : "bottomBar-14"}>
          <span class="bottomBar-8">首页</span>
        </div>
      </div>
      <div class="bottomBar-9">
        <div class="bottomBar-10">
          <img
            src={`http://h5.tinshwk.xyz/static/tabbarDark/2${
              index == 2 ? "s" : ""
            }.png`}
            draggable="false"
            class="bottomBar-13"
          />
        </div>
        <div class={index == 2 ? "bottomBar-7" : "bottomBar-14"}>
          <span class="bottomBar-15">行情</span>
        </div>
      </div>
      <div class="bottomBar-16">
        <div class="bottomBar-17">
          <img
            src={`http://h5.tinshwk.xyz/static/tabbarDark/3${
              index == 3 ? "s" : ""
            }.png`}
            draggable="false"
            class="bottomBar-20"
          />
        </div>
        <div class={index == 3 ? "bottomBar-7" : "bottomBar-14"}>
          <span class="bottomBar-22">交割合约</span>
        </div>
      </div>
      <div class="bottomBar-23">
        <div class="bottomBar-24">
          <img
            src={`http://h5.tinshwk.xyz/static/tabbarDark/4${
              index == 4 ? "s" : ""
            }.png`}
            draggable="false"
            class="bottomBar-27"
          />
        </div>
        <div class={index == 4 ? "bottomBar-7" : "bottomBar-14"}>
          <span class="bottomBar-29">永续</span>
        </div>
      </div>
      <div class="bottomBar-30">
        <div class="bottomBar-31">
          <img
            src={`http://h5.tinshwk.xyz/static/tabbarDark/5${
              index == 5 ? "s" : ""
            }.png`}
            draggable="false"
            class="bottomBar-34"
          />
        </div>
        <div class={index == 5 ? "bottomBar-7" : "bottomBar-14"}>
          <span class="bottomBar-36">资产</span>
        </div>
      </div>
    </div>
  );
}
