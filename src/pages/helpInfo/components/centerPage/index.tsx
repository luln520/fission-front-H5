import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CenterPage({help}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const name = lan == "zh" ? "" : lan.charAt(0).toUpperCase() + lan.slice(1);
  return (
    <div className="fwxy-1">
      <h1 className="fwxy-2">{help[`type${name}`]}</h1>
      <p className="fwxy-3"></p>
      <p className="fwxy-4">
        <p
          className="fwxy-5"
          dangerouslySetInnerHTML={{
            __html:help[`content${name}`]
          }}
        ></p>
      </p>
    </div>
  );
}
