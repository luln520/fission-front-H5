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
      className="homenotice-1"
      onClick={() => {
        navigate("/noiceInfo");
      }}
    >
      <div className="homenotice-2">
        <div className="homenotice-3">
          <span className="homenotice-5"></span>
          <img
            src="/home/notice.png"
            draggable="false"
            className="homenotice-6"
          />
        </div>
      </div>
      <div className="homenotice-7">
        <div className="homenotice-8">{getContent()}</div>
      </div>
      <div className="homenotice-9">
        <div className="homenotice-10">
          <div className="homenotice-12">
            <div className="homenotice-13">
              <div className="homenotice-14"></div>
            </div>
            <div className="homenotice-15">
              <div className="homenotice-16"></div>
            </div>
          </div>
          <img
            src="/home/right-arrow.png"
            draggable="false"
            className="homenotice-17"
          />
        </div>
      </div>
    </div>
  );
}
