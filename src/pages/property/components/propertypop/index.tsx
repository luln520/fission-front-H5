import { useTranslation } from "react-i18next";
import { Dropdown, Input, message, Select, Space } from "antd";
import { Popup } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";
import { useState } from "react";

export default function Propertypop({
  userInfo,
  isShowPop,
  setIsShowPop,
  changepropertyType,
  mockUserInfo
}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const propertyType = localStorage.getItem("propertyType");
  return (
    <Popup
      visible={isShowPop}
      onMaskClick={() => {
        setIsShowPop(false);
      }}
      position="left"
      bodyStyle={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="propertypop-1">
        <div className="propertypop-2">
          <div className="propertypop-3">
            <div className="propertypop-4">
              <div className="propertypop-5">
                <div className="propertypop-6">
                  <div className="propertypop-7">
                    <span className="propertypop-8">{translate(getText("我的账户"))}</span>
                  </div>
                  <div className="propertypop-9">
                    <div
                      className={
                        propertyType == 1 ? "propertypop-10" : "propertypop-14"
                      }
                      onClick={() => {
                        changepropertyType(1);
                      }}
                    >
                      <div className="propertypop-11">{translate(getText("实际账户"))}</div>
                      <div className="propertypop-12">
                        <span className="propertypop-13">
                          USDT {userInfo?.usdt}
                        </span>
                      </div>
                    </div>
                    <div
                      className={
                        propertyType == 2 ? "propertypop-10" : "propertypop-14"
                      }
                      onClick={() => {
                        changepropertyType(2);
                      }}
                    >
                      <div className="propertypop-15">{translate(getText("模拟账户"))}</div>
                      <div className="propertypop-16">
                        <span className="propertypop-17">USDT {mockUserInfo?.money}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
}
