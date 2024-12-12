import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CenterPage() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div className="lokup-1">
      <div className="lokup-2">
        <span className="lokup-3">{translate(getText("挖礦賺不停"))}</span>
      </div>
      <div className="lokup-4">
        <span className="lokup-5">
          {translate(
            getText(
              "鎖倉挖礦是通過將USDT託管給平台超算力礦機在平台礦池中進行挖礦收益"
            )
          )}
        </span>
      </div>
      <div className="lokup-6">
        <div className="lokup-7">
          <span className="lokup-8">{translate(getText("產品亮點"))}</span>
        </div>
        <div className="lokup-9">
          <div className="lokup-10">
            <div className="lokup-11">
              <span className="lokup-12">{translate(getText("隨存隨取"))}</span>
            </div>
            <div className="lokup-13">
              <span className="lokup-14">{translate(getText("派息周期"))}</span>
            </div>
          </div>
          <div className="lokup-15">
            <div className="lokup-16">
              <span className="lokup-17">{translate(getText("每日下發"))}</span>
            </div>
            <div className="lokup-18">
              <span className="lokup-19">{translate(getText("活期利息"))}</span>
            </div>
          </div>
        </div>
        <div className="lokup-20">
          <div className="lokup-21">
            <img src="/lokup/0.svg" alt="" className="lokup-22" />
            <div className="lokup-23">
              <span className="lokup-24">
                {translate(getText("100%資金安全保障"))}
              </span>
            </div>
          </div>
          <div className="lokup-21">
            <img src="/lokup/1.svg" alt="" className="lokup-22" />
            <div className="lokup-27">
              <span className="lokup-28">
                {translate(getText("節假日收益不間斷"))}
              </span>
            </div>
          </div>
          <div className="lokup-21">
            <img src="/lokup/2.svg" alt="" className="lokup-22" />
            <div className="lokup-31">
              <span className="lokup-32">
                {translate(getText("成功存入後當前起息"))}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="lokup-33">
        <div className="lokup-34">
          <span className="lokup-35">{translate(getText("舉個例子"))}</span>
        </div>
        <div className="lokup-36">
          <span className="lokup-37">{translate(getText("計算收益"))}</span>
          <span
            className="lokup-38"
            dangerouslySetInnerHTML={{
              __html: translate(
                getText(
                  "會員在平台鎖倉10000U，選擇了周期為5天，日產出為鎖倉金額的0.3%的理財產品，則每天產出如下：<br>10000UX0.3%=30U</br> 即5天後可以獲得150U的收益，鎖倉本金到期後，本金收益自動轉入您的資產帳戶。"
                )
              ),
            }}
          ></span>
        </div>
      </div>
      <div className="lokup-41">
        <div className="lokup-42">
          <span className="lokup-43">{translate(getText("關於違約金"))}</span>
          <span
            className="lokup-44"
            dangerouslySetInnerHTML={{
              __html: translate(
                getText(
                  "若您希望轉出未到期的本金，則會產生違約金，違約金=違約結算比例*剩餘天數*鎖倉數量。 <br>舉例:該鎖倉挖礦的違約結算比例為0.4%，剩餘3天到期，鎖倉數量為1000，則違約金=0.4%*3*1000=12U。 違約金將直接從本金中扣除。</br>"
                )
              ),
            }}
          ></span>
        </div>
      </div>
      <button
        className="lokup-47"
        onClick={() => {
          navigate("/lockUp");
        }}
      >
        <div className="lokup-48">
          <span className="lokup-49">{translate(getText("我要參與"))}</span>
        </div>
      </button>
    </div>
  );
}
