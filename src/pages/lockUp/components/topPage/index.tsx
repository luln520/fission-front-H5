import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TopPage({ kjprofitSum }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div className="lockupKJ-1">
      <div className="lockupKJ-2">
        <span className="lockupKJ-3">
          {translate(getText("託管的資金"))}
        </span>
      </div>
      <div className="lockupKJ-4">
        <span className="lockupKJ-5">{kjprofitSum.buynum}</span>
        <span className="lockupKJ-6">USDT</span>
      </div>
      <div className="lockupKJ-7">
        <div className="lockupKJ-8">
          <div className="lockupKJ-9">
            <span className="lockupKJ-10">{kjprofitSum.todaynum}</span>
          </div>
          <div className="lockupKJ-11">
            <span className="lockupKJ-12">
              {translate(getText("預計今日的收益"))}
            </span>
          </div>
        </div>
        <div className="lockupKJ-13">
          <div className="lockupKJ-14">
            <span className="lockupKJ-15"> {kjprofitSum.sumnum}</span>
          </div>
          <div className="lockupKJ-16">
            <span className="lockupKJ-17">
              {translate(getText("累計收益"))}
            </span>
          </div>
        </div>
        <div className="lockupKJ-18">
          <div className="lockupKJ-19">
            <span className="lockupKJ-20">{kjprofitSum.count}</span>
          </div>
          <div className="lockupKJ-21">
            <span className="lockupKJ-22">
              {translate(getText("託管中的訂單"))}
            </span>
          </div>
        </div>
      </div>
      <div
        className="lockupKJ-23"
        onClick={() => {
          navigate("/lockUpOrder");
        }}
      >
        <span className="lockupKJ-24">{translate(getText("委託訂單"))}</span>
      </div>
    </div>
  );
}
