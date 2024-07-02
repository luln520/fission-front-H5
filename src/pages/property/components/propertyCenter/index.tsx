import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { userApi } from "../../../../api/user-api";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function PropertyCenter({
  userInfo,
  qbSum,
  setVisible,
  setVisibleTK,
  setVisibleTK2,
  setVisibleCK,
  isShowZF,
  setIsShowPop,
  mockUserInfo
}) {
  const c2ctxStatus = localStorage.getItem("c2ctxStatus");
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const companySkin = localStorage.getItem("companySkin");
  const propertyType = localStorage.getItem("propertyType");
  return (
    <div class="propertycenterlb-1">
      <div class="propertycenterlb-2"></div>
      <div class="propertycenterlb-3">{translate(getText("资产"))}</div>
      <div class="propertycenterlb-4">
        <div class="propertycenterlb-5">
          <div class="propertycenterlb-6">
            <div class="propertycenterlb-7">
              <span class="propertycenterlb-8">{translate(getText("账户总资产"))}</span>
            </div>
            {/* <div class="propertycenterlb-9">
              <div class="propertycenterlb-10">
                <div class="propertycenterlb-11"></div>
                <div class="propertycenterlb-12">
                  <div class="propertycenterlb-13">
                    <div class="propertycenterlb-14"></div>
                  </div>
                  <div class="propertycenterlb-15">
                    <div class="propertycenterlb-16"></div>
                  </div>
                </div>
                <img
                  src="/image/eye.png"
                  draggable="false"
                  class="propertycenterlb-17"
                />
              </div>
            </div> */}
          </div>
          <div class="propertycenterlb-18">
            <div class="propertycenterlb-19">
              <span class="propertycenterlb-20">{propertyType==1?userInfo?.usdt:mockUserInfo?.money}</span>
            </div>
          </div>
          <div class="propertycenterlb-21">
            <div class="propertycenterlb-22">
              <span class="propertycenterlb-23">{translate(getText("今日收益"))}：{qbSum?.todaynum}</span>
            </div>
            {/* <i class="propertycenterlb-24"></i> */}
          </div>
          <div class="propertycenterlb-25">
            <div class="propertycenterlb-26">
              <span class="propertycenterlb-27">{translate(getText("交易量"))}：{qbSum?.count}</span>
            </div>
            {/* <i class="propertycenterlb-28"></i> */}
          </div>
          {propertyType == 2 && (
            <div class="propertycenterlb-25">
              <div
                style={{
                  margin: "5px 0",
                  boxSizing: "border-box",
                  padding: "3px 5px",
                  border: "solid 1px #fff",
                  borderRadius: "5px",
                }}
                onClick={() => {
                  navigate("/getproperty");
                }}
              >
                {translate(getText("获得资产"))}
              </div>
            </div>
          )}
        </div>
        <div class="propertycenterlb-29">
          <img
            src="/assets/propertyBg-9be06132.png"
            draggable="false"
            class="propertycenterlb-32"
          />
        </div>
      </div>
      <div class="propertycenterlb-33">
        <div class="propertycenterlb-34">
          {propertyType == 1 && (
            <div
              class="propertycenterlb-35"
              onClick={() => {
                navigate("/rechargelist");
              }}
            >
              <div class="propertycenterlb-36">
                <img
                  src="/menus/chongBi_d.png"
                  draggable="false"
                  class="propertycenterlb-39"
                />
              </div>
              <div class="propertycenterlb-40">
                <span class="propertycenterlb-41">{translate(getText("充币"))}</span>
              </div>
            </div>
          )}
          {propertyType == 1 && (
            <div
              class="propertycenterlb-42"
              onClick={() => {
                navigate("/extractlist");
              }}
            >
              <div class="propertycenterlb-43">
                <img
                  src="/menus/tiBi_d.png"
                  draggable="false"
                  class="propertycenterlb-46"
                />
              </div>
              <div class="propertycenterlb-47">
                <span class="propertycenterlb-48">{translate(getText("提币"))}</span>
              </div>
            </div>
          )}
          <div
            class="propertycenterlb-49"
            onClick={() => {
              navigate("/chatcenter");
            }}
          >
            <div class="propertycenterlb-50">
              <img
                src="/menus/keFu_d.png"
                draggable="false"
                class="propertycenterlb-53"
              />
            </div>
            <div class="propertycenterlb-54">
              <span class="propertycenterlb-55">{translate(getText("客服"))}</span>
            </div>
          </div>
          <div
            class="propertycenterlb-56"
            onClick={() => {
              navigate("/addresslist");
            }}
          >
            <div class="propertycenterlb-57">
              <img
                src="/menus/huaZhuan_d.png"
                draggable="false"
                class="propertycenterlb-60"
              />
            </div>
            <div class="propertycenterlb-61">
              <span class="propertycenterlb-62">{translate(getText("地址"))}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="propertycenterlb-63">
        <div class="propertycenterlb-64">
          {translate(getText("当前账户"))}：{propertyType == 1 ? translate(getText("实际账户")) : translate(getText("模拟账户"))}
        </div>
        <div
          class="propertycenterlb-65"
          onClick={() => {
            setIsShowPop(true);
          }}
        >
          <i class="propertycenterlb-66"></i>{translate(getText("切换"))}
        </div>
      </div>
      <div class="propertycenterlb-67">
        <div class="propertycenterlb-68">
          <span class="propertycenterlb-69">{translate(getText("我的账户"))}</span>
        </div>
        <div class="propertycenterlb-70">
          <div class="propertycenterlb-71">{translate(getText("币币"))}</div>
          <div class="propertycenterlb-72">
            <span class="propertycenterlb-73">{propertyType==1?userInfo?.usdt:mockUserInfo?.money}</span>
          </div>
          <i class="propertycenterlb-74"></i>
        </div>
      </div>
    </div>
  );
}
