import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function PropertyCenter({
  userInfo,
  qbSum,
  setVisible,
  setVisibleTK,
  setVisibleTK2,
  setVisibleCK,
  isShowZF,
}) {
  const c2ctxStatus = localStorage.getItem("c2ctxStatus");
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const companySkin = localStorage.getItem("companySkin");
  return (
    <div className="propertycenter-1">
      <div className="propertycenter-2">
        <div className="propertycenter-3">
          <div data-v-5bb30e94="" className="propertycenter-4"></div>
          <p className="propertycenter-5">{translate(getText("資產"))}</p>
          <h1 className="propertycenter-6">
            {userInfo?.usdt?.toFixed(2)}
            <span className="propertycenter-7">USDT</span>
          </h1>
          <div className="propertycenter-8"></div>
        </div>
      </div>
      <div className="propertycenter-9">
        <div
          className="propertycenter-10"
          onClick={() => {
            navigate("/rechargelist");
          }}
        >
          <div className="propertycenter-11">
            <div className="propertycenter-12"></div>
            <img
              src="/ICON/20.png"
              className="propertycenter-13"
            />
            <div className="propertycenter-14">
              <div className="propertycenter-15">
                <div className="propertycenter-16"></div>
              </div>
              <div className="propertycenter-17">
                <div className="propertycenter-18"></div>
              </div>
            </div>
          </div>
          <p className="propertycenter-19">
            <div className="propertycenter-20">{translate(getText("入金"))}</div>
          </p>
        </div>
        <div
          className="propertycenter-21"
          onClick={() => {
            navigate("/extractlist");
          }}
        >
          <div className="propertycenter-22">
            <div className="propertycenter-23"></div>
            <img
              src="/ICON/21.png"
              className="propertycenter-24"
            />
            <div className="propertycenter-25">
              <div className="propertycenter-26">
                <div className="propertycenter-27"></div>
              </div>
              <div className="propertycenter-28">
                <div className="propertycenter-29"></div>
              </div>
            </div>
          </div>
          <p className="propertycenter-30">
            <div className="propertycenter-31">{translate(getText("出金"))}</div>
          </p>
        </div>
        <div className="propertycenter-32" onClick={()=>{
          navigate("/addresslist");
        }}>
          <div className="propertycenter-33">
            <div className="propertycenter-34"></div>
            <img
              src="/ICON/22.png"
              className="propertycenter-35"
            />
            <div className="propertycenter-36">
              <div className="propertycenter-37">
                <div className="propertycenter-38"></div>
              </div>
              <div className="propertycenter-39">
                <div className="propertycenter-40"></div>
              </div>
            </div>
          </div>
          <p className="propertycenter-41">
            <div className="propertycenter-42">{translate(getText("地址"))}</div>
          </p>
        </div>
      </div>
      <div className="propertycenter-43">
        <div className="propertycenter-44">
          <div className="propertycenter-45">
            <div className="propertycenter-46">
              <div className="propertycenter-47">
                <div className="propertycenter-48">
                  <div className="propertycenter-49">
                    <div className="propertycenter-50">
                      <div id="u-tab-item-0" className="propertycenter-51">
                        {translate(getText("賬戶資產"))}
                      </div>
                      {/* <div className="propertycenter-52">幣幣資產</div> */}
                      <div className="propertycenter-53"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="propertycenter-54">
        <li className="propertycenter-55">
          <div className="propertycenter-56">
            <h1 className="propertycenter-57">USDT</h1>
          </div>
          <div className="propertycenter-58">
            <div className="propertycenter-59">
              <div className="propertycenter-60">{translate(getText("可用"))}(USDT)</div>
              <div className="propertycenter-61">{translate(getText("處理中"))}(USDT)</div>
              <div className="propertycenter-62">{translate(getText("折合"))}(USDT)</div>
            </div>
            <div className="propertycenter-63">
              <div className="propertycenter-64">{userInfo?.usdt?.toFixed(2)}</div>
              <div className="propertycenter-65">0.00</div>
              <div className="propertycenter-66">{userInfo?.usdt?.toFixed(2)}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
