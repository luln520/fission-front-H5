import { useNavigate } from "react-router-dom";
import "./index.css";
import { NoticeBar } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";

export default function Noice({ content }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const la = localStorage.getItem("i18n") ? localStorage.getItem("i18n") : "en";
  const getContent = () => {
    const contentStr =
      content[la == "zh" ? "content" : `content${la[0].toUpperCase()}${la[1]}`];
    return <span key={"contentStrSpan" + Math.random()}>{contentStr}</span>;
  };
  return (
    <div
      class="homenotice-1"
      onClick={() => {
        navigate("/noiceInfo");
      }}
    >
      <div class="homenotice-2">
        <div class="homenotice-3">
          <div class="homenotice-4"></div>
          <span class="homenotice-5"></span>
          <img
            src="data:image/png;base64,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"
            draggable="false"
            class="homenotice-6"
          />
        </div>
      </div>
      <div class="homenotice-7">
        <div class="homenotice-8">{getContent()}</div>
      </div>
      <div class="homenotice-9">
        <div class="homenotice-10">
          <div class="homenotice-11"></div>
          <div class="homenotice-12">
            <div class="homenotice-13">
              <div class="homenotice-14"></div>
            </div>
            <div class="homenotice-15">
              <div class="homenotice-16"></div>
            </div>
          </div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAoCAYAAACiu5n/AAAAAXNSR0IArs4c6QAAAx5JREFUaEPlms9r1FAQx78TxaOgqHfx4lERREFBETYBkwj7UjwLXrVa3dZK7U/a7e+t/4YmC272kCyKB0Wwl949+A9U/RMysttuW7cvSdduY56bYzJ5bz6ZeZN5M4+Q06tgFR8R6BXAx4mwFNSq5V6oSr0YpNdjGObAdaboy5/j0lrou08PO1cugXVbDIKx1glHQCXwvaHDQOcS2DAHbjBFn6RgTCth3X3+t9C5BG7C6FZxGq01LLkOAZ1b4CZmwXTmiHhUzoylRs0b7tbSuQZuwhiWKDPwolfQuQfecm8xD2AkxpoLoe9JP4hMXgnglnvbYpEYpRiI+cD3pK4vifTdroJ/J58EzUzlRt19maadMhZug+imswziZzFgs6HvjSVBKwfcWtO2WAEjLgFJhFYSeDt6rzIQk2ryTOhXx5UOWjLldcupAPxE7sJyaGUtvLOmE6CJaCqouZN7P4jywABIN0UFhEFpcsI82ahXp9rP/gfgJgsVLLFGwOM06BZwc3cCRFcBbT2ov/0cF9YN07kVga+Rxl/DWvVjnFzBEheJcZM1ZPZBNSZi5hIIF6R6EY2HNXeGDFMMMWGlLcTAUMP3Kp0vGaYoMWExTU63nHsAvwFwIi0JyPo5gR+SbhU3ATqzOzn/CP3q2U5ldEv8BHB6z/3N0PfO7ZOzxQYYl7KGOdB8hG9dABd/AXQqFdgS3wGcP5ACWQu1gO3iMJgWduYmHglr1R3Xbd837OIoM83tujSVGr67vN/CHeNlDZUwH4EfbAct505EuKwxNoK6+yE2aN0VOmt0BRqvh++897FytlPkiG8TZbeOmUBg3AdwUhqpgbGG781mFkWP2NCJ/2JsR+jW/+uIFclieNItZzU+xcRE6HvTbUWUB07Kp7kjy1LewoYlYndMsjxaaeAkWADToe9NyNaTki6dXPWI3wsraeG+KvEkFfEApNazlLKwbjoLIJZ2Gg5asVQGuK8K8UmtFgBddR1yb+G+aqYltUsJWA58T9p2Sctlc/kf7ruGeGfZaU/i3z9HHnpxviPXQWvr2JLW7PseI4pe9+rY0m/I6VNL1nmvMgAAAABJRU5ErkJggg=="
            draggable="false"
            class="homenotice-17"
          />
        </div>
      </div>
    </div>
  );
}