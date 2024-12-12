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
                                    loginmsg
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
          position="left"
          bodyStyle={{ backgroundColor: "var(--them-background)", width: "75vw" }}
      >
        <div className="homePopCenter-1">
          <div className="profile-header">
            <img src="/home/profile.png" alt="Profile" className="profile-image" />
            <div className="profile-info">
              <div className="profile-name">Boran</div>
              <div className="profile-id">
                ID: 6355530 <img src="/home/vip.png" alt="VIP" className="vip-icon" />
              </div>
            </div>
          </div>

          <div className="auth-section">
            <div className="auth-info">
              <div className="auth-title">Identity authentication</div>
              <div className="auth-status">Not Verified</div>
            </div>
            <div className="auth-arrow">→</div>
          </div>

          <div className="menu-list">
            <div
                className="menu-item"
                onClick={() => {
                  navigate("/jyjl");
                }}
            >
              Transaction record
            </div>
            <div
                className="menu-item"
                onClick={() => {
                  navigate("/sharecenter");
                }}
            >
              sharepartake
            </div>
            <div
                className="menu-item"
                onClick={() => {
                  navigate("/noice");
                }}
            >
              Message List
            </div>
            <div
                className="menu-item"
                onClick={() => {
                  navigate("/aboutus");
                }}
            >
              Platform Introduction
            </div>
            <div
                className="menu-item"
                onClick={() => {
                  navigate("/download");
                }}
            >
              App Download
            </div>
            <div
                className="menu-item"
                onClick={() => {
                  navigate("/securitycenter");
                }}
            >
              Security Center
            </div>
          </div>
        </div>
      </Popup>
  );
}
