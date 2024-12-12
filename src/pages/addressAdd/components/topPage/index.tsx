import { Toast } from "antd-mobile";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TopPage({ coinList, addAddress, delAddress }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [sendData, setSendData] = useState({
    name: "",
    czline: "",
    oid: 0,
    address: "",
    remark: "",
  });
  //coin类
  const getCoinNodes = () => {
    const nodes = [];
    for (const coin of coinList) {
      if (coin.name) {
        const node = (
          <>
            <div
              className="addressTop-8"
              onClick={() => {
                setSendData({
                  ...sendData,
                  czline: coin.czline,
                  name: coin.name + coin.czline,
                  oid: coin.id,
                });
              }}
            >
              <div className="addressTop-9">
                <i
                  className={
                    sendData.name === coin.name + coin.czline
                      ? "addressTop-10"
                      : "addressTop-14"
                  }
                ></i>
              </div>
              <span className="addressTop-11">{`${coin?.name.toUpperCase()}${
                coin.czline ? `-${coin.czline}`.toUpperCase() : ""
              }`}</span>
            </div>
          </>
        );
        nodes.push(node);
      }
    }
    return nodes;
  };

  //修改对象值
  const updateSendData = (e) => {
    const name = e.target.name;
    setSendData({
      ...sendData,
      [name]: e.target.value,
    });
  };
  //点击回调提前处理
  const callBack = () => {
    if (!(sendData.name && sendData.address)) {
      Toast.show({ content: translate(getText("請填寫完整信息")) });
      return;
    }
    addAddress(sendData);
  };

  return (
    <div className="addressTop-1">
      <div className="addressTop-2">
        <div className="addressTop-3">{translate(getText("添加地址"))}</div>
        <div className="addressTop-4">
          <div className="addressTop-5">
            <span className="addressTop-6">
              {translate(getText("選擇協議"))}
            </span>
            <div role="radiogroup" className="addressTop-7">
              {getCoinNodes()}
            </div>
          </div>
          <div className="addressTop-24">
            <span className="addressTop-25">
              {translate(getText("錢包地址"))}
            </span>
            <div className="addressTop-26">
              <div className="addressTop-27">
                <div className="addressTop-28">
                  <input
                    type="text"
                    name="address"
                    value={sendData.address}
                    placeholder={translate(getText("提幣地址"))}
                    onChange={updateSendData}
                    className="addressTop-29"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="addressTop-30">
          <div className="addressTop-31" onClick={callBack}>
            {translate(getText("提交"))}
          </div>
        </div>
      </div>
    </div>
  );
}
