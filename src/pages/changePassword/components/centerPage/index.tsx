import { Toast } from "antd-mobile";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function CenterPage({ updatePassword }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const uid = localStorage.getItem("uid");
  const [userData, setUserData] = useState({
    oldPassword: "",
    password: "",
    password1: "",
  });

  //修改数据
  const updateSendData = (e) => {
    const name = e.target.name;
    setUserData({
      ...userData,
      [name]: e.target.value,
    });
  };

  //点击回调提前处理
  const callBack = () => {
    console.info(userData);
    if (userData.password !== userData.password1) {
      Toast.show({ content: translate(getText("兩次密碼不一致")) });
      return;
    }
    if (!(userData.oldPassword && userData.password)) {
      Toast.show({ content: translate(getText("請填寫完整信息")) });
      return;
    }
    updatePassword({
      uid,
      ...userData,
      oldPwd: userData.oldPassword,
      newPwd: userData.password,
    });
  };
  return (
    <div className="changePassword-1">
      <div className="changePassword-2">
        <div className="changePassword-3">
          <div className="changePassword-4">
            <div className="changePassword-5">
              <i className="changePassword-6"></i>
            </div>
            <div className="changePassword-7">
              <div className="changePassword-8">
                <input
                  type="password"
                  name="oldPassword"
                  placeholder={translate(getText("驗證登錄密碼"))}
                  value={userData.oldPassword}
                  onChange={updateSendData}
                  className="changePassword-9"
                />
              </div>
            </div>
          </div>
          <div className="changePassword-12">
            <div className="changePassword-13">
              <i className="changePassword-14"></i>
            </div>
            <div className="changePassword-15">
              <div className="changePassword-16">
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={updateSendData}
                  placeholder={translate(getText("設置新密碼"))}
                  className="changePassword-17"
                />
              </div>
            </div>
          </div>
          <div className="changePassword-20">
            <div className="changePassword-21">
              <i className="changePassword-22"></i>
            </div>
            <div className="changePassword-23">
              <div className="changePassword-24">
                <input
                  type="password"
                  name="password1"
                  value={userData.password1}
                  onChange={updateSendData}
                  placeholder={translate(getText("驗證新密碼"))}
                  className="changePassword-25"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="changePassword-28" onClick={callBack}>
        <div className="changePassword-29">
          <span className="changePassword-30">
            {translate(getText("更改密碼"))}
          </span>
        </div>
      </button>
    </div>
  );
}
