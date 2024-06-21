import "./index.css";
import React, { Component, useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Dropdown, DropdownRef, Radio, Space } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { imageConfig } from "../../../../config/config";

export default function PageRegister({
  doEditpassword,
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
    <>
      <div class="reloadPassword-1">
        <div class="reloadPassword-2">
          <div class="reloadPassword-3">
            <div class="reloadPassword-4">
              <span class="reloadPassword-5">找回密码</span>
            </div>
          </div>
        </div>
        <div class="reloadPassword-6">
          <div class="reloadPassword-7">
            <div class="reloadPassword-8">
              <div class="reloadPassword-9">
                <div class="reloadPassword-10">
                  <div class="reloadPassword-11">
                    <div
                      class={
                        !isPhone ? "reloadPassword-12" : "reloadPassword-15"
                      }
                    >
                      <div
                        class="reloadPassword-13"
                        onClick={() => {
                          setIsPhone(false);
                          setPasswordType1(true);
                          setPasswordType2(true);
                          setPasswordType3(true);
                          setPasswordType4(true);
                          changeType(2);
                        }}
                      >
                        <span class="reloadPassword-14">邮箱</span>
                      </div>
                    </div>
                    <div
                      class={
                        isPhone ? "reloadPassword-12" : "reloadPassword-15"
                      }
                    >
                      <div
                        class="reloadPassword-16"
                        onClick={() => {
                          setIsPhone(true);
                          setPasswordType1(true);
                          setPasswordType2(true);
                          setPasswordType3(true);
                          setPasswordType4(true);
                          changeType(1);
                        }}
                      >
                        <span class="reloadPassword-17">手机</span>
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
          <div class="reloadPassword-19">
            <div class="reloadPassword-20">
              <div class="reloadPassword-21">
                <div class="reloadPassword-22">
                  <div class="reloadPassword-23"></div>
                  <div class="reloadPassword-24">
                    <div class="reloadPassword-25">
                      <input
                        name="username"
                        value={sendData.username}
                        placeholder={translate(getText("請輸入您的電子郵件"))}
                        onChange={updateSendData}
                        type=""
                        maxlength="999"
                        step=""
                        autocomplete="off"
                        class="reloadPassword-27"
                      />
                    </div>
                  </div>
                  <div class="reloadPassword-28"></div>
                </div>
              </div>
              <div class="reloadPassword-29">
                <div class="reloadPassword-30">
                  <div class="reloadPassword-31"></div>
                  <div class="reloadPassword-32">
                    <div class="reloadPassword-33">
                      <input
                        name="regcode"
                        value={sendData.regcode}
                        placeholder={translate(getText("請輸入驗證碼"))}
                        onChange={updateSendData}
                        type=""
                        maxlength="999"
                        step=""
                        autocomplete="off"
                        class="reloadPassword-35"
                      />
                    </div>
                  </div>
                  <div class="reloadPassword-36">
                    <div
                      class="reloadPassword-37"
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
              <div class="reloadPassword-38">
                <div class="reloadPassword-39">
                  <div class="reloadPassword-40"></div>
                  <div class="reloadPassword-41">
                    <div class="reloadPassword-42">
                      <input
                        name="password"
                        value={sendData.password}
                        placeholder={translate(getText("請輸入密碼"))}
                        onChange={updateSendData}
                        type="password"
                        maxlength="999"
                        step=""
                        autocomplete="off"
                        class="reloadPassword-44"
                      />
                    </div>
                  </div>
                  <div class="reloadPassword-45"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* 手机 */}

        {isPhone && (
          <div class="reloadPasswordPhone-1">
            <div class="reloadPasswordPhone-2">
              <div class="reloadPasswordPhone-3">
                <div class="reloadPasswordPhone-4">
                  <div class="reloadPasswordPhone-5">
                    <div class="reloadPasswordPhone-6">
                      <div
                        style={{
                          height: "30px",
                          marginTop: "-10px",
                          width: "70px",
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
                    </div>
                  </div>
                  <div class="reloadPasswordPhone-10">
                    <div class="reloadPasswordPhone-11">
                      <input
                        name="username"
                        value={sendData.username}
                        placeholder={translate(getText("請輸入電話號碼"))}
                        onChange={updateSendData}
                        type=""
                        maxlength="999"
                        step=""
                        autocomplete="off"
                        class="reloadPasswordPhone-13"
                      />
                    </div>
                  </div>
                  <div class="reloadPasswordPhone-14"></div>
                </div>
              </div>
              <div class="reloadPasswordPhone-15">
                <div class="reloadPasswordPhone-16">
                  <div class="reloadPasswordPhone-17"></div>
                  <div class="reloadPasswordPhone-18">
                    <div class="reloadPasswordPhone-19">
                      <input
                        name="regcode"
                        value={sendData.regcode}
                        placeholder={translate(getText("請輸入驗證碼"))}
                        onChange={updateSendData}
                        type=""
                        maxlength="999"
                        step=""
                        autocomplete="off"
                        class="reloadPasswordPhone-21"
                      />
                    </div>
                  </div>
                  <div class="reloadPasswordPhone-22">
                    <div
                      class="reloadPasswordPhone-23"
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
              <div class="reloadPasswordPhone-24">
                <div class="reloadPasswordPhone-25">
                  <div class="reloadPasswordPhone-26"></div>
                  <div class="reloadPasswordPhone-27">
                    <div class="reloadPasswordPhone-28">
                      <input
                        name="password"
                        value={sendData.password}
                        placeholder={translate(getText("請輸入密碼"))}
                        onChange={updateSendData}
                        type="password"
                        maxlength="999"
                        step=""
                        autocomplete="off"
                        class="reloadPasswordPhone-30"
                      />
                    </div>
                  </div>
                  <div class="reloadPasswordPhone-31"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          class="reloadPassword-54"
          onClick={() => {
            const data = { ...sendData };
            if (data.type === 1) {
              data.area = area?.internationalAreaCode;
            }
            data.phoneEmail = data.username;
            doEditpassword(data);
          }}
        >
          提交
        </div>
      </div>
    </>
  );
}
