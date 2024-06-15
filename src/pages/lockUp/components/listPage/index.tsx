import { Empty } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function ListPage({ kjList }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const getkjNodes = () => {
    const nodes = [];
    for (const data of kjList) {
      const node = (
        <>
          <div
            className="lockupKJList-2"
            onClick={() => {
              navigate("/lockUpInfo/" + data.id);
            }}
          >
            <div className="lockupKJList-3">
              <div className="lockupKJList-4">
                <img
                  alt=""
                  src={imageConfig.baseImageUrl+data.imgs}
                  className="lockupKJList-5"
                />
                <span className="lockupKJList-6">{data.title}</span>
                <button className="lockupKJList-7">
                  <div className="lockupKJList-8">
                    <span className="lockupKJList-9">
                      {translate(getText("去買入"))}
                    </span>
                  </div>
                </button>
              </div>
              <div className="lockupKJList-10">
                <div className="lockupKJList-11">
                  <span className="lockupKJList-12">
                    {translate(getText("單筆限額"))}
                  </span>
                  <span className="lockupKJList-13">
                    {data.min}~{data.max}
                  </span>
                </div>
                <div className="lockupKJList-14">
                  <span className="lockupKJList-15">
                    {translate(getText("日收益率"))}
                  </span>
                  <span className="lockupKJList-16">{data.dayoutnum}%</span>
                </div>
                <div className="lockupKJList-17">
                  <span className="lockupKJList-18">
                    {translate(getText("周期"))}
                  </span>
                  <span className="lockupKJList-19">
                    {data.cycle}{translate(getText("(天)"))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      );
      nodes.push(node);
    }
    //判断空
    if (nodes.length === 0) {
      nodes.push(<Empty description={translate(getText("暂无更多了"))} />);
    }
    return nodes;
  };
  return (
    <div role="feed" className="lockupKJList-1">
      {getkjNodes()}
      <div className="lockupKJList-20"></div>
    </div>
  );
}
