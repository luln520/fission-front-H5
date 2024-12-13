import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TopBuy({ setIsShowOrder, setType }) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const { t: translate } = useTranslation();
  return (
    <div class="marketbuydiv-1">
      <div class="marketbuydiv-2">
        <div
          class="marketbuydiv-3"
          onClick={() => {
            setIsShowOrder(true);
            setType(1);
          }}
        >
          {translate(getText("買多"))}
        </div>
        <div
          class="marketbuydiv-4"
          onClick={() => {
            setIsShowOrder(true);
            setType(2);
          }}
        >
          {translate(getText("買空"))}
        </div>
      </div>
    </div>
  );
}
