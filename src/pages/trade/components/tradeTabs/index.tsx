import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TradeTabs({ index, setIndex }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    // <div className="cnetertabs-1">
    //   <div className="cnetertabs-2">
    //     <div
    //       className={index===1?"cnetertabs-7":"cnetertabs-3"}
    //       onClick={() => {
    //         setIndex(1);
    //       }}
    //     >
    //       <span className="cnetertabs-4">{translate(getText("K線"))}</span>
    //     </div>
    //     <div
    //       className={index===2?"cnetertabs-7":"cnetertabs-3"}
    //       onClick={() => {
    //         setIndex(2);
    //       }}
    //     >
    //       <span className="cnetertabs-6">{translate(getText("簡介"))}</span>
    //     </div>
    //     <div
    //       className={index===3?"cnetertabs-7":"cnetertabs-3"}
    //       onClick={() => {
    //         setIndex(3);
    //       }}
    //     >
    //       <span className="cnetertabs-8">{translate(getText("貿易"))}</span>
    //     </div>
    //     <div
    //       className={index===4?"cnetertabs-7":"cnetertabs-3"}
    //       onClick={() => {
    //         setIndex(4);
    //       }}
    //     >
    //       <span className="cnetertabs-8">{translate(getText("命令"))}</span>
    //     </div>
    //     <div
    //       className={index===5?"cnetertabs-7":"cnetertabs-3"}
    //       onClick={() => {
    //         setIndex(5);
    //       }}
    //     >
    //       <span className="cnetertabs-12">{translate(getText("明細"))}</span>
    //     </div>
    //   </div>
    // </div>

    <div className="cnetertabs-1">
      <div className="cnetertabs-2">
        <div
          className={index === 1 ? "cnetertabs-3" : "cnetertabs-5"}
          onClick={() => {
            setIndex(1);
          }}
        >
          <span className="cnetertabs-4">{translate(getText("K線"))}</span>
        </div>
        <div
          className={index === 2 ? "cnetertabs-3" : "cnetertabs-5"}
          onClick={() => {
            setIndex(2);
          }}
        >
          <span className="cnetertabs-6">{translate(getText("簡介"))}</span>
        </div>
        <div
          className={index === 3 ? "cnetertabs-3" : "cnetertabs-5"}
          onClick={() => {
            setIndex(3);
          }}
        >
          <span className="cnetertabs-8">{translate(getText("貿易"))}</span>
        </div>
        <div
          className={index === 4 ? "cnetertabs-3" : "cnetertabs-5"}
          onClick={() => {
            setIndex(4);
          }}
        >
          <span className="cnetertabs-10">{translate(getText("命令"))}</span>
        </div>
        <div
          className={index === 5 ? "cnetertabs-3" : "cnetertabs-5"}
          onClick={() => {
            setIndex(5);
          }}
        >
          <span className="cnetertabs-12">{translate(getText("明細"))}</span>
        </div>
      </div>
    </div>
  );
}
