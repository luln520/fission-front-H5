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
          <span class="moremenus-5">常规</span>
        </div>
        <div class="moremenus-6">
          <div class="moremenus-7">
            <div class="moremenus-8">
              <img
                src="http://h5.tinshwk.xyz/static/menus/tiBi_d.png"
                draggable="false"
                class="moremenus-11"
              />
            </div>
            <div class="moremenus-12">
              <span class="moremenus-13">提币</span>
            </div>
          </div>
          <div class="moremenus-14">
            <div class="moremenus-15">
              <img
                src="http://h5.tinshwk.xyz/static/menus/chongBi_d.png"
                draggable="false"
                class="moremenus-18"
              />
            </div>
            <div class="moremenus-19">
              <span class="moremenus-20">充币</span>
            </div>
          </div>
          <div class="moremenus-21">
            <div class="moremenus-22">
              <img
                src="http://h5.tinshwk.xyz/static/menus/shanDui_d.png"
                draggable="false"
                class="moremenus-25"
              />
            </div>
            <div class="moremenus-26">
              <span class="moremenus-27">闪兑</span>
            </div>
          </div>
        </div>
      </div>
      <div class="moremenus-28">
        <div class="moremenus-29">
          <span class="moremenus-30">交易</span>
        </div>
        <div class="moremenus-31">
          <div class="moremenus-32">
            <div class="moremenus-33">
              <img
                src="http://h5.tinshwk.xyz/static/menus/yongXu_d.png"
                draggable="false"
                class="moremenus-36"
              />
            </div>
            <div class="moremenus-37">
              <span class="moremenus-38">永续</span>
            </div>
          </div>
          <div class="moremenus-39">
            <div class="moremenus-40">
              <img
                src="http://h5.tinshwk.xyz/static/menus/jiaoGe_d.png"
                draggable="false"
                class="moremenus-43"
              />
            </div>
            <div class="moremenus-44">
              <span class="moremenus-45">交割合约</span>
            </div>
          </div>
          <div class="moremenus-46">
            <div class="moremenus-47">
              <img
                src="http://h5.tinshwk.xyz/static/menus/huaZhuan_d.png"
                draggable="false"
                class="moremenus-50"
              />
            </div>
            <div class="moremenus-51">
              <span class="moremenus-52">划转</span>
            </div>
          </div>
        </div>
      </div>
      <div class="moremenus-53">
        <div class="moremenus-54">
          <span class="moremenus-55">其他</span>
        </div>
        <div class="moremenus-56">
          <div class="moremenus-57">
            <div class="moremenus-58">
              <img
                src="http://h5.tinshwk.xyz/static/menus/bangZhu_d.png"
                draggable="false"
                class="moremenus-61"
              />
            </div>
            <div class="moremenus-62">
              <span class="moremenus-63">帮助</span>
            </div>
          </div>
          <div class="moremenus-64">
            <div class="moremenus-65">
              <img
                src="http://h5.tinshwk.xyz/static/menus/keFu_d.png"
                draggable="false"
                class="moremenus-68"
              />
            </div>
            <div class="moremenus-69">
              <span class="moremenus-70">客服</span>
            </div>
          </div>
          <div class="moremenus-71">
            <div class="moremenus-72">
              <img
                src="http://h5.tinshwk.xyz/static/menus/jieShao_d.png"
                draggable="false"
                class="moremenus-75"
              />
            </div>
            <div class="moremenus-76">
              <span class="moremenus-77">平台介绍</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}