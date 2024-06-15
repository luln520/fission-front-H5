import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function DataList({ huobigetHistory }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const getArray1 = () => {
    const nodes = [];
    for (const i in huobigetHistory) {
      const data = huobigetHistory[i]?.data[0];
      if (i > 9) {
        break;
      }
      nodes.push(
        <div class="leverDataBox-9">
          <div class="leverDataBox-10">
            <span class="leverDataBox-11">{data.amount?.toFixed(5)}</span>
          </div>
          <div class="leverDataBox-12">
            <span class="leverDataBox-13">{data.price}</span>
          </div>
        </div>
      );
    }
    return nodes;
  };

  const getArray2 = () => {
    const nodes = [];
    for (const i in huobigetHistory) {
      const data = huobigetHistory[i]?.data[0];
      if (i <= 9) {
        continue;
      }
      nodes.push(
        <div class="leverDataBox-66">
          <div class="leverDataBox-67">
            <span class="leverDataBox-68">{data.price}</span>
          </div>
          <div class="leverDataBox-69">
            <span class="leverDataBox-70">{data.amount?.toFixed(5)}</span>
          </div>
        </div>
      );
    }
    return nodes;
  };
  return (
    <div class="leverDataBox-1">
      <div class="leverDataBox-2">
        <div class="leverDataBox-3">
          <div class="leverDataBox-4">
            <span class="leverDataBox-5">{translate(getText("數量"))}</span>
          </div>
          <div class="leverDataBox-6">
            <span class="leverDataBox-7">{translate(getText("價格"))}</span>
          </div>
        </div>
        <div class="leverDataBox-8">{getArray1()}</div>
      </div>
      <div class="leverDataBox-59">
        <div class="leverDataBox-60">
          <div class="leverDataBox-61">
            <span class="leverDataBox-62">{translate(getText("價格"))}</span>
          </div>
          <div class="leverDataBox-63">
            <span class="leverDataBox-64">{translate(getText("數量"))}</span>
          </div>
        </div>
        <div class="leverDataBox-65">{getArray2()}</div>
      </div>
    </div>
  );
}
