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
      <div class="propertypop-1">
        <div class="propertypop-2">
          <div class="propertypop-3">
            <div class="propertypop-4">
              <div class="propertypop-5">
                <div class="propertypop-6">
                  <div class="propertypop-7">
                    <span class="propertypop-8">{translate(getText("我的账户"))}</span>
                  </div>
                  <div class="propertypop-9">
                    <div
                      class={
                        propertyType == 1 ? "propertypop-10" : "propertypop-14"
                      }
                      onClick={() => {
                        changepropertyType(1);
                      }}
                    >
                      <div class="propertypop-11">{translate(getText("实际账户"))}</div>
                      <div class="propertypop-12">
                        <span class="propertypop-13">
                          USDT {userInfo?.usdt}
                        </span>
                      </div>
                    </div>
                    <div
                      class={
                        propertyType == 2 ? "propertypop-10" : "propertypop-14"
                      }
                      onClick={() => {
                        changepropertyType(2);
                      }}
                    >
                      <div class="propertypop-15">{translate(getText("模拟账户"))}</div>
                      <div class="propertypop-16">
                        <span class="propertypop-17">USDT {mockUserInfo?.money}</span>
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
