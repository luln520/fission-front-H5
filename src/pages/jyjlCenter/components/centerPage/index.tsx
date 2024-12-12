import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { newsApi } from "../../../../api/news-api";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CenterPage() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [index, setIndex] = useState(1);
  const lan = localStorage.getItem("i18n");
  return (
    <div className="help-1">
      <div
        role="button"
        className="help-2"
        onClick={() => {
          navigate(`/jyjlTrade`);
        }}
      >
        <div className="help-3">
          <span className="help-4">{translate(getText("交割合约"))}</span>
        </div>
        <i className="help-5"></i>
      </div>
      <div
        role="button"
        className="help-2"
        onClick={() => {
          navigate(`/jyjlLever2`);
        }}
      >
        <div className="help-3">
          <span className="help-4">{translate(getText("永续"))}</span>
        </div>
        <i className="help-5"></i>
      </div>
      {/* <div
        role="button"
        className="help-2"
        onClick={() => {
          navigate(`/lockUpOrder`);
        }}
      >
        <div className="help-3">
          <span className="help-4">{translate(getText("鎖倉挖礦"))}</span>
        </div>
        <i className="help-5"></i>
      </div> */}
    </div>
  );
}
