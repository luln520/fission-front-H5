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
    <div className="moremenus-1">
      <div className="moremenus-3">
        <div className="moremenus-4">
          <span className="moremenus-5">{translate(getText("常规"))}</span>
        </div>
        <div className="moremenus-6">
          <div className="moremenus-7">
            <div className="moremenus-8">
              <img
                src="/menus/tiBi_d.png"
                draggable="false"
                className="moremenus-11"
              />
            </div>
            <div className="moremenus-12">
              <span className="moremenus-13">{translate(getText("提币"))}</span>
            </div>
          </div>
          <div className="moremenus-14">
            <div className="moremenus-15">
              <img
                src="/menus/chongBi_d.png"
                draggable="false"
                className="moremenus-18"
              />
            </div>
            <div className="moremenus-19">
              <span className="moremenus-20">{translate(getText("充币"))}</span>
            </div>
          </div>
          <div className="moremenus-21">
            <div className="moremenus-22">
              <img
                src="/menus/shanDui_d.png"
                draggable="false"
                className="moremenus-25"
              />
            </div>
            <div className="moremenus-26">
              <span className="moremenus-27">{translate(getText("闪兑"))}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="moremenus-28">
        <div className="moremenus-29">
          <span className="moremenus-30">{translate(getText("交易"))}</span>
        </div>
        <div className="moremenus-31">
          <div className="moremenus-32">
            <div className="moremenus-33">
              <img
                src="/menus/yongXu_d.png"
                draggable="false"
                className="moremenus-36"
              />
            </div>
            <div className="moremenus-37">
              <span className="moremenus-38">{translate(getText("永续"))}</span>
            </div>
          </div>
          <div className="moremenus-39">
            <div className="moremenus-40">
              <img
                src="/menus/jiaoGe_d.png"
                draggable="false"
                className="moremenus-43"
              />
            </div>
            <div className="moremenus-44">
              <span className="moremenus-45">{translate(getText("交割合约"))}</span>
            </div>
          </div>
          <div className="moremenus-46">
            <div className="moremenus-47">
              <img
                src="/menus/huaZhuan_d.png"
                draggable="false"
                className="moremenus-50"
              />
            </div>
            <div className="moremenus-51">
              <span className="moremenus-52">{translate(getText("划转"))}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="moremenus-53">
        <div className="moremenus-54">
          <span className="moremenus-55">{translate(getText("其他"))}</span>
        </div>
        <div className="moremenus-56">
          <div className="moremenus-57">
            <div className="moremenus-58">
              <img
                src="/menus/bangZhu_d.png"
                draggable="false"
                className="moremenus-61"
              />
            </div>
            <div className="moremenus-62">
              <span className="moremenus-63">{translate(getText("帮助"))}</span>
            </div>
          </div>
          <div className="moremenus-64">
            <div className="moremenus-65">
              <img
                src="/menus/keFu_d.png"
                draggable="false"
                className="moremenus-68"
              />
            </div>
            <div className="moremenus-69">
              <span className="moremenus-70">{translate(getText("客服"))}</span>
            </div>
          </div>
          <div className="moremenus-71">
            <div className="moremenus-72">
              <img
                src="/menus/jieShao_d.png"
                draggable="false"
                className="moremenus-75"
              />
            </div>
            <div className="moremenus-76">
              <span className="moremenus-77">{translate(getText("平台介绍"))}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
