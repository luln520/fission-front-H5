import { Badge } from "antd";
import { Card, Toast } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";
import QRCode from "qrcodejs2";
import copy from "copy-to-clipboard";
import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";
import DataEmpty from "../../../../components/dataempty";

export default function CenterPage({ teamInfo }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const la = localStorage.getItem("i18n");
  const [index, setIndex] = useState(1);
  const getArrayNodes = () => {
    const nodes = [];
    let array;
    //判断
    if (index == 1) {
      array = teamInfo?.oneTeam;
    } else if (index == 2) {
      array = teamInfo?.twoTeam;
    } else {
      array = teamInfo?.threeTeam;
    }
    if (!array) {
      return;
    }
    for (let index = 0; index < array.length; index++) {
      const item = array[index];
      nodes.push(
        <div class="myTeam-31">
          <div class="myTeam-32">{index + 1}</div>
          <div class="myTeam-33">
            <div class="myTeam-34">
              <div class="myTeam-35"></div>
            </div>
          </div>
          <div class="myTeam-36">
            <div class="myTeam-37">{item?.username}</div>
            <div class="myTeam-38">{item?.createTime}</div>
          </div>
          <div class="myTeam-39">{item?.num}</div>
        </div>
      );
    }

    if (nodes.length == 0) {
      nodes.push(<DataEmpty />);
    }
    return nodes;
  };
  return (
    <>
      <div class="myTeam-1">
        <div class="myTeam-2">
          <div class="myTeam-3">
            <div class="myTeam-4">
              <div class="myTeam-5">
                <div class="myTeam-6">
                  <div class="myTeam-7">
                    <div class="myTeam-8">
                      <div class="myTeam-9">
                        {translate(getText("团队总人数"))}
                      </div>
                      <div class="myTeam-10">{teamInfo?.numCount}</div>
                    </div>
                    {/* <div class="myTeam-11">
                      <div class="myTeam-12">{translate(getText("团队总收益"))}</div>
                      <div class="myTeam-13">30</div>
                    </div> */}
                  </div>
                  <div class="myTeam-14">
                    <div class="myTeam-15">
                      <div class="myTeam-16">1{translate(getText("级"))}</div>
                      <div class="myTeam-17">{teamInfo?.oneTeam?.length}</div>
                    </div>
                    <div class="myTeam-18">
                      <div class="myTeam-19">2{translate(getText("级"))}</div>
                      <div class="myTeam-20">{teamInfo?.twoTeam?.length}</div>
                    </div>
                    <div class="myTeam-21">
                      <div class="myTeam-22">3{translate(getText("级"))}</div>
                      <div class="myTeam-23">{teamInfo?.threeTeam?.length}</div>
                    </div>
                  </div>
                </div>
                <div class="myTeam-24">
                  <div class="myTeam-25">
                    <div
                      class={index == 1 ? "myTeam-26" : "myTeam-27"}
                      onClick={() => {
                        setIndex(1);
                      }}
                    >
                      {translate(getText("一级"))}
                    </div>
                    <div
                      class={index == 2 ? "myTeam-26" : "myTeam-27"}
                      onClick={() => {
                        setIndex(2);
                      }}
                    >
                      {translate(getText("二级"))}
                    </div>
                    <div
                      class={index == 3 ? "myTeam-26" : "myTeam-27"}
                      onClick={() => {
                        setIndex(3);
                      }}
                    >
                      {translate(getText("三级"))}
                    </div>
                  </div>
                  <div class="myTeam-30">{getArrayNodes()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
