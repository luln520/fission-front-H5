import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CenterPage({ kjInfo, userCoinInfo, bubKj }) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const { t: translate } = useTranslation();
  return (
    <div className="lockupKJInfo-1">
      <div className="lockupKJInfo-2">
        <img
          alt=""
          src={imageConfig.baseImageUrl+kjInfo?.imgs}
          className="lockupKJInfo-3"
        />
        <div className="lockupKJInfo-4">
          <span className="lockupKJInfo-5">
            {translate(getText("獲得UDST"))}
          </span>
          <span className="lockupKJInfo-6">{kjInfo?.title}</span>
        </div>
        <div className="lockupKJInfo-7">
          <span className="lockupKJInfo-8">
            {translate(getText("近日(日收益)"))}
          </span>
          <span className="lockupKJInfo-9">{kjInfo.dayoutnum}%</span>
        </div>
      </div>
      <div className="lockupKJInfo-10">
        <div className="lockupKJInfo-11">
          <div className="lockupKJInfo-12">
            <span className="lockupKJInfo-13">
              {kjInfo.cycle}
              {translate(getText("(天)"))}
            </span>
            <span className="lockupKJInfo-14">
              {translate(getText("理財周期"))}
            </span>
          </div>
          <div className="lockupKJInfo-15">
            <span className="lockupKJInfo-16">
              {kjInfo.min}~{kjInfo.max}
            </span>
            <span className="lockupKJInfo-17">
              {translate(getText("單筆限額"))}
            </span>
          </div>
        </div>
        <div className="lockupKJInfo-18"></div>
        <div className="lockupKJInfo-19">
          <div className="lockupKJInfo-20">
            <span className="lockupKJInfo-21">
              {translate(getText("派息時間"))}
            </span>
            <span className="lockupKJInfo-22">
              {translate(getText("到期結算"))}
            </span>
          </div>
          <div className="lockupKJInfo-23">
            <span className="lockupKJInfo-24">
              {translate(getText("託管資金"))}
            </span>
            <span className="lockupKJInfo-25">
              {translate(getText("到期返回"))}
            </span>
          </div>
        </div>
      </div>
      <div className="lockupKJInfo-29">
        <div className="lockupKJInfo-30">
          <span className="lockupKJInfo-31">
            {translate(getText("預估收益(USDT)"))}
          </span>
          <span className="lockupKJInfo-32">
            {((num * kjInfo?.dayoutnum) / 100).toFixed(4)}
          </span>
        </div>
        <div className="lockupKJInfo-33">
          <span className="lockupKJInfo-34">
            {translate(getText("可用資產(USDT)"))}
          </span>
          <span className="lockupKJInfo-35">{userCoinInfo?.usdt}</span>
        </div>
      </div>
      <div className="lockupKJInfo-36">
        <div className="lockupKJInfo-37">
          <span className="lockupKJInfo-38">
            {translate(getText("投資金額"))}
          </span>
        </div>
        <div className="lockupKJInfo-39">
          <input
            name="num"
            type="number"
            placeholder={translate(getText("請輸入投資金額"))}
            className="lockupKJInfo-40"
            min={1}
            value={num}
            onChange={(e) => {
              let value = parseInt(e.target.value);
              setNum(value);
            }}
          />
          <div className="lockupKJInfo-41">
            <span className="lockupKJInfo-42">USDT</span>
            <span
              className="lockupKJInfo-43"
              onClick={() => {
                setNum(userCoinInfo?.usdt);
              }}
            >
              {translate(getText("全部"))}
            </span>
          </div>
        </div>
      </div>
      <div className="lockupKJInfo-44">
        <span className="lockupKJInfo-45">
          {translate(getText("挖礦賺不停"))}
        </span>
        <span className="lockupKJInfo-46">
          {translate(
            getText(
              "鎖倉挖礦是通過將USDT託管給平台超算力礦機在平台礦池中進行挖礦收益"
            )
          )}
        </span>
      </div>
      <button
        className="lockupKJInfo-47"
        onClick={() => {
          bubKj({ kid: kjInfo.id, buynum: num });
        }}
      >
        <div className="lockupKJInfo-48">
          <span className="lockupKJInfo-49">{translate(getText("認購"))}</span>
        </div>
      </button>
    </div>
  );
}
