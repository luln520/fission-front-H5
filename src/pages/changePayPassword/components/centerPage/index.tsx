import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CenterPage() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div className="changePassword-1">
      <div className="changePassword-2">
        <div className="changePassword-3">
          <div className="changePassword-4">
            <div className="changePassword-5">
              <i className="changePassword-6"></i>
            </div>
            <div className="changePassword-7">
              <div className="changePassword-8">
                <input
                  type="password"
                  placeholder={translate(getText("請填寫密碼"))}
                  className="changePassword-9"
                />
              </div>
            </div>
          </div>
          <div className="changePassword-12">
            <div className="changePassword-13">
              <i className="changePassword-14"></i>
            </div>
            <div className="changePassword-15">
              <div className="changePassword-16">
                <input
                  type="password"
                  placeholder={translate(getText("設置新密碼"))}
                  className="changePassword-17"
                />
              </div>
            </div>
          </div>
          <div className="changePassword-20">
            <div className="changePassword-21">
              <i className="changePassword-22"></i>
            </div>
            <div className="changePassword-23">
              <div className="changePassword-24">
                <input
                  type="password"
                  placeholder={translate(getText("驗證新密碼"))}
                  className="changePassword-25"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="changePassword-28">
        <div className="changePassword-29">
          <span className="changePassword-30">{translate(getText("修改交易密碼"))}</span>
        </div>
      </button>
    </div>
  );
}
