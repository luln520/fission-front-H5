import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CenterPage({
  coinListData,
  ctmarketlist,
  collectlist,
}) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const { t: translate } = useTranslation();
  const [type, setType] = useState(1);
  const getUSDTNodes = () => {
    const nodes = [];
    let coinListDataTemp = coinListData;
    for (const key in coinListDataTemp) {
      nodes.push(
        <div
          class="quotation-29"
          key={key}
          onClick={() => {
            if (type == 1) {
              navigate(`/trade/${key}`);
            }else{
              navigate(`/lever/${key}`);
            }
          }}
        >
          <div class="quotation-30">
            <div class="quotation-31">
              <span class="quotation-32">{key.toUpperCase()}/USDT</span>
            </div>
            <div class="quotation-33">
              <span class="quotation-34">
                VOL：{(coinListData[key]?.vol / 10000).toFixed(2)}M
              </span>
            </div>
          </div>
          <div class="quotation-35">
            <span class="quotation-36">
              <div class="quotation-37">
                <span class="quotation-38">{coinListData[key]?.close}</span>
              </div>
              <div class="quotation-39">
                <span class="quotation-40">$ {coinListData[key]?.close}</span>
              </div>
            </span>
          </div>
          <div
            class={
              coinListData[key]?.close < coinListData[key]?.open
                ? "quotation-41"
                : "quotation-54"
            }
          >
            {coinListData[key]?.close < coinListData[key]?.open ? "" : "+"}
            {coinListData[key]?.close &&
              (
                ((coinListData[key]?.close - coinListData[key]?.open) /
                  coinListData[key]?.open) *
                100
              ).toFixed(2)}
            %
          </div>
        </div>
        // <li
        //   class="quotationcenter-37"
        //   key={key}
        //   onClick={() => {
        //     navigate(`/trade/${key}`);
        //   }}
        // >
        //   <div class="quotationcenter-38">
        //     <div class="quotationcenter-39">
        //       <div class="quotationcenter-40">
        //         <img src={getLogo(key)} class="quotationcenter-42" />
        //       </div>
        //     </div>
        //     <div class="quotationcenter-43">
        //       <span class="quotationcenter-44">
        //         {key.toUpperCase()}
        //         <small class="quotationcenter-45">/USDT</small>
        //       </span>
        //       <p class="quotationcenter-46">
        //         {translate(getText("量"))}：
        //         {(coinListData[key]?.vol / 10000).toFixed(2)}
        //         {translate(getText("萬"))}
        //       </p>
        //     </div>
        //   </div>
        //   <div class="quotationcenter-47">
        //     <span
        //       class={
        //         coinListData[key]?.close < coinListData[key]?.open
        //           ? "quotationcenter-132"
        //           : "quotationcenter-48"
        //       }
        //     >
        //       {coinListData[key]?.close}
        //     </span>
        //   </div>
        //   <div class="quotationcenter-49">
        //     <div
        //       class={
        //         coinListData[key]?.close < coinListData[key]?.open
        //           ? "quotationcenter-134"
        //           : "quotationcenter-50"
        //       }
        //     >
        //       {coinListData[key]?.close < coinListData[key]?.open ? "" : "+"}
        //       {coinListData[key]?.close &&
        //         (
        //           ((coinListData[key]?.close - coinListData[key]?.open) /
        //             coinListData[key]?.open) *
        //           100
        //         ).toFixed(2)}
        //       %
        //     </div>
        //   </div>
        // </li>
      );
    }
    return nodes;
  };
  const getLogo = (name) => {
    let logo = "";
    for (const ctmarket of ctmarketlist) {
      if (name == ctmarket.coinname) {
        logo = imageConfig.baseImageUrl + ctmarket.logo;
        break;
      }
    }
    return logo;
  };
  return (
    <div className="market-center">
      <div className="market-center-header">
        <section
            className={type == 1 ? 'market-center-header-act' : ''}>
          <main
              onClick={() => {
                setType(1);
              }}
          >{translate(getText("交割合约"))}</main>
          <aside>
            <svg width="1em"
                 height="1em"
                 viewBox="0 0 36 36"
                 version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink">
              <title>编组 2</title>
              <g id="页面-1"
                 stroke="none"
                 stroke-width="1"
                 fill="none"
                 fill-rule="evenodd">
                <g id="Market"
                   transform="translate(-205.000000, -139.000000)"
                   fill-rule="nonzero">
                  <g id="编组-4"
                     transform="translate(205.000000, 139.000000)">
                    <g id="编组-2"
                       transform="translate(10.916667, 3.000000)">
                      <path d="M13.378864,13.125 L1.78742303,13.125 C0.40682551,13.125 -0.452212948,11.6511719 0.2506367,10.4863281 L6.0463572,0.861328125 C6.39220386,0.287109375 6.98906824,0 7.58314354,0 C8.17721883,0 8.77408322,0.287109375 9.11992987,0.861328125 L14.9156504,10.4835937 C15.6185,11.6511719 14.7622506,13.125 13.378864,13.125 L13.378864,13.125 Z"
                            id="路径"
                            fill="#000000"
                            opacity="0.178619385"></path>
                      <path d="M14.9156504,19.5136719 L9.11992987,29.1386719 C8.77408322,29.7128906 8.17721883,30 7.58314354,30 C6.98906824,30 6.39220386,29.7128906 6.0463572,29.1386719 L0.2506367,19.5136719 C-0.452212948,18.3460937 0.40682551,16.875 1.78742303,16.875 L13.378864,16.875 C14.7622506,16.875 15.6185,18.3488281 14.9156504,19.5136719 Z"
                            id="路径"
                            fill="#04CF99"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </aside>
        </section>
        <aside />
        <section
            className={type == 2 ? 'market-center-header-act' : ''}>
          <main
              onClick={() => {
                setType(2);
              }}
          >{translate(getText("永续"))}</main>
          <aside>
            <svg width="1em"
                 height="1em"
                 viewBox="0 0 36 36"
                 version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink">
              <title>编组 2</title>
              <g id="页面-1"
                 stroke="none"
                 stroke-width="1"
                 fill="none"
                 fill-rule="evenodd">
                <g id="Market"
                   transform="translate(-205.000000, -139.000000)"
                   fill-rule="nonzero">
                  <g id="编组-4"
                     transform="translate(205.000000, 139.000000)">
                    <g id="编组-2"
                       transform="translate(10.916667, 3.000000)">
                      <path d="M13.378864,13.125 L1.78742303,13.125 C0.40682551,13.125 -0.452212948,11.6511719 0.2506367,10.4863281 L6.0463572,0.861328125 C6.39220386,0.287109375 6.98906824,0 7.58314354,0 C8.17721883,0 8.77408322,0.287109375 9.11992987,0.861328125 L14.9156504,10.4835937 C15.6185,11.6511719 14.7622506,13.125 13.378864,13.125 L13.378864,13.125 Z"
                            id="路径"
                            fill="#000000"
                            opacity="0.178619385"></path>
                      <path d="M14.9156504,19.5136719 L9.11992987,29.1386719 C8.77408322,29.7128906 8.17721883,30 7.58314354,30 C6.98906824,30 6.39220386,29.7128906 6.0463572,29.1386719 L0.2506367,19.5136719 C-0.452212948,18.3460937 0.40682551,16.875 1.78742303,16.875 L13.378864,16.875 C14.7622506,16.875 15.6185,18.3488281 14.9156504,19.5136719 Z"
                            id="路径"
                            fill="#04CF99"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </aside>
        </section>
      </div>
      <div className="market-center-list">
        {Object.keys(coinListData).map((key) => {
          const item = coinListData[key];
          return (
              <div
                  key={`${key}`}
                  className="market-center-list-item"
                  onClick={() => {
                    if (type == 1) {
                      navigate(`/trade/${key}`);
                    }else{
                      navigate(`/lever/${key}`);
                    }
                  }}
              >
                <aside className="market-center-list-item-img">
                  <img src={getLogo(key)} draggable={false}/>
                </aside>
                <main>
                  <header>{key.toUpperCase()}</header>
                  <footer>USDT</footer>
                </main>
                <div className="market-center-list-item-close">
                  {item.close}
                </div>
                <section style={{background: item.close < coinListData[key]?.open ? "#FF0000" : "#04CF99"}} className="market-center-list-item-up">
                  {coinListData[key]?.close < coinListData[key]?.open ? "" : "+"}
                  {coinListData[key]?.close &&
                      (
                          ((coinListData[key]?.close - coinListData[key]?.open) /
                              coinListData[key]?.open) *
                          100
                      ).toFixed(2)}
                  %
                </section>

              </div>
          )
        })}
      </div>

    </div>
  );
}
