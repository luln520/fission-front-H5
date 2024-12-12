import { Empty } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function RunList({ userkjList }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const getNode = () => {
    const nodes = [];
    for (let index = 0; index < userkjList.length; index++) {
      const data = userkjList[index];
      if (data.status === 1) {
        const node = (
          <div className="lockUpRuning-2">
            <div className="lockUpRuning-3">
              <div className="lockUpRuning-4">
                <img
                  alt=""
                  src="/lockUpRuning/656af96c028d3.png"
                  className="lockUpRuning-5"
                />
                <span className="lockUpRuning-6">{data.kjtitle}</span>
              </div>
              <div className="lockUpRuning-10">
                <div className="lockUpRuning-11">
                  <span className="lockUpRuning-12">{translate(getText("購買金額"))}</span>
                  <span className="lockUpRuning-13">{data.buynum}</span>
                </div>
                <div className="lockUpRuning-14">
                  <span className="lockUpRuning-15">{translate(getText("今日收益"))}</span>
                  <span className="lockUpRuning-16">{data.outnum}</span>
                </div>
              </div>
              <div className="lockUpRuning-17">
                <div className="lockUpRuning-18">
                  <span className="lockUpRuning-19">{translate(getText("支付時間"))}</span>
                  <span className="lockUpRuning-20">{data.addtime}</span>
                </div>
                <div className="lockUpRuning-21">
                  <span className="lockUpRuning-22">{translate(getText("收益次数"))}</span>
                  <span className="lockUpRuning-23">{data.synum}</span>
                </div>
                <div className="lockUpRuning-24">
                  <span className="lockUpRuning-25">{translate(getText("周期"))}</span>
                  <span className="lockUpRuning-26">{data.cycle}</span>
                </div>
              </div>
            </div>
          </div>
        );
        nodes.push(node);
      }
    }
    //判断空
    if (nodes.length === 0) {
      nodes.push(<Empty description={translate(getText("暂无更多了"))} />);
    }
    return nodes;
  };
  return <div className="lockUpRuning-1">{getNode()}</div>;
}
