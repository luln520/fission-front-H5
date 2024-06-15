import { useTranslation } from "react-i18next";
import { Dropdown, message, Select, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";
import { useState } from "react";

export default function C2CTk({
  currencylist,
  num,
  setNum,
  currencyId,
  setcurrencyId,
  bankType,
  setbankType,
}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const getArray = () => {
    const array = [];
    let i = 0;
    for (const currency of currencylist) {
      array.push({
        value: currency.id,
        label: lan == "zh" ? currency.name : currency.currency,
      });
    }
    return array;
  };

  const bankTypeArray = [
    {
      value: 1,
      label: "Visa, Mastercard and JCB",
    },
    {
      value: 4,
      label: "Bank Card",
    },
    {
      value: 2,
      label: "Revolut",
    },
    {
      value: 3,
      label: "Wise",
    },
  ];

  return (
    <div className="custom-dialog-content-1">
      {/* <Select
        style={{ width: "100%", height: "50px" }}
        placeholder={translate(getText("请选择货币"))}
        options={getArray()}
        dropdownStyle={{ zIndex: 9999, maxHeight: 200 }}
        onChange={(val) => {
          setcurrencyId(val);
        }}
      /> */}
      <Select
        style={{ width: "100%", height: "50px", marginTop: 15 }}
        placeholder={translate(getText("请选择银行卡类型"))}
        options={bankTypeArray}
        dropdownStyle={{ zIndex: 9999 }}
        onChange={(val) => {
          setbankType(val);
        }}
      />
      <div className="custom-dialog-content-1094">
        {translate(
          getText(
            "您的C2C交易由系統自動匹配商家，由於國際銀行匯款延時，您的貨幣交易可能會有延遲到賬，虛擬貨幣兌換法幣是按照國際實時匯率進行交易，並且請您正確輸入自己的銀行卡信息"
          )
        )}
      </div>
      <div className="custom-dialog-content-1095">
        {translate(
          getText(
            "請先選擇貨幣，點擊確定表明您已經同意並且閱讀上方提示信息，否則請點取消"
          )
        )}
      </div>
    </div>
  );
}
