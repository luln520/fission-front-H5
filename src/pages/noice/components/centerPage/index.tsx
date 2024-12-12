import { Badge } from "antd";
import { Card } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CenterPage({
  listData,
  readAll,
  delAll,
  readOne,
  delOne,
}) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const la = localStorage.getItem("i18n");
  return (
    <>
      {/* list */}
      {listData.map((data) => (
        <div
          style={{
            padding: 10,
          }}
        >
          {data[la === "zh" ? "content" : "contentEn"] && (
            <Card
              title={
                <Badge
                  count={data.status == 1 ? 2 : 0}
                  offset={[5, 0]}
                  dot
                  size={"default"}
                >
                  {data[la === "zh" ? "title" : "titleEn"]}
                </Badge>
              }
            >
              {data[la === "zh" ? "content" : "contentEn"]}
            </Card>
          )}
        </div>
      ))}
      {/* null */}
      {listData.length === 0 && (
        <div className="noice-1">
          <div className="noice-2">
            <img
              alt=""
              src="/noice/empty-image-default.png"
              className="noice-3"
            />
          </div>
          <p className="noice-4">{translate(getText("無留言記錄"))}</p>
        </div>
      )}
    </>
  );
}
