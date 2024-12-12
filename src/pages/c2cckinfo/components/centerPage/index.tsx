import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import copy from "copy-to-clipboard";
import { Cell, Dialog } from "react-vant";
import "./index.css";
import { Button } from "antd";
import { Toast } from "antd-mobile";
import { useState } from "react";

export default function CenterPage({ info, closeOrder }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [visible, setVisible] = useState(false);
  const statusStr = [
    translate(getText("待支付")),
    translate(getText("审核通过")),
    translate(getText("审核拒绝")),
    translate(getText("分配卡号")),
    translate(getText("取消订单")),
    translate(getText("审核中")),
  ];
  const statusStr2 = [
    translate(getText("审核中")),
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
  const handleCopy = (value) => {
    if (copy(value)) {
      Toast.show({ content: translate(getText("成功")) });
    }
  };
  return (
    <div id="depositDetails" class="depositDetails-1">
      <div class="depositDetails-2">
        <div class="depositDetails-3">
          {(info?.status == 1 || info?.status == 4 || info?.status == 6) && (
            <img
              src="/depositDetails/icon_wait.svg"
              alt=""
              class="depositDetails-4"
            />
          )}
          {info?.status == 2 && (
            <img
              src="/depositDetails/success.svg"
              alt=""
              class="depositDetails-4"
            />
          )}
          {(info?.status == 3 || info?.status == 5) && (
            <img
              src="/depositDetails/error.svg"
              alt=""
              class="depositDetails-4"
            />
          )}
        </div>
        {info.type == 1 && (
          <h4 class="depositDetails-5">{statusStr[info?.status - 1]}</h4>
        )}
        {info.type == 2 && (
          <h4 class="depositDetails-5">{statusStr2[info?.status - 1]}</h4>
        )}
      </div>
      <div class="depositDetails-6">
        <div class="depositDetails-7">
          <div class="depositDetails-8">
            <div class="depositDetails-9">
              <span class="depositDetails-10">
                {translate(getText("訂單號"))}
              </span>
            </div>
            <div class="depositDetails-11">
              <span class="depositDetails-12">{info?.orderNo}</span>
            </div>
            <img
              src="/depositDetails/icon_copy.svg"
              alt=""
              class="depositDetails-13"
              onClick={() => {
                handleCopy(info?.orderNo);
              }}
            />
          </div>
          <div class="depositDetails-14">
            <div class="depositDetails-15">
              <span class="depositDetails-16">
                {translate(getText("時間"))}
              </span>
            </div>
            <div class="depositDetails-17">
              <span class="depositDetails-18">{info?.createTime}</span>
            </div>
          </div>
          <div class="depositDetails-19">
            <div class="depositDetails-20">
              <span class="depositDetails-21">
                {translate(getText("交易金額"))}
              </span>
            </div>
            <div class="depositDetails-22">
              <span class="depositDetails-23">{info?.czNum}</span>
            </div>
          </div>
          <div class="depositDetails-19">
            <div class="depositDetails-20">
              <span class="depositDetails-21">
                {translate(getText("銀行卡"))}
              </span>
            </div>
            <div class="depositDetails-22">
              <span class="depositDetails-23">
                {bankTypeStr[info?.bankType - 1]}
              </span>
            </div>
          </div>
          <div class="depositDetails-19">
            <div class="depositDetails-20">
              <span class="depositDetails-21">
                {translate(getText("银行卡号"))}
              </span>
            </div>
            <div class="depositDetails-22">
              <span class="depositDetails-23">{info?.twC2cBank?.bankNo}</span>
            </div>
          </div>
          <div class="depositDetails-19">
            <div class="depositDetails-20">
              <span class="depositDetails-21">
                {translate(getText("收款人姓名"))}
              </span>
            </div>
            <div class="depositDetails-22">
              <span class="depositDetails-23">{info?.twC2cBank?.name}</span>
            </div>
          </div>
          <div class="depositDetails-44">
            <div class="depositDetails-45">
              <span class="depositDetails-46">
                {translate(getText("备注信息"))}
              </span>
            </div>
            <div class="depositDetails-47">
              <span class="depositDetails-48">{info?.remark}</span>
            </div>
          </div>
          {info?.status == 4 && (
            <div>
              <Button
                type="primary"
                block
                style={{
                  height: 50,
                  backgroundColor: "var(--boutton-background-color)",
                }}
                onClick={() => {
                  setVisible(true);
                }}
              >
                {translate(getText("取消订单"))}
              </Button>
            </div>
          )}
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
      </div>
    </div>
  );
}
