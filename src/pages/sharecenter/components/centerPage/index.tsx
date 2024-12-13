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

export default function CenterPage({ userInfo, teamInfo, teamSets }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [userLV, setuserLV] = useState("");
  const la = localStorage.getItem("i18n");
  const origin = window.location.origin;
  const baseUrl="https://tzwza.com";

  const creatQrCode = () => {
    let text = `${baseUrl}/register?invit=${userInfo?.invit}&ref=${origin}`;
    document.getElementById("qrcode").innerHTML = "";
    const qrcode = new QRCode(document.getElementById("qrcode"), {
      text: text, //二维码内容字符串
      width: 130, //图像宽度
      height: 130, //图像高度
      colorDark: "#000000", //二维码前景色
      colorLight: "#ffffff", //二维码背景色
      correctLevel: QRCode.CorrectLevel.H, //容错级别
    });
  };

  // 函数来保存二维码
  async function saveQRCode() {
    const canvas = await html2canvas(document.getElementById("qrcode"));
    // 将canvas转换为图片数据URL
    const imageDataUrl = canvas.toDataURL("image/png");
    // 创建一个隐藏的a标签来触发下载
    const link = document.createElement("a");
    link.href = imageDataUrl;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  //获取
  const getUserLV = () => {
    //排序
    teamSets.sort(function (a, b) {
      return a.sort - b.sort;
    });
    for (const teamSet of teamSets) {
      //判断等级
      if (
        teamInfo?.numCount >= teamSet?.min &&
        teamInfo?.numCount <= teamSet?.max
      ) {
        setuserLV(teamSet?.name);
        break;
      }
    }
  };
  //团队配置
  const getTeamSetArray = () => {
    const nodes = [];
    //排序
    teamSets.sort(function (a, b) {
      return a.sort - b.sort;
    });
    for (const teamSet of teamSets) {
      //写入元素
      nodes.push(
        <div class="sharecenter-39">
          <div class="sharecenter-40">
            <span class="sharecenter-41">{teamSet?.name}</span>
          </div>
          <div class="sharecenter-42">
            <span class="sharecenter-43">
              {teamSet?.min} ≤ N＜ {teamSet?.max}
            </span>
          </div>
        </div>
      );
    }
    return nodes;
  };

  //团队信息
  const getTeamArray = () => {
    const oneTeamNum=teamInfo?.oneTeam?.length;
    const twoTeamNum=teamInfo?.twoTeam?.length;
    const threeTeamNum=teamInfo?.threeTeam?.length;
    const nodes = [];
    //排序
    teamSets.sort(function (a, b) {
      return a.sort - b.sort;
    });
    for (const teamSet of teamSets) {
      //写入元素
      nodes.push(
        <div class="sharecenter-96">
          <div class="sharecenter-97">
            <span class="sharecenter-98">{teamSet?.name}</span>
          </div>
          <div class="sharecenter-99">
            <span class="sharecenter-100">{parseInt(oneTeamNum/teamSet?.max*100)>100?100:parseInt(oneTeamNum/teamSet?.max*100)}%</span>
          </div>
          <div class="sharecenter-101">
            <span class="sharecenter-102">{parseInt(twoTeamNum/teamSet?.max*100)>100?100:parseInt(twoTeamNum/teamSet?.max*100)}%</span>
          </div>
          <div class="sharecenter-103">
            <span class="sharecenter-104">{parseInt(threeTeamNum/teamSet?.max*100)>100?100:parseInt(threeTeamNum/teamSet?.max*100)}%</span>
          </div>
        </div>
      );
    }
    return nodes;
  };
  const handleCopy = (value) => {
    if (copy(value)) {
      Toast.show({ content: translate(getText("成功")) });
    }
  };
  useEffect(() => {
    creatQrCode();
  }, [userInfo]);
  useEffect(() => {
    getUserLV();
  }, [teamSets, teamInfo]);
  return (
    <>
      <div class="sharecenter-1">
        <div class="sharecenter-2">
          <div class="sharecenter-3">
            <div id="qrcode" class="sharecenter-4"></div>
          </div>
        </div>
        <div class="sharecenter-12">
          <div class="sharecenter-13">
            <div
              class="sharecenter-14"
              onClick={() => {
                handleCopy(`${userInfo?.invit}`);
              }}
            >
              <div class="sharecenter-15">
                <span class="sharecenter-16">
                  {translate(getText("我的邀请码"))}:
                </span>
              </div>
              <div class="sharecenter-17"> {userInfo?.invit}</div>
              <i class="sharecenter-18"></i>
            </div>
            <div
              class="sharecenter-19"
              onClick={() => {
                handleCopy(`${baseUrl}/register?invit=${userInfo?.invit}&ref=${origin}`);
              }}
            >
              <div class="sharecenter-20">
                <span class="sharecenter-21">
                  {translate(getText("我的邀请链接"))}:
                </span>
              </div>
              <div class="sharecenter-22">
              {baseUrl}/register?invit={userInfo?.invit}&&ref={origin}
              </div>
              <i class="sharecenter-23"></i>
            </div>
          </div>
        </div>
        <div
          class="sharecenter-24"
          onClick={() => {
            saveQRCode();
          }}
        >
          {translate(getText("点击保存二维码"))}
        </div>
        <div class="sharecenter-25">
          <div class="sharecenter-26">
            {translate(getText("推荐人数"))}：{teamInfo?.numCount}
          </div>
          <div class="sharecenter-27">
            {translate(getText("当前等级"))}：{userLV}
          </div>
          {/* <div class="sharecenter-28">{translate(getText("总收益"))}：0</div> */}
        </div>
        <div class="sharecenter-29">
          <div class="sharecenter-30">
            <div class="sharecenter-31">
              <span class="sharecenter-32">
                {translate(getText("规则说明"))}
              </span>
            </div>
            <i class="sharecenter-33"></i>
          </div>
          <div class="sharecenter-34">
            <div class="sharecenter-35">
              <div class="sharecenter-36">{translate(getText("团队等级"))}</div>
              <div class="sharecenter-37">{translate(getText("要求"))}</div>
            </div>
            <div class="sharecenter-38">{getTeamSetArray()}</div>
          </div>
          <div class="sharecenter-89">
            <div class="sharecenter-90">
              <div class="sharecenter-91">{translate(getText("团队等级"))}</div>
              <div class="sharecenter-92">{translate(getText("1级下级"))}</div>
              <div class="sharecenter-93">{translate(getText("2级下级"))}</div>
              <div class="sharecenter-94">{translate(getText("3级下级"))}</div>
            </div>
            <div class="sharecenter-95">{getTeamArray()}</div>
          </div>
        </div>
      </div>
    </>
  );
}
