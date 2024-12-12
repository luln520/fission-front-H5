import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { contentApi } from "../../api/content-api";
import { noticeApi } from "../../api/notice-api";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function Noice() {
  const navigate = useNavigate();
  const uid = localStorage.getItem("uid");
  const [listData, setListData] = useState([] as any[]);
  const { t: translate } = useTranslation();
  //读取全部
  const readAll = async () => {
    const data = await noticeApi.read();
    // if (data.ok) {
    //   Toast.show({ content: "操作成功！" });
    // } else {
    //   Toast.show({ content: "操作失败！" });
    // }
  };

  //读取单个
  const readOne = async (id) => {
    const data = await noticeApi.readone({ id });
    if (data.ok) {
      Toast.show({ content: "操作成功！" });
    } else {
      Toast.show({ content: "操作失败！" });
    }
    loadData();
  };

  //删除全部
  const delAll = async () => {
    const data = await noticeApi.delete();
    if (data.ok) {
      Toast.show({ content: "操作成功！" });
    } else {
      Toast.show({ content: "操作失败！" });
    }
    loadData();
  };

  //删除单个
  const delOne = async (id) => {
    const data = await noticeApi.deleteOne({ id });
    if (data.ok) {
      Toast.show({ content: "操作成功！" });
    } else {
      Toast.show({ content: "操作失败！" });
    }
    loadData();
  };

  //加载数据
  const loadData = async () => {
    const data = await noticeApi.list({ uid });
    if (data.ok) {
      setListData(data.data.reverse());
    }
  };

  useEffect(() => {
    loadData();
    readAll();
  }, []);
  return (
    <div className="page" style={{
      backgroundColor: "rgb(247, 247, 247)",
    }}>
      <TopBar title={translate(getText("消息列表"))} isBack={true} />
      <CenterPage
        listData={listData}
        readAll={readAll}
        delAll={delAll}
        readOne={readOne}
        delOne={delOne}
      />
    </div>
  );
}
