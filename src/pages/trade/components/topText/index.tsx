import { Popover } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TopText({
  zbs,
  nowzb,
  setnowzb,
  nowtime,
  setnowtime,
  times,
  settimeindex,
}) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);

  const getItem = () => {
    const nodes = [];
    for (const zb of zbs) {
      nodes.push(
        <div
          class="listvol-2"
          onClick={() => {
            setnowzb(zb);
            setshow1(false);
            setshow2(!show2);
          }}
        >
          <div class={nowzb == zb ? "listvol-3" : "listvol-9"}>
            <span class="listvol-4">{zb}</span>
          </div>
          <div class="listvol-5">
            <span class="listvol-6"></span>
          </div>
          <i class="listvol-7"></i>
        </div>
      );
    }
    return nodes;
  };

  const getTimes = () => {
    const nodes = [];
    for (const i in times) {
      const time = times[i];
      nodes.push(
        <div
          class="listmin-2"
          onClick={() => {
            settimeindex(parseInt(i)+1);
            setnowtime(time);
            setshow2(false);
            setshow1(!show1);
          }}
        >
          <div class="listmin-3">
            <span class="listmin-4">{time}</span>
          </div>
        </div>
      );
    }
    return nodes;
  };
  const { t: translate } = useTranslation();
  return (
    <>
      <div class="marketTopTextlb-1">
        {/* 点击1 */}
        <div
          class="marketTopTextlb-2"
          onClick={() => {
            setshow2(false);
            setshow1(!show1);
          }}
        >
          <div class="marketTopTextlb-3">
            <span class="marketTopTextlb-4">{nowtime}</span>
          </div>
          <i class="marketTopTextlb-5"></i>
        </div>
        {/* 点击2 */}
        <div
          class="marketTopTextlb-6"
          onClick={() => {
            setshow1(false);
            setshow2(!show2);
          }}
        >
          <div class="marketTopTextlb-7">
            <span class="marketTopTextlb-8">{nowzb}</span>
          </div>
          <i class="marketTopTextlb-9"></i>
        </div>
      </div>
      {/* 显示 */}
      {show1 && <div class="listmin-1">{getTimes()}</div>}

      {show2 && <div class="listvol-1">{getItem()}</div>}
    </>
  );
}
