import { Empty } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function EndList({ userkjList }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const getNode = () => {
    const nodes = [];
    for (let index = 0; index < userkjList.length; index++) {
      const data = userkjList[index];
      if (data.status !== 1) {
        const node = (
          <div className="lockupKJOrderList-2">
            <div className="lockupKJOrderList-3">
              <div className="lockupKJOrderList-4">
                <div className="lockupKJOrderList-5">
                  <img
                    alt=""
                    src={imageConfig.baseImageUrl+data.imgs}
                    className="lockupKJOrderList-6"
                  />
                  <span className="lockupKJOrderList-7">{data.kjtitle}</span>
                  <span className="lockupKJOrderList-8">{data.endtime}</span>
                </div>
                <div className="lockupKJOrderList-9">
                  <div className="lockupKJOrderList-10">
                    <span className="lockupKJOrderList-11">
                      {translate(getText("購買金額"))}
                    </span>
                    <span className="lockupKJOrderList-12">{data.buynum}</span>
                  </div>
                  <div className="lockupKJOrderList-13">
                    <span className="lockupKJOrderList-14">
                      {translate(getText("日收益率"))}
                    </span>
                    <span className="lockupKJOrderList-15">{data.outnum}%</span>
                  </div>
                  <div className="lockupKJOrderList-16">
                    <span className="lockupKJOrderList-17">
                      {translate(getText("收益次数"))}
                    </span>
                    <span className="lockupKJOrderList-18">{data.synum}</span>
                  </div>
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
  return (
    <div className="lockupKJOrderList-1">
      {getNode()}

      <div className="lockupKJOrderList-19"></div>
    </div>
  );
}
