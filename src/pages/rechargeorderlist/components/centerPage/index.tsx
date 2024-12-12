import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import copy from "copy-to-clipboard";
import { Cell, Dialog } from "react-vant";
import "./index.css";
import { Button } from "antd";
import { Toast } from "antd-mobile";
import { useState } from "react";

export default function CenterPage({ czList }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  //充值列表
  const getCzNodes = () => {
    const nodes = [];
    for (const cz of czList) {
      const node = (
        <>
          <li class="rechargeorderlist-4">
            <div class="rechargeorderlist-5">
              <h1 class="rechargeorderlist-6">
                {cz.amount} USDT
              </h1>
              <div class="rechargeorderlist-7">
                <span class="rechargeorderlist-8">
                  <small class="rechargeorderlist-9"> {cz.createTime}</small>
                </span>
              </div>
            </div>
            {/*<div class="rechargeorderlist-10">
              <p class="rechargeorderlist-11">
                {translate(
                  getText(
                    cz.status === 1
                      ? "待審查"
                      : cz.status === 2
                      ? "已完成"
                      : "失敗"
                  )
                )}
              </p>
            </div>*/}
          </li>
        </>
      );
      nodes.push(node);
    }
    return nodes;
  };
  return (
    <div class="rechargeorderlist-1">
      <div class="rechargeorderlist-2">
        <ul class="rechargeorderlist-3"> {getCzNodes()}</ul>
      </div>
    </div>
  );
}
