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

export default function CenterPage() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const [helpList, setHelpList] = useState([] as any[]);
  const [index, setIndex] = useState(1);
  const lan = localStorage.getItem("i18n");
  const name = lan == "zh" ? "" : lan.charAt(0).toUpperCase() + lan.slice(1);
  const getNodes = () => {
    const nodes = [];
    for (let i = 0; i < helpList.length; i++) {
      const help = helpList[i];
      nodes.push(
        <div
          class="helplist-4"
          onClick={() => {
            navigate(`/helpInfo/${help.id}`);
          }}
        >
          <div class="helplist-5">
            <div class="helplist-6">{help[`type${name}`]}</div>
          </div>
          <div class="helplist-7">
            <div class="helplist-8">
              <span class="helplist-9"></span>
            </div>
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
        <div class="helplist-3">{getNodes()}</div>
      </div>
    </div>
  );
}
