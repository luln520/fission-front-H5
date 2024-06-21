import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { companyApi } from "../../api/company";
import TopBar from "../../components/topBar";
import { getText } from "../../utils/util";
import CenterPage from "./components/centerPage";

export default function DownlandInfo() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const lan = localStorage.getItem("i18n");
  const [search, setSearch] = useSearchParams();
  const url = search.get("url");
  return (
    <div className="page">
      <TopBar
        title={""}
        backClor="var(--boutton-background-color)"
        isBack={() => {
          navigate(-1);
        }}
      />
      <CenterPage url={url}/>
    </div>
  );
}
