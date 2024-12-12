import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import { Image, Upload } from "antd";
import { getText } from "../../../../utils/util";
import copy from "copy-to-clipboard";
import "./index.css";
import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { imageConfig } from "../../../../config/config";
import { Dialog } from "react-vant";

export default function CenterPage({ info, sendCzImg, closeOrder }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const statusStr = [
    translate(getText("待支付")),
    translate(getText("审核通过")),
    translate(getText("审核拒绝")),
    translate(getText("分配卡号")),
    translate(getText("审核中")),
  ];
  const bankTypeStr = [
    "Visa, Mastercard and JCB",
    "Revolut",
    "Wise",
    "Bank Card"
  ];
  const [img, setImg] = useState("");
  const [transferName, settransferName] = useState("");
  const [visible, setVisible] = useState(false);
  const handleCopy = (value) => {
    if (copy(value)) {
      Toast.show({ content: translate(getText("成功")) });
    }
  };

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
  return (
    <div id="c2cckimage" className="c2cckimage-1">
      <div className="c2cckimage-2">
        <div className="c2cckimage-3">
          <div className="c2cckimage-4">{translate(getText("重要提示"))}:</div>
          <ul className="c2cckimage-5">
            <li className="c2cckimage-6">
              1、
              {translate(
                getText(
                  "請在備註信息內填寫收款銀行的必要信息以及標註信息的題目"
                )
              )}
            </li>
            <li className="c2cckimage-7">
              2、
              {translate(
                getText("請在规定时间內完成交易，如果超時完成造成的損失自行承擔")
              )}
            </li>
            <li className="c2cckimage-8">
              3、
              {translate(
                getText("請按照下方提示的銀行卡信息進行轉賬並上傳截圖")
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="c2cckimage-9">
        <div className="c2cckimage-10">
          <div className="c2cckimage-11">
            <div className="c2cckimage-12">
              <span className="c2cckimage-13">
                {translate(getText("银行名称"))}
              </span>
            </div>
            <div className="c2cckimage-14">
              <span className="c2cckimage-15">{info.twC2cBank?.bank}</span>
            </div>
            <img
              src="/depositDetails/icon_copy.svg"
              alt=""
              className="c2cckimage-16"
              onClick={() => {
                handleCopy(info.twC2cBank?.bank);
              }}
            />
          </div>
          <div className="c2cckimage-17">
            <div className="c2cckimage-18">
              <span className="c2cckimage-19">
                {translate(getText("收款人姓名"))}
              </span>
            </div>
            <div className="c2cckimage-20">
              <span className="c2cckimage-21">{info.twC2cBank?.name}</span>
            </div>
            <img
              src="/depositDetails/icon_copy.svg"
              alt=""
              className="c2cckimage-22"
              onClick={() => {
                handleCopy(info.twC2cBank?.name);
              }}
            />
          </div>
          <div className="c2cckimage-23">
            <div className="c2cckimage-24">
              <span className="c2cckimage-25">
                {translate(getText("银行卡号"))}
              </span>
            </div>
            <div className="c2cckimage-26">
              <span className="c2cckimage-27">{info.twC2cBank?.bankNo}</span>
            </div>
            <img
              src="/depositDetails/icon_copy.svg"
              alt=""
              className="c2cckimage-28"
              onClick={() => {
                handleCopy(info.twC2cBank?.bankNo);
              }}
            />
          </div>
          <div className="c2cckimage-29">
            <div className="c2cckimage-30">
              <span className="c2cckimage-31">
                {translate(getText("银行代码"))}
              </span>
            </div>
            <div className="c2cckimage-32">
              <span className="c2cckimage-33">{info.twC2cBank?.bankCode}</span>
            </div>
            <img
              src="/depositDetails/icon_copy.svg"
              alt=""
              className="c2cckimage-34"
              onClick={() => {
                handleCopy(info.twC2cBank?.bankCode);
              }}
            />
          </div>
          {/* <div className="c2cckimage-35">
            <div className="c2cckimage-36">
              <span className="c2cckimage-37">路由号码</span>
            </div>
            <div className="c2cckimage-38">
              <span className="c2cckimage-39">{info.twC2cBank?.routeCode}</span>
            </div>
            <img
              src="/depositDetails/icon_copy.svg"
              alt=""
              className="c2cckimage-40"
              onClick={() => {
                handleCopy(info.twC2cBank?.routeCode);
              }}
            />
          </div> */}
          <div className="c2cckimage-41">
            <div className="c2cckimage-42">
              <span className="c2cckimage-43">
                {translate(getText("SWIFT代码"))}
              </span>
            </div>
            <div className="c2cckimage-44">
              <span className="c2cckimage-45">{info.twC2cBank?.swift}</span>
            </div>
            <img
              src="/depositDetails/icon_copy.svg"
              alt=""
              className="c2cckimage-46"
              onClick={() => {
                handleCopy(info.twC2cBank?.swift);
              }}
            />
          </div>
          <div className="c2cckimage-47">
            <div className="c2cckimage-48">
              <span className="c2cckimage-49">
                {translate(getText("银行地址"))}
              </span>
            </div>
            <div className="c2cckimage-50">
              <span className="c2cckimage-51">
                {info.twC2cBank?.bankAddress}
              </span>
            </div>
            <img
              src="/depositDetails/icon_copy.svg"
              alt=""
              className="c2cckimage-52"
              onClick={() => {
                handleCopy(info.twC2cBank?.bankAddress);
              }}
            />
          </div>
          {/* <div className="c2cckimage-53">
            <div className="c2cckimage-54">
              <span className="c2cckimage-55">分行号码</span>
            </div>
            <div className="c2cckimage-56">
              <span className="c2cckimage-57">
                {info.twC2cBank?.branchCode}
              </span>
            </div>
            <img
              src="/depositDetails/icon_copy.svg"
              alt=""
              className="c2cckimage-58"
              onClick={() => {
                handleCopy(info.twC2cBank?.branchCode);
              }}
            />
          </div> */}
          <div className="c2cckimage-59">
            <div className="c2cckimage-60">
              <span className="c2cckimage-61">
                {translate(getText("备注信息"))}
              </span>
            </div>
            <div className="c2cckimage-62">
              <span className="c2cckimage-63">{info.twC2cBank?.remark}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="c2cckimage-64">
        <div className="c2cckimage-65">
          <div className="c2cckimage-66">
            <div className="c2cckimage-67">
              <div className="c2cckimage-68">
                <label
                  id="van-field-2-label"
                  for="van-field-2-input"
                  className="c2cckimage-69"
                >
                  {translate(getText("转账人姓名"))}
                </label>
              </div>
              <div className="c2cckimage-70">
                <div className="c2cckimage-71">
                  <div className="c2cckimage-72">
                    <div className="c2cckimage-73">
                      <div className="c2cckimage-74">
                        <Input
                          type="text"
                          placeholder={translate(getText("请输入姓名"))}
                          value={transferName}
                          onChange={(e) => {
                            settransferName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="c2cckimage-66">
            <div className="c2cckimage-67">
              <div className="c2cckimage-68">
                <label
                  id="van-field-2-label"
                  for="van-field-2-input"
                  className="c2cckimage-69"
                >
                  {translate(getText("转账交易图片"))}
                </label>
              </div>
              <div className="c2cckimage-70">
                <div className="c2cckimage-71">
                  <div className="c2cckimage-72">
                    <div className="c2cckimage-73">
                      <div className="c2cckimage-74">
                        <div className="c2cckimage-75">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span
              style={{
                color: "var(--boutton-background-color)",
                float: "right",
                margin: "0 5px 15px 0",
              }}
              onClick={() => {
                setVisible(true);
              }}
            >
              {translate(getText("取消订单"))}
            </span>
            {/* 确认弹窗 */}
            <Dialog
              visible={visible}
              title={translate(getText("提示"))}
              confirmButtonText={translate(getText("确认"))}
              cancelButtonText={translate(getText("取消"))}
              showCancelButton
              onConfirm={() => {
                setVisible(false);
                closeOrder();
              }}
              onCancel={() => setVisible(false)}
            >
              <div
                style={{
                  margin: "10px 0",
                  textAlign: "center",
                }}
              >
                {translate(getText("是否确认取消订单"))}？
              </div>
            </Dialog>
          </div>
          <div className="c2cckimage-79">
            <button
              className="c2cckimage-80"
              onClick={() => {
                if (img) {
                  sendCzImg({ img, transferName });
                }
              }}
            >
              <div className="c2cckimage-81">
                <span className="c2cckimage-82">
                  {translate(getText("提交"))}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
