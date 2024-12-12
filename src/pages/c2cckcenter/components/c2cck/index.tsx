import { useTranslation } from "react-i18next";
import { Dropdown, Input, message, Select, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";
import { useEffect, useState } from "react";

export default function C2CCK({
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
  const [currency, setcurrency] = useState({} as any);
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

  useEffect(() => {
    for (const currency of currencylist) {
      if (currency.id == currencyId) {
        setcurrency(currency);
      }
    }
  }, [currencyId]);

  return (
    <div className="custom-dialog-content-1">
      <Select
        value={currencyId}
        style={{ width: "100%", height: "50px" }}
        placeholder={translate(getText("请选择货币"))}
        options={getArray()}
        dropdownStyle={{ zIndex: 9999, maxHeight: 200 }}
        onChange={(val) => {
          setcurrencyId(val);
          for (const currency of currencylist) {
            if (currency.id == val) {
              setcurrency(currency);
            }
          }
        }}
      />
      <Select
        style={{ width: "100%", height: "50px", marginTop: 15 }}
        placeholder={translate(getText("请选择银行卡类型"))}
        options={bankTypeArray}
        dropdownStyle={{ zIndex: 9999 }}
        onChange={(val) => {
          setbankType(val);
        }}
      />
      {/* <div className="custom-dialog-content-1089">
        <div className="custom-dialog-content-1090">
          <div className="custom-dialog-content-1091">
            <div className="custom-dialog-content-1092">
              <input
                type="text"
                inputmode="decimal"
                id="van-field-1-input"
                placeholder="请输入交易金额"
                className="custom-dialog-content-1093"
                onChange={(e) => {
                  setNum(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          overflow: "hidden",
          width: "300px",
        }}
      >
        <Input
          type="text"
          placeholder={translate(getText("交易金额"))}
          className="c2cinputnum"
          value={num}
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
        <div
          style={{
            lineHeight: "50px",
            height: "50px",
            marginTop: 16,
            marginLeft: 10,
            color: "var(--boutton-background-color)",
          }}
        >
          {currency?.currency}
        </div>
        <img src="/c2cck/change.png" className="changeImg" />
        <div className="rightHLDiv">
          <Input
            disabled={true}
            type="text"
            placeholder={translate(getText("兑换金额"))}
            className="c2cinputnum2"
            value={num && currency?.rate && (num / currency?.rate).toFixed(2)}
          />
          USDT
        </div>
      </div>
      <div className="custom-dialog-content-1094">
        {translate(
          getText(
            "您的C2C交易由系統自動匹配商家，法幣兌換數字貨幣是按照國際實時匯率進行交易。匹配到商家後，請必須注意備註信息內的收款銀行的必要信息以及標註信息的題目，並且請在規定時間內完成交易，如果超時完成造成的損失由您自行承擔"
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
