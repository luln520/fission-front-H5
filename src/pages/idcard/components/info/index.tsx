import { Toast } from "antd-mobile";
import { Image, message, Select, Upload } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { imageConfig } from "../../../../config/config";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";

export default function Info({ userInfo, sendAuth }) {
  const navigate = useNavigate();
  const [realName, setRealName] = useState("");
  const [cardzm, setCardzm] = useState("");
  const [cardfm, setCardfm] = useState("");
  const [rztype, setRztype] = useState(1);
  const [phone, setPhone] = useState("");
  const { t: translate } = useTranslation();
  const [fileNowName, setfileNowName] = useState("");

  //点击
  const preview = (name) => {
    setfileNowName(name);
  };
  //上传
  const handleChange = (info) => {
    if (info.file.status === "done") {
      if (info.file.response && info.file.response.ok) {
        Toast.show({
          content: `${info.file.name} ${translate(getText("上傳成功"))}`,
        });
        const data = info.file.response;
        if (fileNowName === "cardzm") {
          setCardzm(data.data);
        }
        if (fileNowName === "cardfm") {
          setCardfm(data.data);
        }
      } else {
        Toast.show({ content: translate(getText(`上传失败`)) });
      }
    } else if (info.file.status === "error") {
      Toast.show({ content: translate(getText(`上传失败`)) });
    }
  };
  const reloadData = () => {
    setRealName("");
    setCardzm("");
    setCardfm("");
    setRztype(1);
    setPhone("");
  };
  useEffect(() => {
    setRealName(userInfo?.realName);
    setCardzm(userInfo?.cardzm);
    setCardfm(userInfo?.cardfm);
    setRztype(userInfo?.rztype ? parseInt(userInfo?.rztype) : 1);
    setPhone(userInfo?.phone);
  }, [userInfo]);
  return (
    <div class="idcard-1">
      <div class="idcard-2">
        <div class="idcard-3">
          <div class="idcard-4">
            <ul class="idcard-5">
              <div class="idcard-6">
                <div class="idcard-7">{translate(getText("證件類型："))}</div>
                <Select
                  defaultValue={rztype}
                  value={rztype}
                  style={{ width: "100%", height: "40px" }}
                  options={[
                    { value: 1, label: translate(getText(`护照`)) },
                    { value: 2, label: translate(getText(`驾驶证`)) },
                    { value: 3, label: "SSN" },
                    { value: 4, label: translate(getText(`身份ID`)) },
                  ]}
                  onChange={(val) => {
                    setRztype(val);
                  }}
                />
              </div>
              <li class="idcard-19">
                <p class="idcard-20">{translate(getText("姓名"))}</p>
                <div class="idcard-21">
                  <div class="idcard-22">
                    <input
                      class="idcard-24"
                      type="text"
                      placeholder={translate(getText("請輸入您的真實姓名"))}
                      value={realName}
                      onChange={(e) => {
                        setRealName(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </li>
              <li class="idcard-19">
                <p class="idcard-20">{translate(getText("聯繫電話"))}</p>
                <div class="idcard-21">
                  <div class="idcard-22">
                    <input
                      class="idcard-24"
                      type="text"
                      placeholder={translate(getText("請填寫聯繫電話"))}
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </li>
              <p class="idcard-25">{translate(getText("證件照"))}</p>
              <li class="idcard-26">
                <Upload
                  name="file"
                  accept="image/*"
                  showUploadList={false}
                  action={imageConfig.uploadUrl}
                  onChange={handleChange}
                >
                  <div
                    class="idcard-27"
                    onClick={() => {
                      preview("cardzm");
                    }}
                  >
                    {cardzm && (
                      <div class="idcard-28-1">
                        <img
                          src={imageConfig.baseImageUrl + cardzm}
                          class="idcard-30"
                        />
                      </div>
                    )}
                    {!cardzm && (
                      <div class="idcard-28">
                        {/* <img
                          src="/img/img-add.png"
                          class="idcard-30"
                        /> */}
                      </div>
                    )}
                    {!cardzm && (
                      <p class="idcard-31">
                        {translate(getText("證件正面照片"))}
                      </p>
                    )}
                  </div>
                </Upload>
              </li>
              <li class="idcard-32">
                <Upload
                  name="file"
                  accept="image/*"
                  showUploadList={false}
                  action={imageConfig.uploadUrl}
                  onChange={handleChange}
                >
                  <div
                    class="idcard-27"
                    onClick={() => {
                      preview("cardfm");
                    }}
                  >
                    {cardfm && (
                      <div class="idcard-28-1">
                        <img
                          src={imageConfig.baseImageUrl + cardfm}
                          class="idcard-30"
                        />
                      </div>
                    )}
                    {!cardfm && (
                      <div class="idcard-28">
                        {/* <img
                          src="/img/img-add.png"
                          class="idcard-30"
                        /> */}
                      </div>
                    )}
                    {!cardfm && (
                      <p class="idcard-31">
                        {translate(getText("證件反面照片"))}
                      </p>
                    )}
                  </div>
                </Upload>
              </li>
              {/* <li class="idcard-38">
                <div class="idcard-39">
                  <div class="idcard-40">
                    <div class="idcard-41"></div>
                    <img
                      src="/img/img-add.png"
                      draggable="true"
                      class="idcard-42"
                    />
                  </div>
                  <p class="idcard-43">證件手持照片</p>
                </div>
              </li> */}
            </ul>
            <div class="idcard-44">
              <div
                class="idcard-45"
                onClick={() => {
                  if (userInfo?.rzstatus === 2) {
                    return;
                  }
                  sendAuth({
                    ...userInfo,
                    realName,
                    cardzm,
                    cardfm,
                    rztype,
                    phone,
                  });
                  reloadData();
                }}
              >
                {translate(getText("提交"))}
              </div>
            </div>
          </div>
        </div>
        <div class="idcard-46">
          <div class="idcard-47">
            <div id="_top" class="idcard-48">
              <div id="rtf475" class="idcard-49">
                <div class="idcard-50">
                  <p class="idcard-51">
                    {translate(
                      getText(
                        "提交身份證正反面、手持人臉識別必要清晰、照片符合標準JPG格式。系統採用曠視，證合一，避免了用戶身份信息被盜用等人工幹預的情況，平臺務必保管用戶交易賬戶資金的安全性。溫馨提示："
                      )
                    )}
                  </p>
                  <p class="idcard-52">
                    1.{translate(getText("在驗證期間請確保網絡通暢"))}
                    <br class="idcard-53" />
                    2.{translate(getText("確保不會被安全軟件攔截"))}
                    <br class="idcard-54" />
                    3.{translate(getText("同步手機時間，確保時間與當地時區一致"))}
                    <br class="idcard-55" />
                    4.{translate(getText("請勿佩戴眼鏡、帽子"))}
                    <br class="idcard-56" />
                    5.{translate(getText("請在光線充足的環境進行驗證"))}
                    <br class="idcard-57" />
                    6.{translate(getText("使用手機驗證請關閉手機的美顏、修圖等功能"))}
                  </p>
                  <p class="idcard-58"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="idcard-59"></div>
      </div>
    </div>

    // <div className="rspacing-1">
    //   <form className="rspacing-2">
    //     <div className="rspacing-10">
    //       <div className="rspacing-11">
    //         <div className="rspacing-12">
    //           <span className="rspacing-13">
    //             {translate(getText("身份護照"))}:
    //           </span>
    //         </div>
    //         <div className="rspacing-14">
    //           <div className="rspacing-15">
    //             <Select
    //               defaultValue={rztype}
    //               value={rztype}
    //               style={{ width: "100%", height: "30px" }}
    //               options={[
    //                 { value: 1, label: translate(getText(`护照`)) },
    //                 { value: 2, label: translate(getText(`驾驶证`)) },
    //                 { value: 3, label: "SSN" },
    //                 { value: 4, label: translate(getText(`身份ID`)) },
    //               ]}
    //               onChange={(val) => {
    //                 setRztype(val);
    //               }}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="rspacing-10">
    //       <div className="rspacing-11">
    //         <div className="rspacing-12">
    //           <span className="rspacing-13">
    //             {translate(getText("真實姓名"))}:
    //           </span>
    //         </div>
    //         <div className="rspacing-14">
    //           <div className="rspacing-15">
    //             <input
    //               type="text"
    //               placeholder={translate(getText("請輸入您的真實姓名"))}
    //               className="rspacing-16"
    //               value={realName}
    //               onChange={(e) => {
    //                 setRealName(e.target.value);
    //               }}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="rspacing-17">
    //       <div className="rspacing-18">
    //         <div className="rspacing-19">
    //           <span className="rspacing-20">
    //             {translate(getText("聯繫電話:"))}
    //           </span>
    //         </div>
    //         <div className="rspacing-21">
    //           <div className="rspacing-22">
    //             <input
    //               type="text"
    //               placeholder={translate(getText("請填寫聯繫電話"))}
    //               className="rspacing-23"
    //               value={phone}
    //               onChange={(e) => {
    //                 setPhone(e.target.value);
    //               }}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="rspacing-24">
    //       {translate(getText("請上傳您的護照正面"))}
    //     </div>
    //     <div className="rspacing-25">
    //       {cardzm && (
    //         <div
    //           style={{
    //             marginLeft: "0px",
    //           }}
    //         >
    //           <Image
    //             height="10rem"
    //             src={imageConfig.baseImageUrl + cardzm}
    //             fallback="data:image/png;base64,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"
    //           />
    //         </div>
    //       )}
    //       {userInfo?.rzstatus === 2
    //         ? ""
    //         : !cardzm && (
    //             <Upload
    //               name="file"
    //               accept="image/*"
    //               showUploadList={false}
    //               action={imageConfig.uploadUrl}
    //               onChange={handleChange}
    //             >
    //               <div
    //                 style={{
    //                   width: "300px",
    //                   height: "9.5rem",
    //                   backgroundColor: "red",
    //                 }}
    //                 onClick={() => {
    //                   preview("cardzm");
    //                 }}
    //               >
    //                 <div className="rspacing-26">
    //                   <div className="rspacing-27">
    //                     <div className="rspacing-28">
    //                       <i className="rspacing-29"></i>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </Upload>
    //           )}
    //     </div>
    //     <div className="rspacing-31">
    //       {translate(getText("請上傳護照反面"))}
    //     </div>
    //     <div className="rspacing-32">
    //       {cardfm && (
    //         <div
    //           style={{
    //             marginLeft: "0px",
    //           }}
    //         >
    //           <Image
    //             height="9.5rem"
    //             src={imageConfig.baseImageUrl + cardfm}
    //             fallback="data:image/png;base64,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"
    //           />
    //         </div>
    //       )}
    //       {userInfo?.rzstatus === 2
    //         ? ""
    //         : !cardfm && (
    //             <Upload
    //               name="file"
    //               accept="image/*"
    //               showUploadList={false}
    //               action={imageConfig.uploadUrl}
    //               onChange={handleChange}
    //             >
    //               <div
    //                 style={{
    //                   width: "300px",
    //                   height: "10rem",
    //                   backgroundColor: "red",
    //                 }}
    //                 onClick={() => {
    //                   preview("cardfm");
    //                 }}
    //               >
    //                 <div className="rspacing-26">
    //                   <div className="rspacing-27">
    //                     <div className="rspacing-28">
    //                       <i className="rspacing-29"></i>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </Upload>
    //           )}
    //     </div>
    //   </form>
    //   <div
    //     style={{
    //       display: "flex",
    //       alignItems: "center",
    //     }}
    //   >
    //     <button
    //       className="rspacing-38"
    //       onClick={() => {
    //         if (userInfo?.rzstatus === 2) {
    //           return;
    //         }
    //         sendAuth({ ...userInfo, realName, cardzm, cardfm, rztype, phone });
    //         reloadData();
    //       }}
    //     >
    //       <div className="rspacing-39">
    //         <span className="rspacing-40">
    //           {userInfo?.rzstatus === 2
    //             ? translate(getText("已驗證"))
    //             : translate(getText("驗證"))}
    //         </span>
    //       </div>
    //     </button>
    //   </div>
    // </div>
  );
}
