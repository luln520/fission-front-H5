import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TopBar({
  coinname,
  iscollect,
  collectAdd,
  collectDel,
}) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const { t: translate } = useTranslation();
  return (
    <div class="marketTopBar-1">
      <div class="marketTopBar-2">
        <div
          class="marketTopBar-3"
          onClick={() => {
            navigate(`/trade/${coinname}`);
          }}
        >
          {translate(getText("合約"))}
        </div>
        <div
          class="marketTopBar-4"
          onClick={() => {
            navigate(`/lever/${coinname}`);
          }}
        >
          {translate(getText("杠杆"))}
        </div>
      </div>
      <div class="marketTopBar-6">
        <div class="marketTopBar-7">
          <i class="marketTopBar-8"></i>
          <span
            class="marketTopBar-9"
            onClick={() => {
              navigate("/jyjlTrade");
            }}
          >
            {translate(getText("持倉"))}
          </span>
        </div>
        <div class="marketTopBar-10">
          <div
            class={iscollect ? "marketTopBar-11-1" : "marketTopBar-11"}
            onClick={() => {
              if (iscollect) {
                collectDel();
              } else {
                collectAdd();
              }
            }}
          >
            <span class="marketTopBar-12"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
