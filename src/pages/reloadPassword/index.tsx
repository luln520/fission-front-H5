import "./index.css";
import PageRegister from "./components/pageLogin";
import { userApi } from "../../api/user-api";
import { areaApi } from "../../api/area-api";
import { smsApi } from "../../api/sms-api";
import { useNavigate } from "react-router-dom";
import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { getText } from "../../utils/util";
import { useTranslation } from "react-i18next";
import { companyApi } from "../../api/company";
import TopBar4 from "../../components/topBar4";
import TopBar from "../../components/topBar";

export default function ReloadPassword() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  let isDo = false;
  const [areas, setAreas] = useState([] as any[]);
  const [show60, setShow60] = useState(false);
  const [companyData, setCompanyData] = useState({} as any);
  //执行登录
  const doEditpassword = async (sendData) => {
    if (isDo) {
      return;
    } else {
      isDo = true;
    }
    try {
      if (sendData.password) {
        const data = await userApi.editpassword(sendData);
        if (data.ok) {
          Toast.show({
            content: translate(getText("成功")),
            duration: 1000,
          });
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        } else {
          Toast.show({
            content: data.msg,
            duration: 1000,
          });
        }
      } else {
        Toast.show({
          content: translate(getText("請填寫完整信息")),
          duration: 1000,
        });
      }
    } catch (error) {
    } finally {
      isDo = false;
    }
  };
  //加载地区
  const loadAreasData = async () => {
    const data = await areaApi.list();
    if (data.ok) {
      setAreas(data.data);
    }
  };

  //发送验证码
  const sendSMS = async (userData) => {
    setShow60(true);
    const data = await smsApi.code(userData);
    // Toast.show({
    //   content: data.data,
    // });
    if (data.ok) {
      Toast.show({
        content: translate(getText("成功")),
        duration: 1000,
      });
      // setShow60(true);
    }
  };

  //初始化获取公司
  async function initCompany() {
    const res = await companyApi.domain();
    if (res.ok) {
      setCompanyData(res.data);
    }
  }
  useEffect(() => {
    initCompany();
    loadAreasData();
  }, []);
  return (
    <div className="page">
      <TopBar title={''} isBack={true} />
      <PageRegister
        doEditpassword={doEditpassword}
        areas={areas}
        sendSMS={sendSMS}
        show60={show60}
        setShow60={setShow60}
        companyData={companyData}
      />
    </div>
  );
}
