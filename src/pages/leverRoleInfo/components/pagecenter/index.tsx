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
    <div class="leverRoleInfo-1">
      <div class="leverRoleInfo-2">
        <div class="leverRoleInfo-3">永续合约</div>
        <div class="leverRoleInfo-4">1.什么是合约</div>
        <div class="leverRoleInfo-5">
          本平台提供USDT本位的永续合约，用户可以通过判断涨跌，选择买入做多或卖出做空合约来获取数字资产价格上涨/下降的收益。永续合约没有交割日，用户可以一直持有。{" "}
        </div>
        <div class="leverRoleInfo-6">2.什么是保证金</div>
        <div class="leverRoleInfo-7">
          在虚拟合约市场上，用户只需根据合约价格，按一定比例交纳少量资金作为履行合约的财力担保，便可参与合约的买卖，这种资金就是虚拟合约保证金。
          本平台的合约采用分账户的逐仓保证金模式。每个币种对应一个合约账户，不同的合约币种的账户资产和仓位相互独立，且不同合约账户之间的划转及交易互不影响。用户的合约账户在开仓后，该合约账户内的所有仓位持仓的风险和收益将合并计算。{" "}
        </div>
        <div class="leverRoleInfo-8">3.如何计算保证金</div>
        <div class="leverRoleInfo-9">
          持仓保证金 = 合约面值 * 持仓合约数量 / 杠杆倍数 冻结保证金 =
          当前委托内所有已成功挂单开仓委托的保证金总和 可用保证金 = 账户余额 -
          持仓保证金 - 冻结保证金{" "}
        </div>
        <div class="leverRoleInfo-10">4.如何计算保证金率</div>
        <div class="leverRoleInfo-11">
          保证金率是衡量用户资产风险的指标。 保证金率 =（未实现盈亏 + 持仓保证金
          + 可用保证金 + 冻结保证金 - 平仓手续费） / 持仓保证金
          保证金率越小，账户的风险越高。当保证金率小于等于0%时，会触发强制平仓。{" "}
        </div>
        <div class="leverRoleInfo-12">5.什么是预估强平价</div>
        <div class="leverRoleInfo-13">
          预估强平价，即系统计算得到的理论上触发强制平仓的价格，仅做参考用，与实际值可能有些许偏差。
        </div>
        <div class="leverRoleInfo-14">6.什么是账户总权益、未实现盈亏</div>
        <div class="leverRoleInfo-15">
          账户总权益 = 账户余额 + 未实现盈亏
          未实现盈亏，是用户在该币种的合约当前持有的仓位的盈亏，未实现盈亏会随着最新成交价格变动而变化。
          多仓未实现盈亏=（1/持仓均价 - 1/最新成交价）* 多仓合约张数 * 合约面值
          * 最新成交价 空仓未实现盈亏=（1/最新成交价 - 1/持仓均价）*
          空仓合约张数 * 合约面值 * 最新成交价
        </div>
      </div>
    </div>
  );
}
