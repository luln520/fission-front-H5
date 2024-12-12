import { useNavigate } from "react-router-dom";
import "./index.css";

export default function TopBar({ title, isBack }) {
  const navigate = useNavigate();
  return (
    <div className="topbarnew-1">
      <div className="topbarnew-2">
        <div className="topbarnew-3"></div>
        <div className="topbarnew-4">
          {isBack && (
            <div
              className="topbarnew-5"
              onClick={() => {
                navigate(-1);
              }}
            >
              <div className="topbarnew-6">
                <div className="topbarnew-7">
                  <div className="topbarnew-8">
                    <span className="topbarnew-9"></span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="topbarnew-10">
            <div className="topbarnew-11">{title}</div>
          </div>
          <div className="topbarnew-12"></div>
          <div className="topbarnew-13"></div>
        </div>
      </div>
      <div className="topbarnew-14"></div>
    </div>
  );
}
