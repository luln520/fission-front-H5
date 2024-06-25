import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { userApi } from "../../../../api/user-api";
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
  setIsShowPop,
  mockUserInfo
}) {
  const c2ctxStatus = localStorage.getItem("c2ctxStatus");
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const companySkin = localStorage.getItem("companySkin");
  const propertyType = localStorage.getItem("propertyType");
  return (
    <div class="propertycenterlb-1">
      <div class="propertycenterlb-2"></div>
      <div class="propertycenterlb-3">资产</div>
      <div class="propertycenterlb-4">
        <div class="propertycenterlb-5">
          <div class="propertycenterlb-6">
            <div class="propertycenterlb-7">
              <span class="propertycenterlb-8">账户总资产</span>
            </div>
            {/* <div class="propertycenterlb-9">
              <div class="propertycenterlb-10">
                <div class="propertycenterlb-11"></div>
                <div class="propertycenterlb-12">
                  <div class="propertycenterlb-13">
                    <div class="propertycenterlb-14"></div>
                  </div>
                  <div class="propertycenterlb-15">
                    <div class="propertycenterlb-16"></div>
                  </div>
                </div>
                <img
                  src="http://h5.tinshwk.xyz/static/image/eye.png"
                  draggable="false"
                  class="propertycenterlb-17"
                />
              </div>
            </div> */}
          </div>
          <div class="propertycenterlb-18">
            <div class="propertycenterlb-19">
              <span class="propertycenterlb-20">{propertyType==1?userInfo?.usdt:mockUserInfo?.money}</span>
            </div>
          </div>
          <div class="propertycenterlb-21">
            <div class="propertycenterlb-22">
              <span class="propertycenterlb-23">今日收益：0</span>
            </div>
            {/* <i class="propertycenterlb-24"></i> */}
          </div>
          <div class="propertycenterlb-25">
            <div class="propertycenterlb-26">
              <span class="propertycenterlb-27">交易量：0</span>
            </div>
            {/* <i class="propertycenterlb-28"></i> */}
          </div>
          {propertyType == 2 && (
            <div class="propertycenterlb-25">
              <div
                style={{
                  margin: "5px 0",
                  boxSizing: "border-box",
                  padding: "3px 5px",
                  border: "solid 1px #fff",
                  borderRadius: "5px",
                }}
                onClick={() => {
                  navigate("/getproperty");
                }}
              >
                获得资产
              </div>
            </div>
          )}
        </div>
        <div class="propertycenterlb-29">
          <img
            src="http://h5.tinshwk.xyz/assets/propertyBg-9be06132.png"
            draggable="false"
            class="propertycenterlb-32"
          />
        </div>
      </div>
      <div class="propertycenterlb-33">
        <div class="propertycenterlb-34">
          {propertyType == 1 && (
            <div
              class="propertycenterlb-35"
              onClick={() => {
                navigate("/rechargelist");
              }}
            >
              <div class="propertycenterlb-36">
                <img
                  src="http://h5.tinshwk.xyz/static/menus/chongBi_d.png"
                  draggable="false"
                  class="propertycenterlb-39"
                />
              </div>
              <div class="propertycenterlb-40">
                <span class="propertycenterlb-41">充币</span>
              </div>
            </div>
          )}
          {propertyType == 1 && (
            <div
              class="propertycenterlb-42"
              onClick={() => {
                navigate("/extractlist");
              }}
            >
              <div class="propertycenterlb-43">
                <img
                  src="http://h5.tinshwk.xyz/static/menus/tiBi_d.png"
                  draggable="false"
                  class="propertycenterlb-46"
                />
              </div>
              <div class="propertycenterlb-47">
                <span class="propertycenterlb-48">提币</span>
              </div>
            </div>
          )}
          <div
            class="propertycenterlb-49"
            onClick={() => {
              navigate("/chatcenter");
            }}
          >
            <div class="propertycenterlb-50">
              <img
                src="http://h5.tinshwk.xyz/static/menus/keFu_d.png"
                draggable="false"
                class="propertycenterlb-53"
              />
            </div>
            <div class="propertycenterlb-54">
              <span class="propertycenterlb-55">客服</span>
            </div>
          </div>
          <div
            class="propertycenterlb-56"
            onClick={() => {
              navigate("/changelanguage");
            }}
          >
            <div class="propertycenterlb-57">
              <img
                src="http://h5.tinshwk.xyz/static/menus/huaZhuan_d.png"
                draggable="false"
                class="propertycenterlb-60"
              />
            </div>
            <div class="propertycenterlb-61">
              <span class="propertycenterlb-62">语言</span>
            </div>
          </div>
        </div>
      </div>
      <div class="propertycenterlb-63">
        <div class="propertycenterlb-64">
          当前账户：{propertyType == 1 ? "实际账户" : "模拟账户"}
        </div>
        <div
          class="propertycenterlb-65"
          onClick={() => {
            setIsShowPop(true);
          }}
        >
          <i class="propertycenterlb-66"></i>切换
        </div>
      </div>
      <div class="propertycenterlb-67">
        <div class="propertycenterlb-68">
          <span class="propertycenterlb-69">我的账户</span>
        </div>
        <div class="propertycenterlb-70">
          <div class="propertycenterlb-71">币币</div>
          <div class="propertycenterlb-72">
            <span class="propertycenterlb-73">{propertyType==1?userInfo?.usdt:mockUserInfo?.money}</span>
          </div>
          <i class="propertycenterlb-74"></i>
        </div>
        {/* <div class="propertycenterlb-75">
          <div class="propertycenterlb-76">交割合约</div>
          <div class="propertycenterlb-77">
            <span class="propertycenterlb-78">850490.06</span>
          </div>
          <i class="propertycenterlb-79"></i>
        </div>
        <div class="propertycenterlb-80">
          <div class="propertycenterlb-81">永续合约</div>
          <div class="propertycenterlb-82">
            <span class="propertycenterlb-83">223381.38</span>
          </div>
          <i class="propertycenterlb-84"></i>
        </div> */}
      </div>
    </div>

    // <div className="propertycenter-1">
    //   <div className="propertycenter-2">
    //     <div className="propertycenter-3">
    //       <div data-v-5bb30e94="" className="propertycenter-4"></div>
    //       <p className="propertycenter-5">{translate(getText("資產"))}</p>
    //       <h1 className="propertycenter-6">
    //         {userInfo?.usdt?.toFixed(2)}
    //         <span className="propertycenter-7">USDT</span>
    //       </h1>
    //       <div className="propertycenter-8"></div>
    //     </div>
    //   </div>
    //   <div className="propertycenter-9">
    //     <div
    //       className="propertycenter-10"
    //       onClick={() => {
    //         navigate("/rechargelist");
    //       }}
    //     >
    //       <div className="propertycenter-11">
    //         <div className="propertycenter-12"></div>
    //         <img
    //           src="/ICON/20.png"
    //           className="propertycenter-13"
    //         />
    //         <div className="propertycenter-14">
    //           <div className="propertycenter-15">
    //             <div className="propertycenter-16"></div>
    //           </div>
    //           <div className="propertycenter-17">
    //             <div className="propertycenter-18"></div>
    //           </div>
    //         </div>
    //       </div>
    //       <p className="propertycenter-19">
    //         <div className="propertycenter-20">{translate(getText("入金"))}</div>
    //       </p>
    //     </div>
    //     <div
    //       className="propertycenter-21"
    //       onClick={() => {
    //         navigate("/extractlist");
    //       }}
    //     >
    //       <div className="propertycenter-22">
    //         <div className="propertycenter-23"></div>
    //         <img
    //           src="/ICON/21.png"
    //           className="propertycenter-24"
    //         />
    //         <div className="propertycenter-25">
    //           <div className="propertycenter-26">
    //             <div className="propertycenter-27"></div>
    //           </div>
    //           <div className="propertycenter-28">
    //             <div className="propertycenter-29"></div>
    //           </div>
    //         </div>
    //       </div>
    //       <p className="propertycenter-30">
    //         <div className="propertycenter-31">{translate(getText("出金"))}</div>
    //       </p>
    //     </div>
    //     <div className="propertycenter-32" onClick={()=>{
    //       navigate("/addresslist");
    //     }}>
    //       <div className="propertycenter-33">
    //         <div className="propertycenter-34"></div>
    //         <img
    //           src="/ICON/22.png"
    //           className="propertycenter-35"
    //         />
    //         <div className="propertycenter-36">
    //           <div className="propertycenter-37">
    //             <div className="propertycenter-38"></div>
    //           </div>
    //           <div className="propertycenter-39">
    //             <div className="propertycenter-40"></div>
    //           </div>
    //         </div>
    //       </div>
    //       <p className="propertycenter-41">
    //         <div className="propertycenter-42">{translate(getText("地址"))}</div>
    //       </p>
    //     </div>
    //   </div>
    //   <div className="propertycenter-43">
    //     <div className="propertycenter-44">
    //       <div className="propertycenter-45">
    //         <div className="propertycenter-46">
    //           <div className="propertycenter-47">
    //             <div className="propertycenter-48">
    //               <div className="propertycenter-49">
    //                 <div className="propertycenter-50">
    //                   <div id="u-tab-item-0" className="propertycenter-51">
    //                     {translate(getText("賬戶資產"))}
    //                   </div>
    //                   {/* <div className="propertycenter-52">幣幣資產</div> */}
    //                   <div className="propertycenter-53"></div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <ul className="propertycenter-54">
    //     <li className="propertycenter-55">
    //       <div className="propertycenter-56">
    //         <h1 className="propertycenter-57">USDT</h1>
    //       </div>
    //       <div className="propertycenter-58">
    //         <div className="propertycenter-59">
    //           <div className="propertycenter-60">{translate(getText("可用"))}(USDT)</div>
    //           <div className="propertycenter-61">{translate(getText("處理中"))}(USDT)</div>
    //           <div className="propertycenter-62">{translate(getText("折合"))}(USDT)</div>
    //         </div>
    //         <div className="propertycenter-63">
    //           <div className="propertycenter-64">{userInfo?.usdt?.toFixed(2)}</div>
    //           <div className="propertycenter-65">0.00</div>
    //           <div className="propertycenter-66">{userInfo?.usdt?.toFixed(2)}</div>
    //         </div>
    //       </div>
    //     </li>
    //   </ul>
    // </div>
  );
}
