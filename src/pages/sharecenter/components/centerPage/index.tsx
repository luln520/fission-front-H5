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
        <div className="sharecenter-39">
          <div className="sharecenter-40">
            <span className="sharecenter-41">{teamSet?.name}</span>
          </div>
          <div className="sharecenter-42">
            <span className="sharecenter-43">
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
        <div className="sharecenter-96">
          <div className="sharecenter-97">
            <span className="sharecenter-98">{teamSet?.name}</span>
          </div>
          <div className="sharecenter-99">
            <span className="sharecenter-100">{parseInt(oneTeamNum/teamSet?.max*100)>100?100:parseInt(oneTeamNum/teamSet?.max*100)}%</span>
          </div>
          <div className="sharecenter-101">
            <span className="sharecenter-102">{parseInt(twoTeamNum/teamSet?.max*100)>100?100:parseInt(twoTeamNum/teamSet?.max*100)}%</span>
          </div>
          <div className="sharecenter-103">
            <span className="sharecenter-104">{parseInt(threeTeamNum/teamSet?.max*100)>100?100:parseInt(threeTeamNum/teamSet?.max*100)}%</span>
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
      <div className="sharecenter-1">
        <div className="sharecenter-2">
          <div className="sharecenter-3">
            <div id="qrcode" className="sharecenter-4"></div>
          </div>
        </div>
        <div className="sharecenter-12">
          <div className="sharecenter-13">
            <div
              className="sharecenter-14"
              onClick={() => {
                handleCopy(`${userInfo?.invit}`);
              }}
            >
              <div className="sharecenter-15">
                <span className="sharecenter-16">
                  {translate(getText("我的邀请码"))}:
                </span>
              </div>
              <div className="sharecenter-17"> {userInfo?.invit}</div>
              <i className="sharecenter-18"></i>
            </div>
            <div
              className="sharecenter-19"
              onClick={() => {
                handleCopy(`${baseUrl}/register?invit=${userInfo?.invit}&ref=${origin}`);
              }}
            >
              <div className="sharecenter-20">
                <span className="sharecenter-21">
                  {translate(getText("我的邀请链接"))}:
                </span>
              </div>
              <div className="sharecenter-22">
              {baseUrl}/register?invit={userInfo?.invit}&&ref={origin}
              </div>
              <i className="sharecenter-23"></i>
            </div>
          </div>
        </div>
        <div
          className="sharecenter-24"
          onClick={() => {
            saveQRCode();
          }}
        >
          {translate(getText("点击保存二维码"))}
        </div>
        <div className="sharecenter-25">
          <div className="sharecenter-26">
            {translate(getText("推荐人数"))}：{teamInfo?.numCount}
          </div>
          <div className="sharecenter-27">
            {translate(getText("当前等级"))}：{userLV}
          </div>
          {/* <div className="sharecenter-28">{translate(getText("总收益"))}：0</div> */}
        </div>
        <div className="sharecenter-29">
          <div className="sharecenter-30">
            <div className="sharecenter-31">
              <span className="sharecenter-32">
                {translate(getText("规则说明"))}
              </span>
            </div>
            <i className="sharecenter-33"></i>
          </div>
          <div className="sharecenter-34">
            <div className="sharecenter-35">
              <div className="sharecenter-36">{translate(getText("团队等级"))}</div>
              <div className="sharecenter-37">{translate(getText("要求"))}</div>
            </div>
            <div className="sharecenter-38">{getTeamSetArray()}</div>
          </div>
          <div className="sharecenter-89">
            <div className="sharecenter-90">
              <div className="sharecenter-91">{translate(getText("团队等级"))}</div>
              <div className="sharecenter-92">{translate(getText("1级下级"))}</div>
              <div className="sharecenter-93">{translate(getText("2级下级"))}</div>
              <div className="sharecenter-94">{translate(getText("3级下级"))}</div>
            </div>
            <div className="sharecenter-95">{getTeamArray()}</div>
          </div>
        </div>
      </div>
    </>
  );
}
