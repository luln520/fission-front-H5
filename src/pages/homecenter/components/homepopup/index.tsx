import { useNavigate } from "react-router-dom";
import { Popup, Toast, Badge } from "antd-mobile";
import copy from "copy-to-clipboard";
import "./index.css";
import { useTranslation } from "react-i18next";
import { changeThem, getText, isDark } from "../../../../utils/util";
import { useState } from "react";

export default function HomePopup({
  isShowHomePop,
  setIShowHomePop,
  userInfo,
  loginmsg,
}) {
  const lan = localStorage.getItem("i18n");
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const types = ["未認證", "審核中", "已認證", "審核拒絕"];

  const handleCopy = (value) => {
    if (copy(value)) {
      Toast.show({ content: translate(getText("成功")) });
    }
  };

  return (
    <Popup
      visible={isShowHomePop}
      onMaskClick={() => {
        setIShowHomePop(false);
      }}
      position="right"
      bodyStyle={{ backgroundColor: "var(--them-background)", width: "75vw" }}
    >
      <div className="homePopCenter-1">
        <div className="profile-header">
          <img
            src="/home/profile.png"
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-info">
            <div className="profile-name">
              {userInfo?.username}
              <img src="/home/vip.png" alt="VIP" className="vip-icon" />
            </div>
            <div
              className="profile-id"
              onClick={() => handleCopy(userInfo?.userCode)}
            >
              {translate(getText("ID"))}：{userInfo?.userCode}
              <span style={{ marginLeft: ".5rem", fontSize: ".83rem" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            if (userInfo?.rzstatus === 2) {
              return;
            }
            navigate("/idcard");
          }}
          className="auth-section"
        >
          <div className="auth-info">
            <div className="auth-title">{translate(getText("身份認證"))}</div>
            <div className="auth-status">
              {translate(getText(types[userInfo?.rzstatus]))}
            </div>
          </div>
          <div className="auth-arrow">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14m-7-7l7 7l-7 7"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="menu-list">
          {userInfo?.rzstatus == 2 && (
            <div
              className="menu-item"
              onClick={() => {
                if (userInfo?.rzstatus === 2 && userInfo?.cardsc) {
                  return;
                }
                navigate("/gjidcard");
              }}
            >
              {translate(getText("高级認證"))}
            </div>
          )}
          <div
            className="menu-item"
            onClick={() => {
              navigate("/jyjl");
            }}
          >
            {translate(getText("交易記錄"))}
          </div>
          <div
            className="menu-item"
            onClick={() => {
              navigate("/sharecenter");
            }}
          >
            {translate(getText("分享"))}
          </div>
          <div
            className="menu-item"
            onClick={() => {
              navigate("/noice");
            }}
          >
            <Badge
              content={loginmsg?.noticeCount ? loginmsg?.noticeCount : 0}
              className="menu-item-badge"
            >
              <div>{translate(getText("留言列表"))}</div>
            </Badge>
          </div>
          <div
            className="menu-item"
            onClick={() => {
              navigate("/helplist");
            }}
          >
            {translate(getText("幫助中心"))}
          </div>
          <div
            className="menu-item"
            onClick={() => {
              navigate("/aboutus");
            }}
          >
            {translate(getText("平台介绍"))}
          </div>
          <div
            className="menu-item"
            onClick={() => {
              navigate("/setting");
            }}
          >
            {translate(getText("设置"))}
          </div>
          <div
            className="menu-item"
            onClick={() => {
              navigate("/download");
            }}
          >
            App{(lan == "zh" ? "" : " ") + translate(getText("下載"))}
          </div>
          <div
            className="menu-item"
            onClick={() => {
              navigate("/securitycenter");
            }}
          >
            {translate(getText("安全中心"))}
          </div>
        </div>
      </div>
    </Popup>
  );
}
