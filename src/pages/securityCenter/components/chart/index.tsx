import { useNavigate } from "react-router-dom";
import { Flex, Progress } from 'antd';
import "./index.css";
import { useTranslation } from "react-i18next";

export default function Chart({ userInfo }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div className="chartProgressDiv">
      {/* <br></br><span className="fomartFont">信誉积分</span> */}
      <Progress size={165} type="circle" percent={userInfo?.jifen}  format={(percent) => <span className="fomartPercent">{percent}</span>} strokeColor='var(--boutton-background-color)'/>
    </div>
  );
}
