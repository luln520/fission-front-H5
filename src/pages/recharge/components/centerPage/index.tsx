<<<<<<< HEAD
import { useTranslation } from "react-i18next";
import { SwapOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import copy from "copy-to-clipboard";
import { Cell, Dialog } from "react-vant";
import "./index.css";
import { Button, Image, Input, Upload } from "antd";
import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import QRCode from "qrcodejs2";
import { imageConfig } from "../../../../config/config";

export default function CenterPage({
  coinList,
  sendRecharge,
  use,
  setUse,
  coinPriceData,
}) {
  const navigate = useNavigate();
  const [addrId, setAddrId] = useState(0);
  const [img, setImg] = useState("");
  const [num, setNum] = useState("");
  const { t: translate } = useTranslation();
  let qrcode = null;

  //上传
  const handleChange = (info) => {
    if (info.file.status === "done") {
      if (info.file.response && info.file.response.ok) {
        Toast.show({
          content: `${info.file.name} ${translate(getText("上傳成功"))}`,
        });
        const data = info.file.response;
        setImg(data.data);
      } else {
        Toast.show({ content: translate(getText("上传失败")) });
      }
    } else if (info.file.status === "error") {
      Toast.show({ content: translate(getText("上传失败")) });
    }
  };

  const creatQrCode = () => {
    let text = use?.czaddress;
    document.getElementById("qrcode").innerHTML = "";
    qrcode = new QRCode(document.getElementById("qrcode"), {
      text: text, //二维码内容字符串
      width: 100, //图像宽度
      height: 100, //图像高度
      colorDark: "#000000", //二维码前景色
      colorLight: "#ffffff", //二维码背景色
      correctLevel: QRCode.CorrectLevel.H, //容错级别
    });
  };

  const handleCopy = (value) => {
    if (copy(value)) {
      Toast.show({ content: translate(getText("成功")) });
    }
  };
  useEffect(() => {
    creatQrCode();
  }, [use]);
  return (
    <div className="recharge-1">
      <div className="recharge-2">
        <div className="recharge-3">
          <div className="recharge-4">
            <div className="qrcodeDiv">
              <div className="qrcodeiconDiv">
                <div className="qrcodeiconDiv1"></div>
                <div className="qrcodeiconDiv2"></div>
                <div className="qrcodeiconDiv3"></div>
                <div className="qrcodeiconDiv4"></div>
                <div id="qrcode" className="rechargeCenterInfo-4"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="recharge-7">
          <div className="recharge-8">{translate(getText("保存二維碼"))}</div>
        </div>
        <div className="recharge-9">
          <div className="recharge-10">
            <h1 className="recharge-11">{translate(getText("充幣地址"))}</h1>
            <p className="recharge-12">
              <br className="recharge-13" />
            </p>
            <p className="recharge-14">{use?.czaddress}</p>
          </div>
          <div
            className="recharge-15"
            onClick={() => {
              handleCopy(use?.czaddress);
            }}
          >
            <div className="recharge-16">{translate(getText("複製地址"))}</div>
          </div>
        </div>
        <div className="recharge-17">
          <div className="recharge-18">
            <ul className="recharge-19">
              <li className="recharge-20">
                <p className="recharge-21">{translate(getText("充幣數量"))}({use?.name?.toUpperCase()})</p>
                <div className="recharge-22">
                  <div className="recharge-23">
                    <div className="recharge-24"></div>
                    <input
                      type="number"
                      id="usdtmoney"
                      name="usdtmoney"
                      autocomplete="off"
                      style={{
                        height: "43px",
                        width: "70%",
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
                      className="recharge-25"
                    />
                  </div>
                </div>
              </li>

              {/* 存在显示 转化 */}
              {coinPriceData?.close != undefined && (
                <>
                  <div>
                    <SwapOutlined
                      style={{
                        transform: "rotate(90deg)",
                        color: "var(--boutton-background-color)",
                        fontSize: 18,
                        border: "2px solid var(--boutton-background-color)",
                        borderRadius: "50%",
                        padding: "5px 5px",
                      }}
                    />
                  </div>
                  <li className="recharge-20">
                    <p className="recharge-21">{translate(getText("转化數量"))}(USDT)</p>
                    <div className="recharge-22">
                      <div className="recharge-23">
                        <input
                          disabled
                          type="number"
                          id="usdtmoney"
                          name="usdtmoney"
                          autocomplete="off"
                          style={{
                            height: "43px",
                            width: "70%",
                          }}
                          value={
                            `${num * coinPriceData?.close}` == "NaN"
                              ? coinPriceData?.close == undefined
                                ? num
                                  ? num
                                  : 0
                                : num
                                ? "..."
                                : 0
                              : (num * coinPriceData?.close).toFixed(2)
                          }
                          className="recharge-25"
                        />
                      </div>
                    </div>
                  </li>
                </>
              )}
              <li className="recharge-26">
                <p className="recharge-27">{translate(getText("上傳支付詳情截圖"))}</p>
                <div className="">
                  <Upload
                    name="file"
                    listType="picture-card"
                    accept="image/*"
                    showUploadList={false}
                    action={imageConfig.uploadUrl}
                    onChange={handleChange}
                  >
                    <Image
                      preview={false}
                      style={{
                        maxHeight: "100px",
                        maxWidth: "100px",
                      }}
                      src={imageConfig.baseImageUrl + img}
                      fallback="data:image/png;base64,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"
                    />
                  </Upload>
                  {/* <div className="recharge-29">
                    <img
                      src="/img/img-add.png"
                      className="recharge-31"
                    />
                  </div>
                  <p className="recharge-32">{translate(getText("點擊上傳圖片"))}</p> */}
                </div>
              </li>
            </ul>
            <div
              className="recharge-33"
              onClick={() => {
                if (!num) {
                  return;
                }
                if (
                  coinPriceData?.close != undefined &&
                  !coinPriceData?.close
                ) {
                  return;
                }
                sendRecharge({
                  coinname: use.name,
                  czaddress: use.czaddress,
                  payimg: img,
                  currenyNum: num,
                  currenyName: use?.name?.toUpperCase(),
                  zznum:
                    `${num * coinPriceData?.close}` == "NaN"
                      ? num
                      : num * coinPriceData?.close,
                  czline: use.czline,
                });
                setNum("");
                setImg("");
              }}
            >
              <div className="recharge-34">{translate(getText("提交"))}</div>
            </div>
          </div>
        </div>
        <div className="recharge-35"></div>
      </div>
    </div>
  );
}
=======
import { useTranslation } from "react-i18next";
import { SwapOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import copy from "copy-to-clipboard";
import { Cell, Dialog } from "react-vant";
import "./index.css";
import { Button, Image, Input, Upload } from "antd";
import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import QRCode from "qrcodejs2";
import { imageConfig } from "../../../../config/config";

export default function CenterPage({
  coinList,
  sendRecharge,
  use,
  setUse,
  coinPriceData,
}) {
  const navigate = useNavigate();
  const [addrId, setAddrId] = useState(0);
  const [img, setImg] = useState("");
  const [num, setNum] = useState("");
  const { t: translate } = useTranslation();
  let qrcode = null;

  //上传
  const handleChange = (info) => {
    if (info.file.status === "done") {
      if (info.file.response && info.file.response.ok) {
        Toast.show({
          content: `${info.file.name} ${translate(getText("上傳成功"))}`,
        });
        const data = info.file.response;
        setImg(data.data);
      } else {
        Toast.show({ content: translate(getText("上传失败")) });
      }
    } else if (info.file.status === "error") {
      Toast.show({ content: translate(getText("上传失败")) });
    }
  };

  const creatQrCode = () => {
    let text = use?.czaddress;
    document.getElementById("qrcode").innerHTML = "";
    qrcode = new QRCode(document.getElementById("qrcode"), {
      text: text, //二维码内容字符串
      width: 100, //图像宽度
      height: 100, //图像高度
      colorDark: "#000000", //二维码前景色
      colorLight: "#ffffff", //二维码背景色
      correctLevel: QRCode.CorrectLevel.H, //容错级别
    });
  };

  const handleCopy = (value) => {
    if (copy(value)) {
      Toast.show({ content: translate(getText("成功")) });
    }
  };
  useEffect(() => {
    creatQrCode();
  }, [use]);
  return (
    <div class="recharge-1">
      <div class="recharge-2">
        <div class="recharge-3">
          <div class="recharge-4">
            <div className="qrcodeDiv">
              <div className="qrcodeiconDiv">
                <div className="qrcodeiconDiv1"></div>
                <div className="qrcodeiconDiv2"></div>
                <div className="qrcodeiconDiv3"></div>
                <div className="qrcodeiconDiv4"></div>
                <div id="qrcode" className="rechargeCenterInfo-4"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="recharge-7">
          <div class="recharge-8">{translate(getText("保存二維碼"))}</div>
        </div>
        <div class="recharge-9">
          <div class="recharge-10">
            <h1 class="recharge-11">{translate(getText("充幣地址"))}</h1>
            <p class="recharge-12">
              <br class="recharge-13" />
            </p>
            <p class="recharge-14">{use?.czaddress}</p>
          </div>
          <div
            class="recharge-15"
            onClick={() => {
              handleCopy(use?.czaddress);
            }}
          >
            <div class="recharge-16">{translate(getText("複製地址"))}</div>
          </div>
        </div>
        {/*<div class="recharge-17">
          <div class="recharge-18">
            <ul class="recharge-19">
              <li class="recharge-20">
                <p class="recharge-21">{translate(getText("充幣數量"))}({use?.name?.toUpperCase()})</p>
                <div class="recharge-22">
                  <div class="recharge-23">
                    <div class="recharge-24"></div>
                    <input
                      type="number"
                      id="usdtmoney"
                      name="usdtmoney"
                      autocomplete="off"
                      style={{
                        height: "43px",
                        width: "70%",
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
                      class="recharge-25"
                    />
                  </div>
                </div>
              </li>

              {coinPriceData?.close != undefined && (
                <>
                  <div>
                    <SwapOutlined
                      style={{
                        transform: "rotate(90deg)",
                        color: "var(--boutton-background-color)",
                        fontSize: 18,
                        border: "2px solid var(--boutton-background-color)",
                        borderRadius: "50%",
                        padding: "5px 5px",
                      }}
                    />
                  </div>
                  <li class="recharge-20">
                    <p class="recharge-21">{translate(getText("转化數量"))}(USDT)</p>
                    <div class="recharge-22">
                      <div class="recharge-23">
                        <input
                          disabled
                          type="number"
                          id="usdtmoney"
                          name="usdtmoney"
                          autocomplete="off"
                          style={{
                            height: "43px",
                            width: "70%",
                          }}
                          value={
                            `${num * coinPriceData?.close}` == "NaN"
                              ? coinPriceData?.close == undefined
                                ? num
                                  ? num
                                  : 0
                                : num
                                ? "..."
                                : 0
                              : (num * coinPriceData?.close).toFixed(2)
                          }
                          class="recharge-25"
                        />
                      </div>
                    </div>
                  </li>
                </>
              )}
              <li class="recharge-26">
                <p class="recharge-27">{translate(getText("上傳支付詳情截圖"))}</p>
                <div class="">
                  <Upload
                    name="file"
                    listType="picture-card"
                    accept="image/*"
                    showUploadList={false}
                    action={imageConfig.uploadUrl}
                    onChange={handleChange}
                  >
                    <Image
                      preview={false}
                      style={{
                        maxHeight: "100px",
                        maxWidth: "100px",
                      }}
                      src={imageConfig.baseImageUrl + img}
                      fallback="data:image/png;base64,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"
                    />
                  </Upload>
                </div>
              </li>
            </ul>
            <div
              class="recharge-33"
              onClick={() => {
                if (!num) {
                  return;
                }
                if (
                  coinPriceData?.close != undefined &&
                  !coinPriceData?.close
                ) {
                  return;
                }
                sendRecharge({
                  coinname: use.name,
                  czaddress: use.czaddress,
                  payimg: img,
                  currenyNum: num,
                  currenyName: use?.name?.toUpperCase(),
                  zznum:
                    `${num * coinPriceData?.close}` == "NaN"
                      ? num
                      : num * coinPriceData?.close,
                  czline: use.czline,
                });
                setNum("");
                setImg("");
              }}
            >
              <div class="recharge-34">{translate(getText("提交"))}</div>
            </div>
          </div>
        </div>*/}
        <div class="recharge-35"></div>
      </div>
    </div>
  );
}
>>>>>>> 200492d5b0310fcfce9039951debf669ab731894
