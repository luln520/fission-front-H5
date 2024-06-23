import { Toast } from "antd-mobile";
import { Image, message, Select, Upload, ConfigProvider } from "antd";
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
    <div class="idcardlb-1">
      <div class="idcardlb-2">
        <div class="idcardlb-3">
          <div class="idcardlb-4">
            <span class="idcardlb-5">选择您的身份证件信息</span>
          </div>
          <div class="idcardlb-6">
            <div class="idcardlb-93">
              <div class="idcardlb-94-1">
                <div class="idcardlb-96">
                  <div class="idcardlb-97">
                    <ConfigProvider
                      theme={{
                        components: {
                          Select: {
                            selectorBg: "transparent",
                            lineType: "none",
                            colorText: "#666666",
                            colorTextQuaternary: "#666666",
                            controlOutline: "transparent",
                          },
                        },
                      }}
                    >
                      <Select
                        defaultValue={rztype}
                        value={rztype}
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
                    </ConfigProvider>
                  </div>
                </div>
              </div>
            </div>
            <div class="idcardlb-93">
              <div class="idcardlb-94">
                <div class="idcardlb-96">
                  <div class="idcardlb-97">
                    <input
                      placeholder={translate(getText("請輸入您的真實姓名"))}
                      value={realName}
                      onChange={(e) => {
                        setRealName(e.target.value);
                      }}
                      type=""
                      maxlength="999"
                      step=""
                      autocomplete="off"
                      class="idcardlb-99"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="idcardlb-93">
              <div class="idcardlb-94">
                <div class="idcardlb-96">
                  <div class="idcardlb-97">
                    <input
                      type="text"
                      placeholder={translate(getText("請填寫聯繫電話"))}
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      maxlength="999"
                      step=""
                      autocomplete="off"
                      class="idcardlb-99"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="idcardlb-117">
          <div class="idcardlb-118">
            <div class="idcardlb-119">
              <Upload
                name="file"
                accept="image/*"
                showUploadList={false}
                action={imageConfig.uploadUrl}
                onChange={handleChange}
              >
                <div
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
                    <div>
                      <img
                        src="http://h5.tinshwk.xyz/assets/idCard1_d-e6fc6248.png"
                        class="idcardlb-120"
                      />
                      <div class="idcardlb-121">
                        <span class="idcardlb-122">
                          {translate(getText("證件正面照片"))}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </Upload>
            </div>
          </div>
        </div>
        <div class="idcardlb-131">
          <div class="idcardlb-132">
            <Upload
              name="file"
              accept="image/*"
              showUploadList={false}
              action={imageConfig.uploadUrl}
              onChange={handleChange}
            >
              <div
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
                  <div>
                    <div class="idcardlb-133">
                      <img
                        src="http://h5.tinshwk.xyz/assets/idCard1_d-e6fc6248.png"
                        class="idcardlb-134"
                      />
                      <div class="idcardlb-135">
                        <span class="idcardlb-136">
                          {translate(getText("證件反面照片"))}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Upload>
          </div>
        </div>
        {/* <div class="idcardlb-145">
          <div class="idcardlb-146">
            <div class="idcardlb-147">
              <img
                src="http://h5.tinshwk.xyz/assets/idCard2_d-b374f793.png"
                class="idcardlb-148"
              />
              <div class="idcardlb-149">
                <span class="idcardlb-150">上传手持证件照片</span>
              </div>
            </div>
          </div>
          <div class="idcardlb-151">
            <div class="idcardlb-153"></div>
            <div class="idcardlb-154">
              <div class="idcardlb-155">
                <div class="idcardlb-156"></div>
              </div>
              <div class="idcardlb-157">
                <div class="idcardlb-158"></div>
              </div>
            </div>
          </div>
        </div> */}
        <div class="idcardlb-159">
          <div
            class="idcardlb-160"
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
  );
}
