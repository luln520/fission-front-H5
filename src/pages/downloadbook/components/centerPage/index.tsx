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
  const lan = localStorage.getItem("i18n");
  return (
    <div class="downloadBook-1">
      <div class="downloadBook-2">1、允许下载描述文件</div>
      <div class="downloadBook-3">
        <img
          src={
            lan == "zh"
              ? "http://h5.tinshwk.xyz/assets/1-f8a8eefe.png"
              : "http://h5.tinshwk.xyz/assets/1-en-610918eb.png"
          }
          draggable="false"
          class="downloadBook-10"
        />
      </div>
      <div class="downloadBook-11">2、已下载描述文件</div>
      <div class="downloadBook-12">
        <img
          src={
            lan == "zh"
              ? "http://h5.tinshwk.xyz/assets/2-765a73b3.png"
              : "http://h5.tinshwk.xyz/assets/2-en-af2f1248.png"
          }
          draggable="false"
          class="downloadBook-19"
        />
      </div>
      <div class="downloadBook-20">3、进入手机【设置】找到【通用】</div>
      <div class="downloadBook-21">
        <img
          src={
            lan == "zh"
              ? "http://h5.tinshwk.xyz/assets/3-9179d5d0.png"
              : "http://h5.tinshwk.xyz/assets/3-en-1f2da0a1.png"
          }
          draggable="false"
          class="downloadBook-28"
        />
      </div>
      <div class="downloadBook-29">4、描述文件与设备管理器</div>
      <div class="downloadBook-30">
        <img
          src={
            lan == "zh"
              ? "http://h5.tinshwk.xyz/assets/4-a54e277c.png"
              : "	http://h5.tinshwk.xyz/assets/4-en-94044ee0.png"
          }
          draggable="false"
          class="downloadBook-37"
        />
      </div>
      <div class="downloadBook-38">5、点击该描述文件</div>
      <div class="downloadBook-39">
        <img
          src={
            lan == "zh"
              ? "http://h5.tinshwk.xyz/assets/5-5ce56e17.png"
              : "	http://h5.tinshwk.xyz/assets/5-en-33b51c38.png"
          }
          draggable="false"
          class="downloadBook-46"
        />
      </div>
    </div>
  );
}
