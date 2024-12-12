import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { languagesData } from "../../../../i18n/i18n";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function SettingPage({ userInfo }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const getlanguageStr = () => {
    for (const lanData of languagesData) {
      if (lanData.code == lan) {
        return lanData.title;
      }
    }
  };
  return (
    <div className="setting-1">
      <div className="setting-2">
        <div className="setting-4">
          <div className="setting-5">
            <span className="setting-6">{translate(getText("設置"))}</span>
          </div>
        </div>
        <div className="setting-7">
          <div className="setting-8">
            <div
              className="setting-9"
              onClick={() => {
                navigate("/changelanguage");
              }}
            >
              <div className="setting-10">
                <span className="setting-11">{translate(getText("语言"))}</span>
              </div>
              <div className="setting-12"> {getlanguageStr()}</div>
              <i className="setting-13"></i>
            </div>
            <div className="setting-14">
              <div className="setting-15">
                <span className="setting-16">{translate(getText("版本号"))}</span>
              </div>
              <div className="setting-17"> 2.6.5</div>
            </div>
          </div>
        </div>
        <div
          className="setting-18"
          onClick={() => {
            localStorage.removeItem("uid");
            localStorage.removeItem("username");
            localStorage.removeItem("x-access-token");
            navigate("/login-page");
          }}
        >
          {translate(getText("退出登錄"))}
        </div>
      </div>
    </div>
  );
}
