import { Popup } from "antd-mobile";
import {
  SafetyOutlined,
  MessageOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import i18n from "../../../../i18n/i18n";
import { useTranslation, Trans } from "react-i18next";
import "./index.css";
import { changeLanguage, languages } from "../../../../i18n/i18n";
import { getText } from "../../../../utils/util";
import { imageConfig } from "../../../../config/config";
import { Badge } from "antd";

export default function PageLogin({
  doLogin,
  companyData,
  nologinmsg,
  loginmsg,
}) {
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
  return (
    <div className="loginboxnew-1">
      <div className="loginboxnew-2">
        <div className="loginboxnew-3">
          <div className="loginboxnew-4">
            <div className="loginboxnew-5">
              <div className="loginboxnew-6">
                <div className="loginboxnew-7">
                  <div className="loginboxnew-8"></div>
                  <img
                    src={
                      imageConfig.baseImageUrl + companyData?.companyLogoName
                    }
                    
                    className="loginboxnew-9"
                  />
                </div>
              </div>
              <div className="loginboxnew-10">
                <div
                  className="loginboxnew-11"
                  onClick={() => {
                    navigate("/chatcenter");
                  }}
                >
                  <div className="loginboxnew-12"></div>
                  <img
                    src="/img/kf.png"
                    
                    className="loginboxnew-13"
                  />
                </div>
              </div>
              <div className="loginboxnew-14">
                <div className="loginboxnew-15">
                  <div className="loginboxnew-16">{translate(getText("賬號"))}</div>
                  <div className="loginboxnew-17">
                    <div className="loginboxnew-18">
                      <div className="loginboxnew-19">
                        <div className="loginboxnew-20"></div>
                        <input
                          className="loginboxnew-21"
                          type="text"
                          value={loginData.username}
                          onChange={(e) => {
                            setLoginData({
                              ...loginData,
                              username: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="loginboxnew-22">
                  <div className="loginboxnew-23">{translate(getText("密碼"))}</div>
                  <div className="loginboxnew-24">
                    <div className="loginboxnew-25">
                      <div className="loginboxnew-26">
                        <div className="loginboxnew-27"></div>
                        <input
                          type="password"
                          className="loginboxnew-28"
                          value={loginData.password}
                          onChange={(e) => {
                            setLoginData({
                              ...loginData,
                              password: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="loginboxnew-29">
                  <div
                    className="loginboxnew-30"
                    onClick={() => {
                      navigate("/chatcenter");
                    }}
                  >
                    {translate(getText("忘記密碼?"))}
                  </div>
                </div>
                <div className="loginboxnew-31">{loginmsg}</div>
                <div
                  className="loginboxnew-32"
                  onClick={() => {
                    doLogin(loginData);
                  }}
                >
                  <div className="loginboxnew-33">{translate(getText("登錄"))}</div>
                </div>
                <div className="loginboxnew-34">
                  <div className="loginboxnew-35">
                    <div
                      className="loginboxnew-36"
                      onClick={() => {
                        navigate("/register");
                      }}
                    >
                      {translate(getText("立即註冊"))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="loginboxnew-37">
                <div className="loginboxnew-38">
                  <div
                    className="loginboxnew-39"
                    onClick={() => {
                      navigate("/changeline");
                    }}
                  >
                    {translate(getText("切換線路"))}
                  </div>
                  <div className="loginboxnew-40">
                    <span className="loginboxnew-41">/</span>
                  </div>
                  <div
                    className="loginboxnew-42"
                    onClick={() => {
                      navigate("/changelanguage");
                    }}
                  >
                    {translate(getText("切換語言"))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
