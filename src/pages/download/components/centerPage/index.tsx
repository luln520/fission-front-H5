import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "antd-mobile";
import { getText } from "../../../../utils/util";
import "./index.css";
import { imageConfig } from "../../../../config/config";

export default function DownlandPage({ companyData }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const title = localStorage.getItem("title");
  return (
    <div class="downloadCenter-1">
      <div class="downloadCenter-2">
        <div class="downloadCenter-3"></div>
        <div class="downloadCenter-4">
          <div class="downloadCenter-5">
            <div class="downloadCenter-6"></div>
          </div>
          <div class="downloadCenter-7">
            <div class="downloadCenter-8"></div>
          </div>
        </div>
        <img
          src="/assets/downloadBg-fe9eece8.png"
          draggable="false"
          class="downloadCenter-9"
        />
      </div>
      <div class="downloadCenter-10">
        <img
          src={imageConfig.baseImageUrl + companyData?.companyLogo}
          draggable="false"
          class="downloadCenter-13"
        />
      </div>
      <div class="downloadCenter-14">
        <span class="downloadCenter-15">{companyData?.companyName}</span>
      </div>
      <div
        class="downloadCenter-16"
        onClick={() => {
          if (companyData?.iosDomain.includes("http")) {
            window.location.href = companyData?.iosDomain;
          }
        }}
      >
        <div class="downloadCenter-17">
          <div class="downloadCenter-18"></div>
          <div class="downloadCenter-19">
            <div class="downloadCenter-20">
              <div class="downloadCenter-21"></div>
            </div>
            <div class="downloadCenter-22">
              <div class="downloadCenter-23"></div>
            </div>
          </div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAmCAYAAAClI5npAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFGMjZENkFBQUZEQTExRUNCMkU5OTg5RjkwMkUxOEM2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFGMjZENkFCQUZEQTExRUNCMkU5OTg5RjkwMkUxOEM2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUYyNkQ2QThBRkRBMTFFQ0IyRTk5ODlGOTAyRTE4QzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYyNkQ2QTlBRkRBMTFFQ0IyRTk5ODlGOTAyRTE4QzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7KjsKuAAACGElEQVR42ryYSyhFURSGz/WMGBEKd8LIhORRXhEldcnAayAljwlKmegayEApxYBkxsDMwEApEyGPAUp5xIC8QlJIeRS2f9VR1+7sc8/lnPXX1+3ee/Ze66y9zt5rHZcQQrNZEaAWdIF90Gx2cYjNxqvBGEjSvz/6GxBko/E+MOdjXNMjYC5aAhvwCGOl+RvrsiEHwsErcEm/b4NsjiVoNzBOqrM02obwnxiEvtXq+P8aj5MM34KqQOb472P4AZbAM1gHw4FO4C8J80ElSKDVAjdgAayZjGkDGcCt59g9OAEz4NRqDpSBFaHWJugFbhAMMsEEuBbmmgKx/nJgSFjXF7gTgekB5KocGBd8KiabvvtAPejQeLSnJ/CvJKRMjmIwvgOy5J2wm8k43WSR0VbcyBR6utEXeR+Ix+clCHXYOB1Y0eBTjkAhg3HSrGz8x4EUpvBvqY7jSCYH3lQOPDE5EKNy4I7JAY/KgSMmBwpAspEDe/qRyaF+IwfewQGTAy2gxmgn3Nb4RPtBg1wR0dqcK6pbpzRNXZTvabgL0jVeDfrWA5PMxin3RuWilIqEYCYHJqgAkjujTibjdNdeVVV8xlAPdpk1p3l6k+GUqEdINWtON8CAgw6UWm1Olx0IfVMg7wfoaZgHFYr/qU1bBYcgDOSAEpPXPj1g5C/tuRccgydwCmZBOQg3uDYRtIE1cAGuwCIoUc3/LcAAdu1FG2RJKp8AAAAASUVORK5CYII="
            draggable="false"
            class="downloadCenter-24"
          />
        </div>
        iOS下载
      </div>
      <div
        class="downloadCenter-25"
        onClick={() => {
          if (companyData?.androidDomain.includes("http")) {
            window.location.href = companyData?.androidDomain;
          }
        }}
      >
        <div class="downloadCenter-26">
          <div class="downloadCenter-27"></div>
          <div class="downloadCenter-28">
            <div class="downloadCenter-29">
              <div class="downloadCenter-30"></div>
            </div>
            <div class="downloadCenter-31">
              <div class="downloadCenter-32"></div>
            </div>
          </div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAnCAYAAACFSPFPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFEMzE2MjI0QUZEQTExRUNCQkJCRTgyODQyNjBBQUE4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFEMzE2MjI1QUZEQTExRUNCQkJCRTgyODQyNjBBQUE4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUQzMTYyMjJBRkRBMTFFQ0JCQkJFODI4NDI2MEFBQTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUQzMTYyMjNBRkRBMTFFQ0JCQkJFODI4NDI2MEFBQTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz71wtbxAAACbElEQVR42uyYS0gVYRTH7x0veE2FaJGLaqXYQsGoaJVQEhQiLYKoraswV0LYi0qhMlokLnwsIkho0QMCbRFF9oCkjZuCoLBELHpQ4YNKDb39DpwLw3Dn8XnnUwoP/Jj5zpyZ78/3PN8kfwyfS0S0fhiGvoSZ3YA7cDcs0DH46DU4A5sM3rkMW+B+lOCUwYefwBFog9NQA+WwHkpgFibhEwypvxp2wO+4xYjdg/MwBumAOBGWgUvwM+rHTbrpKHzWFkmHxMrzImiHR7A5TjEd0A1lcAuuh8T/gh54DXUwArvi6KYLcELvZTwc0nsZD9t83mnXwbsRJqAYHmsLvV1qy9TCKVe5FLZCFWwIeG8nVMJBj/9BUGXJkHVmRCuP0w7DTdOWqbEgROwqFJiOmRJtmT8xiynU7p40EfMctieW0bJiWnVmyMg/pj4pN8q4slDvRfioE6RJF8iulK6Sx12BMmX3QQU0W2qEs7AOnrl8BxyPELG9eh212CPfocG7aouYOb9pb3mIrPGUZ0TM/AqJmc9no7Ruq2JWxfzzYop8ni1arjudS8yCT3CBZTFfPeVSEdPicfbotcyiENmXBuGbyzcuG2Wvawd9o8lPIsIJIB+TlPWVbsotumtfyaYQA4rbFiyKySZsX1zJfuBsSi33LA4Sk7EoJmMq5oWl6f1Sj8dGXTGh2d4eWKuc9KQW49Cpvowe9v1iJBH/ALf9kvykwf+ZXGuS/JnYbRgTy3ZQGSFbixLz/22UTgSfk08dTp7TsXAJMbGIeQ9THt9YjvJiSEwsYuRIsx/ewTQ8zXHIk99n9RozAw9NDoJ/BRgAhHl5AC0lf0UAAAAASUVORK5CYII="
            draggable="false"
            class="downloadCenter-33"
          />
        </div>
        Android下载
      </div>
      <div class="downloadCenter-34">
        <span
          class="downloadCenter-35"
          onClick={() => {
            navigate("/downloadbook");
          }}
        >
          安装说明
        </span>
      </div>
    </div>

    // <div className="centerDiv">
    //   <div className="imageDiv">
    //     <img
    //       src={imageConfig.baseImageUrl + companyData?.logo1}
    //       width="100%"
    //       className="image"
    //     />
    //   </div>
    //   <div className="centerFontDiv">
    //     <div className="centerItem">
    //       <img
    //         className="logo-img"
    //         src={imageConfig.baseImageUrl + companyData?.companyLogo}
    //       />
    //       <div className="logo-font">
    //         <h1 style={{
    //           fontSize:20
    //         }}>IOS</h1>
    //         <p className="lang">{translate(getText("年齡"))} 5+</p>
    //         <p className="lang">
    //           {translate(getText("提供安全"))}，
    //           {translate(getText("便捷的買賣方式"))}
    //         </p>
    //       </div>
    //       <Button
    //         color="primary"
    //         fill="none"
    //         className="buttonD"
    //         onClick={() => {
    //           if (companyData?.iosDomain.includes("http")) {
    //             window.location.href=companyData?.iosDomain;
    //           }
    //         }}
    //       >
    //         {translate(getText("下載"))}
    //       </Button>
    //     </div>
    //     <div className="centerItem">
    //       <img
    //         className="logo-img"
    //         src={imageConfig.baseImageUrl + companyData?.companyLogo}
    //       />
    //       <div className="logo-font">
    //         <h1 style={{
    //           fontSize:20
    //         }}>ANDROID</h1>
    //         <p className="lang">{translate(getText("年齡"))} 5+</p>
    //         <p className="lang">
    //           {translate(getText("提供安全"))}，
    //           {translate(getText("便捷的買賣方式"))}
    //         </p>
    //       </div>
    //       <Button
    //         color="primary"
    //         fill="none"
    //         className="buttonD"
    //         onClick={() => {
    //           if (companyData?.androidDomain.includes("http")) {
    //             window.location.href = companyData?.androidDomain;
    //           }
    //         }}
    //       >
    //         {translate(getText("下載"))}
    //       </Button>
    //     </div>
    //   </div>
    //   {/* 文字 */}
    //   <div className="fontDiv">
    //     <h1 className="">{translate(getText("介紹"))}</h1>
    //     <div className="fontInfoDiv">
    //       {translate(
    //         getText(
    //           "作為一家公司，我們強調長期的安全性、可靠性和便利性。我們的主要產品和服務反映了這一願景。先進的交易平台,更低的消費，更安全高效的保障，我們讓每個人都能輕鬆擁有和交易資產"
    //         )
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
}
