import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { onlineApi } from "../../api/online-api";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function Chat() {
  const navigate = useNavigate();
  const uid = localStorage.getItem("uid");
  const uuid = "";
  const [listData, setListData] = useState([] as any[]);
  const { t: translate } = useTranslation();
  let timer: any = 0;
  //发送
  const sendMsg = async (content) => {
    if (content) {
      const data = await onlineApi.sendMsg({
        uid,
        uuid,
        content,
        type: 1,
      });
      if (!data.ok) {
        Toast.show({ content: translate(getText("系統錯誤")) });
      }
      loadData();
    }
  };

  //修改状态
  const upStatusMsg = async () => {
    const data = await onlineApi.upStatus({
      uid,
    });
  };
  //加载数据
  const loadData = async () => {
    const data = await onlineApi.list({ uuid, uid, type: 1 });
    if (data.ok) {
      const list = data.data;
      list.sort((d, e) => d.id - e.id);
      setListData(list);
    }
  };

  useEffect(() => {
    loadData();
    timer = setInterval(async () => {
      loadData();
      upStatusMsg();
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="page">
      <TopBar title={translate(getText("在線客服"))} isBack={true} />
      <CenterPage sendMsg={sendMsg} listData={listData} />
    </div>
  );
}