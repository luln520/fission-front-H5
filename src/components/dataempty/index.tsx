import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../config/config";
import { LoginContext } from "../../router/router";
import { localClear } from "../../utils/local-util";
import { getText } from "../../utils/util";
import "./index.css";

export default function DataEmpty() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div class="dataempty-1">
      <div class="dataempty-2">
        <img
          src="/assets/default-e5b68e98.png"
          draggable="false"
          class="dataempty-5"
        />
      </div>
      <div class="dataempty-6">{translate(getText("暂无更多了"))}</div>
    </div>
  );
}
