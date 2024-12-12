import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function MaoYi({
  nowTab,
  userInfo,
  buyCoin,
  hysetInfo,
  type,
  setType,
  setyqsy,
}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [type2, setType2] = useState(1);
  const [num, setNum] = useState("");
  const [hyTimes, setHyTimes] = useState([]);
  const [hyTzeds, setHyTzeds] = useState([]);
  const [hyYkbls, setHyYkbls] = useState([]);
  let [minNum, setminNum] = useState(100);
  const [cykbl, setcykbl] = useState(100);
  const [isUse, setIsUse] = useState(true);
  //加载节点
  const getNodes = () => {
    if (!hyTimes) {
      return "";
    }
    const nodes = [];
    for (let index = 0; index < hyTimes.length; index++) {
      let hyTime = hyTimes[index];
      let hyTzed = hyTzeds[index];
      let cykbl = hyYkbls[index];
      const node = (
        <div
          className="maoyi-16"
          onClick={() => {
            setType2(index + 1);
            setminNum(hyTzed);
            // setNum(hyTzed);
            setcykbl(cykbl);
          }}
        >
          <div className="maoyi-17">
            <span className={type2 === index + 1 ? "maoyi-18" : "maoyi-22"}>
              {hyTime}
            </span>
            <span className="maoyi-19"> {cykbl}% </span>
          </div>
        </div>
      );
      nodes.push(node);
    }
    return nodes;
  };

  useEffect(() => {
    setHyTimes(hysetInfo.hyTime);
    setHyTzeds(hysetInfo.hyTzed);
    setHyYkbls(hysetInfo.hyYkbl);
    setcykbl(hysetInfo.hyYkbl ? hysetInfo.hyYkbl[0] : 100);
    // setNum(hysetInfo.hyTzed ? hysetInfo.hyTzed[0] : 100);
    setminNum(hysetInfo.hyTzed ? hysetInfo.hyTzed[0] : 100);
  }, [hysetInfo]);
  return (
    <div className="maoyi-1">
      <div role="tabpanel" className="maoyi-2"></div>
      <div role="tabpanel" className="maoyi-3"></div>
      <div role="tabpanel" className="maoyi-4">
        <div className="maoyi-5">
          <div className="maoyi-6">
            <div className="maoyi-7">
              <div className="maoyi-8">
                <div className="maoyi-9">
                  {/* <div className="maoyi-10">
                    <div className="maoyi-11">
                      <span className="maoyi-12">
                        {translate(getText("最新價格"))}
                      </span>
                    </div>
                    <div className="maoyi-13">
                      <span className="maoyi-14">{Kinfo?.close}</span>
                    </div>
                  </div> */}
                  <div className="maoyi-15">{getNodes()}</div>
                  <div className="maoyi-44">
                    <span className="maoyi-45">
                      {translate(getText("方向"))}
                    </span>
                    <div className="maoyi-46">
                      <span
                        className={type === 1 ? "maoyi-47" : "maoyi-48"}
                        onClick={() => {
                          setType(1);
                        }}
                      >
                        {translate(getText("買多"))}
                      </span>
                      <span
                        className={type === 2 ? "maoyi-47" : "maoyi-48"}
                        onClick={() => {
                          setType(2);
                        }}
                      >
                        {translate(getText("買空"))}
                      </span>
                    </div>
                  </div>
                  <div className="maoyi-36">
                    <span className="maoyi-37">
                      {translate(getText("投資金額"))}
                    </span>
                    <div className="maoyi-38">
                      <div className="maoyi-39">
                        <div className="maoyi-40">
                          <div className="maoyi-41">
                            <input
                              type="number"
                              min={minNum}
                              name="num"
                              value={num}
                              onChange={(e) => {
                                setNum(parseInt(e.target.value));
                                setTimeout(() => {
                                  if (e.target.value && cykbl) {
                                    setyqsy(
                                      parseInt(e.target.value) * cykbl * 0.01
                                    );
                                  } else {
                                    setyqsy(0);
                                  }
                                }, 0);
                              }}
                              placeholder={translate(getText("數量"))}
                              className="maoyi-42"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="maoyi-43">
                      {translate(getText("賬戶餘額"))}:{userInfo?.usdt}
                    </span>
                  </div>
                  <div className="maoyi-49">
                    <span className="maoyi-50">
                      {" "}
                      {translate(getText("最低投資額"))}:{minNum}{" "}
                    </span>
                  </div>
                  <div className="maoyi-51">
                    <span className="maoyi-52">
                      {/* {translate(getText("手續費"))}:{hysetInfo.hySxf} */}
                      {translate(getText("預期收入"))}:
                      {num > 0 && cykbl && `${num * cykbl * 0.01}`}
                    </span>
                  </div>
                </div>
                <button
                  className="maoyi-53"
                  style={{
                    backgroundColor: isUse ? "" : "#999999",
                  }}
                  onClick={() => {
                    if (num < minNum) {
                      Toast.show({
                        content: `${translate(
                          getText("最低投資額")
                        )} ${minNum}`,
                      });
                      return;
                    }
                    if (!isUse) {
                      return;
                    }
                    setIsUse(false);
                    setTimeout(() => {
                      setIsUse(true);
                    }, 3000);
                    buyCoin({
                      ccoinname: `${nowTab.toUpperCase()}/USDT`,
                      ctzed: num,
                      ctzfx: type,
                      ctime: hyTimes[type2 - 1].toUpperCase(),
                      cykbl,
                    });
                  }}
                >
                  <div className="maoyi-54">
                    <span className="maoyi-55">
                      {" "}
                      {translate(getText("確認"))}{" "}
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="maoyi-56">
          <div className="maoyi-57"></div>
        </div>
      </div>
    </div>
  );
}
