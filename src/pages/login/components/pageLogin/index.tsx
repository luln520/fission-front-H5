import { Popup } from "antd-mobile";
import {
  SafetyOutlined,
  MessageOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import i18n, { languagesData } from "../../../../i18n/i18n";
import { useTranslation, Trans } from "react-i18next";
import "./index.css";
import { changeLanguage, languages } from "../../../../i18n/i18n";
import { getText } from "../../../../utils/util";
import { imageConfig } from "../../../../config/config";
import { Badge } from "antd";

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
            <span class="loginboxnew-5">{translate(getText("登錄"))}</span>
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
      <div class="loginboxnew-9">
        <div class="loginboxnew-10">
          <div class="loginboxnew-11">
            <div class="loginboxnew-12">
              <div class="loginboxnew-13">
                <div class="loginboxnew-14">
                  <div class="loginboxnew-15">
                    <div class="loginboxnew-16">
                      <span class="loginboxnew-17">
                        {translate(getText("賬號"))}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="loginboxnew-18"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="loginboxnew-19">
        <div class="loginboxnew-20">
          <div class="loginboxnew-21">
            <div class="loginboxnew-22">
              <div class="loginboxnew-23"></div>
              <div class="loginboxnew-24">
                <div class="loginboxnew-25">
                  <input
                    placeholder={translate(getText("请输入邮箱"))}
                    type=""
                    maxlength="999"
                    step=""
                    autocomplete="off"
                    class="loginboxnew-27"
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
              <div class="loginboxnew-28"></div>
            </div>
          </div>
          <div class="loginboxnew-29">
            <div class="loginboxnew-30">
              <div class="loginboxnew-31"></div>
              <div class="loginboxnew-32">
                <div class="loginboxnew-33">
                  <input
                    placeholder={translate(getText("请输入密码"))}
                    type="password"
                    maxlength="999"
                    step=""
                    autocomplete="off"
                    class="loginboxnew-35"
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
              <div class="loginboxnew-36"></div>
            </div>
          </div>
          <div class="loginboxnew-37">
            <div class="loginboxnew-38">
              <i class="loginboxnew-39"></i>
              <div class="loginboxnew-40">
                <span class="loginboxnew-41">{translate(getText("记住我的密码"))}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="loginboxnew-42"
        onClick={() => {
          doLogin(loginData);
        }}
      >
        {translate(getText("登錄"))}
      </div>
      <div class="loginboxnew-43">
        <div class="loginboxnew-44">
          <div class="loginboxnew-45">
            <span
              class="loginboxnew-46"
              onClick={() => {
                navigate("/register");
              }}
            >
              {translate(getText("立即註冊"))}
            </span>
          </div>
        </div>
        <div class="loginboxnew-47">
          <div class="loginboxnew-48">
            <span
              class="loginboxnew-49"
              onClick={() => {
                navigate("/reloadpassword");
              }}
            >
              {translate(getText("忘記密碼?"))}
            </span>
          </div>
        </div>
      </div>
      <div class="loginboxnew-50">
        <div class="loginboxnew-51">
          <img
            src="/image/kf_d.png"
            draggable="false"
            class="loginboxnew-54"
          />
        </div>
        <div class="loginboxnew-55">
          <span
            class="loginboxnew-56"
            onClick={() => {
              navigate("/chatcenter");
            }}
          >
            {translate(getText("联系客服服务"))}
          </span>
        </div>
      </div>
    </div>
  );
}
