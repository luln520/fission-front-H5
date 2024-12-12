import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../utils/util";
import "./index.css";

export default function Search({onchange}) {
  const { t: translate } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="search-1">
      <div className="search-2">
        <div className="search-3">
          <div className="search-4">
            <i className="search-5"></i>
          </div>
          <div className="search-6">
            <div className="search-7">
              <input
                type="search"
                placeholder={translate(getText("输入名称"))}
                className="search-8"
                onChange={onchange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
