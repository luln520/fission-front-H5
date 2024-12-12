import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { WSContext } from "../../../../router/router";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function DaoJiShi2({
  daojis,
  nowTab,
  sendData,
  hysetInfo,
  setChangeDaoJiShi,
  companyData
}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [time, setTime] = useState(daojis as number);
  const [coinListData, setCoinListData] = useContext(WSContext);
  let ytime = daojis;
  let timer = null;

  useEffect(() => {
    timer = setInterval(() => {
      if (ytime <= 0) {
        setChangeDaoJiShi(false);
        clearInterval(timer);
        return;
      }
      setTime(ytime--);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="daojishi-1">
      <div className="daojishi-2">
        <div className="daojishi-3">
          <div className="daojishi-4">
            <div className="daojishi-5">
              <div className="daojishi-6">
                <div className="daojishi-7">{time}</div>
              </div>
              <div className="daojishi-8">
                <div className="daojishi-9">
                  <span className="daojishi-10">
                    {translate(getText("方向"))}
                  </span>
                </div>
                <div className="daojishi-11">
                  <span className="daojishi-12">
                    {sendData?.ctzfx == 1
                      ? translate(getText("買多"))
                      : translate(getText("空"))}
                  </span>
                </div>
              </div>
              <div className="daojishi-13">
                <div className="daojishi-14">
                  <span className="daojishi-15">
                    {translate(getText("投資金額"))}
                  </span>
                </div>
                <div className="daojishi-16">
                  <span className="daojishi-17">{sendData?.ctzed}</span>
                </div>
              </div>
              <div className="daojishi-18">
                <div className="daojishi-19">
                  <span className="daojishi-20">
                    {translate(getText("最新價格"))}
                  </span>
                </div>
                <div className="daojishi-21">
                  <span className="daojishi-22">{coinListData[nowTab]?.close}</span>
                </div>
              </div>
              <div className="daojishi-28">
                <div className="daojishi-29">
                  <span className="daojishi-30">
                    {translate(getText("手續費"))}
                  </span>
                </div>
                <div className="daojishi-31">
                  <span className="daojishi-32">{companyData?.hyFee}</span>
                </div>
              </div>
            </div>
            <button
              className="daojishi-33"
              onClick={() => {
                setChangeDaoJiShi(false);
              }}
            >
              <div className="daojishi-34">
                <span className="daojishi-35">
                  {translate(getText("確認訂單"))}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
