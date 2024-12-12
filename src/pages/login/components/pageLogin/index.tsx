import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import i18n, { languagesData } from "../../../../i18n/i18n";
import { useTranslation, Trans } from "react-i18next";
import "./index.css";
import { getText } from "../../../../utils/util";
import { imageConfig } from "../../../../config/config";

export default function PageLogin({ doLogin, companyData, nologinmsg }) {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const appStatus = localStorage.getItem("appStatus");
  const [language, setLanguages] = useState(lan ? lan : "zh");
  const [passwordType, setPasswordType] = useState(true);
  const [loginData, setLoginData] = useState<any>({
    username: "",
    password: "",
  });
  const getlanguageStr = () => {
    for (const lanData of languagesData) {
      if (lanData.code == lan) {
        return lanData.title;
      }
    }
  };

  return (
    <div class="loginboxnew-1">
      <div class="loginboxnew-2">
        <div class="loginboxnew-3">
          <div class="loginboxnew-4">
            {/*<span class="loginboxnew-5">{translate(getText("登錄"))}</span>*/}
          </div>
        </div>
        <div class="loginboxnew-6">
          <div class="loginboxnew-7">
            <span
              class="loginboxnew-8"
              onClick={() => {
                navigate("/changelanguage");
              }}
            >
              {getlanguageStr()}
            </span>
          </div>
        </div>
      </div>
      <div className="loginboxnew-header">
        {companyData?.companyLogo && (
          <img src={imageConfig.baseImageUrl + companyData?.companyLogo} />
        )}
        {/* <footer>
            Welcome to register
          </footer> */}
      </div>

      <div class="loginboxnew-19">
        <div class="loginboxnew-20">
          <div className="loginboxnew-input-box">
            <input
              name="username"
              value={loginData.username}
              onChange={(e) => {
                setLoginData({
                  ...loginData,
                  username: e.target.value,
                });
              }}
              placeholder={translate(getText("请输入邮箱或手机号码"))}
              type=""
              maxLength={999}
              step=""
              autoComplete="off"
            />
          </div>
          <div className="loginboxnew-input-box">
            <input
              name="username"
              value={loginData.password}
              onChange={(e) => {
                setLoginData({
                  ...loginData,
                  password: e.target.value,
                });
              }}
              placeholder={translate(getText("请输入密码"))}
              type="password"
              maxLength={999}
              step=""
              autoComplete="off"
            />
          </div>
          <div className="loginboxnew-forget">
            <span
              onClick={() => {
                navigate("/register");
              }}
            >
              {translate(getText("立即註冊"))}
            </span>
            <span
              onClick={() => {
                navigate("/reloadpassword");
              }}
            >
              {translate(getText("忘記密碼?"))}
            </span>
          </div>
          <div className="loginboxnew-remeber">
            <aside></aside>
            {translate(getText("记住我的密码"))}
          </div>
          <div
            onClick={() => {
              doLogin(loginData);
            }}
            className="loginboxnew-login"
          >
            {translate(getText("登錄"))}
          </div>

          {/*<div className="loginboxnew-phone">
            <svg
              width=".94rem"
              height=".94rem"
              viewBox="0 0 30 30"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>编组</title>
              <g
                id="页面-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                stroke-linejoin="round"
              >
                <g
                  id="log-on"
                  transform="translate(-199.000000, -1323.000000)"
                  stroke="#999999"
                  stroke-width="2"
                >
                  <g id="编组-4" transform="translate(199.000000, 1323.000000)">
                    <g id="编组" transform="translate(5.000000, 5.000000)">
                      <path
                        d="M5.44007191,0 C5.88449019,0 6.2939226,0.240998951 6.50964835,0.629538045 L8.00596664,3.32492556 C8.20187522,3.67784266 8.211111,4.1047072 8.03055461,4.46575913 L6.58903934,7.34885328 C6.58903934,7.34885328 7.00679007,9.49657096 8.75510441,11.2448868 C10.5034188,12.9932026 12.6439784,13.4037363 12.6439784,13.4037363 L15.5265808,11.9624645 C15.8878771,11.7817856 16.3150471,11.7911437 16.6680862,11.9874195 L19.3711108,13.4902224 C19.7592581,13.7060707 20,14.1152588 20,14.5593716 L20,17.6625344 C20,19.2428323 18.532123,20.3842163 17.0347649,19.8789394 C13.9594957,18.8412897 9.18582193,16.8655656 6.16015674,13.8398367 C3.13443038,10.8141689 1.15871407,6.04049113 0.121040817,2.96521924 C-0.384186797,1.46785989 0.757190166,0 2.33746229,0 L5.44007191,0 Z"
                        id="路径"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            Login with Phone Number
          </div>*/}

          <div
            onClick={() => {
              navigate("/chatcenter");
            }}
            className="loginboxnew-contact"
          >
            <svg
              width=".94rem"
              height=".94rem"
              viewBox="0 0 30 30"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>编组 7</title>
              <g
                id="页面-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="log-on"
                  transform="translate(-255.000000, -1500.000000)"
                  stroke="#B1B1B1"
                  stroke-width="2"
                >
                  <g id="编组-8" transform="translate(255.000000, 1500.000000)">
                    <g id="编组-7" transform="translate(3.000000, 3.000000)">
                      <path
                        d="M20,14 L24,14 L24,14 L24,23 C24,23.5522847 23.5522847,24 23,24 L20,24 C18.3431458,24 17,22.6568542 17,21 L17,17 C17,15.3431458 18.3431458,14 20,14 Z"
                        id="矩形"
                      ></path>
                      <path
                        d="M3,14 L7,14 L7,14 L7,23 C7,23.5522847 6.55228475,24 6,24 L3,24 C1.34314575,24 1.01453063e-16,22.6568542 0,21 L0,17 C-2.02906125e-16,15.3431458 1.34314575,14 3,14 Z"
                        id="矩形备份"
                        transform="translate(3.500000, 19.000000) scale(-1, 1) translate(-3.500000, -19.000000) "
                      ></path>
                      <path
                        d="M24,16.3434948 C24,17.976107 24,16.5637062 24,12.1062924 C24,5.42017174 18.627417,0 12,0 C5.372583,0 0,5.42017174 0,12.1062924 C0,16.5637062 0,17.821227 0,15.8788549"
                        id="椭圆形"
                      ></path>
                      <path
                        d="M16,5 C16,5 18.8093487,6.78685796 19,10"
                        id="路径-10"
                        stroke-linecap="round"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            {translate(getText("联系客服服务"))}
          </div>
        </div>
      </div>
    </div>
  );
}
