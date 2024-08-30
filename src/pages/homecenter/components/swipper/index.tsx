import { Swiper } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import "./index.css";

export default function Swipper({ companyData }) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "auto",
      }}
    >
      <Swiper loop autoplay>
        <Swiper.Item key={1}>
          <img
            alt=""
            src={imageConfig.baseImageUrl + companyData?.logo1}
            className="swipe-5"
          />
        </Swiper.Item>
        <Swiper.Item key={2}>
          <img
            alt=""
            src={imageConfig.baseImageUrl + companyData?.logo2}
            className="swipe-5"
          />
        </Swiper.Item>
        <Swiper.Item key={3}>
          <img
            alt=""
            src={imageConfig.baseImageUrl + companyData?.logo3}
            className="swipe-5"
          />
        </Swiper.Item>
      </Swiper>
    </div>
  );
}
