import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { kuangjiApi } from "../../api/kuangm-api";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import EndList from "./components/endList";
import RunList from "./components/runList";
import Tabs from "./components/tabs";

export default function LockUpOrder() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(1);
  const uid = localStorage.getItem("uid");
  const [userkjList, setUserKjList] = useState([] as any[]);
  const { t: translate } = useTranslation();

  //用户kj 列表
  const loadUserKJListData = async () => {
    const data = await kuangjiApi.uidList({ uid });
    if (data.ok) {
      setUserKjList(data.data);
    }
  };
  useEffect(() => {
    loadUserKJListData();
  }, [index]);
  return (
    <div
      className="page"
      style={{
        backgroundColor: "rgb(247, 247, 247)",
      }}
    >
      <TopBar title={translate(getText("委託訂單"))} isBack={true} />
      <Tabs index={index} setIndex={setIndex} />
      {index === 1 && <RunList userkjList={userkjList} />}
      {index === 2 && <EndList userkjList={userkjList} />}
      <div
        style={{
          height: 10,
        }}
      ></div>
    </div>
  );
}
