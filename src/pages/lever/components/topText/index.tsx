import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TopText({ setIsShowCoin, nowTab, coinListData }) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const { t: translate } = useTranslation();
  return (
    <div class="levertoptext-1">
      <div class="levertoptext-2">
        <div
          class="levertoptext-3"
          onClick={() => {
            setIsShowCoin(true);
          }}
        >
          {nowTab?.toUpperCase()}/USDT<i class="levertoptext-4"></i>
        </div>
        <div class="levertoptext-5">
          <span class="levertoptext-6">
            <span class="levertoptext-7">
              {(
                coinListData[nowTab]?.close - coinListData[nowTab]?.open
              )?.toFixed(2)}
            </span>
          </span>
          <span class="levertoptext-8">
            <span class="levertoptext-9">
              {coinListData[nowTab]?.close &&
                (
                  ((coinListData[nowTab]?.close - coinListData[nowTab]?.open) /
                    coinListData[nowTab]?.open) *
                  100
                ).toFixed(2)}
              {!coinListData[nowTab]?.close && "0.00"}%
            </span>
          </span>
        </div>
      </div>
      <div class="levertoptext-10">{coinListData[nowTab]?.close}</div>
    </div>
  );
}
