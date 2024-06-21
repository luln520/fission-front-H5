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
        <div class="downloadBook-4"></div>
        <div class="downloadBook-5">
          <div class="downloadBook-6">
            <div class="downloadBook-7"></div>
          </div>
          <div class="downloadBook-8">
            <div class="downloadBook-9"></div>
          </div>
        </div>
        <img
          src="http://h5.tinshwk.xyz/assets/1-f8a8eefe.png"
          draggable="false"
          class="downloadBook-10"
        />
      </div>
      <div class="downloadBook-11">2、已下载描述文件</div>
      <div class="downloadBook-12">
        <div class="downloadBook-13"></div>
        <div class="downloadBook-14">
          <div class="downloadBook-15">
            <div class="downloadBook-16"></div>
          </div>
          <div class="downloadBook-17">
            <div class="downloadBook-18"></div>
          </div>
        </div>
        <img
          src="http://h5.tinshwk.xyz/assets/2-765a73b3.png"
          draggable="false"
          class="downloadBook-19"
        />
      </div>
      <div class="downloadBook-20">3、进入手机【设置】找到【通用】</div>
      <div class="downloadBook-21">
        <div class="downloadBook-22"></div>
        <div class="downloadBook-23">
          <div class="downloadBook-24">
            <div class="downloadBook-25"></div>
          </div>
          <div class="downloadBook-26">
            <div class="downloadBook-27"></div>
          </div>
        </div>
        <img
          src="http://h5.tinshwk.xyz/assets/3-9179d5d0.png"
          draggable="false"
          class="downloadBook-28"
        />
      </div>
      <div class="downloadBook-29">4、描述文件与设备管理器</div>
      <div class="downloadBook-30">
        <div class="downloadBook-31"></div>
        <div class="downloadBook-32">
          <div class="downloadBook-33">
            <div class="downloadBook-34"></div>
          </div>
          <div class="downloadBook-35">
            <div class="downloadBook-36"></div>
          </div>
        </div>
        <img
          src="http://h5.tinshwk.xyz/assets/4-a54e277c.png"
          draggable="false"
          class="downloadBook-37"
        />
      </div>
      <div class="downloadBook-38">5、点击该描述文件</div>
      <div class="downloadBook-39">
        <div class="downloadBook-40"></div>
        <div class="downloadBook-41">
          <div class="downloadBook-42">
            <div class="downloadBook-43"></div>
          </div>
          <div class="downloadBook-44">
            <div class="downloadBook-45"></div>
          </div>
        </div>
        <img
          src="http://h5.tinshwk.xyz/assets/5-5ce56e17.png"
          draggable="false"
          class="downloadBook-46"
        />
      </div>
    </div>

    // <div className="centerDiv">
    //   <div className="imageDiv">
    //     <img
    //       src={imageConfig.baseImageUrl + companyData?.logo1}
    //       width="100%"
    //       className="image"
    //     />
    //   </div>
    //   <div className="centerFontDiv">
    //     <div className="centerItem">
    //       <img
    //         className="logo-img"
    //         src={imageConfig.baseImageUrl + companyData?.companyLogo}
    //       />
    //       <div className="logo-font">
    //         <h1 style={{
    //           fontSize:20
    //         }}>IOS</h1>
    //         <p className="lang">{translate(getText("年齡"))} 5+</p>
    //         <p className="lang">
    //           {translate(getText("提供安全"))}，
    //           {translate(getText("便捷的買賣方式"))}
    //         </p>
    //       </div>
    //       <Button
    //         color="primary"
    //         fill="none"
    //         className="buttonD"
    //         onClick={() => {
    //           if (companyData?.iosDomain.includes("http")) {
    //             window.location.href=companyData?.iosDomain;
    //           }
    //         }}
    //       >
    //         {translate(getText("下載"))}
    //       </Button>
    //     </div>
    //     <div className="centerItem">
    //       <img
    //         className="logo-img"
    //         src={imageConfig.baseImageUrl + companyData?.companyLogo}
    //       />
    //       <div className="logo-font">
    //         <h1 style={{
    //           fontSize:20
    //         }}>ANDROID</h1>
    //         <p className="lang">{translate(getText("年齡"))} 5+</p>
    //         <p className="lang">
    //           {translate(getText("提供安全"))}，
    //           {translate(getText("便捷的買賣方式"))}
    //         </p>
    //       </div>
    //       <Button
    //         color="primary"
    //         fill="none"
    //         className="buttonD"
    //         onClick={() => {
    //           if (companyData?.androidDomain.includes("http")) {
    //             window.location.href = companyData?.androidDomain;
    //           }
    //         }}
    //       >
    //         {translate(getText("下載"))}
    //       </Button>
    //     </div>
    //   </div>
    //   {/* 文字 */}
    //   <div className="fontDiv">
    //     <h1 className="">{translate(getText("介紹"))}</h1>
    //     <div className="fontInfoDiv">
    //       {translate(
    //         getText(
    //           "作為一家公司，我們強調長期的安全性、可靠性和便利性。我們的主要產品和服務反映了這一願景。先進的交易平台,更低的消費，更安全高效的保障，我們讓每個人都能輕鬆擁有和交易資產"
    //         )
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
}
