import { useNavigate } from "react-router-dom";
import "./index.css";

export default function TopBar2({ title, isBack, mini, miniClick }) {
  const navigate = useNavigate();
  return (
    <div class="topBar2-1">
      <div class="topBar2-2">
        <div class="topBar2-3"></div>
        <div class="topBar2-4">
          {isBack && (
            <div
              class="topBar2-5"
              onClick={() => {
                navigate(-1);
              }}
            >
              <div class="topBar2-6">
                <div class="topBar2-7">
                  <div class="topBar2-8">
                    <span class="topBar2-9"></span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div class="topBar2-10">
            <div class="topBar2-11">{title}</div>
          </div>
          <div class="topBar2-12"></div>
          <div class="topBar2-13">
            <div class="topBar2-14">
              {mini && (
                <div
                  class="topBar2-15"
                  onClick={() => {
                    miniClick();
                  }}
                >
                  {mini}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div class="topBar2-16"></div>
    </div>
  );
}
