import { useNavigate } from "react-router-dom";
import { Popup, Space, Button, Toast } from "antd-mobile";
import copy from "copy-to-clipboard";
import "./index.css";
import { useTranslation } from "react-i18next";
import { changeThem, getText, isDark } from "../../../../utils/util";
import { useState } from "react";
import Search from "../../../../components/search";
import { imageConfig } from "../../../../config/config";

export default function HomePopup({
  isShowHomePop,
  setIShowHomePop,
  userInfo,
}) {
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
            {isDark() && (
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
            )}
          </div>
        </div>
        <div class="homePopCenter-11">
          <div class="homePopCenter-12">
            <div class="homePopCenter-13"></div>
            <span class="homePopCenter-14"></span>
            <img
              src="data:image/png;base64,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"
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
                src="data:image/png;base64,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"
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
            handleCopy(userInfo?.invit);
          }}
        >
          <div class="homePopCenter-30">
            <span class="homePopCenter-31">邀请码：{userInfo?.invit}</span>
          </div>
          <div class="homePopCenter-32">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAD2SURBVFiF7ZY7EoIwEIb/zWjhLSi5hmewoGY4CHoQiIWFN/AqlBzDwmEttHDyIATDQydfubDJN7vZmQUiPwYN/VFKmTLTDUAS6O6WiPd5nrefQTE0m5kOAWXwOktkatBDiLcBZQAAXdft1NhmzEHMfCqK/Dgmt6rkkYhK2/fBFZqL1QlpLZNSJu9pSm1JRFTW9dladhWfFhsqJLI+manRhEwvf056p2zKabKxukcdhVxEIRdRyEUUchGFXIzaGH3xWVeWrtBdDSwp1AiBqxqcpWVfbozLsjqh3pb5LvMh0CpERI8J7tGmyYZBiC8AmoAyxmmK/A1P9h5F7OL1YnsAAAAASUVORK5CYII="
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
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRDNDQyMTlFQkM2QjExRUNCMzcxQjY4QjgwMTE4ODM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRDNDQyMTlGQkM2QjExRUNCMzcxQjY4QjgwMTE4ODM4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REM0NDIxOUNCQzZCMTFFQ0IzNzFCNjhCODAxMTg4MzgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REM0NDIxOURCQzZCMTFFQ0IzNzFCNjhCODAxMTg4MzgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4D/P7cAAAJH0lEQVR42uRcC1MU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"
              draggable="false"
              class="homePopCenter-43"
            />
          </div>
        </div>
        <div
          class="homePopCenter-44"
          onClick={() => {
            if (userInfo?.rzstatus === 2) {
              return;
            }
            navigate("/gjidcard");
          }}
        >
          <div class="homePopCenter-45">{translate(getText("高级認證"))}</div>
          <div class="homePopCenter-46">
            <span class="homePopCenter-47">
              {translate(getText(types[userInfo?.rzstatus]))}
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
              <span class="homePopCenter-55">{translate(getText("交易記錄"))}</span>
            </div>
          </div>
          <div class="homePopCenter-56">
            <div class="homePopCenter-57">
              <span class="homePopCenter-58">分享</span>
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
          <div class="homePopCenter-62">
            <div class="homePopCenter-63">
              <span class="homePopCenter-64">平台介绍</span>
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