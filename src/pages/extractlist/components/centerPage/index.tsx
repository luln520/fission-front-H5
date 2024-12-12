import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import copy from "copy-to-clipboard";
import { Cell, Dialog } from "react-vant";
import "./index.css";
import { Button } from "antd";
import { Toast } from "antd-mobile";
import { useState } from "react";
import { imageConfig } from "../../../../config/config";

export default function CenterPage({
  coinList,
  userInfo,
  qbSum,
  setVisible,
  setVisibleTK,
  setVisibleTK2,
  setVisibleCK,
  isShowZF,
}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const c2ctxStatus = localStorage.getItem("c2ctxStatus");
  const companySkin = localStorage.getItem("companySkin");

  const getNode = () => {
    const nodes = [];
    for (let i = 0; i < coinList.length; i++) {
      const data = coinList[i];
      const node = (
        <div
          className="extractlist-5"
          onClick={() => {
            navigate(`/extract/${data?.id}`);
          }}
        >
          <div className="extractlist-6">
            <div className="extractlist-7">
              <div className="extractlist-8">
                <div className="extractlist-9"></div>
                <img
                  src={imageConfig.baseImageUrl + data?.img}
                  className="extractlist-10"
                />
              </div>
              <div className="extractlist-11">
                <span className="extractlist-12">
                  {`${data.name.toUpperCase()}${
                    data.czline ? `(${data.czline})`.toUpperCase() : ""
                  }`}
                  {lan=="zh"&&translate(getText("提現"))}
                  {lan!="zh"&&<div>{translate(getText("提現"))}</div>}
                </span>
              </div>
            </div>
            <div className="extractlist-13">
              <span className="extractlist-14">
                <span className="extractlist-15">{translate(getText("提現"))}</span>
              </span>
              <i className="extractlist-16"></i>
            </div>
          </div>
        </div>
      );
      nodes.push(node);
    }
    return nodes;
  };
  return (
    <div className="extractlist-1">
      <div className="extractlist-2">
        <div className="extractlist-3"></div>
        <div className="extractlist-4">
          {getNode()}

          {c2ctxStatus == 1 && (
            <div
              className="extractlist-5"
              onClick={() => {
                if (c2ctxStatus == 1) {
                  setVisibleTK(true);
                }
              }}
            >
              <div className="extractlist-6">
                <div className="extractlist-7">
                  <div className="extractlist-8">
                    <img
                      src="/level/20240216074328978161.png"
                      className="extractlist-10"
                    />
                  </div>
                  <div className="extractlist-11">
                    <span className="extractlist-12">{translate(getText("C2C提現"))}</span>
                  </div>
                </div>
                <div className="extractlist-13">
                  <span className="extractlist-14">
                    <span className="extractlist-15">{translate(getText("提現"))}</span>
                  </span>
                  <i className="extractlist-16"></i>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="extractlist-89"></div>
      </div>
    </div>
  );
}
