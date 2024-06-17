import "./index.css";
import React, { Component, useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Dropdown, DropdownRef, Radio, Space } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { imageConfig } from "../../../../config/config";
import { languagesData } from "../../../../i18n/i18n";

export default function PageRegister({
  doRegister,
  areas,
  sendSMS,
  show60,
  setShow60,
  companyData,
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

  const getlanguageStr = () => {
    for (const lanData of languagesData) {
      if (lanData.code == lan) {
        return lanData.title;
      }
    }
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
    <div class="registercenter-1">
      <div class="registercenter-2">
        <div class="registercenter-3">
          <div class="registercenter-4">
            <span class="registercenter-5">{translate(getText("註冊"))}</span>
          </div>
        </div>
        <div class="registercenter-6">
          <div class="registercenter-7">
            <span
              class="registercenter-8"
              onClick={() => {
                navigate("/changelanguage");
              }}
            >
              {getlanguageStr()}
            </span>
          </div>
        </div>
      </div>
      <div class="registercenter-9">
        <div class="registercenter-10">
          <div class="registercenter-11">
            <div class="registercenter-12">
              <div class="registercenter-13">
                <div class="registercenter-14">
                  <div
                    class={!isPhone ? "registercenter-15" : "registercenter-18"}
                    onClick={() => {
                      setIsPhone(false);
                      setPasswordType1(true);
                      setPasswordType2(true);
                      setPasswordType3(true);
                      setPasswordType4(true);
                      changeType(2);
                    }}
                  >
                    <div class="registercenter-16">
                      <span class="registercenter-17">
                        {translate(getText("郵箱"))}
                      </span>
                    </div>
                  </div>
                  <div
                    class={isPhone ? "registercenter-15" : "registercenter-18"}
                    onClick={() => {
                      setIsPhone(true);
                      setPasswordType1(true);
                      setPasswordType2(true);
                      setPasswordType3(true);
                      setPasswordType4(true);
                      changeType(1);
                    }}
                  >
                    <div class="registercenter-19">
                      <span class="registercenter-20">
                        {translate(getText("手機"))}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 邮箱 */}
      {!isPhone && (
        <div class="registercenter-22">
          <div class="registercenter-23">
            <div class="registercenter-24">
              <div class="registercenter-25">
                <div class="registercenter-26"></div>
                <div class="registercenter-27">
                  <div class="registercenter-28">
                    <input
                      name="username"
                      value={sendData.username}
                      placeholder={translate(getText("請輸入您的電子郵件"))}
                      onChange={updateSendData}
                      type=""
                      maxlength="999"
                      step=""
                      autocomplete="off"
                      class="registercenter-30"
                    />
                  </div>
                </div>
                <div class="registercenter-31"></div>
              </div>
            </div>
            <div class="registercenter-32">
              <div class="registercenter-33">
                <div class="registercenter-34"></div>
                <div class="registercenter-35">
                  <div class="registercenter-36">
                    <input
                      name="regcode"
                      value={sendData.regcode}
                      placeholder={translate(getText("請輸入驗證碼"))}
                      onChange={updateSendData}
                      type=""
                      maxlength="999"
                      step=""
                      autocomplete="off"
                      class="registercenter-38"
                    />
                  </div>
                </div>
                <div class="registercenter-39">
                  <div
                    class="registercenter-40"
                    onClick={() => {
                      if (show60) {
                        return;
                      }
                      const data = { ...sendData };
                      data.area = area?.internationalAreaCode;
                      sendSMS(data);
                    }}
                  >
                    {!show60 && translate(getText("获取"))}
                    {show60 && `${time}s`}
                  </div>
                </div>
              </div>
            </div>
            <div class="registercenter-41">
              <div class="registercenter-42">
                <div class="registercenter-43"></div>
                <div class="registercenter-44">
                  <div class="registercenter-45">
                    <input
                      name="password"
                      value={sendData.password}
                      placeholder={translate(getText("請輸入密碼"))}
                      onChange={updateSendData}
                      type="password"
                      maxlength="999"
                      step=""
                      autocomplete="off"
                      class="registercenter-47"
                    />
                  </div>
                </div>
                <div class="registercenter-48"></div>
              </div>
            </div>
            <div class="registercenter-49">
              <div class="registercenter-50">
                <div class="registercenter-51"></div>
                <div class="registercenter-52">
                  <div class="registercenter-53">
                    <input
                      name="repassword"
                      value={sendData.repassword}
                      placeholder={translate(getText("請輸入密碼"))}
                      onChange={updateSendData}
                      type="password"
                      maxlength="999"
                      step=""
                      autocomplete="off"
                      class="registercenter-55"
                    />
                  </div>
                </div>
                <div class="registercenter-56"></div>
              </div>
            </div>
            {inviteType == 1 && (
              <div class="registercenter-57">
                <div class="registercenter-58">
                  <div class="registercenter-59"></div>
                  <div class="registercenter-60">
                    <div class="registercenter-61">
                      <input
                        name="invit"
                        value={sendData.invit}
                        placeholder={translate(getText("請輸入邀請碼"))}
                        onChange={updateSendData}
                        type=""
                        maxlength="999"
                        step=""
                        autocomplete="off"
                        class="registercenter-63"
                      />
                    </div>
                  </div>
                  <div class="registercenter-64"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/*手机号  */}
      {isPhone && (
        <div class="registercenterphone-1">
          <div class="registercenterphone-2">
            <div class="registercenterphone-3">
              <div class="registercenterphone-4">
                <div class="registercenterphone-5">
                  <div class="registercenterphone-6">
                    <div class="registercenterphone-7">
                      <div
                        style={{
                          height: "30px",
                          marginTop: "-10px",
                          marginLeft: "-10px",
                          width: "70px",
                          float: "left",
                          background: "transparent",
                        }}
                      >
                        <Dropdown
                          ref={dropdownRef}
                          closeOnClickAway={true}
                          style={{
                            backgroundColor: "transparent",
                          }}
                        >
                          <Dropdown.Item
                            key="sorter"
                            title={`+ ${area && area?.internationalAreaCode}`}
                            style={{
                              backgroundColor: "transparent",
                            }}
                          >
                            <div
                              style={{
                                padding: "12px 20px",
                                height: "300px",
                                overflow: "hidden",
                                overflowY: "scroll",
                                background: "transparent",
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
                    </div>
                  </div>
                </div>
                <div class="registercenterphone-10">
                  <div class="registercenterphone-11">
                    <input
                      name="username"
                      value={sendData.username}
                      placeholder={translate(getText("請輸入電話號碼"))}
                      onChange={updateSendData}
                      type=""
                      maxlength="999"
                      step=""
                      autocomplete="off"
                      class="registercenterphone-13"
                    />
                  </div>
                </div>
                <div class="registercenterphone-14"></div>
              </div>
            </div>
            <div class="registercenterphone-15">
              <div class="registercenterphone-16">
                <div class="registercenterphone-17"></div>
                <div class="registercenterphone-18">
                  <div class="registercenterphone-19">
                    <input
                      name="regcode"
                      value={sendData.regcode}
                      placeholder={translate(getText("請輸入驗證碼"))}
                      onChange={updateSendData}
                      type=""
                      maxlength="999"
                      step=""
                      autocomplete="off"
                      class="registercenterphone-21"
                    />
                  </div>
                </div>
                <div class="registercenterphone-22">
                  <div
                    class="registercenterphone-23"
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
                    {!show60 && translate(getText("获取"))}
                    {show60 && `${time}s`}
                  </div>
                </div>
              </div>
            </div>
            <div class="registercenterphone-24">
              <div class="registercenterphone-25">
                <div class="registercenterphone-26"></div>
                <div class="registercenterphone-27">
                  <div class="registercenterphone-28">
                    <input
                      name="password"
                      value={sendData.password}
                      placeholder={translate(getText("請輸入密碼"))}
                      onChange={updateSendData}
                      type="password"
                      maxlength="999"
                      step=""
                      autocomplete="off"
                      class="registercenterphone-30"
                    />
                  </div>
                </div>
                <div class="registercenterphone-31"></div>
              </div>
            </div>
            <div class="registercenterphone-32">
              <div class="registercenterphone-33">
                <div class="registercenterphone-34"></div>
                <div class="registercenterphone-35">
                  <div class="registercenterphone-36">
                    <input
                      name="repassword"
                      value={sendData.repassword}
                      placeholder={translate(getText("請輸入密碼"))}
                      onChange={updateSendData}
                      type="password"
                      maxlength="999"
                      step=""
                      autocomplete="off"
                      class="registercenterphone-38"
                    />
                  </div>
                </div>
                <div class="registercenterphone-39"></div>
              </div>
            </div>
            {inviteType == 1 && (
              <div class="registercenterphone-40">
                <div class="registercenterphone-41">
                  <div class="registercenterphone-42"></div>
                  <div class="registercenterphone-43">
                    <div class="registercenterphone-44">
                      <input
                        name="invit"
                        value={sendData.invit}
                        placeholder={translate(getText("請輸入邀請碼"))}
                        onChange={updateSendData}
                        type=""
                        maxlength="999"
                        step=""
                        autocomplete="off"
                        class="registercenterphone-46"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div
        class="registercenter-65"
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
    </div>
  );
}
