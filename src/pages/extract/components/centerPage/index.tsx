import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import copy from "copy-to-clipboard";
import { Cell, Dialog } from "react-vant";
import "./index.css";
import { Button } from "antd";
import { Card, Divider, Popup, Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { imageConfig } from "../../../../config/config";

export default function CenterPage({
  coinList,
  tbhandle,
  use,
  setUse,
  coinPriceData,
  userInfo,
  addressList,
}) {
  const navigate = useNavigate();
  const [addrId, setAddrId] = useState(0);
  const [img, setImg] = useState("");
  const [num, setNum] = useState("");
  const { t: translate } = useTranslation();
  const [address, setAddress] = useState("");
  const [visible, setVisible] = useState(false);
  let cid = 0;

  //点击回调提前处理
  const callBack = () => {
    if (!num) {
      return;
    }
    if (coinPriceData?.close != undefined && !coinPriceData?.close) {
      return;
    }
    if (!(address && num > 0)) {
      Toast.show({ content: translate(getText("请输入正确信息")) });
      return;
    }
    tbhandle({
      cid,
      num,
      address,
      num: num,
      currenyName: use?.name?.toUpperCase(),
      currenyNum:
        `${num / coinPriceData?.close}` == "NaN"
          ? num
          : num / coinPriceData?.close,
    });
    setTimeout(() => {
      setNum("");
      setAddress("");
    }, 500);
  };

  useEffect(() => {
    cid = coinList[0]?.id;
  });

  return (
    <div class="extract-1">
      <div class="extract-2">
        <div class="extract-3">
          <div class="extract-4">
            <ul class="extract-5">
              <li class="extract-6">
                <div class="extract-7">
                  <img
                    src={imageConfig.baseImageUrl + use?.img}
                    class="extract-9"
                  />
                  <div class="extract-10">
                    <div class="extract-11">
                      <div class="extract-12"></div>
                    </div>
                    <div class="extract-13">
                      <div class="extract-14"></div>
                    </div>
                  </div>
                </div>
                <p class="extract-15">
                  {use?.name?.toUpperCase()} {translate(getText("提現"))}
                </p>
              </li>
              {/* <li class="extract-16">
                <p class="extract-17">鏈地址</p>
                <div class="extract-18">
                  <div class="extract-19">
                    <div class="extract-20">
                      <span class="extract-21">ERC20</span>
                    </div>
                  </div>
                  <div class="extract-22">
                    <div class="extract-23">
                      <span class="extract-24">TRC20</span>
                    </div>
                  </div>
                </div>
              </li> */}
              <li class="extract-25">
                <p class="extract-26">{translate(getText("提幣地址"))}</p>
                <div class="extract-27">
                  <div
                    class="extract-28"
                    onClick={() => {
                      setVisible(true);
                    }}
                  >
                    <input
                      style={{
                        pointerEvents: "none",
                      }}
                      class="extract-30"
                      placeholder={translate(getText("請輸入提幣地址"))}
                      value={address}
                    />
                  </div>
                </div>
              </li>
              <li class="extract-31">
                <p class="extract-32">{translate(getText("提幣數量"))}(USDT)</p>
                <div class="extract-33">
                  <div class="extract-34">
                    <input
                      type="number"
                      class="extract-36"
                      placeholder={translate(getText("請輸入提幣數量"))}
                      type="number"
                      id="usdtmoney"
                      name="usdtmoney"
                      autocomplete="off"
                      style={{
                        height: "43px",
                      }}
                      value={num}
                      onChange={(e) => {
                        if (e.target.value === "") {
                          setNum("");
                        }
                        if (/^[0-9]+(\.[0-9]{0,5})?$/.test(e.target.value)) {
                          setNum(e.target.value);
                        }
                      }}
                    />
                  </div>
                </div>
                <div class="extract-37">
                  <span class="extract-38">
                    {translate(getText("可用:"))}
                    {userInfo?.usdt} USDT
                  </span>
                </div>
              </li>
            </ul>
            <div class="extract-50">
              <div class="extract-51">
                {translate(getText("預計到賬數量："))}
                {`${num / coinPriceData?.close}` == "NaN"
                  ? num
                  : (num / coinPriceData?.close).toFixed(6)}{" "}
                {use?.name?.toUpperCase()}
              </div>
              <div
                class="extract-52"
                onClick={() => {
                  callBack();
                }}
              >
                {translate(getText("提交"))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  地址 */}
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        onClose={() => {
          setVisible(false);
        }}
        bodyStyle={{ height: "40vh", overflowY: "scroll" }}
      >
        {addressList.map((data) => (
          //判断过滤对应数据 name  data?.name == use?.name &&
          <div
            onClick={() => {
              setAddress(data.addr);
              setVisible(false);
            }}
          >
            <div
              className="addressList-6"
              style={{
                height: "auto",
              }}
            >
              <div className="addressList-7">
                <div className="addressList-8">
                  <div className="addressList-9">
                    <span className="addressList-10">
                      {`${data?.name.toUpperCase()}${
                        data.czline ? `-${data.czline}`.toUpperCase() : ""
                      }`}
                    </span>
                    <span className="addressList-11">{data.addr}</span>
                  </div>
                </div>
              </div>
            </div>
            <Divider />
          </div>
        ))}
      </Popup>
    </div>
  );
}
