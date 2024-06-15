import { Toast } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { userApi } from "../../api/user-api";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function ChangePassword() {
  const uid = localStorage.getItem("uid");
  const username = localStorage.getItem("username");
  const nav = useNavigate();
  const { t: translate } = useTranslation();
  //修改密码
  const updatePassword = async (userData) => {
    const data = await userApi.editPwd({ ...userData, uid, username });
    if (data.ok) {
      Toast.show({ content: data.data });
      localStorage.clear();
      setTimeout(() => {
        window.location.href="/login";
      }, 500);
    }else{
      Toast.show({ content: data.msg });
    }
  };
  return (
    <div className="page">
      <TopBar title={translate(getText("更改密碼"))} isBack={true} />
      <CenterPage updatePassword={updatePassword} />
    </div>
  );
}
