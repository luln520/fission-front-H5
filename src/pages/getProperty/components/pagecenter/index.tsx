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
  return (
    <div class="getProperty-1">
      <div class="getProperty-2">
        <img
          src="http://h5.tinshwk.xyz/assets/demo-eb3970a3.png"
          draggable="false"
          class="getProperty-9"
        />
      </div>
      <div class="getProperty-10">
        <div class="getProperty-11">1、该资产仅允许在模拟账户模式下使用</div>
        <div class="getProperty-12">2、为防止滥用，1个月内仅允许领取一次</div>
        <div class="getProperty-13">
          3、领取资产将在原基础上新增领取资产金额，并不改变持仓状态
        </div>
        <div class="getProperty-14">4、如您有其他疑问，请联系客服</div>
        <div
          class="getProperty-15"
          onClick={() => {
            mockUserAmount();
          }}
        >
          立即获得演示资产
        </div>
      </div>
    </div>
  );
}
