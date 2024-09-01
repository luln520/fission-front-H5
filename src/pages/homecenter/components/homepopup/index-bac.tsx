import { useNavigate } from "react-router-dom";
import { Popup, Space, Button, Toast } from "antd-mobile";
import copy from "copy-to-clipboard";
import "./index.css";
import { useTranslation } from "react-i18next";
import { changeThem, getText, isDark } from "../../../../utils/util";
import { useState } from "react";
import Search from "../../../../components/search";
import { imageConfig } from "../../../../config/config";
import { Badge } from "antd";

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
      <div class="homePopCenter-1">
        <div class="homePopCenter-2">
          <div class="homePopCenter-3">
            {/* {isDark() && (
              <div
                class="homePopCenter-4-dark"
                onClick={() => {
                  changeThem("light");
                }}
              ></div>
            )}
            {!isDark() && (
              <div
                class="homePopCenter-4-light"
                onClick={() => {
                  changeThem("dark");
                }}
              ></div>
            )} */}
          </div>
        </div>
        <div class="homePopCenter-11">
          <div class="homePopCenter-12">
            <div class="homePopCenter-13"></div>
            <span class="homePopCenter-14"></span>
            <img
              src=""
              draggable="false"
              class="homePopCenter-15"
            />
          </div>
          <div class="homePopCenter-16">
            <div class="homePopCenter-17">
              <div class="homePopCenter-18"></div>
              <div class="homePopCenter-19">
                <div class="homePopCenter-20">
                  <div class="homePopCenter-21"></div>
                </div>
                <div class="homePopCenter-22">
                  <div class="homePopCenter-23"></div>
                </div>
              </div>
              <img
                src=""
                draggable="false"
                class="homePopCenter-24"
              />
            </div>
            <div class="homePopCenter-25">
              <span class="homePopCenter-26">VIP1</span>
            </div>
          </div>
        </div>
        <div
          class="homePopCenter-27"
          style={{
            color: isDark() ? "#fff" : "",
          }}
        >
          <span class="homePopCenter-28">{userInfo?.username}</span>
        </div>
        <div
          class="homePopCenter-29"
          onClick={() => {
            handleCopy(userInfo?.userCode);
          }}
        >
          <div class="homePopCenter-30">
            <span class="homePopCenter-31">{translate(getText("ID"))}：{userInfo?.userCode}</span>
          </div>
          <div class="homePopCenter-32">
            <img
              src=""
              draggable="false"
              class="homePopCenter-35"
            />
          </div>
        </div>
        <div
          class="homePopCenter-36"
          onClick={() => {
            if (userInfo?.rzstatus === 2) {
              return;
            }
            navigate("/idcard");
          }}
        >
          <div class="homePopCenter-37">{translate(getText("身份認證"))}</div>
          <div class="homePopCenter-38">
            <span class="homePopCenter-39">
              {translate(getText(types[userInfo?.rzstatus]))}
            </span>
          </div>
          <div class="homePopCenter-40">
            <div class="homePopCenter-41"></div>
            <span class="homePopCenter-42"></span>
            <img
              src=""
              draggable="false"
              class="homePopCenter-43"
            />
          </div>
        </div>
        {userInfo?.rzstatus == 2 && (
          <div
            class="homePopCenter-44"
            onClick={() => {
              if (userInfo?.rzstatus === 2 && userInfo?.cardsc) {
                return;
              }
              navigate("/gjidcard");
            }}
          >
            <div class="homePopCenter-45">{translate(getText("高级認證"))}</div>
            <div class="homePopCenter-46">
              <span class="homePopCenter-47">
                {userInfo?.rzstatus === 2 &&
                  userInfo?.cardsc &&
                  translate(getText(types[userInfo?.rzstatus]))}
                {!(userInfo?.rzstatus === 2 && userInfo?.cardsc) &&
                  translate(getText(types[0]))}
              </span>
            </div>
            <div class="homePopCenter-48">
              <div class="homePopCenter-49"></div>
              <span class="homePopCenter-50"></span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRDNDQyMTlFQkM2QjExRUNCMzcxQjY4QjgwMTE4ODM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRDNDQyMTlGQkM2QjExRUNCMzcxQjY4QjgwMTE4ODM4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REM0NDIxOUNCQzZCMTFFQ0IzNzFCNjhCODAxMTg4MzgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REM0NDIxOURCQzZCMTFFQ0IzNzFCNjhCODAxMTg4MzgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4D/P7cAAAJH0lEQVR42uRcC1MU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"
                draggable="false"
                class="homePopCenter-51"
              />
            </div>
          </div>
        )}
        <div
          class="homePopCenter-52"
          style={{
            color: isDark() ? "" : "rgb(51, 51, 51)",
          }}
        >
          <div
            class="homePopCenter-53"
            onClick={() => {
              navigate("/jyjl");
            }}
          >
            <div class="homePopCenter-54">
              <span class="homePopCenter-55">
                {translate(getText("交易記錄"))}
              </span>
            </div>
          </div>
          <div
            class="homePopCenter-56"
            onClick={() => {
              navigate("/sharecenter");
            }}
          >
            <div class="homePopCenter-57">
              <span class="homePopCenter-58">{translate(getText("分享"))}</span>
            </div>
          </div>
          {/* <div
            class="homePopCenter-56"
            onClick={() => {
              navigate("/myteam");
            }}
          >
            <div class="homePopCenter-57">
              <span class="homePopCenter-58">{translate(getText("我的团队"))}</span>
            </div>
          </div> */}
          <div
            class="homePopCenter-59"
            onClick={() => {
              navigate("/noice");
            }}
          >
            <div class="homePopCenter-60">
              <span class="homePopCenter-61">
              {translate(getText("留言列表"))}
              <Badge count={loginmsg?.noticeCount ? loginmsg?.noticeCount : 0} offset={[7, -15]}></Badge>
              </span>
            </div>
          </div>
          
          <div
            class="homePopCenter-59"
            onClick={() => {
              navigate("/helplist");
            }}
          >
            <div class="homePopCenter-60">
              <span class="homePopCenter-61">
                {translate(getText("幫助中心"))}
              </span>
            </div>
          </div>
          <div
            class="homePopCenter-62"
            onClick={() => {
              navigate("/aboutus");
            }}
          >
            <div class="homePopCenter-63">
              <span class="homePopCenter-64">{translate(getText("平台介绍"))}</span>
            </div>
          </div>
          <div
            class="homePopCenter-65"
            onClick={() => {
              navigate("/setting");
            }}
          >
            <div class="homePopCenter-66">
              <span class="homePopCenter-67">{translate(getText("设置"))}</span>
            </div>
          </div>
          <div
            class="homePopCenter-65"
            onClick={() => {
              navigate("/download");
            }}
          >
            <div class="homePopCenter-66">
              <span class="homePopCenter-67">
                {" "}
                App{(lan == "zh" ? "" : " ") + translate(getText("下載"))}
              </span>
            </div>
          </div>
          <div
            class="homePopCenter-68"
            onClick={() => {
              navigate("/securitycenter");
            }}
          >
            <div class="homePopCenter-69">
              <span class="homePopCenter-70">
                {translate(getText("安全中心"))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
}
