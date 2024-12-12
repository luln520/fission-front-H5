import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { c2cApi } from "../../api/c2c-api";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function C2CckImage() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [info, setinfo] = useState({} as any);
  const params = useParams();
  //加载数 据
  const loadData = async () => {
    const data = await c2cApi.info({ orderNo: params?.orderNo });
    if (data.ok) {
      setinfo(data.data);
    }
  };

  //发送
  const sendCzImg = async (sendData) => {
    sendData.orderNo = params?.orderNo;
    const data = await c2cApi.czImg(sendData);
    if (data.ok) {
      Toast.show({ content: translate(getText("提交成功，等待審核")) });
      navigate(`/c2cckinfo/${params?.orderNo}`, { replace: true });
    } else {
      Toast.show({ content: data.msg });
    }
  };

  //c2c存款取消
  const closeOrder = async () => {
    let dataInfo = {
      orderNo: info?.orderNo,
    };
    const data = await c2cApi.close(dataInfo);
    if (data.ok) {
      Toast.show(translate(getText("成功")));
      navigate(-1);
    } else {
      Toast.show({ content: data.msg });
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="page">
      <TopBar title={translate(getText("C2C存款"))} isBack={true} />
      <CenterPage info={info} sendCzImg={sendCzImg} closeOrder={closeOrder} />
    </div>
  );
}
