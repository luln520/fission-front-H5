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
  invitCode
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
    invit: invitCode||"",
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
      area: areas[0],
      invit:sendData.invit
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
      <div className="registercenter-1">
        <div className="registercenter-2">
          <div className="registercenter-4">
            <span className="registercenter-5">{translate(getText("立即註冊"))}</span>
          </div>
          <div className="registercenter-6">
            <div className="registercenter-7">
            <span
                className="registercenter-8"
                onClick={() => {
                  navigate("/changelanguage");
                }}
            >
              {getlanguageStr()}
            </span>
            </div>
          </div>
        </div>

        {/* 邮箱 */}
        {!isPhone && (
            <div className="registercenter-22">
              <div className="registercenter-23">
                <div className="registercenter-input-box">
                  <input
                      name="username"
                      value={sendData.username}
                      placeholder={translate(getText('請輸入您的電子郵件'))}
                      onChange={updateSendData}
                      type=""
                      maxLength={999}
                      step=""
                      autoComplete="off"
                  />
                </div>
                <div className="registercenter-input-box">
                  <input
                      name="regcode"
                      value={sendData.regcode}
                      placeholder={translate(getText('請輸入驗證碼'))}
                      onChange={updateSendData}
                      type=""
                      maxLength={999}
                      step=""
                      autoComplete="off"
                      className="registercenter-38"
                  />
                  <div className="registercenter-code">
                    <section
                        onClick={() => {
                          if (show60) {
                            return
                          }
                          const data = {...sendData}
                          data.area = area?.internationalAreaCode
                          sendSMS(data)
                        }}
                    >
                      {!show60 && translate(getText('获取'))}
                      {show60 && `${time}s`}
                    </section>
                  </div>
                </div>

                <div className="registercenter-input-box">
                  <input
                      name="password"
                      value={sendData.password}
                      placeholder={translate(getText('請輸入密碼'))}
                      onChange={updateSendData}
                      type="password"
                      maxLength={999}
                      step=""
                      autoComplete="off"
                      className="registercenter-47"
                  />
                </div>

                <div className="registercenter-input-box">
                  <input
                      name="repassword"
                      value={sendData.repassword}
                      placeholder={translate(getText('請輸入密碼'))}
                      onChange={updateSendData}
                      type="password"
                      maxLength={999}
                      step=""
                      autoComplete="off"
                  />
                </div>

                {inviteType === '1' && <div className="registercenter-input-box">
                  <input
                      name="invit"
                      value={sendData.invit}
                      placeholder={translate(getText('請輸入邀請碼'))}
                      onChange={updateSendData}
                      type=""
                      maxLength={999}
                      step=""
                      autoComplete="off"
                  />
                </div>}
                
              </div>
            </div>
        )}
        {/*手机号  */}
        {isPhone && (
            <div className="registercenterphone-1">
              <div className="registercenterphone-2">
                <div className="registercenter-input-box">
                  <div className="registercenterphone-area">
                    <div>
                      <Dropdown
                          ref={dropdownRef}
                          closeOnClickAway={true}
                          style={{
                            backgroundColor: 'transparent',
                          }}
                      >
                        <Dropdown.Item
                            key="sorter"
                            title={`+ ${area && area?.internationalAreaCode}`}
                            style={{
                              backgroundColor: 'transparent',
                            }}
                        >
                          <div
                              style={{
                                padding: '12px 20px',
                                height: '300px',
                                overflow: 'hidden',
                                overflowY: 'scroll',
                                background: 'transparent',
                              }}
                          >
                            {areas.map((data) => (
                                <div
                                    key={data.id}
                                    onClick={() => {
                                      setArea(data)
                                      dropdownRef.current?.close()
                                    }}
                                >
                                  {localStorage.getItem('i18n') == 'zh'
                                      ? data.nameZh
                                      : data.nameEn}
                                  <span
                                      style={{
                                        float: 'right',
                                        marginRight: '30px',
                                      }}
                                  >
                                    +{data.internationalAreaCode}
                                  </span>
                                  <Divider/>
                                </div>
                            ))}
                          </div>
                        </Dropdown.Item>
                      </Dropdown>
                    </div>
                  </div>
                  <input
                      name="username"
                      value={sendData.username}
                      placeholder={translate(getText('請輸入電話號碼'))}
                      onChange={updateSendData}
                      type=""
                      maxLength={999}
                      step=""
                      autoComplete="off"
                      style={{paddingLeft: '3.6rem'}}
                  />
                </div>

                <div className="registercenter-input-box">
                  <input
                      name="regcode"
                      value={sendData.regcode}
                      placeholder={translate(getText('請輸入驗證碼'))}
                      onChange={updateSendData}
                      type=""
                      maxLength={999}
                      step=""
                      autoComplete="off"
                      className="registercenter-38"
                  />
                  <div className="registercenter-code">
                    <section
                        onClick={() => {
                          if (show60) {
                            return
                          }
                          const data = {...sendData}
                          data.area = area?.internationalAreaCode
                          sendSMS(data)
                        }}
                    >
                      {!show60 && translate(getText('获取'))}
                      {show60 && `${time}s`}
                    </section>
                  </div>
                </div>

                <div className="registercenter-input-box">
                  <input
                      name="password"
                      value={sendData.password}
                      placeholder={translate(getText('請輸入密碼'))}
                      onChange={updateSendData}
                      type="password"
                      maxLength={999}
                      step=""
                      autoComplete="off"
                      className="registercenter-47"
                  />
                </div>

                <div className="registercenter-input-box">
                  <input
                      name="repassword"
                      value={sendData.repassword}
                      placeholder={translate(getText('請輸入密碼'))}
                      onChange={updateSendData}
                      type="password"
                      maxLength={999}
                      step=""
                      autoComplete="off"
                  />
                </div>

                {inviteType === '1' && <div className="registercenter-input-box">
                  <input
                      name="invit"
                      value={sendData.invit}
                      placeholder={translate(getText('請輸入邀請碼'))}
                      onChange={updateSendData}
                      type=""
                      maxLength={999}
                      step=""
                      autoComplete="off"
                  />
                </div>}
                
              </div>
            </div>
        )}

        <div
            className="registercenter-submit"
            onClick={() => {
              const data = {...sendData}
              if (data.type === 1) {
                data.area = area?.internationalAreaCode
              }
              doRegister(data)
            }}
        >
          {translate(getText('立即註冊'))}
        </div>
        <div
            className="registercenter-switch"
            onClick={() => {
              if (isPhone) {
                setIsPhone(false)
                setPasswordType1(true)
                setPasswordType2(true)
                setPasswordType3(true)
                setPasswordType4(true)
                changeType(2)
              } else {
                setIsPhone(true)
                setPasswordType1(true)
                setPasswordType2(true)
                setPasswordType3(true)
                setPasswordType4(true)
                changeType(1)
              }
            }}
        >
          Register with {isPhone ? translate(getText('郵箱')) : translate(getText('手机'))}
        </div>
      </div>
  );
}
