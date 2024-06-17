import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../config/config";
import { LoginContext } from "../../router/router";
import { localClear } from "../../utils/local-util";
import "./index.css";

export default function HomeTopBar({ companyData, setIShowHomePop }) {
  const navigate = useNavigate();
  const [login, _] = useContext(LoginContext);
  return (
    <div id="hometopbar" class="hometopbar-1">
      <div
        class="hometopbar-2"
        onClick={() => {
          if (login) {
            setIShowHomePop(true);
          }else{
            localClear();
            navigate("/login");
          }
        }}
      >
        <img
          src="data:image/png;base64,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"
          draggable="false"
          class="hometopbar-5"
        />
      </div>
      <div
        class="hometopbar-6"
        onClick={() => {
          navigate("/chatcenter");
        }}
      >
        <img
          src="http://h5.tinshwk.xyz/static/image/kf_d.png"
          draggable="false"
          class="hometopbar-9"
        />
      </div>
    </div>
  );
}
