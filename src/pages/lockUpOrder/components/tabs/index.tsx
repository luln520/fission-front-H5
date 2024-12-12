import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function Tabs({ setIndex, index }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div className="lockupKJOrderBats-1">
      <div className="lockupKJOrderBats-2">
        <div className="lockupKJOrderBats-3">
          <div className="lockupKJOrderBats-4">
            <div
              className={
                index === 1 ? "lockupKJOrderBats-7" : "lockupKJOrderBats-5"
              }
              onClick={() => {
                setIndex(1);
              }}
            >
              <span className="lockupKJOrderBats-6">
                {translate(getText("委託中"))}
              </span>
            </div>
            <div
              className={
                index === 2 ? "lockupKJOrderBats-7" : "lockupKJOrderBats-5"
              }
              onClick={() => {
                setIndex(2);
              }}
            >
              <span className="lockupKJOrderBats-8">
                {translate(getText("已完成"))}
              </span>
            </div>
          </div>
        </div>
        <div className="lockupKJOrderBats-10"></div>
      </div>
    </div>
  );
}
