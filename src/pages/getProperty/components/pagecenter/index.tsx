import "./index.css";
import React, { Component, useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Dropdown, DropdownRef, Radio, Space } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { imageConfig } from "../../../../config/config";
import { languagesData } from "../../../../i18n/i18n";

export default function PageCenter({ mockUserAmount }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  return (
    <div className="getProperty-1">
      <div className="getProperty-2">
        <img
          src={lan=="zh"?"/assets/demo-eb3970a3.png":"/assets/demo2-07a4ab7b.png"}
          draggable="false"
          className="getProperty-9"
        />
      </div>
      <div className="getProperty-10">
        <div className="getProperty-11">1、{translate(getText("该资产仅允许在模拟账户模式下使用"))}</div>
        <div className="getProperty-12">2、{translate(getText("为防止滥用，1个月内仅允许领取一次"))}</div>
        <div className="getProperty-13">
          3、{translate(getText("领取资产将在原基础上新增领取资产金额，并不改变持仓状态"))}
        </div>
        <div className="getProperty-14">4、{translate(getText("如您有其他疑问，请联系客服"))}</div>
        <div
          className="getProperty-15"
          onClick={() => {
            mockUserAmount();
          }}
        >
          {translate(getText("立即获得演示资产"))}
        </div>
      </div>
    </div>
  );
}
