import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { userApi } from "../../../../api/user-api";
import { getText } from "../../../../utils/util";
import "./index.css";
import { useState, useEffect, useContext } from "react";
import { coinApi } from "../../../../api/coin-api";
import { WSContext } from "../../../../router/router";

export default function PropertyCenter({
  userInfo,
  qbSum,
  setVisible,
  setVisibleTK,
  setVisibleTK2,
  setVisibleCK,
  isShowZF,
  setIsShowPop,
  mockUserInfo,
}) {
  const c2ctxStatus = localStorage.getItem("c2ctxStatus");
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const companySkin = localStorage.getItem("companySkin");
  const propertyType = localStorage.getItem("propertyType");

  const [coinListData] = useContext(WSContext);
  const btcData = coinListData?.["btc"];
  const ethData = coinListData?.["eth"];

  const btcClose = btcData?.close ?? 1;
  const ethClose = ethData?.close ?? 1;

  return (
    <div className="propertycenterlb-new">
      <div>
        <div className="propertycenter-header">
          <main>
            {/*{translate(getText("当前账户"))}：*/}
            {propertyType == 1
              ? translate(getText("实际账户"))
              : translate(getText("模拟账户"))}
          </main>
          <aside
            onClick={() => {
              setIsShowPop(true);
            }}
          >
            <svg
              width="1.38rem"
              height="1.38rem"
              viewBox="0 0 44 44"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>编组 8</title>
              <g
                id="页面-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <g
                  id="Assets"
                  transform="translate(-670.000000, -130.000000)"
                  stroke="#2B2B2B"
                  stroke-width="3.5"
                >
                  <g id="编组-11" transform="translate(670.000000, 130.000000)">
                    <g id="编组-8" transform="translate(6.400852, 7.083792)">
                      <path
                        d="M9.48279984,0 L0,6.7719452 L24.5669416,6.7719452 C28.380719,7.13295652 30.2876077,9.17164999 30.2876077,12.8880256 C30.2876077,16.6044013 30.2876077,17.7319038 30.2876077,16.2705333"
                        id="路径-11"
                      ></path>
                      <path
                        d="M9.48279984,13 L0,19.7719452 L24.5669416,19.7719452 C28.380719,20.1329565 30.2876077,22.17165 30.2876077,25.8880256 C30.2876077,29.6044013 30.2876077,30.7319038 30.2876077,29.2705333"
                        id="路径-11备份"
                        transform="translate(15.143804, 21.444610) scale(-1, -1) translate(-15.143804, -21.444610) "
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </aside>
        </div>
      </div>
      <div className="wallet-summary">
        <div className="total-asset">
          <p className="title">{translate(getText("账户总资产"))}(USDT)</p>
          <p className="amount">
            {propertyType == 1 ? userInfo?.usdt : mockUserInfo?.money}
          </p>
          <p className="approximate">≈{userInfo?.usdt} USD</p>
        </div>
        <div className="wallet-actions">
          <button
            onClick={() => navigate("/rechargelist")}
            className="action-btn"
          >
            <img src="/newPropertyC/1.png" alt="" />
            {translate(getText("充币"))}
          </button>
          <button
            onClick={() => navigate("/extractlist")}
            className="action-btn"
          >
            <img src="/newPropertyC/2.png" alt="" />
            {translate(getText("提币"))}
          </button>
          <button
            onClick={() => navigate("/addresslist")}
            className="action-btn"
            style={{ visibility: "hidden" }}
          >
            <img src="/newPropertyC/3.png" alt="" />
            划转
          </button>
        </div>
      </div>

      {/* 搜索栏 */}
      <div className="search-bar">
        <div className="search-bar-left">
          <img src="/newPropertyC/search.png" alt="" />
          {translate(getText("搜索"))}
        </div>
        <div className="small-assets-toggle">
          {translate(getText("隐藏小额币种"))}
          <img src="/newPropertyC/circel.png" alt="" />
        </div>
      </div>

      {/* 资产列表 */}
      <div className="assets-list">
        <div className="asset-item">
          <div className="asset-info">
            <span className="asset-name">USDT</span>
            <p className="available">
              {translate(getText("可用"))} {userInfo?.usdt}
            </p>
          </div>
          <div className="asset-values">
            <p className="asset-amount">{userInfo?.usdt}</p>
            <p className="asset-usd">≈{userInfo?.usdt * 1}USD</p>
            {/* <p className="frozen">冻结 0.24995000</p> */}
          </div>
        </div>

        <div className="asset-item">
          <div className="asset-info">
            <span className="asset-name">BTC</span>
            <p className="available">
              {translate(getText("可用"))} {userInfo?.usdt / btcClose}
            </p>
          </div>
          <div className="asset-values">
            <p className="asset-amount">{userInfo?.usdt / btcClose}</p>

            <p className="asset-usd">≈{userInfo?.usdt}USD</p>
            {/* <p className="frozen">冻结 0.24995000</p> */}
          </div>
        </div>

        <div className="asset-item">
          <div className="asset-info">
            <span className="asset-name">ETH</span>
            <p className="available">
              {translate(getText("可用"))} {userInfo?.usdt / ethClose}
            </p>
          </div>
          <div className="asset-values">
            <p className="asset-amount">{userInfo?.usdt / ethClose}</p>
            <p className="asset-usd">≈{userInfo?.usdt}USD</p>
            {/* <p className="frozen">冻结 0.00000000</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
