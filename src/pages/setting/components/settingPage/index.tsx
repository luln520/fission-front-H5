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
    <div class="setting-1">
      <div class="setting-2">
        <div class="setting-4">
          <div class="setting-5">
            <span class="setting-6">{translate(getText("設置"))}</span>
          </div>
        </div>
        <div class="setting-7">
          <div class="setting-8">
            <div
              class="setting-9"
              onClick={() => {
                navigate("/changelanguage");
              }}
            >
              <div class="setting-10">
                <span class="setting-11">{translate(getText("语言"))}</span>
              </div>
              <div class="setting-12"> {getlanguageStr()}</div>
              <i class="setting-13"></i>
            </div>
            <div class="setting-14">
              <div class="setting-15">
                <span class="setting-16">{translate(getText("版本号"))}</span>
              </div>
              <div class="setting-17"> 2.6.5</div>
            </div>
          </div>
        </div>
        <div
          class="setting-18"
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
