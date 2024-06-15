import "./index.css";
import React, { Component, useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Dropdown, DropdownRef, Radio, Space } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { imageConfig } from "../../../../config/config";

export default function PageRegister({
  doRegister,
  areas,
  sendSMS,
  show60,
  setShow60,
  companyData,
  registerMsg,
}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [isPhone, setIsPhone] = useState(false);
  const [area, setArea] = useState({} as any);
  const [passwordType1, setPasswordType1] = useState(true);
  const [passwordType2, setPasswordType2] = useState(true);
  const [passwordType3, setPasswordType3] = useState(true);
  const [passwordType4, setPasswordType4] = useState(true);
  const dropdownRef = useRef<DropdownRef>();
  const [time, setTime] = useState(60);
  const lan = localStorage.getItem("i18n");
  const appStatus = localStorage.getItem("appStatus");
  const inviteType = localStorage.getItem("inviteType");
  let timeTemp = 60;
  let timer;

  //发送数据
  const [sendData, setSendData] = useState({
    type: 2,
    username: "",
    password: "",
    repassword: "",
    regcode: "",
    invit: "",
    area: areas[0],
  });
  //切换选项
  const changeType = (type: number) => {
    setSendData({
      type: type,
      username: "",
      password: "",
      repassword: "",
      regcode: "",
      invit: "",
      area: areas[0],
    });
  };

  //修改数据
  const updateSendData = (e) => {
    const name = e.target.name;
    setSendData({
      ...sendData,
      [name]: e.target.value,
    });
  };

  useEffect(() => {
    setArea(areas[0]);
  }, [areas]);

  useEffect(() => {
    if (show60) {
      timer = setInterval(() => {
        if (timeTemp <= 1) {
          timeTemp = 60;
        }
        timeTemp = timeTemp - 1;
        setTime(timeTemp);
        if (timeTemp === 1) {
          setShow60(false);
          clearInterval(timer);
        }
      }, 1000);
    }

    return () => {
      // clearInterval(timer);
      // setShow60(false);
    };
  }, [show60]);

  return (
    <div id="registercenter" class="registercenter-1">
      <div class="registercenter-2">
        <div class="registercenter-3">
          <div class="registercenter-4"></div>
          <div class="registercenter-5">
            <div
              class={!isPhone ? "registercenter-6" : "registercenter-8"}
              onClick={() => {
                setIsPhone(false);
                setPasswordType1(true);
                setPasswordType2(true);
                setPasswordType3(true);
                setPasswordType4(true);
                changeType(2);
              }}
            >
              <span class="registercenter-9">{translate(getText("郵箱註冊"))}</span>
            </div>
            <div
              class={isPhone ? "registercenter-6" : "registercenter-8"}
              onClick={() => {
                setIsPhone(true);
                setPasswordType1(true);
                setPasswordType2(true);
                setPasswordType3(true);
                setPasswordType4(true);
                changeType(1);
              }}
            >
              <span class="registercenter-7">{translate(getText("手機註冊"))}</span>
            </div>
          </div>
          <div
            class="registercenter-10"
            onClick={() => {
              navigate("/chatcenter");
            }}
          >
            <img
              src="/img/kf.png"
              class="registercenter-13"
            />
          </div>
          {/* 邮箱 */}
          {!isPhone && (
            <div class="registercenter-14">
              <ul class="registercenter-15">
                <li class="registercenter-16">
                  <div class="registercenter-17-1">
                    <div class="registercenter-18">
                      <input
                        type="text"
                        name="username"
                        value={sendData.username}
                        placeholder={translate(getText("請輸入您的電子郵件"))}
                        onChange={updateSendData}
                        class="registercenter-20"
                      />
                    </div>
                  </div>
                </li>
                <li class="registercenter-21">
                  <div class="registercenter-22">
                    <div class="registercenter-23">
                      <input
                        type="text"
                        name="regcode"
                        value={sendData.regcode}
                        placeholder={translate(getText("請輸入驗證碼"))}
                        onChange={updateSendData}
                        class="registercenter-25"
                      />
                    </div>
                  </div>
                  <div class="registercenter-26">
                    <div class="registercenter-27">
                      <button
                        className="register-34"
                        onClick={() => {
                          if (show60) {
                            return;
                          }
                          const data = { ...sendData };
                          data.area = area?.internationalAreaCode;
                          sendSMS(data);
                        }}
                      >
                        <div className="register-35">
                          <span className="register-36">
                            {!show60 && translate(getText("發送驗證碼"))}
                            {show60 && `${time}s`}
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </li>
                <li class="registercenter-35">
                  <div class="registercenter-36">
                    <div class="registercenter-37">
                      <input
                        type={passwordType1 && "password"}
                        name="password"
                        value={sendData.password}
                        placeholder={translate(getText("請輸入密碼"))}
                        onChange={updateSendData}
                        class="registercenter-39"
                      />
                    </div>
                  </div>
                  <div class="registercenter-40">
                    <img
                      onClick={() => {
                        setPasswordType1(!passwordType1);
                      }}
                      src={
                        passwordType1
                          ? "/img/login_btn_eye_close.png"
                          : "/img/login_btn_eye_open.png"
                      }
                      class="registercenter-42"
                    />
                  </div>
                </li>
                <li class="registercenter-43">
                  <div class="registercenter-44">
                    <div class="registercenter-45">
                      <input
                        type={passwordType2 && "password"}
                        name="repassword"
                        value={sendData.repassword}
                        placeholder={translate(getText("請輸入密碼"))}
                        onChange={updateSendData}
                        class="registercenter-47"
                      />
                    </div>
                  </div>
                  <div class="registercenter-48">
                    <img
                      onClick={() => {
                        setPasswordType2(!passwordType2);
                      }}
                      src={
                        passwordType2
                          ? "/img/login_btn_eye_close.png"
                          : "/img/login_btn_eye_open.png"
                      }
                      class="registercenter-42"
                    />
                  </div>
                </li>
                {inviteType == 1 && (
                  <li class="registercenter-51">
                    <div class="registercenter-52">
                      <div class="registercenter-53">
                        <input
                          class="registercenter-55"
                          type="text"
                          name="invit"
                          value={sendData.invit}
                          placeholder={translate(getText("請輸入邀請碼"))}
                          onChange={updateSendData}
                        />
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          )}
          {/* 手机 */}
          {isPhone && (
            <div class="registercenter-14">
              <ul class="registercenter-15">
                <li class="registercenter-16">
                  <div class="registercenter-17">
                    <div
                      style={{
                        height: "30px",
                        marginTop: "-10px",
                        marginLeft: "-10px",
                        width: "70px",
                        float: "left",
                      }}
                    >
                      <Dropdown ref={dropdownRef} closeOnClickAway={true}>
                        <Dropdown.Item
                          key="sorter"
                          title={`+ ${area && area?.internationalAreaCode}`}
                        >
                          <div
                            style={{
                              padding: "12px 20px",
                              height: "300px",
                              overflow: "hidden",
                              overflowY: "scroll",
                            }}
                          >
                            {areas.map((data) => (
                              <div
                                key={data.id}
                                onClick={() => {
                                  setArea(data);
                                  dropdownRef.current?.close();
                                }}
                              >
                                {localStorage.getItem("i18n") == "zh"
                                  ? data.nameZh
                                  : data.nameEn}
                                <span
                                  style={{
                                    float: "right",
                                    marginRight: "30px",
                                  }}
                                >
                                  +{data.internationalAreaCode}
                                </span>
                                <Divider />
                              </div>
                            ))}
                          </div>
                        </Dropdown.Item>
                      </Dropdown>
                    </div>
                    <div
                      class="registercenter-18"
                      style={{
                        float: "left",
                      }}
                    >
                      <input
                        class="registercenter-20"
                        type="text"
                        name="username"
                        value={sendData.username}
                        placeholder={translate(getText("請輸入電話號碼"))}
                        onChange={updateSendData}
                      />
                    </div>
                  </div>
                </li>
                <li class="registercenter-21">
                  <div class="registercenter-22">
                    <div class="registercenter-23">
                      <input
                        class="registercenter-25"
                        type="text"
                        name="regcode"
                        value={sendData.regcode}
                        placeholder={translate(getText("請輸入驗證碼"))}
                        onChange={updateSendData}
                      />
                    </div>
                  </div>
                  <div class="registercenter-26">
                    <div class="registercenter-27">
                      <button
                        className="registerPhone-25"
                        onClick={() => {
                          if (show60) {
                            return;
                          }
                          const data = { ...sendData };
                          if (data.type === 1) {
                            data.area = area?.internationalAreaCode;
                          }
                          sendSMS(data);
                        }}
                      >
                        <div className="registerPhone-26">
                          <span className="registerPhone-27">
                            {!show60 && translate(getText("發送驗證碼"))}
                            {show60 && `${time}s`}
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </li>
                <li class="registercenter-35">
                  <div class="registercenter-36">
                    <div class="registercenter-37">
                      <input
                        class="registercenter-39"
                        type={passwordType3 && "password"}
                        name="password"
                        value={sendData.password}
                        placeholder={translate(getText("請輸入密碼"))}
                        onChange={updateSendData}
                      />
                    </div>
                  </div>
                  <div class="registercenter-40">
                    <img
                      onClick={() => {
                        setPasswordType3(!passwordType3);
                      }}
                      src={
                        passwordType3
                          ? "/img/login_btn_eye_close.png"
                          : "/img/login_btn_eye_open.png"
                      }
                      class="registercenter-42"
                    />
                  </div>
                </li>
                <li class="registercenter-43">
                  <div class="registercenter-44">
                    <div class="registercenter-45">
                      <input
                        class="registercenter-47"
                        type={passwordType4 && "password"}
                        name="repassword"
                        value={sendData.repassword}
                        placeholder={translate(getText("請輸入密碼"))}
                        onChange={updateSendData}
                      />
                    </div>
                  </div>
                  <div class="registercenter-48">
                    <img
                      onClick={() => {
                        setPasswordType4(!passwordType4);
                      }}
                      src={
                        passwordType4
                          ? "/img/login_btn_eye_close.png"
                          : "/img/login_btn_eye_open.png"
                      }
                      class="registercenter-42"
                    />
                  </div>
                </li>
                {inviteType == 1 && (
                  <li class="registercenter-51">
                    <div class="registercenter-52">
                      <div class="registercenter-53">
                        <input
                          type="text"
                          name="invit"
                          value={sendData.invit}
                          placeholder={translate(getText("請輸入邀請碼"))}
                          onChange={updateSendData}
                          class="registercenter-55"
                        />
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* 提交 */}
          <div class="registercenter-14">
            <div className="loginboxnew-31">{registerMsg}</div>
            <ul class="registercenter-15">
              <li class="registercenter-57">
                <div
                  class="registercenter-58"
                  onClick={() => {
                    const data = { ...sendData };
                    if (data.type === 1) {
                      data.area = area?.internationalAreaCode;
                    }
                    doRegister(data);
                  }}
                >
                  {translate(getText("立即註冊"))}
                </div>
                <div
                  class="registercenter-59"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  {translate(getText("登錄"))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
