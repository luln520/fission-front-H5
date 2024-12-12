import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import copy from "copy-to-clipboard";
import { Cell, Dialog } from "react-vant";
import "./index.css";
import { Button } from "antd";
import { Toast } from "antd-mobile";
import { useState } from "react";

export default function CenterPage({ txList }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  //充值列表
  const getCzNodes = () => {
    const nodes = [];
    for (const cz of txList) {
      console.info(cz);
      const node = (
        <>
          <li className="rechargeorderlist-4">
            <div className="rechargeorderlist-5">
              <h1 className="rechargeorderlist-6">
                {cz.currenyNum} {cz.currenyName?.toUpperCase()}
              </h1>
              <div className="rechargeorderlist-7">
                <span className="rechargeorderlist-8">
                  <small className="rechargeorderlist-9"> {cz.addtime}</small>
                </span>
              </div>
            </div>
            <div className="rechargeorderlist-10">
              <p className="rechargeorderlist-11">
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
            </div>
          </li>
        </>
      );
      nodes.push(node);
    }
    return nodes;
  };
  return (
    <div className="rechargeorderlist-1">
      <div className="rechargeorderlist-2">
        <ul className="rechargeorderlist-3"> {getCzNodes()}</ul>
      </div>
    </div>
  );
}
