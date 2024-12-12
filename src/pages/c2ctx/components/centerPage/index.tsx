import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import copy from "copy-to-clipboard";
import "./index.css";
import { Toast } from "antd-mobile";
import { useState } from "react";

export default function CenterPage({ info, userInfo, sendTx }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const type = 2;
  const [num, setNum] = useState("");
  const [bank, setbank] = useState("");
  const [name, setname] = useState("");
  const [bankNo, setbankNo] = useState("");
  const [bankCode, setbankCode] = useState("");
  const [routeCode, setrouteCode] = useState("");
  const [swift, setswift] = useState("");
  const [bankAddress, setbankAddress] = useState("");
  const [branchCode, setbranchCode] = useState("");
  const [remark, setremark] = useState("");

  return (
    <div className="c2ctx-1">
      <div className="c2ctx-2">
        <div className="c2ctx-3">
          <div className="c2ctx-4">
            <div className="c2ctx-5">
              <label
                id="van-field-2-label"
                for="van-field-2-input"
                className="c2ctx-6"
              >
                {translate(getText("银行名称"))}*
              </label>
            </div>
            <div className="c2ctx-7">
              <div className="c2ctx-8">
                <input
                  type="text"
                  id="van-field-2-input"
                  name="bank_name"
                  placeholder={translate(getText("银行名称"))}
                  aria-labelledby="van-field-2-label"
                  className="c2ctx-9"
                  value={bank}
                  onChange={(e) => {
                    setbank(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="c2ctx-10">
            <div className="c2ctx-11">
              <label
                id="van-field-3-label"
                for="van-field-3-input"
                className="c2ctx-12"
              >
                {translate(getText("收款人姓名"))}*
              </label>
            </div>
            <div className="c2ctx-13">
              <div className="c2ctx-14">
                <input
                  type="text"
                  id="van-field-3-input"
                  name="username"
                  placeholder={translate(getText("收款人姓名"))}
                  aria-labelledby="van-field-3-label"
                  className="c2ctx-15"
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="c2ctx-16">
            <div className="c2ctx-17">
              <label
                id="van-field-4-label"
                for="van-field-4-input"
                className="c2ctx-18"
              >
                {translate(getText("银行卡号"))}*
              </label>
            </div>
            <div className="c2ctx-19">
              <div className="c2ctx-20">
                <input
                  type="text"
                  id="van-field-4-input"
                  name="bank_card_number"
                  placeholder={translate(getText("银行卡号"))}
                  aria-labelledby="van-field-4-label"
                  className="c2ctx-21"
                  value={bankNo}
                  onChange={(e) => {
                    setbankNo(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="c2ctx-22">
            <div className="c2ctx-23">
              <label
                id="van-field-5-label"
                for="van-field-5-input"
                className="c2ctx-24"
              >
                {translate(getText("银行代码"))}
              </label>
            </div>
            <div className="c2ctx-25">
              <div className="c2ctx-26">
                <input
                  type="text"
                  id="van-field-5-input"
                  name="bank_code"
                  placeholder={translate(getText("银行代码"))}
                  aria-labelledby="van-field-5-label"
                  className="c2ctx-27"
                  value={bankCode}
                  onChange={(e) => {
                    setbankCode(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          {/* <div className="c2ctx-28">
            <div className="c2ctx-29">
              <label
                id="van-field-6-label"
                for="van-field-6-input"
                className="c2ctx-30"
              >
                {translate(getText("路由号码"))}
              </label>
            </div>
            <div className="c2ctx-31">
              <div className="c2ctx-32">
                <input
                  type="text"
                  id="van-field-6-input"
                  name="bank_routing_number"
                  placeholder={translate(getText("路由号码"))}
                  aria-labelledby="van-field-6-label"
                  className="c2ctx-33"
                  value={routeCode}
                  onChange={(e) => {
                    setrouteCode(e.target.value);
                  }}
                />
              </div>
            </div>
          </div> */}
          <div className="c2ctx-34">
            <div className="c2ctx-35">
              <label
                id="van-field-7-label"
                for="van-field-7-input"
                className="c2ctx-36"
              >
                {translate(getText("SWIFT代码"))}
              </label>
            </div>
            <div className="c2ctx-37">
              <div className="c2ctx-38">
                <input
                  type="text"
                  id="van-field-7-input"
                  name="swift_code"
                  placeholder={translate(getText("SWIFT代码"))}
                  aria-labelledby="van-field-7-label"
                  className="c2ctx-39"
                  value={swift}
                  onChange={(e) => {
                    setswift(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="c2ctx-40">
            <div className="c2ctx-41">
              <label
                id="van-field-8-label"
                for="van-field-8-input"
                className="c2ctx-42"
              >
                {translate(getText("银行地址"))}
              </label>
            </div>
            <div className="c2ctx-43">
              <div className="c2ctx-44">
                <input
                  type="text"
                  id="van-field-8-input"
                  name="bank_address"
                  placeholder={translate(getText("银行地址"))}
                  aria-labelledby="van-field-8-label"
                  className="c2ctx-45"
                  value={bankAddress}
                  onChange={(e) => {
                    setbankAddress(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          {/* <div className="c2ctx-46">
            <div className="c2ctx-47">
              <label
                id="van-field-9-label"
                for="van-field-9-input"
                className="c2ctx-48"
              >
                {translate(getText("分行号码"))}
              </label>
            </div>
            <div className="c2ctx-49">
              <div className="c2ctx-50">
                <input
                  type="text"
                  id="van-field-9-input"
                  name="bank_branch_number"
                  placeholder={translate(getText("分行号码"))}
                  aria-labelledby="van-field-9-label"
                  className="c2ctx-51"
                  value={branchCode}
                  onChange={(e) => {
                    setbranchCode(e.target.value);
                  }}
                />
              </div>
            </div>
          </div> */}
          <div className="c2ctx-52">
            <div className="c2ctx-53">
              <label
                id="van-field-10-label"
                for="van-field-10-input"
                className="c2ctx-54"
              >
                {translate(getText("备注信息"))}
              </label>
            </div>
            <div className="c2ctx-55">
              <div className="c2ctx-56">
                <textarea
                  id="van-field-10-input"
                  name="remarks"
                  rows="1"
                  placeholder={translate(getText("备注信息"))}
                  aria-labelledby="van-field-10-label"
                  className="c2ctx-57"
                  value={remark}
                  onChange={(e) => {
                    setremark(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="c2ctx-58">
            <div className="c2ctx-59">
              <span className="c2ctx-60">
                <img
                  src="/img/icon_alert_line.bfdebf88.svg"
                  alt=""
                  className="c2ctx-61"
                />
                {translate(getText("提示"))}:
                {translate(
                  getText(
                    "請在備註信息內填寫收款銀行的必要信息以及標註信息的題目"
                  )
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="c2ctx-62">
          <div className="c2ctx-63">
            <div className="c2ctx-64">
              <label className="c2ctx-65">
                {translate(getText("提款数量"))}
              </label>
              <span className="c2ctx-66">
                {translate(getText("可用數量:"))} {userInfo?.usdt} USDT
              </span>
            </div>
            <div modelmodifiers="[object Object]" className="c2ctx-67">
              <div className="c2ctx-68">
                <div className="c2ctx-69">
                  <input
                    type="text"
                    inputmode="decimal"
                    id="van-field-11-input"
                    name="amount"
                    placeholder={translate(getText("請填寫數量"))}
                    className="c2ctx-70"
                    value={num}
                    onChange={(e) => {
                      setNum(e.target.value);
                    }}
                  />
                  <div className="c2ctx-71">
                    <span className="c2ctx-72">USDT</span>
                  </div>
                </div>
              </div>
              <span className="c2ctx-73"></span>
              <span
                className="c2ctx-74"
                onClick={() => {
                  setNum(userInfo?.usdt);
                }}
              >
                {translate(getText("全部"))}
              </span>
            </div>
          </div>
          <div className="c2ctx-75">
            <button
              className="c2ctx-76"
              onClick={() => {
                sendTx({
                  type,
                  num,
                  bank,
                  name,
                  bankNo,
                  bankCode,
                  routeCode,
                  swift,
                  bankAddress,
                  branchCode,
                  remark,
                });
              }}
            >
              <div className="c2ctx-77">
                <span className="c2ctx-78">{translate(getText("提交"))}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
