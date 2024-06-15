import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Tabs({
  newsTypes,
  newsType,
  setNewsTypeFnc,
}) {
  const navigate = useNavigate();
  const getNode = () => {
    const nodes = [];
    for (let index = 0; index < newsTypes.length; index++) {
      const data = newsTypes[index];
      const node = (
        <div
          className={newsType === data?.name ? "tabsNews-4" : "tabsNews-6"}
          onClick={() => {
            setNewsTypeFnc(data?.name);
          }}
        >
          <span className="tabsNews-5">{data.name}</span>
        </div>
      );
      nodes.push(node);
    }
    return nodes;
  };
  return (
    <div className="tabsNews-2">
      <div className="tabsNews-3">{getNode()}</div>
    </div>
  );
}
