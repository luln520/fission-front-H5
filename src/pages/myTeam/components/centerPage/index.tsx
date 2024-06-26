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

export default function CenterPage({ teamInfo }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const la = localStorage.getItem("i18n");

  return (
    <>
      <div class="myTeam-1">
        <div class="myTeam-2">
          <div class="myTeam-3">
            <div class="myTeam-4">
              <div class="myTeam-5">
                <div class="myTeam-6">
                  <div class="myTeam-7">
                    <div class="myTeam-8">
                      <div class="myTeam-9">团队总人数</div>
                      <div class="myTeam-10">3</div>
                    </div>
                    <div class="myTeam-11">
                      <div class="myTeam-12">团队总收益</div>
                      <div class="myTeam-13">30</div>
                    </div>
                  </div>
                  <div class="myTeam-14">
                    <div class="myTeam-15">
                      <div class="myTeam-16">1级</div>
                      <div class="myTeam-17">1</div>
                    </div>
                    <div class="myTeam-18">
                      <div class="myTeam-19">2级</div>
                      <div class="myTeam-20">1</div>
                    </div>
                    <div class="myTeam-21">
                      <div class="myTeam-22">3级</div>
                      <div class="myTeam-23">1</div>
                    </div>
                  </div>
                </div>
                <div class="myTeam-24">
                  <div class="myTeam-25">
                    <div class="myTeam-26">一级</div>
                    <div class="myTeam-27">二级</div>
                    <div class="myTeam-28">三级</div>
                    <div class="myTeam-29"></div>
                  </div>
                  <div class="myTeam-30">
                    <div class="myTeam-31">
                      <div class="myTeam-32">1</div>
                      <div class="myTeam-33">
                        <div class="myTeam-34">
                          <div class="myTeam-35"></div>
                        </div>
                      </div>
                      <div class="myTeam-36">
                        <div class="myTeam-37">13000000002</div>
                        <div class="myTeam-38">2024.06.11 08:44</div>
                      </div>
                      <div class="myTeam-39">0.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
