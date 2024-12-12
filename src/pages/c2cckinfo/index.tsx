import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { c2cApi } from "../../api/c2c-api";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function C2CckInfo() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [info, setinfo] = useState({} as any);
  const params = useParams();
  //加载数 据
  const loadData = async () => {
    const data = await c2cApi.info({ orderNo: params?.orderNo });
    if (data.ok) {
      if (data.data.img && data.data.status == 1) {
        data.data.status = 6;
      }
      setinfo(data.data);
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
      <TopBar title={translate(getText("交易明細"))} isBack={true} />
      <CenterPage info={info} closeOrder={closeOrder} />
    </div>
  );
}
