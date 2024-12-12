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
    <div class="moremenus-1">
      <div class="moremenus-3">
        <div class="moremenus-4">
          <span class="moremenus-5">{translate(getText("常规"))}</span>
        </div>
        <div class="moremenus-6">
          <div class="moremenus-7">
            <div class="moremenus-8">
              <img
                src="/menus/tiBi_d.png"
                draggable="false"
                class="moremenus-11"
              />
            </div>
            <div class="moremenus-12">
              <span class="moremenus-13">{translate(getText("提币"))}</span>
            </div>
          </div>
          <div class="moremenus-14">
            <div class="moremenus-15">
              <img
                src="/menus/chongBi_d.png"
                draggable="false"
                class="moremenus-18"
              />
            </div>
            <div class="moremenus-19">
              <span class="moremenus-20">{translate(getText("充币"))}</span>
            </div>
          </div>
          <div class="moremenus-21">
            <div class="moremenus-22">
              <img
                src="/menus/shanDui_d.png"
                draggable="false"
                class="moremenus-25"
              />
            </div>
            <div class="moremenus-26">
              <span class="moremenus-27">{translate(getText("闪兑"))}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="moremenus-28">
        <div class="moremenus-29">
          <span class="moremenus-30">{translate(getText("交易"))}</span>
        </div>
        <div class="moremenus-31">
          <div class="moremenus-32">
            <div class="moremenus-33">
              <img
                src="/menus/yongXu_d.png"
                draggable="false"
                class="moremenus-36"
              />
            </div>
            <div class="moremenus-37">
              <span class="moremenus-38">{translate(getText("永续"))}</span>
            </div>
          </div>
          <div class="moremenus-39">
            <div class="moremenus-40">
              <img
                src="/menus/jiaoGe_d.png"
                draggable="false"
                class="moremenus-43"
              />
            </div>
            <div class="moremenus-44">
              <span class="moremenus-45">{translate(getText("交割合约"))}</span>
            </div>
          </div>
          <div class="moremenus-46">
            <div class="moremenus-47">
              <img
                src="/menus/huaZhuan_d.png"
                draggable="false"
                class="moremenus-50"
              />
            </div>
            <div class="moremenus-51">
              <span class="moremenus-52">{translate(getText("划转"))}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="moremenus-53">
        <div class="moremenus-54">
          <span class="moremenus-55">{translate(getText("其他"))}</span>
        </div>
        <div class="moremenus-56">
          <div class="moremenus-57">
            <div class="moremenus-58">
              <img
                src="/menus/bangZhu_d.png"
                draggable="false"
                class="moremenus-61"
              />
            </div>
            <div class="moremenus-62">
              <span class="moremenus-63">{translate(getText("帮助"))}</span>
            </div>
          </div>
          <div class="moremenus-64">
            <div class="moremenus-65">
              <img
                src="/menus/keFu_d.png"
                draggable="false"
                class="moremenus-68"
              />
            </div>
            <div class="moremenus-69">
              <span class="moremenus-70">{translate(getText("客服"))}</span>
            </div>
          </div>
          <div class="moremenus-71">
            <div class="moremenus-72">
              <img
                src="/menus/jieShao_d.png"
                draggable="false"
                class="moremenus-75"
              />
            </div>
            <div class="moremenus-76">
              <span class="moremenus-77">{translate(getText("平台介绍"))}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
