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

export default function Register() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  let isDo = false;
  const [areas, setAreas] = useState([] as any[]);
  const [show60, setShow60] = useState(false);
  const [companyData, setCompanyData] = useState({} as any);
  const [registerMsg, setregisterMsg] = useState("");

  //执行登录
  const doRegister = async (sendData) => {
    if (isDo) {
      return;
    } else {
      isDo = true;
    }
    try {
      setregisterMsg("");
      if (sendData.username && sendData.password) {
        const data = await userApi.register(sendData);
        if (data.ok) {
          setregisterMsg(translate(getText("註冊成功")));
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        } else {
          setregisterMsg(data.msg);
        }
      } else {
        setregisterMsg(translate(getText("請填寫完整信息")));
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
    if (data.ok) {
      Toast.show({
        content: translate(getText("成功")),
        duration: 1000,
      });
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
    <div
      className="page"
      style={{
        backgroundColor: "#f7f6fb",
      }}
    >
      <TopBar title={translate(getText("立即註冊"))} isBack={true} />
      <PageRegister
        doRegister={doRegister}
        areas={areas}
        sendSMS={sendSMS}
        show60={show60}
        setShow60={setShow60}
        companyData={companyData}
        registerMsg={registerMsg}
      />
    </div>
  );
}
