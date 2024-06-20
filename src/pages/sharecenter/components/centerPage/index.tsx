import { Badge } from "antd";
import { Card, Toast } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";
import QRCode from "qrcodejs2";
import copy from "copy-to-clipboard";
import html2canvas from "html2canvas";
import { useEffect, useRef } from "react";

export default function CenterPage({ userInfo }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const la = localStorage.getItem("i18n");
  const hostname = window.location.hostname;

  const creatQrCode = () => {
    let text = `${hostname}/register?invit=${userInfo?.invit}`;
    document.getElementById("qrcode").innerHTML = "";
    const qrcode = new QRCode(document.getElementById("qrcode"), {
      text: text, //二维码内容字符串
      width: 130, //图像宽度
      height: 130, //图像高度
      colorDark: "#000000", //二维码前景色
      colorLight: "#ffffff", //二维码背景色
      correctLevel: QRCode.CorrectLevel.H, //容错级别
    });
  };

  // 函数来保存二维码
  async function saveQRCode() {
    const canvas = await html2canvas(document.getElementById("qrcode"));
    // 将canvas转换为图片数据URL
    const imageDataUrl = canvas.toDataURL("image/png");
    // 创建一个隐藏的a标签来触发下载
    const link = document.createElement("a");
    link.href = imageDataUrl;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleCopy = (value) => {
    if (copy(value)) {
      Toast.show({ content: translate(getText("成功")) });
    }
  };
  useEffect(() => {
    creatQrCode();
  }, [userInfo]);
  return (
    <>
      <div class="sharecenter-1">
        <div class="sharecenter-2">
          <div class="sharecenter-3">
            <div id="qrcode" class="sharecenter-4"></div>
          </div>
        </div>
        <div class="sharecenter-12">
          <div class="sharecenter-13">
            <div
              class="sharecenter-14"
              onClick={() => {
                handleCopy(`${userInfo?.invit}`);
              }}
            >
              <div class="sharecenter-15">
                <span class="sharecenter-16">我的邀请码:</span>
              </div>
              <div class="sharecenter-17"> {userInfo?.invit}</div>
              <i class="sharecenter-18"></i>
            </div>
            <div
              class="sharecenter-19"
              onClick={() => {
                handleCopy(`${hostname}/register?invit=${userInfo?.invit}`);
              }}
            >
              <div class="sharecenter-20">
                <span class="sharecenter-21">我的邀请链接:</span>
              </div>
              <div class="sharecenter-22">
                {hostname}/register?invit={userInfo?.invit}
              </div>
              <i class="sharecenter-23"></i>
            </div>
          </div>
        </div>
        <div
          class="sharecenter-24"
          onClick={() => {
            saveQRCode();
          }}
        >
          点击保存二维码
        </div>
        <div class="sharecenter-25">
          <div class="sharecenter-26">推荐人数：0 / 1</div>
          <div class="sharecenter-27">当前等级：LV1</div>
          <div class="sharecenter-28">总收益：0</div>
        </div>
        <div class="sharecenter-29">
          <div class="sharecenter-30">
            <div class="sharecenter-31">
              <span class="sharecenter-32">规则说明</span>
            </div>
            <i class="sharecenter-33"></i>
          </div>
          <div class="sharecenter-34">
            <div class="sharecenter-35">
              <div class="sharecenter-36">团队等级</div>
              <div class="sharecenter-37">要求</div>
            </div>
            <div class="sharecenter-38">
              <div class="sharecenter-39">
                <div class="sharecenter-40">
                  <span class="sharecenter-41">LV0</span>
                </div>
                <div class="sharecenter-42">
                  <span class="sharecenter-43">0 ≤ N＜ 5</span>
                </div>
              </div>
              <div class="sharecenter-44">
                <div class="sharecenter-45">
                  <span class="sharecenter-46">LV1</span>
                </div>
                <div class="sharecenter-47">
                  <span class="sharecenter-48">5 ≤ N＜ 30</span>
                </div>
              </div>
              <div class="sharecenter-49">
                <div class="sharecenter-50">
                  <span class="sharecenter-51">LV2</span>
                </div>
                <div class="sharecenter-52">
                  <span class="sharecenter-53">30 ≤ N＜ 100</span>
                </div>
              </div>
              <div class="sharecenter-54">
                <div class="sharecenter-55">
                  <span class="sharecenter-56">LV3</span>
                </div>
                <div class="sharecenter-57">
                  <span class="sharecenter-58">100 ≤ N＜ 300</span>
                </div>
              </div>
              <div class="sharecenter-59">
                <div class="sharecenter-60">
                  <span class="sharecenter-61">LV4</span>
                </div>
                <div class="sharecenter-62">
                  <span class="sharecenter-63">300 ≤ N＜ 600</span>
                </div>
              </div>
              <div class="sharecenter-64">
                <div class="sharecenter-65">
                  <span class="sharecenter-66">LV5</span>
                </div>
                <div class="sharecenter-67">
                  <span class="sharecenter-68">600 ≤ N＜ 1000</span>
                </div>
              </div>
              <div class="sharecenter-69">
                <div class="sharecenter-70">
                  <span class="sharecenter-71">LV6</span>
                </div>
                <div class="sharecenter-72">
                  <span class="sharecenter-73">1000 ≤ N＜ 1500</span>
                </div>
              </div>
              <div class="sharecenter-74">
                <div class="sharecenter-75">
                  <span class="sharecenter-76">LV7</span>
                </div>
                <div class="sharecenter-77">
                  <span class="sharecenter-78">1500 ≤ N＜ 2500</span>
                </div>
              </div>
              <div class="sharecenter-79">
                <div class="sharecenter-80">
                  <span class="sharecenter-81">LV8</span>
                </div>
                <div class="sharecenter-82">
                  <span class="sharecenter-83">2500 ≤ N＜ 5000</span>
                </div>
              </div>
              <div class="sharecenter-84">
                <div class="sharecenter-85">
                  <span class="sharecenter-86">LV9</span>
                </div>
                <div class="sharecenter-87">
                  <span class="sharecenter-88">5000 ≤ N</span>
                </div>
              </div>
            </div>
          </div>
          <div class="sharecenter-89">
            <div class="sharecenter-90">
              <div class="sharecenter-91">团队等级</div>
              <div class="sharecenter-92">1级下级</div>
              <div class="sharecenter-93">2级下级</div>
              <div class="sharecenter-94">3级下级</div>
            </div>
            <div class="sharecenter-95">
              <div class="sharecenter-96">
                <div class="sharecenter-97">
                  <span class="sharecenter-98">LV0</span>
                </div>
                <div class="sharecenter-99">
                  <span class="sharecenter-100">0%</span>
                </div>
                <div class="sharecenter-101">
                  <span class="sharecenter-102">%</span>
                </div>
                <div class="sharecenter-103">
                  <span class="sharecenter-104">%</span>
                </div>
              </div>
              <div class="sharecenter-105">
                <div class="sharecenter-106">
                  <span class="sharecenter-107">LV1</span>
                </div>
                <div class="sharecenter-108">
                  <span class="sharecenter-109">0%</span>
                </div>
                <div class="sharecenter-110">
                  <span class="sharecenter-111">%</span>
                </div>
                <div class="sharecenter-112">
                  <span class="sharecenter-113">%</span>
                </div>
              </div>
              <div class="sharecenter-114">
                <div class="sharecenter-115">
                  <span class="sharecenter-116">LV2</span>
                </div>
                <div class="sharecenter-117">
                  <span class="sharecenter-118">0%</span>
                </div>
                <div class="sharecenter-119">
                  <span class="sharecenter-120">%</span>
                </div>
                <div class="sharecenter-121">
                  <span class="sharecenter-122">%</span>
                </div>
              </div>
              <div class="sharecenter-123">
                <div class="sharecenter-124">
                  <span class="sharecenter-125">LV3</span>
                </div>
                <div class="sharecenter-126">
                  <span class="sharecenter-127">0%</span>
                </div>
                <div class="sharecenter-128">
                  <span class="sharecenter-129">%</span>
                </div>
                <div class="sharecenter-130">
                  <span class="sharecenter-131">%</span>
                </div>
              </div>
              <div class="sharecenter-132">
                <div class="sharecenter-133">
                  <span class="sharecenter-134">LV4</span>
                </div>
                <div class="sharecenter-135">
                  <span class="sharecenter-136">0%</span>
                </div>
                <div class="sharecenter-137">
                  <span class="sharecenter-138">%</span>
                </div>
                <div class="sharecenter-139">
                  <span class="sharecenter-140">%</span>
                </div>
              </div>
              <div class="sharecenter-141">
                <div class="sharecenter-142">
                  <span class="sharecenter-143">LV5</span>
                </div>
                <div class="sharecenter-144">
                  <span class="sharecenter-145">0%</span>
                </div>
                <div class="sharecenter-146">
                  <span class="sharecenter-147">%</span>
                </div>
                <div class="sharecenter-148">
                  <span class="sharecenter-149">%</span>
                </div>
              </div>
              <div class="sharecenter-150">
                <div class="sharecenter-151">
                  <span class="sharecenter-152">LV6</span>
                </div>
                <div class="sharecenter-153">
                  <span class="sharecenter-154">0%</span>
                </div>
                <div class="sharecenter-155">
                  <span class="sharecenter-156">%</span>
                </div>
                <div class="sharecenter-157">
                  <span class="sharecenter-158">%</span>
                </div>
              </div>
              <div class="sharecenter-159">
                <div class="sharecenter-160">
                  <span class="sharecenter-161">LV7</span>
                </div>
                <div class="sharecenter-162">
                  <span class="sharecenter-163">0%</span>
                </div>
                <div class="sharecenter-164">
                  <span class="sharecenter-165">%</span>
                </div>
                <div class="sharecenter-166">
                  <span class="sharecenter-167">%</span>
                </div>
              </div>
              <div class="sharecenter-168">
                <div class="sharecenter-169">
                  <span class="sharecenter-170">LV8</span>
                </div>
                <div class="sharecenter-171">
                  <span class="sharecenter-172">0%</span>
                </div>
                <div class="sharecenter-173">
                  <span class="sharecenter-174">%</span>
                </div>
                <div class="sharecenter-175">
                  <span class="sharecenter-176">%</span>
                </div>
              </div>
              <div class="sharecenter-177">
                <div class="sharecenter-178">
                  <span class="sharecenter-179">LV9</span>
                </div>
                <div class="sharecenter-180">
                  <span class="sharecenter-181">0%</span>
                </div>
                <div class="sharecenter-182">
                  <span class="sharecenter-183">%</span>
                </div>
                <div class="sharecenter-184">
                  <span class="sharecenter-185">%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
