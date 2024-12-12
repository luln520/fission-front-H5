import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CenterPage({ list }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const statusStr = [
    translate(getText("审核中")),
    translate(getText("审核通过")),
    translate(getText("审核拒绝")),
    translate(getText("分配卡号")),
  ];
  const getArray = () => {
    const nodes = [];
    for (const item of list) {
      nodes.push(
        <div
          className="c2ccell-2"
          onClick={() => {
            navigate(`/c2cckinfo/${item?.orderNo}`);
          }}
        >
          <div className="c2ccell-3">
            <span className="c2ccell-4">{item?.czNum}</span>
            <div className="c2ccell-5">
              <span className="c2ccell-6">{item?.createTime}</span>
            </div>
          </div>
          <div className="c2ccell-7">
            <div className="c2ccell-8">{statusStr[item?.status - 1]}</div>
            <div className="c2ccell-9">{item?.orderNo}</div>
          </div>
        </div>
      );
    }
    return nodes;
  };
  return (
    <div role="feed" aria-busy="false" className="c2ccell-1">
      {getArray()}
      <div className="c2ccell-18">{translate(getText("没有更多数据了"))}</div>
      <div className="c2ccell-19"></div>
    </div>
  );
}
