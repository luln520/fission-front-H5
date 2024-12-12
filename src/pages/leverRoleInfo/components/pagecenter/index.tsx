import "./index.css";
import React, { Component, useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Dropdown, DropdownRef, Radio, Space } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { imageConfig } from "../../../../config/config";
import { languagesData } from "../../../../i18n/i18n";

export default function PageCenter({}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div className="leverRoleInfo-1">
      <div className="leverRoleInfo-2">
        <div className="leverRoleInfo-3">{translate(getText("永续合约"))}</div>
        <div className="leverRoleInfo-4">1.{translate(getText("什么是合约"))}</div>
        <div className="leverRoleInfo-5">
          {translate(getText("本平台提供USDT本位的永續合約，用戶可以通過判斷漲跌，選擇買入做多或賣出做空合約來獲取數字資產價格上漲/下降的收益。永續合約沒有交割日，用戶可以一直持有。"))}
        </div>
        <div className="leverRoleInfo-6">2.{translate(getText("什么是保证金"))}</div>
        <div className="leverRoleInfo-7">
          {translate(getText("在虛擬合約市場上，用戶只需根據合約價格，按一定比例交納少量資金作為履行合約的財力擔保，便可參與合約的買賣，這種資金就是虛擬合約保證金。"))}
          {translate(getText("本平台的合約採用分賬戶的逐倉保證金模式。每個幣種對應一個合約賬戶，不同的合約幣種的賬戶資產和倉位相互獨立，且不同合約賬戶之間的劃轉及交易互不影響。用戶的合約賬戶在開倉後，該合約賬戶內的所有倉位持倉的風險和收益將合併計算。"))}
        </div>
        <div className="leverRoleInfo-8">3.{translate(getText("如何计算保证金"))}</div>
        <div className="leverRoleInfo-9">
          {translate(getText("持倉保證金 = 合約面值 * 持倉合約數量 / 槓桿倍數 凍結保證金 =當前委託內所有已成功掛單開倉委託的保證金總和 可用保證金=賬戶餘額-持倉保證金 - 凍結保證金"))}
        </div>
        <div className="leverRoleInfo-10">4.{translate(getText("如何计算保证金率"))}</div>
        <div className="leverRoleInfo-11">
          {translate(getText("保證金率是衡量用戶資產風險的指標。保證金率 =（未實現盈虧   持倉保證金  可用保證金   凍結保證金 - 平倉手續費） / 持倉保證金保證金率越小，賬戶的風險越高。當保證金率小於等於0時，會觸發強制平倉。"))}
        </div>
        <div className="leverRoleInfo-12">5.{translate(getText("什么是预估强平价"))}</div>
        <div className="leverRoleInfo-13">
          {translate(getText("预估强平价，即系统计算得到的理论上触发强制平仓的价格，仅做参考用，与实际值可能有些许偏差。"))}
        </div>
        <div className="leverRoleInfo-14">6.{translate(getText("什么是账户总权益、未实现盈亏"))}</div>
        <div className="leverRoleInfo-15">
          {translate(getText("賬戶總權益 = 賬戶餘額   未實現盈虧未實現盈虧，是用戶在該幣種的合約當前持有的倉位的盈虧，未實現盈虧會隨著最新成交價格變動而變化。多倉未實現盈虧=（1/持倉均價- 1/最新成交價）* 多倉合約張數* 合約面值* 最新成交價空倉未實現盈虧=（1/最新成交價- 1/持倉均價）*空倉合約張數* 合約面值* 最新成交價"))}
        </div>
      </div>
    </div>
  );
}
