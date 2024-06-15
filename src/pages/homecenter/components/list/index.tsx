import { Empty } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function NewsList({ news, newType }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const getNode = () => {
    const nodes = [];
    for (let index = 0; index < news.length; index++) {
      const data = news[index];
      if (newType === data.type) {
        const node = (
          <div
            className="tabsNews-16"
            onClick={() => {
              navigate("/newInfo/"+data.id);
            }}
          >
            <div className="tabsNews-17">
              <span className="tabsNews-18">{data.title}</span>
              <span className="tabsNews-19">{data.info}</span>
            </div>
            <img
              alt=""
              src={imageConfig.baseImageUrl + data.img}
              className="tabsNews-20"
            />
          </div>
        );
        nodes.push(node);
      }
    }
    //判断空
    if(nodes.length===0){
      nodes.push(<Empty description={translate(getText('暂无更多了'))} />);
    }
    return nodes;
  };
  return (
    <div className="tabsNews-13">
      <div className="tabsNews-14">
        <div className="tabsNews-15">
          {getNode()}
        </div>
      </div>
    </div>
  );
}
