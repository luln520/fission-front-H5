import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function ListPage({ addressList, delAddress, coinList }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  //adderss类
  const getAddressNodes = () => {
    const nodes = [];
    for (const data of addressList) {
      const node = (
        <>
          <div className="addresslist-5">
            <div className="addresslist-6">
              <div className="addresslist-7">
                <img
                  src={imageConfig.baseImageUrl + getLogo(data.name)}
                  draggable="true"
                  className="addresslist-9"
                />
              </div>
            </div>
            <div className="addresslist-10">
              <p className="addresslist-11">
                {translate(getText("幣種："))}
                <br className="addresslist-12" />
                <div className="addresslist-13">
                  <span className="addresslist-14">{`${data?.name.toUpperCase()}${
                    data.czline ? `-${data.czline}`.toUpperCase() : ""
                  }`}</span>
                </div>
              </p>
              <p className="addresslist-15">
                {translate(getText("地址："))}
                <br className="addresslist-16" />
                <div className="addresslist-17">
                  <span className="addresslist-18">{data.addr}</span>
                </div>
              </p>
              <p className="addresslist-19">
                {translate(getText("日期："))}

                <br className="addresslist-20" />
                <div className="addresslist-21">
                  <span className="addresslist-22">{data?.addtime}</span>
                </div>
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                right: "20px",
              }}
              onClick={() => {
                delAddress(data.id);
              }}
            >
              <img
                alt=""
                src="data:image/png;base64,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"
                className="addressList-14"
              />
            </div>
          </div>
        </>
      );
      nodes.push(node);
    }
    return nodes;
  };

  const getLogo = (name) => {
    for (const data of coinList) {
      if (name == data.name) {
        return data.img;
      }
    }
    return "";
  };
  return (
    <div className="addresslist-1">
      <div className="addresslist-2">
        <div className="addresslist-3">
          <div className="addresslist-4">
            {getAddressNodes()}
            <div
              className="addresslist-41"
              onClick={() => {
                navigate("/addressadd");
              }}
            >
              {translate(getText("添加錢包地址"))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
