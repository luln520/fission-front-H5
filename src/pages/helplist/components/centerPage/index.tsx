import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import copy from "copy-to-clipboard";
import { Cell, Dialog } from "react-vant";
import "./index.css";
import { Button } from "antd";
import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { newsApi } from "../../../../api/news-api";
import { imageConfig } from "../../../../config/config";

export default function CenterPage({ companyData }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [helpList, setHelpList] = useState([] as any[]);
  const [index, setIndex] = useState(1);
  const [search, setsearch] = useState("");
  const lan = localStorage.getItem("i18n");
  const name = lan == "zh" ? "" : lan.charAt(0).toUpperCase() + lan.slice(1);
  const getNodes = () => {
    const nodes = [];
    for (let i = 0; i < helpList.length; i++) {
      const help = helpList[i];
      if (search && help[`type${name}`].indexOf(search) == -1) {
        continue;
      }
      nodes.push(
        <div
          class="helplist-17"
          onClick={() => {
            navigate(`/helpInfo/${help.id}`);
          }}
        >
          <div class="helplist-18">
            <div class="helplist-19"></div>
            <span class="helplist-20"></span>
            <img
              src="data:image/png;base64,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"
              draggable="false"
              class="helplist-21"
            />
          </div>
          <div class="helplist-22">
            <span class="helplist-23">{help[`type${name}`]}</span>
          </div>
        </div>
      );
    }
    return nodes;
  };
  //加载数 据
  const loadData = async () => {
    const data = await newsApi.list();
    if (data.ok) {
      setHelpList(data.data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div class="helplist-1">
      <div class="helplist-2">
        <img
          src={imageConfig.baseImageUrl + companyData?.companyLogo}
          draggable="false"
          class="helplist-5"
        />
      </div>
      <div class="helplist-6">
        <div class="helplist-7">
          <i class="helplist-8"></i>
          <div class="helplist-9">
            <div class="helplist-10">
              <div action="" class="helplist-12">
                <input
                  placeholder="搜索"
                  value={search}
                  type="search"
                  maxlength="140"
                  step=""
                  autocomplete="off"
                  class="helplist-13"
                  onChange={(e) => {
                    setsearch(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="helplist-14">
        <span class="helplist-15">帮助中心</span>
      </div>
      <div class="helplist-16">{getNodes()}</div>
    </div>
  );
}
