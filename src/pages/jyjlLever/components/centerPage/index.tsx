import { Empty } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { newsApi } from "../../../../api/news-api";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CenterPage({ leverorders, closeorder, coinListData }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");

  // const getNode = () => {
  //   const nodes = [];
  //   for (let index = 0; index < leverorders.length; index++) {
  //     const data = leverorders[index];
  //     const node = (
  //       <div
  //         className="jyjl-9"
  //         onClick={() => {
  //           const sendData = {
  //             orderNo: data.orderNo,
  //             coinname: data.coinname,
  //             num: data.num,
  //             ploss: data.ploss,
  //             buytime: data.buytime,
  //             status: data.status,
  //             isWin: data.isWin,
  //           };
  //           navigate(
  //             `/marketOrderInfo/${data.id}?data=${JSON.stringify(sendData)}`
  //           );
  //         }}
  //       >
  //         <div className="jyjl-10">
  //           <div className="jyjl-11">
  //             <div className="jyjl-12">
  //               <div className="jyjl-13">{data.num.toFixed(4)}</div>
  //               <div className="jyjl-14">{translate(getText("永续"))}</div>
  //               <div className="jyjl-15">{data.buytime?.substring(0, 16)}</div>
  //             </div>
  //             <span className="jyjl-16">
  //               {data?.status === 2
  //                 ? translate(getText("已完成"))
  //                 : translate(getText("到期結算"))}
  //             </span>
  //             <span className="jyjl-17">
  //               {data?.status == 1 && (
  //                 <button
  //                   className="pingcang"
  //                   onClick={(e) => {
  //                     closeorder(data.id);
  //                     e.stopPropagation();
  //                   }}
  //                 >
  //                   {translate(getText("平仓"))}
  //                 </button>
  //               )}
  //               {data?.status != 1 && (
  //                 <span className="jyjl-18">{translate(getText("詳情"))}</span>
  //               )}
  //             </span>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //     nodes.push(node);
  //   }
  //   return nodes;
  // };
  const getNode = () => {
    const nodes = [];
    for (let index = 0; index < leverorders.length; index++) {
      const data = leverorders[index];
      const priceyd = (
        data.num *
        data.fold *
        ((data.buyprice -
          coinListData[data.coinname.replace("/USDT", "").toLowerCase()]
            ?.close) /
          data.buyprice)
      ).toFixed(2);
      const node = (
        <li
          className="hyjyjl-2"
          onClick={() => {
            const sendData = {
              orderNo: data.orderNo,
              coinname: data.coinname,
              num: data.num,
              ploss: data.ploss,
              buytime: data.buytime,
              status: data.status,
              isWin: data.isWin,
            };
            if (data.status == 1) {
              return;
            }
            navigate(
              `/marketOrderInfo/${data.id}?data=${JSON.stringify(sendData)}`
            );
          }}
        >
          <div className="hyjyjl-3">
            <div className="hyjyjl-4">
              <div className="hyjyjl-5">
                {data.coinname}
                <div className={data.hyzd == 1 ? "hyjyjl-32" : "hyjyjl-6"}>
                  {data.hyzd == 1
                    ? translate(getText("買多"))
                    : translate(getText("買空"))}
                </div>
              </div>
              <div className="hyjyjl-7">{data.buytime?.substring(0, 16)}</div>
            </div>
            <div className="hyjyjl-8">
              <div className="hyjyjl-9">
                <span className="hyjyjl-10">
                  <span className="hyjyjl-11">
                    {data.num?.toFixed(2)}
                    <span className="hyjyjl-12">
                      <span className="hyjyjl-13">USDT</span>
                    </span>
                  </span>
                </span>
              </div>
              <div className="hyjyjl-14">
                {translate(getText("盈虧"))}
                {data?.status == 2 && (
                  <span className={data.isWin == 1 ? "hyjyjl-41" : "hyjyjl-15"}>
                    <span className="hyjyjl-16">
                      {data.isWin == 1 ? "+" : "-"}
                      {data.ploss}
                    </span>
                  </span>
                )}
              </div>
            </div>
            <div className="hyjyjl-17"></div>
            <div className="hyjyjl-18">
              <div className="hyjyjl-19">
                <div className="hyjyjl-20">
                  {translate(getText("購買"))}
                  {lan == "zh" ? "" : <span>&nbsp;</span>}
                  {translate(getText("價格"))}
                </div>
                <div className="hyjyjl-21">{data.buyprice}</div>
              </div>
              <div className="hyjyjl-22">
                <div className="hyjyjl-23">{translate(getText("倍数"))}</div>
                <div className="hyjyjl-24">{data.fold}X</div>
              </div>
              <div className="hyjyjl-25">
                <div className="hyjyjl-26">{translate(getText("操作"))}</div>
                <div className="hyjyjl-27">
                  {data?.status == 1 && (
                    <button
                      className="pingcang"
                      onClick={(e) => {
                        closeorder(
                          data.id,
                          data?.num,
                          (priceyd < 0 && data.hyzd == 1) ||
                            (priceyd > 0 && data.hyzd == 2)
                            ? Math.abs(priceyd)
                            : -Math.abs(priceyd)
                        );
                        e.stopPropagation();
                      }}
                    >
                      {translate(getText("平仓"))}
                    </button>
                  )}
                  {data?.status != 1 && (
                    <span className="jyjl-18">
                      {translate(getText("詳情"))}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </li>
      );
      nodes.push(node);
    }
    return nodes;
  };
  return (
    <div>
      <ul className="hyjyjl-1">{getNode()}</ul>
      <div className="jyjl-99">{translate(getText("暂无更多了"))}</div>
    </div>
  );
}
