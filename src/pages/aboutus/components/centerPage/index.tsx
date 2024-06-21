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
    <div class="aboutUS-1">
      <div class="aboutUS-2">
        <div class="aboutUS-3">
          <img
            src={imageConfig.baseImageUrl + companyData?.companyLogo}
            draggable="false"
            class="aboutUS-6"
          />
        </div>
      </div>
      <div class="aboutUS-7">
        <div class="aboutUS-8">
          <div class="aboutUS-9">
            <h1 class="aboutUS-10">
              关于我们
              <p class="aboutUS-11">
                {companyData?.companyName}
                全球专业站，一个服务全球专业交易用户的创新数字资产交易平台，致力于发现优质创新数字资产投资机会。目前提供四十多种数字资产产品交易和投资服务。总部位于加拿大，由
                {companyData?.companyName} 全球专业站团队负责运营。
              </p>
              <p class="aboutUS-12">
                {companyData?.companyName}
                是全球领先的区块链资产金融服务商。它已经为来自全球130多个国家的数百万用户提供了高质量的服务。在新加坡、韩国、香港、中国大陆等国家和地区设有独立的办事处。交易业务和运营中心。
              </p>
              <p class="aboutUS-13">
                {companyData?.companyName}
                及旗下子品牌在技术平台、产品支线、安全风控体系、运营及客户服务体系等方面均处于全球领先地位。
              </p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
