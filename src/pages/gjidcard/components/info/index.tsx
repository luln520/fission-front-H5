import { Toast } from "antd-mobile";
import { Image, message, Select, Upload } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { imageConfig } from "../../../../config/config";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";

export default function Info({ userInfo, sendCardsc }) {
  const navigate = useNavigate();
  const [cardsc, setCardsc] = useState("");
  const [rztype, setRztype] = useState(1);
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
        if (fileNowName === "cardsc") {
          setCardsc(data.data);
        }
      } else {
        Toast.show({ content: translate(getText(`上传失败`)) });
      }
    } else if (info.file.status === "error") {
      Toast.show({ content: translate(getText(`上传失败`)) });
    }
  };
  const reloadData = () => {
    setCardsc("");
    setRztype(1);
  };
  useEffect(() => {
    setCardsc(userInfo?.cardsc);
  }, [userInfo]);
  return (
    <div class="idcardlb-1">
      <div class="idcardlb-2">
        <div class="idcardlb-3">
          <div class="idcardlb-4">
            <span class="idcardlb-5">{translate(getText("證件手持照片"))}</span>
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
                    preview("cardsc");
                  }}
                >
                  {cardsc && (
                    <div class="idcard-28-1">
                      <img
                        src={imageConfig.baseImageUrl + cardsc}
                        class="idcard-30"
                      />
                    </div>
                  )}
                  {!cardsc && (
                    <div>
                      <img
                        src="/assets/idCard2_d-b374f793.png"
                        class="idcardlb-148"
                      />
                      <div class="idcardlb-149">
                        <span class="idcardlb-150">
                          {translate(getText("證件手持照片"))}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </Upload>
            </div>
          </div>
        </div>
        <div class="idcardlb-159">
          <div
            class="idcardlb-160"
            onClick={() => {
              if (!cardsc) {
                return;
              }
              sendCardsc({
                ...userInfo,
                cardsc,
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
