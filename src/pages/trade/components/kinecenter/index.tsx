import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import KLine3 from "../kline3";
import "./index.css";

export default function KineCenter({
  nowTab,
  setIndex,
  setType,
  timeindex,
  settimeindex,
  nowzb
}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const times = ["Time", "1M", "5M", "15M", "30M", "1H", "1D", "7D"];
  const getTimesArray = () => {
    const nodes = [];
    for (let i in times) {
      i = parseInt(i);
      const time = times[i];
      nodes.push(
        <li
          class={timeindex == i + 1 ? "kinecenter-3" : "kinecenter-4"}
          onClick={() => {
            settimeindex(i + 1);
          }}
        >
          {time}
        </li>
      );
    }
    return nodes;
  };

  //渲染k

  return (
    <div class="kinecenter-1">
      {/* <ul class="kinecenter-2">{getTimesArray()}</ul> */}
      <div class="kinecenter-11">
        {/* k线图 */}
        <div id="kline" class="kinecenter-12">
          <KLine3
            nowTab={nowTab}
            setIndex={setIndex}
            setType={setType}
            timeindex={timeindex}
            settimeindex={settimeindex}
            nowzb={nowzb}
          />
        </div>
      </div>
    </div>
  );
}
