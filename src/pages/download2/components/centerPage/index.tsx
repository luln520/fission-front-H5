import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function DownlandPage({ companyData }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const title = localStorage.getItem("title");
  return (
    <div lang="en" className="Downland-1">
      <div className="Downland-2">
        <div className="Downland-3">
          <div className="Downland-4">
            <div className="Downland-5">
              <div className="Downland-8">
                <div className="Downland-9">
                  <h3 className="Downland-10">{title}</h3>
                </div>
                <div className="Downland-6">
                  <img src="app/phone.png" className="Downland-7" />
                </div>
                <div className="Downland-17">
                  <div className="Downland-18">
                    {/* <img src="app/code.png" className="Downland-19" /> */}
                    <div className="Downland-19"></div>
                  </div>
                </div>
                <div className="Downland-11">
                  <div className="Downland-12">
                    <span className="Downland-13">
                      <img
                        src="app/iphone.png"
                        className="Downland-14"
                        onClick={() => {
                          if (companyData?.iosDomain.includes("http")) {
                            window.location.href = companyData?.iosDomain;
                          }
                        }}
                      />
                    </span>

                    <span className="Downland-15">
                      <img
                        onClick={() => {
                          if (companyData?.androidDomain.includes("http")) {
                            window.location.href = companyData?.androidDomain;
                          }
                        }}
                        src="app/android.png"
                        className="Downland-16"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="JweixinTip" className="Downland-20">
          <div className="Downland-21"></div>
        </div>
      </div>
    </div>
  );
}
