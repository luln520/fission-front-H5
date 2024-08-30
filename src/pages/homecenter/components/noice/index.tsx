import { useNavigate } from "react-router-dom";
import "./index.css";
import { NoticeBar } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";

export default function Noice({ content }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const la = localStorage.getItem("i18n") ? localStorage.getItem("i18n") : "en";
  const getContent = () => {
    const contentStr =
      content[la == "zh" ? "content" : `content${la[0].toUpperCase()}${la[1]}`];
    return <span key={"contentStrSpan" + Math.random()}>{contentStr}</span>;
  };
  return (
    <div
      class="homenotice-1"
      onClick={() => {
        navigate("/noiceInfo");
      }}
    >
      <div class="homenotice-2">
        <div class="homenotice-3">
          <span class="homenotice-5"></span>
          <img
            src="/home/notice.png"
            draggable="false"
            class="homenotice-6"
          />
        </div>
      </div>
      <div class="homenotice-7">
        <div class="homenotice-8">{getContent()}</div>
      </div>
      <div class="homenotice-9">
        <div class="homenotice-10">
          <div class="homenotice-12">
            <div class="homenotice-13">
              <div class="homenotice-14"></div>
            </div>
            <div class="homenotice-15">
              <div class="homenotice-16"></div>
            </div>
          </div>
          <img
            src="/home/right-arrow.png"
            draggable="false"
            class="homenotice-17"
          />
        </div>
      </div>
    </div>
  );
}
