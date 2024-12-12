import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/topBar";
import ListPage from "./components/listPage";
import TopPage from "./components/topPage";
import { financeApi } from "../../api/finance-api";
import { kuangjiApi } from "../../api/kuangm-api";
import { useTranslation } from "react-i18next";
import { getText } from "../../utils/util";
export default function LockUp() {
  const navigate = useNavigate();
  const uid = localStorage.getItem("uid");
  const [one, setOne] = useState();
  const [kjList, setKjList] = useState([] as any[]);
  const [userkjList, setUserKjList] = useState([] as any[]);
  const [userCoinInfo, setuserCoinInfo] = useState({});
  const [kjprofitSum, setKjprofitSum] = useState({});
  const [kjprofitOneSum, setKjprofitOneSum] = useState({});
  const { t: translate } = useTranslation();

  //kj列表
  const loadKJListData = async () => {
    const data = await kuangjiApi.pcList({ pageNum: 1, pageSize: 200 });
    if (data.ok) {
      setKjList(data.data.records);
      setOne(data.data.records[0]);
    }
  };

  //统计数据
  const loadKjprofitSumData = async () => {
    const data = await kuangjiApi.kjprofitSum({ uid });
    if (data.ok) {
      setKjprofitSum(data.data);
    }
  };

  //加载数据
  const loadData = async () => {
    loadKJListData();
    loadKjprofitSumData();
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div
      className="page"
      style={{
        backgroundColor: "#e3e6ea",
      }}
    >
      <TopBar title={translate(getText("理財產品"))} isBack={true} />
      <TopPage kjprofitSum={kjprofitSum} />
      <ListPage kjList={kjList} />
    </div>
  );
}
