import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { userApi } from "../../../../api/user-api";
import { getText } from "../../../../utils/util";
import "./index.css";
import { useEffect, useState } from "react";
import { coinApi } from "../../../../api/coin-api";

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
  const [coinList, setCoinList] = useState([]);
  const propertyType = localStorage.getItem("propertyType");

  return (
    <div className="propertycenter">
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
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <g
                id="Assets"
                transform="translate(-670.000000, -130.000000)"
                stroke="#2B2B2B"
                strokeWidth="3.5"
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
      <div className="propertycenter-box">
        <aside>
          <img src="/property/bg-img.png" />
        </aside>
        <main>
          <div className="propertycenter-box-header">
            <header>{translate(getText("账户总资产"))}</header>
            <footer>
              {propertyType == 1 ? userInfo?.usdt : mockUserInfo?.money}
            </footer>
          </div>
          <div className="propertycenter-box-num">
            <section>
              <header>{translate(getText("今日收益"))}</header>
              <footer>{qbSum?.todaynum}</footer>
            </section>
            <section>
              <header>{translate(getText("交易量"))}</header>
              <footer>{qbSum?.count}</footer>
            </section>
          </div>
          <div className="propertycenter-box-menu">
            {(
              [
                ...(propertyType == 2
                  ? [
                      [
                        translate(getText("获得资产")),
                        "/property/get.png",
                        () => navigate("/getproperty"),
                      ],
                    ]
                  : []),
                ...(propertyType == 1
                  ? [
                      [
                        translate(getText("充币")),
                        "/property/get.png",
                        () => navigate("/rechargelist"),
                      ],
                      [
                        translate(getText("提币")),
                        "/property/raise.png",
                        () => navigate("/extractlist"),
                      ],
                    ]
                  : []),
                [
                  translate(getText("客服")),
                  "/property/contact.png",
                  () => navigate("/chatcenter"),
                ],
                [
                  translate(getText("地址")),
                  "/property/address.png",
                  () => navigate("/addresslist"),
                ],
              ] as [string, string, VoidFunction][]
            ).map((item) => (
              <section key={`${item[0]}`} onClick={item[2]}>
                <aside>
                  <img src={item[1]} alt={item[0]} />
                </aside>
                <main>{item[0]}</main>
                <footer>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m9 18l6-6l-6-6"
                    />
                  </svg>
                </footer>
              </section>
            ))}
          </div>
          <div className="propertycenter-box-footer">
            <section>
              <header>{translate(getText("币币"))}</header>
              <footer>
                {propertyType == 1 ? userInfo?.usdt : mockUserInfo?.money}
              </footer>
            </section>
            <aside>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-7-7l7 7l-7 7"
                />
              </svg>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
