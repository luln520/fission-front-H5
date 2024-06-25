import { Toast } from "antd-mobile";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { leverApi } from "../../api/lever-api";
import TopBar from "../../components/topBar";
import { WSContext } from "../../router/router";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function JYJLLever() {
  const navigate = useNavigate();
  const uid = localStorage.getItem("uid");
  const { t: translate } = useTranslation();
  const [leverorders, setleverorders] = useState([] as any[]);
  const [coinListData, setCoinListData] = useContext(WSContext);

  //订单信息
  const loadLeverListData = async () => {
    const data = await leverApi.list({ uid, pageNum: 1, pageSize: 200 });
    if (data.ok) {
      setleverorders(data.data.records);
    }
  };

  //平仓
  const closeorder = async (lid, num, ploss) => {
    const data = await leverApi.closeorder({ uid, lid, num, ploss });
    if (data.ok) {
      Toast.show({ content: data.msg });
    } else {
      Toast.show({ content: data.msg });
    }
    loadLeverListData();
  };
  useEffect(() => {
    loadLeverListData();
  }, []);
  return (
    <div
      className="page"
      style={{
        backgroundColor: "rgb(247, 247, 247)",
      }}
    >
      <TopBar title={translate(getText("永续"))} isBack={true} />
      <CenterPage leverorders={leverorders} closeorder={closeorder} coinListData={coinListData} />
    </div>
  );
}
