import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CenterPage({
  list,
  setVisibleCK,
  setcurrencyId,
  currencyId,
}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const getArray = () => {
    const nodes = [];
    for (const item of list) {
      nodes.push(
        <div
          className="c2cckcenter-5"
          onClick={() => {
            setVisibleCK(true);
            setcurrencyId(item?.id);
          }}
        >
          <div className="c2cckcenter-6">
            <div className="c2cckcenter-7">
              <img
                src="/costIco/20220324033547378184.png"
                draggable="true"
                className="c2cckcenter-9"
              />
              <div className="c2cckcenter-10">
                <div className="c2cckcenter-11">
                  <div className="c2cckcenter-12"></div>
                </div>
                <div className="c2cckcenter-13">
                  <div className="c2cckcenter-14"></div>
                </div>
              </div>
            </div>
            {lan == "zh" ? item.name : item.currency}
            {translate(getText("充值"))}
          </div>
          <i className="c2cckcenter-15"></i>
        </div>
      );
    }
    return nodes;
  };

  return (
    <div className="c2ccell-1">
      <div className="c2cckcenter-1">
        <div className="c2cckcenter-2">
          <div id="mylist" className="c2cckcenter-3">
            <p className="c2cckcenter-4">{translate(getText("請選擇充值通道"))}</p>
            {getArray()}
          </div>
          <div className="c2cckcenter-93"></div>
        </div>
      </div>

      <div className="c2ccell-19"></div>
    </div>
  );
}
