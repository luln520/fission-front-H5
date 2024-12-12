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
    <div className="aboutUS-1">
      <div className="aboutUS-2">
        <div className="aboutUS-3">
          <img
            src={imageConfig.baseImageUrl + companyData?.companyLogo}
            draggable="false"
            className="aboutUS-6"
          />
        </div>
      </div>
      <div className="aboutUS-7">
        <div className="aboutUS-8">
          <div className="aboutUS-9">
            <h1 className="aboutUS-10">
              {translate(getText("关于我们"))}
              <p className="aboutUS-11">
                {companyData?.companyName}
                {translate(getText("全球專業站，一個服務全球專業交易用戶的創新數字資產交易平台，致力於發現優質創新數字資產投資機會。目前提供四十多種數字資產產品交易和投資服務。總部位於加拿大，由"))}
                {companyData?.companyName} {translate(getText("全球专业站团队负责运营。"))}
              </p>
              <p className="aboutUS-12">
                {companyData?.companyName}
                {translate(getText("是全球領先的區塊鏈資產金融服務商。它已經為來自全球130多個國家的數百萬用戶提供了高質量的服務。在新加坡、韓國、香港、中國大陸等國家和地區設有獨立的辦事處。交易業務和運營中心。"))}
              </p>
              <p className="aboutUS-13">
                {companyData?.companyName}
                {translate(getText("及旗下子品牌在技术平台、产品支线、安全风控体系、运营及客户服务体系等方面均处于全球领先地位。"))}
              </p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
