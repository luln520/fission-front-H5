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
          } else {
            localClear();
            navigate("/login-page");
          }
        }}
      >
        <img src="/home/profile.png" draggable="false" class="hometopbar-5" />
      </div>
      <div
        class="hometopbar-6"
        onClick={() => {
          navigate("/chatcenter");
        }}
      >
        <img src="/image/kf_d.png" draggable="false" class="hometopbar-9" />
      </div>
    </div>
  );
}
