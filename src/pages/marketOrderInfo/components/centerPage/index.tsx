import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CenterPage({ data }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div className="orderInfo-1">
      <div className="orderInfo-2">
        <span className="orderInfo-3">{translate(getText("訂單號"))}</span>
        <span className="orderInfo-4">{data?.orderNo}</span>
      </div>
      <div className="orderInfo-5">
        <span className="orderInfo-6">{translate(getText("貨幣"))}</span>
        <span className="orderInfo-7">{data?.coinname}</span>
      </div>
      <div className="orderInfo-8">
        <span className="orderInfo-9">{translate(getText("買"))}</span>
        <span className="orderInfo-10">{data?.num}</span>
      </div>
      <div className="orderInfo-8">
        <span className="orderInfo-9">
          {translate(getText("盈"))}/{translate(getText("虧"))}
        </span>
        <span
          className="orderInfo-10"
          style={{
            color: data?.isWin == 2 ? "rgb(205, 78, 101)" : "rgb(28, 173, 144)",
          }}
        >
          {translate(getText(data?.isWin == 2 ? "虧" : "盈"))}
        </span>
      </div>
      <div className="orderInfo-11">
        <span className="orderInfo-12">{translate(getText("價格"))}</span>
        <span
          className="orderInfo-13"
          style={{
            color: data?.isWin == 2 ? "rgb(205, 78, 101)" : "rgb(28, 173, 144)",
          }}
        >
          {data?.isWin == 2 ? "-" : ""}
          {data?.ploss}
        </span>
      </div>
      <div className="orderInfo-14">
        <span className="orderInfo-15">{translate(getText("時間"))}</span>
        <span className="orderInfo-16">{data?.buytime}</span>
      </div>
      <div className="orderInfo-17">
        <span className="orderInfo-18"></span>
        <span className="orderInfo-19">
          {data?.status === 2
            ? translate(getText("已完成"))
            : translate(getText("到期結算"))}
        </span>
      </div>
    </div>
  );
}
