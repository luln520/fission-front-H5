import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import {
  ArrowLeftOutlined,
  FieldTimeOutlined,
  RightOutlined,
} from "@ant-design/icons";
import "./index.css";
import { useState } from "react";

export default function CenterPage() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const [isAggres, setisAggres] = useState(false);
  return (
    <div className="jiekuanOutDiv">
      <div className="jiekuanTopHeadDiv">
        <ArrowLeftOutlined
          className="jiekuanTopHeadLeft"
          onClick={() => {
            navigate(-1);
          }}
        />
        <FieldTimeOutlined className="jiekuanTopHeadRight" />
      </div>
      <div className="jiekuanTopHeadTopFont">{translate(getText("借款"))}</div>
      {/* 输入框 */}
      <div className="jiekuanInputDiv">
        <div className="jiekuanInputFontDiv">
          <b>{translate(getText("借币类型"))}</b>
        </div>
        <div className="jiekuanInputBorderDiv">
          <span className="jiekuanInputFont">{translate(getText("活期利率"))}</span>
          <span className="jiekuanInputTagFont">{translate(getText("低利率"))}</span>
          <RightOutlined className="jiekuanInputicon" />
        </div>
      </div>
      <div className="jiekuanInputDiv">
        <div className="jiekuanInputFontDiv">
          <b>{translate(getText("我想要借"))}</b>
        </div>
        <div className="jiekuanInputBorderDiv">
          <img
            className="jiekuanInputiconimg"
            src="https://1.gqjys.co/imgs/upload/f5644127e8fb4edc95a3ab721e4d2bb6.png"
          ></img>
          <div className="jiekuanInputFont">USDT</div>
          <RightOutlined className="jiekuanInputicon2" />
          <span className="jiekuanInputcenterFont">|</span>
          <span className="jiekuanInputcenterFontnum">
            <b>100.001</b>
          </span>
        </div>
      </div>
      <div className="jiekuanInputDiv">
        <div className="jiekuanInputFontDiv">
          <b>{translate(getText("抵押物数量"))}</b>
        </div>
        <div className="jiekuanInputBorderDiv">
          <img
            className="jiekuanInputiconimg"
            src="https://1.gqjys.co/imgs/upload/edd99b47b3894bea9030695d4da68120.png"
          ></img>
          <div className="jiekuanInputFont">BTC</div>
          <RightOutlined className="jiekuanInputicon2" />
          <span className="jiekuanInputcenterFont">|</span>
          <span className="jiekuanInputcenterFontnum">
            <b>0.21976</b>
          </span>
          <span className="jiekuanInputcenterFontnumMax">
            <b>{translate(getText("最大"))}</b>
          </span>
        </div>
      </div>
      {/* 资产数量 */}
      <div
        style={{
          padding: "0 6px",
        }}
      >
        <div className="jiekuanzcDiv">
          <b>{translate(getText("您的资产仅有"))}0BNB</b>
        </div>
      </div>
      <div
        style={{
          padding: "0 6px",
        }}
      >
        <div className="jiekuantsDiv">
          <b>{translate(getText("已抵押的BNB收益池资产将无法获得Launchpool奖励。"))}</b>
        </div>
      </div>
      {/* 明细 */}
      <div
        style={{
          height: "30px",
        }}
      ></div>
      <div
        style={{
          padding: "0 6px",
        }}
      >
        <b className="jiekuanmxleftDiv">{translate(getText("年利率"))}</b>
        <b className="jiekuanmxrightDiv">11.05%</b>
      </div>
      <div
        style={{
          padding: "0 6px",
        }}
      >
        <b className="jiekuanmxleftDiv">{translate(getText("净年化利率"))}</b>
        <b className="jiekuanmxrightDiv">11%</b>
      </div>
      <div
        style={{
          padding: "0 6px",
        }}
      >
        <b className="jiekuanmxleftDiv">{translate(getText("预估小时利率"))}</b>
        <b className="jiekuanmxrightDiv">0.00126226 USDT</b>
      </div>
      <div
        style={{
          padding: "0 6px",
        }}
      >
        <b className="jiekuanmxleftDiv">{translate(getText("初始质押率"))}</b>
        <b className="jiekuanmxrightDiv">78%</b>
      </div>
      <div
        style={{
          padding: "0 6px",
        }}
      >
        <b className="jiekuanmxleftDiv">{translate(getText("借贷后质押率"))}</b>
        <b className="jiekuanmxrightDiv">78%</b>
      </div>
      <div
        style={{
          height: "160px",
        }}
      ></div>
      {/* 底部 */}
      <div className="jiekuanbottomDiv">
        <div className="jiekuanbottomCenterDiv">
          <div className="jiekuandx-9">
            <i
              onClick={() => {
                setisAggres(!isAggres);
              }}
              className={isAggres ? "jiekuandx-10" : "jiekuandx-14"}
            ></i>
          </div>
          <div className="jiekuanbottomCenteragreeDiv">
            <b>{translate(getText("您已阅读并同意"))}</b>
          </div>
          <div className="jiekuanbottomCenteragreexyDiv">
            <b>- {translate(getText("币安借币服务协议。"))}</b>
          </div>
          <div className="jiekuanbottomCenteragreexyDiv">
            <b>- {translate(getText("币安赚币服务协议。"))}</b>
          </div>
          <div className="jiekuanbottomCenteragreeqrDiv">{translate(getText("确认"))}</div>
        </div>
      </div>
    </div>
  );
}
