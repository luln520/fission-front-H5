import { useNavigate } from "react-router-dom";
import copy from "copy-to-clipboard";
import { MobileOutlined } from "@ant-design/icons";
import "./index.css";
import { Toast } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { getText } from "../../../../utils/util";
import { imageConfig } from "../../../../config/config";
import { Badge } from "antd";

export default function MyCenter({ userInfo, companyData, loginmsg }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const inviteType = localStorage.getItem("inviteType");
  const c2ctxStatus = localStorage.getItem("c2ctxStatus");
  const lan = localStorage.getItem("i18n");
  const handleCopy = (value) => {
    if (copy(value)) {
      Toast.show({ content: translate(getText("成功")) });
    }
  };
  const types=[
    "未認證",
    "審核中",
    "已認證",
    "審核拒絕"
  ]
  return (
    <div className="mycenter-1">
      <div className="mycenter-2">
        <div data-v-5bb30e94="" className="mycenter-3"></div>
        <div className="mycenter-4">
          <div className="mycenter-5">
            <div className="mycenter-6">
              <div className="mycenter-7">
                <span
                  className="mycenter-8"
                  onClick={() => {
                    navigate("/noice");
                  }}
                >
                  
                </span>
              </div>
            </div>
          </div>
          <div className="mycenter-9">
            <div className="mycenter-10">
              <span
                className="mycenter-11"
                onClick={() => {
                  navigate("/setting");
                }}
              >
                
              </span>
            </div>
          </div>
          <div className="mycenter-12">
            <div className="mycenter-13">
              <div className="mycenter-14">
                <img
                  src={imageConfig.baseImageUrl + companyData?.companyLogo}
                  className="mycenter-16"
                />
              </div>
              <div className="mycenter-17">
                <img
                  src="/level/1.png"
                  className="mycenter-19"
                />
                <div className="mycenter-20">
                  <div className="mycenter-21">
                    <div className="mycenter-22"></div>
                  </div>
                  <div className="mycenter-23">
                    <div className="mycenter-24"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mycenter-25">
              <div className="mycenter-26">
                {" "}
                {`${userInfo?.username}`.replace("undefined", "").split("@")[0]}
              </div>
              <div className="mycenter-27">ID:{userInfo?.userCode}</div>
              <div className="mycenter-28">
                {translate(getText("信用分"))}:{userInfo?.jifen}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mycenter-29">
        <div
          className="mycenter-30"
          onClick={() => {
            if (userInfo?.rzstatus === 2) {
              return;
            }
            navigate("/idcard");
          }}
        >
          <div className="mycenter-31">
            <div className="mycenter-32">
              <img
                src="data:image/png;base64,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"
                className="mycenter-34"
              />
            </div>
            <p className="mycenter-35">{translate(getText("身份認證"))}</p>
          </div>
          <p className="mycenter-36">
            {translate(getText(types[userInfo?.rzstatus]))}
          </p>
          <div className="mycenter-37">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAYAAACXOioTAAAD1UlEQVRIx+2WX0ybVRjGn/e09CsUKA6yZWYkkkkWVgS7AM0m/kGjRpNl0SmLu9LFyMWCGokmM8FhcOrF4h+YRjNjYoI3GJdddVtCAtOtwoQxtgEZzRIznXGCkzIY7df2PN5Y+Vo2LP289Lk6+d7k/M7znPec7wgsCobDRsl89DUQ7QCuK6jHAv7NkyJC2JQjNegfHy8sjCbeAvE6gAIAxZr6wavXpifK16+7MjAwYAumUoOCeWVA85m/IQAAEdlM4tOHt2+vtuvoH1AgUPVHTJyPApgAoC31KocYx78bGanp6OhQuYIk88OpsxfqhOxWShpIWCcOQ0nrL1MTfc3NzcmcHaV0n796hEn9oiYn01YkshGa3Xdu3FRvKzrLhGxsuHfc1MZDoIwCSAIASQWgUok6Gjp3zr/aGGWl4qkfxzaJUl0ieMTaoSSuKFGt0cjvwaampkROjqxqrK+dMiF7SYymu0Y5RX/oKl7zwH/iKKW+ocnSfGfiuAj86c44TZEn+/zVZztEtG0QAPwwOnkXdaILgicAOC2laxC2XkiaR1vq6uI5RWfVVn/VT6KcLwM4nVFaC6qD94jxOEmx7Sil78+fv0PFJQiwXkSWYoTMgMldVy9fOnmrc7bqk35/Tc2fXIzvFFFHAMSXVswygRzZcHfV88Fg0LANAoDGxi2/xhNsA6Qv4xB6AbzrXb/hud7eXoet6KzqHx0tcWnHMREJWOciMKvA3Vu31Byz5SglY7EsBiK0rEAamtJgOzoACIVC+eKe7YSSvRluYlCqm4t5H9iOLhQK5dNd3CbgmwDyLU4SoHzlydOv1NbWLtgCDQ8PF5jK3Q6wFYDHUlrQQFeRQx/IhCDjhGcFiSvjIMA9AKwtfBPE2ypWcqh2W/mirZthbOw3j6nc7QQyIVEAH8fmCru33QaSdXQnxsY8RQlHJ4Qt1jcFiBsUOSBRb9dKkLRX0EpOJBn9BMI9ANyW7poXcJ/B2KFAoCr2b/OsuEeD4XDxfGT6HVHYDSDPuvEg3ve6HYd9vtvf2FmB+vvHCzkXe08UXkiHyByI/eYaz2e+igoz2z2+JWhwMFysXbEvCO4A4LJCSP3qRZo9LRXV8dV0rFrewpfKmBf9HODTVogAERD7L9LsWekHl1XXDQ1NlmpX4iNCngVpbeEIgX1ri9xfVlZWxnK5TdSSk8vepDP5NYldGZBZUeolMzJzOFdIGuimirgouhSgNc7rFHnj56nxb7N9VmUVXd/g4LoCw9MF8ilCFgSqzWugx+fzmbCpZTfDyTNnyvOc7k5q+ca8MXPCrpP/ZVt/ATeohyQqj8W7AAAAAElFTkSuQmCC"
              className="mycenter-39"
            />
          </div>
          <div className="mycenter-40"></div>
        </div>
        <div
          className="mycenter-30"
          onClick={() => {
            if (userInfo?.rzstatus === 2) {
              return;
            }
            navigate("/gjidcard");
          }}
        >
          <div className="mycenter-31">
            <div className="mycenter-32">
              <img
                src="data:image/png;base64,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"
                className="mycenter-34"
              />
            </div>
            <p className="mycenter-35">{translate(getText("高级認證"))}</p>
          </div>
          <p className="mycenter-36">
            {translate(getText(types[userInfo?.rzstatus]))}
          </p>
          <div className="mycenter-37">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAYAAACXOioTAAAD1UlEQVRIx+2WX0ybVRjGn/e09CsUKA6yZWYkkkkWVgS7AM0m/kGjRpNl0SmLu9LFyMWCGokmM8FhcOrF4h+YRjNjYoI3GJdddVtCAtOtwoQxtgEZzRIznXGCkzIY7df2PN5Y+Vo2LP289Lk6+d7k/M7znPec7wgsCobDRsl89DUQ7QCuK6jHAv7NkyJC2JQjNegfHy8sjCbeAvE6gAIAxZr6wavXpifK16+7MjAwYAumUoOCeWVA85m/IQAAEdlM4tOHt2+vtuvoH1AgUPVHTJyPApgAoC31KocYx78bGanp6OhQuYIk88OpsxfqhOxWShpIWCcOQ0nrL1MTfc3NzcmcHaV0n796hEn9oiYn01YkshGa3Xdu3FRvKzrLhGxsuHfc1MZDoIwCSAIASQWgUok6Gjp3zr/aGGWl4qkfxzaJUl0ieMTaoSSuKFGt0cjvwaampkROjqxqrK+dMiF7SYymu0Y5RX/oKl7zwH/iKKW+ocnSfGfiuAj86c44TZEn+/zVZztEtG0QAPwwOnkXdaILgicAOC2laxC2XkiaR1vq6uI5RWfVVn/VT6KcLwM4nVFaC6qD94jxOEmx7Sil78+fv0PFJQiwXkSWYoTMgMldVy9fOnmrc7bqk35/Tc2fXIzvFFFHAMSXVswygRzZcHfV88Fg0LANAoDGxi2/xhNsA6Qv4xB6AbzrXb/hud7eXoet6KzqHx0tcWnHMREJWOciMKvA3Vu31Byz5SglY7EsBiK0rEAamtJgOzoACIVC+eKe7YSSvRluYlCqm4t5H9iOLhQK5dNd3CbgmwDyLU4SoHzlydOv1NbWLtgCDQ8PF5jK3Q6wFYDHUlrQQFeRQx/IhCDjhGcFiSvjIMA9AKwtfBPE2ypWcqh2W/mirZthbOw3j6nc7QQyIVEAH8fmCru33QaSdXQnxsY8RQlHJ4Qt1jcFiBsUOSBRb9dKkLRX0EpOJBn9BMI9ANyW7poXcJ/B2KFAoCr2b/OsuEeD4XDxfGT6HVHYDSDPuvEg3ve6HYd9vtvf2FmB+vvHCzkXe08UXkiHyByI/eYaz2e+igoz2z2+JWhwMFysXbEvCO4A4LJCSP3qRZo9LRXV8dV0rFrewpfKmBf9HODTVogAERD7L9LsWekHl1XXDQ1NlmpX4iNCngVpbeEIgX1ri9xfVlZWxnK5TdSSk8vepDP5NYldGZBZUeolMzJzOFdIGuimirgouhSgNc7rFHnj56nxb7N9VmUVXd/g4LoCw9MF8ilCFgSqzWugx+fzmbCpZTfDyTNnyvOc7k5q+ca8MXPCrpP/ZVt/ATeohyQqj8W7AAAAAElFTkSuQmCC"
              className="mycenter-39"
            />
          </div>
          <div className="mycenter-40"></div>
        </div>
        <div
          className="mycenter-52"
          onClick={() => {
            navigate("/jyjl");
          }}
        >
          <div className="mycenter-53">
            <div className="mycenter-54">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhDMTJGMUQzRTA5OTExRUI5MkY1RjY5RjdENEY2OTkzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhDMTJGMUQ0RTA5OTExRUI5MkY1RjY5RjdENEY2OTkzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEMxMkYxRDFFMDk5MTFFQjkyRjVGNjlGN0Q0RjY5OTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEMxMkYxRDJFMDk5MTFFQjkyRjVGNjlGN0Q0RjY5OTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4CIRdLAAAFw0lEQVR42tSba2xURRTHzz7cbekuLaXFYmtrtYkiIUZbQQjVQiEBJSZQgaT4yWiISqIm4jcNGB8pISqt0qiJxogSqqAJj4DKG6kYmthAaWyjNYQgFCjb7WO7z+s5u3Ob7bqvmTv37u5J/h92Mzv3/HZeZ87MNdXP6QadrBC1EFWHmouqRpWjilAOVmYU5UJdRf2N6kGdR3WihvVwyiq5vgrUetQa1AKUJUV5BxP9bn7U90HUOdQ+1Heoy7IcNEuq53HUftQ/qO2oRWnAJjMLq2M7a3mq+4lsAG5AnUKdRK3SCJkMnuo+wZ7VkAng2ahdqOOoejDO6tkzdzEfDAFei+pFbYDM2Qbmw1o9gW2oNlQHm4EzbYXMF/LJLhvYiTqE2gTZZ+TTT6hiWcClbNw0QvYarRLHmK+agKnbHEbVQvbbQ6gjqYabOcWYpYX/Ecgde5j5bBMB/hC1FHLPljLfuYBpun8JctfI93XpxtIU4H8mFEhX2WHja2VQt8gBBQ75QZfbFYSzJ9zw+Y5rcOO6P1XxT1FnUVeivzTF2S3RGFjN60xltR3ad9eAw2nRvfkGr/lh4/p+GLoZSFX0B7aRSdill4jAkj3/Shm2qhkURdFdpXda4dkXZqXj1urY5TQW+G3Rf/3RhQWA3him2scK0nVtSyJgWrwXiwLn5ZuN5IW8vLSj4sWM7X+T1mYt4ypEXhhonM/bzLaWk8A0IFZocUAJGQus8AGvYIyDar9o1pruMbI7q+JMZTVHj+Emzf84trDR4rQmlVzNLuo2pm4PBeCLthswMRFKuz7ndAsGMbPAnmByEpgziLHQKiHhlnIM/3nRAz8f4M+6rmoqguoau6w5I5wYtMraDYWSOFCHa/S7rRUwOhJMu77iEitU3WtLWK/golBHwPMMmTVNCpeTalQlaZZWbS4BV+vdwl2/jcPW169y19n6VSXcc5+N+3lJrJqA75LSwkkcqLnfBo1POmHCk76TDqcZymZbE9YruO6XE3CR3i1Mzm96o1RqvYItPJ2AHXq3sE6hlsivnNIO00IGAws+z0fAozJaOcs3D6qNErBLBrDhmwex540QMK0XFbnXpYV+dp2AB2DqYXRGW9jnU+DY4THo6faCN0ns7fcLVT9AwBchcmqf8RYeHwvB+2/egoF+n14do4eAuzKwIY9r33/jDsMWl1igcWUB7pji75SuXPbD0UNjEAxyP+I8AVPuNqh1xySjhc+d9kD+NBO81TITZsxM5k4+lN9thS93cu3AiLGT/kL6VWc2JACGXSF4cJ4dimaYU5atXWDndZEYXWrgsRc0ZCxlrsN32FLX5fMq0Nri4q16b3SK51tUINMtPJkbS1LG6wnBB+/chr5LXBNbgDFOAg9C5Gw1o0m8VHV5JxT46D0XwnKvSUcY45RM5TbUUxmPtJT4CTrqxjtahkVgVTaIBaZE9RnRsezBrmbPM2nnjTMfEGxbixv6eoVgzzA2iO7Sqm0RdfTSBb+ULk1wsd1YAyzZ1ugPscBHIXLEyG0/7hkLR0paif/qC8D4aKQenzcEH2/TBEssv0R/YakqfTG20K+o51B5XPuuEQW6u3wYMJjC66hFYKd9cJ8n3MI93T6Y5jBBx9dj0N8rvHjQuvU0yj0ll5jg+jBdF9gDuW20P+iI/TLRmSMVbM9h2PZ4sMmAyV6FyA3WXLNTzHfgBaZQ5hnUhRyCJV/XMN+5gcluoZah/sgR2GXMZxAFVsNOuo1+PIthT0Pk4vhgqoLpXpSgqX0l6pMshN2JWo4aSqcwz31pL0Su6q4Dnd444TQ38+Vl5hvIBlaN3jKZo263MmS7UQ8wX7hM9J2HfyFyDX8JC86NMooC6fJoM/MBjAJWjdbpejZhHKSNjg6QIVZ3A9vJaZo8ZZ0tnWSqZOOK1sL5GhKDlHD7HSL3PilikvailsmgV/HolgEdvJdA/FfxbkLkQIDWUl1fxftPgAEAjiIqn5mhU/IAAAAASUVORK5CYII="
                className="mycenter-56"
              />
            </div>
            <p className="mycenter-57">{translate(getText("交易記錄"))}</p>
          </div>
          <div className="mycenter-58">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAYAAACXOioTAAAD1UlEQVRIx+2WX0ybVRjGn/e09CsUKA6yZWYkkkkWVgS7AM0m/kGjRpNl0SmLu9LFyMWCGokmM8FhcOrF4h+YRjNjYoI3GJdddVtCAtOtwoQxtgEZzRIznXGCkzIY7df2PN5Y+Vo2LP289Lk6+d7k/M7znPec7wgsCobDRsl89DUQ7QCuK6jHAv7NkyJC2JQjNegfHy8sjCbeAvE6gAIAxZr6wavXpifK16+7MjAwYAumUoOCeWVA85m/IQAAEdlM4tOHt2+vtuvoH1AgUPVHTJyPApgAoC31KocYx78bGanp6OhQuYIk88OpsxfqhOxWShpIWCcOQ0nrL1MTfc3NzcmcHaV0n796hEn9oiYn01YkshGa3Xdu3FRvKzrLhGxsuHfc1MZDoIwCSAIASQWgUok6Gjp3zr/aGGWl4qkfxzaJUl0ieMTaoSSuKFGt0cjvwaampkROjqxqrK+dMiF7SYymu0Y5RX/oKl7zwH/iKKW+ocnSfGfiuAj86c44TZEn+/zVZztEtG0QAPwwOnkXdaILgicAOC2laxC2XkiaR1vq6uI5RWfVVn/VT6KcLwM4nVFaC6qD94jxOEmx7Sil78+fv0PFJQiwXkSWYoTMgMldVy9fOnmrc7bqk35/Tc2fXIzvFFFHAMSXVswygRzZcHfV88Fg0LANAoDGxi2/xhNsA6Qv4xB6AbzrXb/hud7eXoet6KzqHx0tcWnHMREJWOciMKvA3Vu31Byz5SglY7EsBiK0rEAamtJgOzoACIVC+eKe7YSSvRluYlCqm4t5H9iOLhQK5dNd3CbgmwDyLU4SoHzlydOv1NbWLtgCDQ8PF5jK3Q6wFYDHUlrQQFeRQx/IhCDjhGcFiSvjIMA9AKwtfBPE2ypWcqh2W/mirZthbOw3j6nc7QQyIVEAH8fmCru33QaSdXQnxsY8RQlHJ4Qt1jcFiBsUOSBRb9dKkLRX0EpOJBn9BMI9ANyW7poXcJ/B2KFAoCr2b/OsuEeD4XDxfGT6HVHYDSDPuvEg3ve6HYd9vtvf2FmB+vvHCzkXe08UXkiHyByI/eYaz2e+igoz2z2+JWhwMFysXbEvCO4A4LJCSP3qRZo9LRXV8dV0rFrewpfKmBf9HODTVogAERD7L9LsWekHl1XXDQ1NlmpX4iNCngVpbeEIgX1ri9xfVlZWxnK5TdSSk8vepDP5NYldGZBZUeolMzJzOFdIGuimirgouhSgNc7rFHnj56nxb7N9VmUVXd/g4LoCw9MF8ilCFgSqzWugx+fzmbCpZTfDyTNnyvOc7k5q+ca8MXPCrpP/ZVt/ATeohyQqj8W7AAAAAElFTkSuQmCC"
              className="mycenter-60"
            />
          </div>
          <div className="mycenter-61"></div>
        </div>
        <div
          className="mycenter-52"
          onClick={() => {
            navigate("/c2ccklist");
          }}
        >
          <div className="mycenter-53">
            <div className="mycenter-54">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhDMTJGMUQzRTA5OTExRUI5MkY1RjY5RjdENEY2OTkzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhDMTJGMUQ0RTA5OTExRUI5MkY1RjY5RjdENEY2OTkzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEMxMkYxRDFFMDk5MTFFQjkyRjVGNjlGN0Q0RjY5OTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEMxMkYxRDJFMDk5MTFFQjkyRjVGNjlGN0Q0RjY5OTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4CIRdLAAAFw0lEQVR42tSba2xURRTHzz7cbekuLaXFYmtrtYkiIUZbQQjVQiEBJSZQgaT4yWiISqIm4jcNGB8pISqt0qiJxogSqqAJj4DKG6kYmthAaWyjNYQgFCjb7WO7z+s5u3Ob7bqvmTv37u5J/h92Mzv3/HZeZ87MNdXP6QadrBC1EFWHmouqRpWjilAOVmYU5UJdRf2N6kGdR3WihvVwyiq5vgrUetQa1AKUJUV5BxP9bn7U90HUOdQ+1Heoy7IcNEuq53HUftQ/qO2oRWnAJjMLq2M7a3mq+4lsAG5AnUKdRK3SCJkMnuo+wZ7VkAng2ahdqOOoejDO6tkzdzEfDAFei+pFbYDM2Qbmw1o9gW2oNlQHm4EzbYXMF/LJLhvYiTqE2gTZZ+TTT6hiWcClbNw0QvYarRLHmK+agKnbHEbVQvbbQ6gjqYabOcWYpYX/Ecgde5j5bBMB/hC1FHLPljLfuYBpun8JctfI93XpxtIU4H8mFEhX2WHja2VQt8gBBQ75QZfbFYSzJ9zw+Y5rcOO6P1XxT1FnUVeivzTF2S3RGFjN60xltR3ad9eAw2nRvfkGr/lh4/p+GLoZSFX0B7aRSdill4jAkj3/Shm2qhkURdFdpXda4dkXZqXj1urY5TQW+G3Rf/3RhQWA3him2scK0nVtSyJgWrwXiwLn5ZuN5IW8vLSj4sWM7X+T1mYt4ypEXhhonM/bzLaWk8A0IFZocUAJGQus8AGvYIyDar9o1pruMbI7q+JMZTVHj+Emzf84trDR4rQmlVzNLuo2pm4PBeCLthswMRFKuz7ndAsGMbPAnmByEpgziLHQKiHhlnIM/3nRAz8f4M+6rmoqguoau6w5I5wYtMraDYWSOFCHa/S7rRUwOhJMu77iEitU3WtLWK/golBHwPMMmTVNCpeTalQlaZZWbS4BV+vdwl2/jcPW169y19n6VSXcc5+N+3lJrJqA75LSwkkcqLnfBo1POmHCk76TDqcZymZbE9YruO6XE3CR3i1Mzm96o1RqvYItPJ2AHXq3sE6hlsivnNIO00IGAws+z0fAozJaOcs3D6qNErBLBrDhmwex540QMK0XFbnXpYV+dp2AB2DqYXRGW9jnU+DY4THo6faCN0ns7fcLVT9AwBchcmqf8RYeHwvB+2/egoF+n14do4eAuzKwIY9r33/jDsMWl1igcWUB7pji75SuXPbD0UNjEAxyP+I8AVPuNqh1xySjhc+d9kD+NBO81TITZsxM5k4+lN9thS93cu3AiLGT/kL6VWc2JACGXSF4cJ4dimaYU5atXWDndZEYXWrgsRc0ZCxlrsN32FLX5fMq0Nri4q16b3SK51tUINMtPJkbS1LG6wnBB+/chr5LXBNbgDFOAg9C5Gw1o0m8VHV5JxT46D0XwnKvSUcY45RM5TbUUxmPtJT4CTrqxjtahkVgVTaIBaZE9RnRsezBrmbPM2nnjTMfEGxbixv6eoVgzzA2iO7Sqm0RdfTSBb+ULk1wsd1YAyzZ1ugPscBHIXLEyG0/7hkLR0paif/qC8D4aKQenzcEH2/TBEssv0R/YakqfTG20K+o51B5XPuuEQW6u3wYMJjC66hFYKd9cJ8n3MI93T6Y5jBBx9dj0N8rvHjQuvU0yj0ll5jg+jBdF9gDuW20P+iI/TLRmSMVbM9h2PZ4sMmAyV6FyA3WXLNTzHfgBaZQ5hnUhRyCJV/XMN+5gcluoZah/sgR2GXMZxAFVsNOuo1+PIthT0Pk4vhgqoLpXpSgqX0l6pMshN2JWo4aSqcwz31pL0Su6q4Dnd444TQ38+Vl5hvIBlaN3jKZo263MmS7UQ8wX7hM9J2HfyFyDX8JC86NMooC6fJoM/MBjAJWjdbpejZhHKSNjg6QIVZ3A9vJaZo8ZZ0tnWSqZOOK1sL5GhKDlHD7HSL3PilikvailsmgV/HolgEdvJdA/FfxbkLkQIDWUl1fxftPgAEAjiIqn5mhU/IAAAAASUVORK5CYII="
                className="mycenter-56"
              />
            </div>
            <p className="mycenter-57">{translate(getText("C2C充值記錄"))}</p>
          </div>
          <div className="mycenter-58">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAYAAACXOioTAAAD1UlEQVRIx+2WX0ybVRjGn/e09CsUKA6yZWYkkkkWVgS7AM0m/kGjRpNl0SmLu9LFyMWCGokmM8FhcOrF4h+YRjNjYoI3GJdddVtCAtOtwoQxtgEZzRIznXGCkzIY7df2PN5Y+Vo2LP289Lk6+d7k/M7znPec7wgsCobDRsl89DUQ7QCuK6jHAv7NkyJC2JQjNegfHy8sjCbeAvE6gAIAxZr6wavXpifK16+7MjAwYAumUoOCeWVA85m/IQAAEdlM4tOHt2+vtuvoH1AgUPVHTJyPApgAoC31KocYx78bGanp6OhQuYIk88OpsxfqhOxWShpIWCcOQ0nrL1MTfc3NzcmcHaV0n796hEn9oiYn01YkshGa3Xdu3FRvKzrLhGxsuHfc1MZDoIwCSAIASQWgUok6Gjp3zr/aGGWl4qkfxzaJUl0ieMTaoSSuKFGt0cjvwaampkROjqxqrK+dMiF7SYymu0Y5RX/oKl7zwH/iKKW+ocnSfGfiuAj86c44TZEn+/zVZztEtG0QAPwwOnkXdaILgicAOC2laxC2XkiaR1vq6uI5RWfVVn/VT6KcLwM4nVFaC6qD94jxOEmx7Sil78+fv0PFJQiwXkSWYoTMgMldVy9fOnmrc7bqk35/Tc2fXIzvFFFHAMSXVswygRzZcHfV88Fg0LANAoDGxi2/xhNsA6Qv4xB6AbzrXb/hud7eXoet6KzqHx0tcWnHMREJWOciMKvA3Vu31Byz5SglY7EsBiK0rEAamtJgOzoACIVC+eKe7YSSvRluYlCqm4t5H9iOLhQK5dNd3CbgmwDyLU4SoHzlydOv1NbWLtgCDQ8PF5jK3Q6wFYDHUlrQQFeRQx/IhCDjhGcFiSvjIMA9AKwtfBPE2ypWcqh2W/mirZthbOw3j6nc7QQyIVEAH8fmCru33QaSdXQnxsY8RQlHJ4Qt1jcFiBsUOSBRb9dKkLRX0EpOJBn9BMI9ANyW7poXcJ/B2KFAoCr2b/OsuEeD4XDxfGT6HVHYDSDPuvEg3ve6HYd9vtvf2FmB+vvHCzkXe08UXkiHyByI/eYaz2e+igoz2z2+JWhwMFysXbEvCO4A4LJCSP3qRZo9LRXV8dV0rFrewpfKmBf9HODTVogAERD7L9LsWekHl1XXDQ1NlmpX4iNCngVpbeEIgX1ri9xfVlZWxnK5TdSSk8vepDP5NYldGZBZUeolMzJzOFdIGuimirgouhSgNc7rFHnj56nxb7N9VmUVXd/g4LoCw9MF8ilCFgSqzWugx+fzmbCpZTfDyTNnyvOc7k5q+ca8MXPCrpP/ZVt/ATeohyQqj8W7AAAAAElFTkSuQmCC"
              className="mycenter-60"
            />
          </div>
          <div className="mycenter-61"></div>
        </div>
        {c2ctxStatus == 1 && (
          <div
            className="mycenter-52"
            onClick={() => {
              navigate("/c2ctklist");
            }}
          >
            <div className="mycenter-53">
              <div className="mycenter-54">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhDMTJGMUQzRTA5OTExRUI5MkY1RjY5RjdENEY2OTkzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhDMTJGMUQ0RTA5OTExRUI5MkY1RjY5RjdENEY2OTkzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEMxMkYxRDFFMDk5MTFFQjkyRjVGNjlGN0Q0RjY5OTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEMxMkYxRDJFMDk5MTFFQjkyRjVGNjlGN0Q0RjY5OTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4CIRdLAAAFw0lEQVR42tSba2xURRTHzz7cbekuLaXFYmtrtYkiIUZbQQjVQiEBJSZQgaT4yWiISqIm4jcNGB8pISqt0qiJxogSqqAJj4DKG6kYmthAaWyjNYQgFCjb7WO7z+s5u3Ob7bqvmTv37u5J/h92Mzv3/HZeZ87MNdXP6QadrBC1EFWHmouqRpWjilAOVmYU5UJdRf2N6kGdR3WihvVwyiq5vgrUetQa1AKUJUV5BxP9bn7U90HUOdQ+1Heoy7IcNEuq53HUftQ/qO2oRWnAJjMLq2M7a3mq+4lsAG5AnUKdRK3SCJkMnuo+wZ7VkAng2ahdqOOoejDO6tkzdzEfDAFei+pFbYDM2Qbmw1o9gW2oNlQHm4EzbYXMF/LJLhvYiTqE2gTZZ+TTT6hiWcClbNw0QvYarRLHmK+agKnbHEbVQvbbQ6gjqYabOcWYpYX/Ecgde5j5bBMB/hC1FHLPljLfuYBpun8JctfI93XpxtIU4H8mFEhX2WHja2VQt8gBBQ75QZfbFYSzJ9zw+Y5rcOO6P1XxT1FnUVeivzTF2S3RGFjN60xltR3ad9eAw2nRvfkGr/lh4/p+GLoZSFX0B7aRSdill4jAkj3/Shm2qhkURdFdpXda4dkXZqXj1urY5TQW+G3Rf/3RhQWA3him2scK0nVtSyJgWrwXiwLn5ZuN5IW8vLSj4sWM7X+T1mYt4ypEXhhonM/bzLaWk8A0IFZocUAJGQus8AGvYIyDar9o1pruMbI7q+JMZTVHj+Emzf84trDR4rQmlVzNLuo2pm4PBeCLthswMRFKuz7ndAsGMbPAnmByEpgziLHQKiHhlnIM/3nRAz8f4M+6rmoqguoau6w5I5wYtMraDYWSOFCHa/S7rRUwOhJMu77iEitU3WtLWK/golBHwPMMmTVNCpeTalQlaZZWbS4BV+vdwl2/jcPW169y19n6VSXcc5+N+3lJrJqA75LSwkkcqLnfBo1POmHCk76TDqcZymZbE9YruO6XE3CR3i1Mzm96o1RqvYItPJ2AHXq3sE6hlsivnNIO00IGAws+z0fAozJaOcs3D6qNErBLBrDhmwex540QMK0XFbnXpYV+dp2AB2DqYXRGW9jnU+DY4THo6faCN0ns7fcLVT9AwBchcmqf8RYeHwvB+2/egoF+n14do4eAuzKwIY9r33/jDsMWl1igcWUB7pji75SuXPbD0UNjEAxyP+I8AVPuNqh1xySjhc+d9kD+NBO81TITZsxM5k4+lN9thS93cu3AiLGT/kL6VWc2JACGXSF4cJ4dimaYU5atXWDndZEYXWrgsRc0ZCxlrsN32FLX5fMq0Nri4q16b3SK51tUINMtPJkbS1LG6wnBB+/chr5LXBNbgDFOAg9C5Gw1o0m8VHV5JxT46D0XwnKvSUcY45RM5TbUUxmPtJT4CTrqxjtahkVgVTaIBaZE9RnRsezBrmbPM2nnjTMfEGxbixv6eoVgzzA2iO7Sqm0RdfTSBb+ULk1wsd1YAyzZ1ugPscBHIXLEyG0/7hkLR0paif/qC8D4aKQenzcEH2/TBEssv0R/YakqfTG20K+o51B5XPuuEQW6u3wYMJjC66hFYKd9cJ8n3MI93T6Y5jBBx9dj0N8rvHjQuvU0yj0ll5jg+jBdF9gDuW20P+iI/TLRmSMVbM9h2PZ4sMmAyV6FyA3WXLNTzHfgBaZQ5hnUhRyCJV/XMN+5gcluoZah/sgR2GXMZxAFVsNOuo1+PIthT0Pk4vhgqoLpXpSgqX0l6pMshN2JWo4aSqcwz31pL0Su6q4Dnd444TQ38+Vl5hvIBlaN3jKZo263MmS7UQ8wX7hM9J2HfyFyDX8JC86NMooC6fJoM/MBjAJWjdbpejZhHKSNjg6QIVZ3A9vJaZo8ZZ0tnWSqZOOK1sL5GhKDlHD7HSL3PilikvailsmgV/HolgEdvJdA/FfxbkLkQIDWUl1fxftPgAEAjiIqn5mhU/IAAAAASUVORK5CYII="
                  className="mycenter-56"
                />
              </div>
              <p className="mycenter-57">{translate(getText("C2C提现記錄"))}</p>
            </div>
            <div className="mycenter-58">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAYAAACXOioTAAAD1UlEQVRIx+2WX0ybVRjGn/e09CsUKA6yZWYkkkkWVgS7AM0m/kGjRpNl0SmLu9LFyMWCGokmM8FhcOrF4h+YRjNjYoI3GJdddVtCAtOtwoQxtgEZzRIznXGCkzIY7df2PN5Y+Vo2LP289Lk6+d7k/M7znPec7wgsCobDRsl89DUQ7QCuK6jHAv7NkyJC2JQjNegfHy8sjCbeAvE6gAIAxZr6wavXpifK16+7MjAwYAumUoOCeWVA85m/IQAAEdlM4tOHt2+vtuvoH1AgUPVHTJyPApgAoC31KocYx78bGanp6OhQuYIk88OpsxfqhOxWShpIWCcOQ0nrL1MTfc3NzcmcHaV0n796hEn9oiYn01YkshGa3Xdu3FRvKzrLhGxsuHfc1MZDoIwCSAIASQWgUok6Gjp3zr/aGGWl4qkfxzaJUl0ieMTaoSSuKFGt0cjvwaampkROjqxqrK+dMiF7SYymu0Y5RX/oKl7zwH/iKKW+ocnSfGfiuAj86c44TZEn+/zVZztEtG0QAPwwOnkXdaILgicAOC2laxC2XkiaR1vq6uI5RWfVVn/VT6KcLwM4nVFaC6qD94jxOEmx7Sil78+fv0PFJQiwXkSWYoTMgMldVy9fOnmrc7bqk35/Tc2fXIzvFFFHAMSXVswygRzZcHfV88Fg0LANAoDGxi2/xhNsA6Qv4xB6AbzrXb/hud7eXoet6KzqHx0tcWnHMREJWOciMKvA3Vu31Byz5SglY7EsBiK0rEAamtJgOzoACIVC+eKe7YSSvRluYlCqm4t5H9iOLhQK5dNd3CbgmwDyLU4SoHzlydOv1NbWLtgCDQ8PF5jK3Q6wFYDHUlrQQFeRQx/IhCDjhGcFiSvjIMA9AKwtfBPE2ypWcqh2W/mirZthbOw3j6nc7QQyIVEAH8fmCru33QaSdXQnxsY8RQlHJ4Qt1jcFiBsUOSBRb9dKkLRX0EpOJBn9BMI9ANyW7poXcJ/B2KFAoCr2b/OsuEeD4XDxfGT6HVHYDSDPuvEg3ve6HYd9vtvf2FmB+vvHCzkXe08UXkiHyByI/eYaz2e+igoz2z2+JWhwMFysXbEvCO4A4LJCSP3qRZo9LRXV8dV0rFrewpfKmBf9HODTVogAERD7L9LsWekHl1XXDQ1NlmpX4iNCngVpbeEIgX1ri9xfVlZWxnK5TdSSk8vepDP5NYldGZBZUeolMzJzOFdIGuimirgouhSgNc7rFHnj56nxb7N9VmUVXd/g4LoCw9MF8ilCFgSqzWugx+fzmbCpZTfDyTNnyvOc7k5q+ca8MXPCrpP/ZVt/ATeohyQqj8W7AAAAAElFTkSuQmCC"
                className="mycenter-60"
              />
            </div>
            <div className="mycenter-61"></div>
          </div>
        )}
        <div
          className="mycenter-41"
          onClick={() => {
            navigate("/securitycenter");
          }}
        >
          <div className="mycenter-42">
            <div className="mycenter-43">
              <img
                src="data:image/png;base64,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"
                className="mycenter-45"
              />
            </div>
            <p className="mycenter-46">{translate(getText("安全中心"))}</p>
          </div>
          <div className="mycenter-48">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAYAAACXOioTAAAD1UlEQVRIx+2WX0ybVRjGn/e09CsUKA6yZWYkkkkWVgS7AM0m/kGjRpNl0SmLu9LFyMWCGokmM8FhcOrF4h+YRjNjYoI3GJdddVtCAtOtwoQxtgEZzRIznXGCkzIY7df2PN5Y+Vo2LP289Lk6+d7k/M7znPec7wgsCobDRsl89DUQ7QCuK6jHAv7NkyJC2JQjNegfHy8sjCbeAvE6gAIAxZr6wavXpifK16+7MjAwYAumUoOCeWVA85m/IQAAEdlM4tOHt2+vtuvoH1AgUPVHTJyPApgAoC31KocYx78bGanp6OhQuYIk88OpsxfqhOxWShpIWCcOQ0nrL1MTfc3NzcmcHaV0n796hEn9oiYn01YkshGa3Xdu3FRvKzrLhGxsuHfc1MZDoIwCSAIASQWgUok6Gjp3zr/aGGWl4qkfxzaJUl0ieMTaoSSuKFGt0cjvwaampkROjqxqrK+dMiF7SYymu0Y5RX/oKl7zwH/iKKW+ocnSfGfiuAj86c44TZEn+/zVZztEtG0QAPwwOnkXdaILgicAOC2laxC2XkiaR1vq6uI5RWfVVn/VT6KcLwM4nVFaC6qD94jxOEmx7Sil78+fv0PFJQiwXkSWYoTMgMldVy9fOnmrc7bqk35/Tc2fXIzvFFFHAMSXVswygRzZcHfV88Fg0LANAoDGxi2/xhNsA6Qv4xB6AbzrXb/hud7eXoet6KzqHx0tcWnHMREJWOciMKvA3Vu31Byz5SglY7EsBiK0rEAamtJgOzoACIVC+eKe7YSSvRluYlCqm4t5H9iOLhQK5dNd3CbgmwDyLU4SoHzlydOv1NbWLtgCDQ8PF5jK3Q6wFYDHUlrQQFeRQx/IhCDjhGcFiSvjIMA9AKwtfBPE2ypWcqh2W/mirZthbOw3j6nc7QQyIVEAH8fmCru33QaSdXQnxsY8RQlHJ4Qt1jcFiBsUOSBRb9dKkLRX0EpOJBn9BMI9ANyW7poXcJ/B2KFAoCr2b/OsuEeD4XDxfGT6HVHYDSDPuvEg3ve6HYd9vtvf2FmB+vvHCzkXe08UXkiHyByI/eYaz2e+igoz2z2+JWhwMFysXbEvCO4A4LJCSP3qRZo9LRXV8dV0rFrewpfKmBf9HODTVogAERD7L9LsWekHl1XXDQ1NlmpX4iNCngVpbeEIgX1ri9xfVlZWxnK5TdSSk8vepDP5NYldGZBZUeolMzJzOFdIGuimirgouhSgNc7rFHnj56nxb7N9VmUVXd/g4LoCw9MF8ilCFgSqzWugx+fzmbCpZTfDyTNnyvOc7k5q+ca8MXPCrpP/ZVt/ATeohyQqj8W7AAAAAElFTkSuQmCC"
              className="mycenter-50"
            />
          </div>
          <div className="mycenter-51"></div>
        </div>

        <div
          className="mycenter-112"
          onClick={() => {
            navigate("/noice");
          }}
        >
          <div className="mycenter-113">
            <div className="mycenter-114">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkyQjY5RjAzRTA5OTExRUI4N0MwOEI2NEQ0ODlEQzE1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkyQjY5RjA0RTA5OTExRUI4N0MwOEI2NEQ0ODlEQzE1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTJCNjlGMDFFMDk5MTFFQjg3QzA4QjY0RDQ4OURDMTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTJCNjlGMDJFMDk5MTFFQjg3QzA4QjY0RDQ4OURDMTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6RTE6XAAAHNElEQVR42tRba0xURxT+9gULLA9BREFXsY2KBIzPpkZ8VY2t2kQENfLD2Bqtj1ht4z9/tCZtE6O21VQT2zR92DZqKLU+Uq1VsVZaBRUrWt8UFStClWV3gX32zO7sFtdduHfYF1/yJSx798757sycOefMXEVBTjVChGTii8QxxFxiNjGLmELU8WuMxCfEeuJtYg2xklhBbA6FUeog368/cQGxkPgCUdXF9TpO9rtxHf5vJ/5B/J64j1gXLAOVQbrPROIBYi1xM3G8BLGdQcXvsZn3PLv3pGgQPJl4ilhOnN1NkZ2JZ/c+yduaHAnB/Yi7iSeIBQgfCnibu7kNYRFcTLxKLEHkUMJtKA6l4BjiduJe7oEjjWRuC7MpNtiCE4mHiasRfWA2HSWmBktwOp83LyF6wVaJ49zWbglmw+Yn4mhEP0YQj3Q13ZRdzFm28I9Cz8FIbnOMSKT1IXFq0CIcerQ5efHIH52A54Zq0S8rBtp4JTQaBdpaHWj4x4q7tRZcvmDCxXMmmIx20aamcttXyRHM3P3KYAjNyIzB3IVpmPFqCtLSNQGvG5r7v8uwWpw4U27A/j1NqKowijS7kgdDe32/UPhJHliAf5kH+cLQJaqwdE0GZhelunpRFDXVZmz7oB5/XW6V+1OWlOQR7z0Vtg1MX+F74Zd8Lghj7Hgdtn42GCPH6WgoK7o1QtIzNHilMBXaOCWqK01wOCT/VMsztD2d9fAU7t6FsXBJbyx7sy8UyuB7pEvnTdiwpg4tBlnzexrxl0BeemN3DHptdR8sW5tBj9EJpzP4zBsZTyNnEJJSZOUo7wRaltjiPUFU7LySNJQsTSfDEFIOHqLF+9sHQhMjeapM4NqeEbxeVOzw/DgsW5dB88sZFg7N1WLF233lmLjeV3Af4kyhkolagXUb+kERomEciLOLUlzOUSJmco1ewYtEyz2Fi1Khz46Bk558uPnGW32gUkka2mqu0St4nojY+AQl5i9OhYOeeCSYqddg4rREyW7GI9hTXZSN6bOSSLQiIr3r4ZxiyfER05is7k7BbdKMRJcTiSSGDI9F5gAN6u9aJRUG1aLZUFKyCs8Pi3U5kEhj1Lh4EiypjD1GyeNN2cjJ07rEhmsp6ow5+VqpZueqebwpGwMGaVxzKBrQX6+Remk2E5wp0khKL1XAQN5mc+KLHU2ovWUhL94L+aPivN+xGbD3q8eorDDTB4kFtWQllqxMo4fsP69P7S15Rc1Si6aBcZS8B+rhoz8acLjM4Pp768YGfF6qp8DE/V11VSv2fPFYdns7tzTivY/9l6Lj4iSHmUlMsE5EsFLF1kJHwO+86RjZwq5TeD+LTQNWMQnUngwkCm+mtTTbA/bwlBkJeHDfhvt1VswpSnSNY48zzx0Ri5LXU1D5e6ursiEtJ1ZjweLkgO2ZjJIfhIUJNor0cuMje8A5rKCkn4nywPe6OcVJLspFoPYaGyTnx0Y1L4XIFnzvb2vUeGlW/JM6MJlgthndX24jN662w253ep1RJHGtpl3qpQ9Z4HFHaA4bHLhOosOZEgbi+bOSC3x3lLxCKYTTx80Rj7KuXWnHo4eS53ANE1wlKvjMSTOMBntEs6Uj+2XVrSuZ4DNwn6mQjbY2Jw6VGSOWD9fVWnGuok2quUxjBRPM0owK0V4+csCMB/dsYe9ZBznMr3cZICNZYxqfeCoepaKCbVYnPt3WDKvVEVZHdfSgiZymRY6ppR1LPN8y20VF37lphanFETZHdeWSBaXfyJq7Nq7RK7gB7r1VIaSkKqFLUoa8Js14+4YNO7Y0U0Ymb+ZxjU9VKjcRZ4kI1g9Sh6XyUUM9u+ujFrS1ym5rU8fypQfsDNRpkd0HfbYqpIId5F8P/9BKKadZzmaaN1zg2p4R7NmHOSa74jBQ/ZS3fNzkoGzIHe5Nnq6Vsy3yDK5fsWLfbjPF7sIu5l3fAnVHsF22MuJcWfXpeAUMT+y4cNZCQi24dd3mfQA/H2xDwdRYjB0fg76Z0oqjLG2srrKi/Fgbbl6zdWdwlPl2oL8NcZZI/CmnEqJWu1O3roZb5gAVhgzTIEuvQlKyEgk6heu3ZrMTxhYnHtbbyePbcJMemKW921PE74a4vwIAu2A5fDaSO/X5Ejuh/q7dxTBhua/YjsuSL9jZiJ3oudgJP+c7OhPMsBbuE6w9Dae47ZArmMVtRXw+9xQwWwu57bIFMzTBfUbiYg8RO43bDFHBnrCTnUY/EcVif4X74HhDl+VeiTdkVfWXiZ9EodgdxOnEfyXVt2XcmIVO7KjufITojROZMHBbVnHbEGzBHrC3THI86VaE8B1xGLdFFkSPjz2A+xj+FB6chwu/wX14dBG3AeES7AFbpwu4wzjEEptQJEv83pN5Jtct5xmsF7XKOfV8XrG1kL14JfpaD4s/z8J99plFTEF7UUsRplfxWBDPNt57w/+reI1wbwiwtTSkr+L9J8AAeUY2nLK3OQkAAAAASUVORK5CYII="
                className="mycenter-116"
              />
            </div>
            <p className="mycenter-117">
              {translate(getText("留言列表"))}
              <Badge
                count={loginmsg?.noticeCount ? loginmsg?.noticeCount : 0}
                offset={[8, 0]}
              >
                &nbsp;
              </Badge>
            </p>
          </div>
          <div className="mycenter-118">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAYAAACXOioTAAAD1UlEQVRIx+2WX0ybVRjGn/e09CsUKA6yZWYkkkkWVgS7AM0m/kGjRpNl0SmLu9LFyMWCGokmM8FhcOrF4h+YRjNjYoI3GJdddVtCAtOtwoQxtgEZzRIznXGCkzIY7df2PN5Y+Vo2LP289Lk6+d7k/M7znPec7wgsCobDRsl89DUQ7QCuK6jHAv7NkyJC2JQjNegfHy8sjCbeAvE6gAIAxZr6wavXpifK16+7MjAwYAumUoOCeWVA85m/IQAAEdlM4tOHt2+vtuvoH1AgUPVHTJyPApgAoC31KocYx78bGanp6OhQuYIk88OpsxfqhOxWShpIWCcOQ0nrL1MTfc3NzcmcHaV0n796hEn9oiYn01YkshGa3Xdu3FRvKzrLhGxsuHfc1MZDoIwCSAIASQWgUok6Gjp3zr/aGGWl4qkfxzaJUl0ieMTaoSSuKFGt0cjvwaampkROjqxqrK+dMiF7SYymu0Y5RX/oKl7zwH/iKKW+ocnSfGfiuAj86c44TZEn+/zVZztEtG0QAPwwOnkXdaILgicAOC2laxC2XkiaR1vq6uI5RWfVVn/VT6KcLwM4nVFaC6qD94jxOEmx7Sil78+fv0PFJQiwXkSWYoTMgMldVy9fOnmrc7bqk35/Tc2fXIzvFFFHAMSXVswygRzZcHfV88Fg0LANAoDGxi2/xhNsA6Qv4xB6AbzrXb/hud7eXoet6KzqHx0tcWnHMREJWOciMKvA3Vu31Byz5SglY7EsBiK0rEAamtJgOzoACIVC+eKe7YSSvRluYlCqm4t5H9iOLhQK5dNd3CbgmwDyLU4SoHzlydOv1NbWLtgCDQ8PF5jK3Q6wFYDHUlrQQFeRQx/IhCDjhGcFiSvjIMA9AKwtfBPE2ypWcqh2W/mirZthbOw3j6nc7QQyIVEAH8fmCru33QaSdXQnxsY8RQlHJ4Qt1jcFiBsUOSBRb9dKkLRX0EpOJBn9BMI9ANyW7poXcJ/B2KFAoCr2b/OsuEeD4XDxfGT6HVHYDSDPuvEg3ve6HYd9vtvf2FmB+vvHCzkXe08UXkiHyByI/eYaz2e+igoz2z2+JWhwMFysXbEvCO4A4LJCSP3qRZo9LRXV8dV0rFrewpfKmBf9HODTVogAERD7L9LsWekHl1XXDQ1NlmpX4iNCngVpbeEIgX1ri9xfVlZWxnK5TdSSk8vepDP5NYldGZBZUeolMzJzOFdIGuimirgouhSgNc7rFHnj56nxb7N9VmUVXd/g4LoCw9MF8ilCFgSqzWugx+fzmbCpZTfDyTNnyvOc7k5q+ca8MXPCrpP/ZVt/ATeohyQqj8W7AAAAAElFTkSuQmCC"
              className="mycenter-120"
            />
          </div>
          <div className="mycenter-121"></div>
        </div>
        <div
          className="mycenter-112"
          onClick={() => {
            navigate("/chatcenter");
          }}
        >
          <div className="mycenter-113">
            <div className="mycenter-114">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkyQjY5RjAzRTA5OTExRUI4N0MwOEI2NEQ0ODlEQzE1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkyQjY5RjA0RTA5OTExRUI4N0MwOEI2NEQ0ODlEQzE1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTJCNjlGMDFFMDk5MTFFQjg3QzA4QjY0RDQ4OURDMTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTJCNjlGMDJFMDk5MTFFQjg3QzA4QjY0RDQ4OURDMTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6RTE6XAAAHNElEQVR42tRb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"
                className="mycenter-116"
              />
            </div>
            <p className="mycenter-127">
              {translate(getText("在線客服"))}
              <Badge count={loginmsg?.userCount} offset={[0, -15]}></Badge>
            </p>
          </div>
          <div className="mycenter-118">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAYAAACXOioTAAAD1UlEQVRIx+2WX0ybVRjGn/e09CsUKA6yZWYkkkkWVgS7AM0m/kGjRpNl0SmLu9LFyMWCGokmM8FhcOrF4h+YRjNjYoI3GJdddVtCAtOtwoQxtgEZzRIznXGCkzIY7df2PN5Y+Vo2LP289Lk6+d7k/M7znPec7wgsCobDRsl89DUQ7QCuK6jHAv7NkyJC2JQjNegfHy8sjCbeAvE6gAIAxZr6wavXpifK16+7MjAwYAumUoOCeWVA85m/IQAAEdlM4tOHt2+vtuvoH1AgUPVHTJyPApgAoC31KocYx78bGanp6OhQuYIk88OpsxfqhOxWShpIWCcOQ0nrL1MTfc3NzcmcHaV0n796hEn9oiYn01YkshGa3Xdu3FRvKzrLhGxsuHfc1MZDoIwCSAIASQWgUok6Gjp3zr/aGGWl4qkfxzaJUl0ieMTaoSSuKFGt0cjvwaampkROjqxqrK+dMiF7SYymu0Y5RX/oKl7zwH/iKKW+ocnSfGfiuAj86c44TZEn+/zVZztEtG0QAPwwOnkXdaILgicAOC2laxC2XkiaR1vq6uI5RWfVVn/VT6KcLwM4nVFaC6qD94jxOEmx7Sil78+fv0PFJQiwXkSWYoTMgMldVy9fOnmrc7bqk35/Tc2fXIzvFFFHAMSXVswygRzZcHfV88Fg0LANAoDGxi2/xhNsA6Qv4xB6AbzrXb/hud7eXoet6KzqHx0tcWnHMREJWOciMKvA3Vu31Byz5SglY7EsBiK0rEAamtJgOzoACIVC+eKe7YSSvRluYlCqm4t5H9iOLhQK5dNd3CbgmwDyLU4SoHzlydOv1NbWLtgCDQ8PF5jK3Q6wFYDHUlrQQFeRQx/IhCDjhGcFiSvjIMA9AKwtfBPE2ypWcqh2W/mirZthbOw3j6nc7QQyIVEAH8fmCru33QaSdXQnxsY8RQlHJ4Qt1jcFiBsUOSBRb9dKkLRX0EpOJBn9BMI9ANyW7poXcJ/B2KFAoCr2b/OsuEeD4XDxfGT6HVHYDSDPuvEg3ve6HYd9vtvf2FmB+vvHCzkXe08UXkiHyByI/eYaz2e+igoz2z2+JWhwMFysXbEvCO4A4LJCSP3qRZo9LRXV8dV0rFrewpfKmBf9HODTVogAERD7L9LsWekHl1XXDQ1NlmpX4iNCngVpbeEIgX1ri9xfVlZWxnK5TdSSk8vepDP5NYldGZBZUeolMzJzOFdIGuimirgouhSgNc7rFHnj56nxb7N9VmUVXd/g4LoCw9MF8ilCFgSqzWugx+fzmbCpZTfDyTNnyvOc7k5q+ca8MXPCrpP/ZVt/ATeohyQqj8W7AAAAAElFTkSuQmCC"
              className="mycenter-120"
            />
          </div>
          <div className="mycenter-121"></div>
        </div>

        <div
          className="mycenter-122"
          onClick={() => {
            navigate("/helplist");
          }}
        >
          <div className="mycenter-123">
            <div className="mycenter-124">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk1MDI4QUQzRTA5OTExRUI5NDk3RkFDQjlGM0JEOUIyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk1MDI4QUQ0RTA5OTExRUI5NDk3RkFDQjlGM0JEOUIyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTUwMjhBRDFFMDk5MTFFQjk0OTdGQUNCOUYzQkQ5QjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTUwMjhBRDJFMDk5MTFFQjk0OTdGQUNCOUYzQkQ5QjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6v7oukAAAIJ0lEQVR42tRb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"
                className="mycenter-126"
              />
            </div>
            <p className="mycenter-127">{translate(getText("幫助中心"))}</p>
          </div>
          <div className="mycenter-128">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAYAAACXOioTAAAD1UlEQVRIx+2WX0ybVRjGn/e09CsUKA6yZWYkkkkWVgS7AM0m/kGjRpNl0SmLu9LFyMWCGokmM8FhcOrF4h+YRjNjYoI3GJdddVtCAtOtwoQxtgEZzRIznXGCkzIY7df2PN5Y+Vo2LP289Lk6+d7k/M7znPec7wgsCobDRsl89DUQ7QCuK6jHAv7NkyJC2JQjNegfHy8sjCbeAvE6gAIAxZr6wavXpifK16+7MjAwYAumUoOCeWVA85m/IQAAEdlM4tOHt2+vtuvoH1AgUPVHTJyPApgAoC31KocYx78bGanp6OhQuYIk88OpsxfqhOxWShpIWCcOQ0nrL1MTfc3NzcmcHaV0n796hEn9oiYn01YkshGa3Xdu3FRvKzrLhGxsuHfc1MZDoIwCSAIASQWgUok6Gjp3zr/aGGWl4qkfxzaJUl0ieMTaoSSuKFGt0cjvwaampkROjqxqrK+dMiF7SYymu0Y5RX/oKl7zwH/iKKW+ocnSfGfiuAj86c44TZEn+/zVZztEtG0QAPwwOnkXdaILgicAOC2laxC2XkiaR1vq6uI5RWfVVn/VT6KcLwM4nVFaC6qD94jxOEmx7Sil78+fv0PFJQiwXkSWYoTMgMldVy9fOnmrc7bqk35/Tc2fXIzvFFFHAMSXVswygRzZcHfV88Fg0LANAoDGxi2/xhNsA6Qv4xB6AbzrXb/hud7eXoet6KzqHx0tcWnHMREJWOciMKvA3Vu31Byz5SglY7EsBiK0rEAamtJgOzoACIVC+eKe7YSSvRluYlCqm4t5H9iOLhQK5dNd3CbgmwDyLU4SoHzlydOv1NbWLtgCDQ8PF5jK3Q6wFYDHUlrQQFeRQx/IhCDjhGcFiSvjIMA9AKwtfBPE2ypWcqh2W/mirZthbOw3j6nc7QQyIVEAH8fmCru33QaSdXQnxsY8RQlHJ4Qt1jcFiBsUOSBRb9dKkLRX0EpOJBn9BMI9ANyW7poXcJ/B2KFAoCr2b/OsuEeD4XDxfGT6HVHYDSDPuvEg3ve6HYd9vtvf2FmB+vvHCzkXe08UXkiHyByI/eYaz2e+igoz2z2+JWhwMFysXbEvCO4A4LJCSP3qRZo9LRXV8dV0rFrewpfKmBf9HODTVogAERD7L9LsWekHl1XXDQ1NlmpX4iNCngVpbeEIgX1ri9xfVlZWxnK5TdSSk8vepDP5NYldGZBZUeolMzJzOFdIGuimirgouhSgNc7rFHnj56nxb7N9VmUVXd/g4LoCw9MF8ilCFgSqzWugx+fzmbCpZTfDyTNnyvOc7k5q+ca8MXPCrpP/ZVt/ATeohyQqj8W7AAAAAElFTkSuQmCC"
              className="mycenter-130"
            />
          </div>
        </div>

        <div
          className="mycenter-131"
          onClick={() => {
            navigate("/setting");
          }}
        >
          <div className="mycenter-132">
            <div className="mycenter-133">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk2NzM3RkYzRTA5OTExRUJBOTNCRDFBMzlCNjRDRUU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk2NzM3RkY0RTA5OTExRUJBOTNCRDFBMzlCNjRDRUU0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTY3MzdGRjFFMDk5MTFFQkE5M0JEMUEzOUI2NENFRTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTY3MzdGRjJFMDk5MTFFQkE5M0JEMUEzOUI2NENFRTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz72sPZ7AAAGg0lEQVR42tRb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"
                className="mycenter-135"
              />
            </div>
            <p className="mycenter-136">{translate(getText("设置"))}</p>
          </div>
          <div className="mycenter-137">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAYAAACXOioTAAAD1UlEQVRIx+2WX0ybVRjGn/e09CsUKA6yZWYkkkkWVgS7AM0m/kGjRpNl0SmLu9LFyMWCGokmM8FhcOrF4h+YRjNjYoI3GJdddVtCAtOtwoQxtgEZzRIznXGCkzIY7df2PN5Y+Vo2LP289Lk6+d7k/M7znPec7wgsCobDRsl89DUQ7QCuK6jHAv7NkyJC2JQjNegfHy8sjCbeAvE6gAIAxZr6wavXpifK16+7MjAwYAumUoOCeWVA85m/IQAAEdlM4tOHt2+vtuvoH1AgUPVHTJyPApgAoC31KocYx78bGanp6OhQuYIk88OpsxfqhOxWShpIWCcOQ0nrL1MTfc3NzcmcHaV0n796hEn9oiYn01YkshGa3Xdu3FRvKzrLhGxsuHfc1MZDoIwCSAIASQWgUok6Gjp3zr/aGGWl4qkfxzaJUl0ieMTaoSSuKFGt0cjvwaampkROjqxqrK+dMiF7SYymu0Y5RX/oKl7zwH/iKKW+ocnSfGfiuAj86c44TZEn+/zVZztEtG0QAPwwOnkXdaILgicAOC2laxC2XkiaR1vq6uI5RWfVVn/VT6KcLwM4nVFaC6qD94jxOEmx7Sil78+fv0PFJQiwXkSWYoTMgMldVy9fOnmrc7bqk35/Tc2fXIzvFFFHAMSXVswygRzZcHfV88Fg0LANAoDGxi2/xhNsA6Qv4xB6AbzrXb/hud7eXoet6KzqHx0tcWnHMREJWOciMKvA3Vu31Byz5SglY7EsBiK0rEAamtJgOzoACIVC+eKe7YSSvRluYlCqm4t5H9iOLhQK5dNd3CbgmwDyLU4SoHzlydOv1NbWLtgCDQ8PF5jK3Q6wFYDHUlrQQFeRQx/IhCDjhGcFiSvjIMA9AKwtfBPE2ypWcqh2W/mirZthbOw3j6nc7QQyIVEAH8fmCru33QaSdXQnxsY8RQlHJ4Qt1jcFiBsUOSBRb9dKkLRX0EpOJBn9BMI9ANyW7poXcJ/B2KFAoCr2b/OsuEeD4XDxfGT6HVHYDSDPuvEg3ve6HYd9vtvf2FmB+vvHCzkXe08UXkiHyByI/eYaz2e+igoz2z2+JWhwMFysXbEvCO4A4LJCSP3qRZo9LRXV8dV0rFrewpfKmBf9HODTVogAERD7L9LsWekHl1XXDQ1NlmpX4iNCngVpbeEIgX1ri9xfVlZWxnK5TdSSk8vepDP5NYldGZBZUeolMzJzOFdIGuimirgouhSgNc7rFHnj56nxb7N9VmUVXd/g4LoCw9MF8ilCFgSqzWugx+fzmbCpZTfDyTNnyvOc7k5q+ca8MXPCrpP/ZVt/ATeohyQqj8W7AAAAAElFTkSuQmCC"
              className="mycenter-139"
            />
          </div>
        </div>
        {/* <div
          className="mycenter-92"
          onClick={() => {
            navigate("/borrowmoney");
          }}
        >
          <div className="mycenter-93">
            <div className="mycenter-94">
              <div className="mycenter-95"></div>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkwQUZBQjczRTA5OTExRUI5RkIwQjE0RTNERkQ5RTlDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkwQUZBQjc0RTA5OTExRUI5RkIwQjE0RTNERkQ5RTlDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTBBRkFCNzFFMDk5MTFFQjlGQjBCMTRFM0RGRDlFOUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTBBRkFCNzJFMDk5MTFFQjlGQjBCMTRFM0RGRDlFOUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7pBcC4AAAER0lEQVR42uSbXUgUURTHz66mBGtalJT2gQ9BIhGVJJXWaipW+qD5AfqeUBG9CNVTBBWoUCQl+SxFRfkgRUrlR5YVBkZKb9mnkWRutj0ouds5zlnTbdm5szuzM3f9wx/CZu49v70z9+PcO7ac9NdgkBLRO9GZ6Ax0GjoVnYR28DVutAs9in6HHkYPoPvRP40IKlbn8taiq9Bl6Cx0jMr1Djbdt2Pe32fQL9B30bfRH/UK0K5TOXvQ7ej36Eb0LgHYYIrhMhq55ansvVYAdqJ70T3o4jAhg8FT2d1cl9MM4DXoVnQXOgcipxyus5VjiAhwBfotugbMUw3HUGEkcBy6CX2Le2CzlcixUEzxegMnoO+jj4H1RDF1olfoBbyK35t9YF3RKPGYYw0LmB6bB+jtYH1tQXeovW52lXeWBv5tII+2csxxoQBfROeBfMrj2DUBU3d/BOQVxV4pCkwT/BaQX9d4jq4K3MQrGtlFDJfVgHPRpRA9KvUfTv2Xh2dFSjl9YR0UliwHu91cGo8HZxztE3D+1Kdgl51BPwrUwjR4Z4tUVFCcBDabF7xec00xUCwqyma2/1q4TvSXtdkAK7TGM0uxCKiOl5ZzwMnoItFKvB6vbO9yETOO+R7pai3pHrMfZX8LprKq57fwIW2dhXQt7GO8FAv/sougpYUlFDEmErDmhFt356SMwLOJwdhQVkPnTn6RdSKSSZ3WZlg8yiDgtEUEnEaPdIrWu1pubrAUxeGqD6KXpsaGsjJKXh0jawsvI2CH9km7V1bghJA20zwz0gJPE7BbaytL3MJuAnYtIuBfBDwaKPcTHNgjK/A3Ah6BhZvR0dzCIwQ8BMquvSU6rSsNEzA0OBXw/0rKHXCg1BFO8cME/ErrXUYmACbGZ+C3O/Ar4570hFv3AAE/A+VMRYwVHmmvyrI0jLqJsZ+A6bQMnZrJtgJw1u54SEkN/NtvTF8STt3E6PJNPO5oATYyAeAsXGpU3cQ4l+K5jm4AwbyWhL30H2acAxwDZW/1oNktbJA6mHFBi9aLAtOwJJgPNlyCv3297x/zdx4oUd0ncvfzvqnZbQ6qzExTDBSLivqYbVY2v7OWtPH0MMqyHAXzmfy3w2jTqS2KYNv8GzDQ/t9xXkHJLhezgBrwZ3RtFADXMosqMIlOuDVLDNvMDCAKTDoByglW2dTLsYNW4Gl0OfqNRLAUaxnHrhmYNI7ORw9KApvPMUOowL5pJ51G77Iw7BNQDo6PqV0oeiyFtgv3U0LCgrBXeXLxQ+RiLedwaA5HR3UrwaAvTjRqkmM5yrGB3sA+0Vcm6b7llkm6gd7EsWhSqCetvoJyDD9XdMGhk56Ccni0mmOASAH7RON0DncY92jlaACkh8t2clYmrM5Trw+1etjr+b2isZBy3aFuM1LC7SUoZ59pxqTbh1q2CH2KR6cMaON9JQT+FO87KBsCNJYa+ineXwEGAGlsG3gPemWtAAAAAElFTkSuQmCC"
                className="mycenter-96"
              />
            </div>
            <p className="mycenter-97">{translate(getText("借款"))}</p>
          </div>
          <div className="mycenter-98">
            <div className="mycenter-99"></div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAYAAACXOioTAAAD1UlEQVRIx+2WX0ybVRjGn/e09CsUKA6yZWYkkkkWVgS7AM0m/kGjRpNl0SmLu9LFyMWCGokmM8FhcOrF4h+YRjNjYoI3GJdddVtCAtOtwoQxtgEZzRIznXGCkzIY7df2PN5Y+Vo2LP289Lk6+d7k/M7znPec7wgsCobDRsl89DUQ7QCuK6jHAv7NkyJC2JQjNegfHy8sjCbeAvE6gAIAxZr6wavXpifK16+7MjAwYAumUoOCeWVA85m/IQAAEdlM4tOHt2+vtuvoH1AgUPVHTJyPApgAoC31KocYx78bGanp6OhQuYIk88OpsxfqhOxWShpIWCcOQ0nrL1MTfc3NzcmcHaV0n796hEn9oiYn01YkshGa3Xdu3FRvKzrLhGxsuHfc1MZDoIwCSAIASQWgUok6Gjp3zr/aGGWl4qkfxzaJUl0ieMTaoSSuKFGt0cjvwaampkROjqxqrK+dMiF7SYymu0Y5RX/oKl7zwH/iKKW+ocnSfGfiuAj86c44TZEn+/zVZztEtG0QAPwwOnkXdaILgicAOC2laxC2XkiaR1vq6uI5RWfVVn/VT6KcLwM4nVFaC6qD94jxOEmx7Sil78+fv0PFJQiwXkSWYoTMgMldVy9fOnmrc7bqk35/Tc2fXIzvFFFHAMSXVswygRzZcHfV88Fg0LANAoDGxi2/xhNsA6Qv4xB6AbzrXb/hud7eXoet6KzqHx0tcWnHMREJWOciMKvA3Vu31Byz5SglY7EsBiK0rEAamtJgOzoACIVC+eKe7YSSvRluYlCqm4t5H9iOLhQK5dNd3CbgmwDyLU4SoHzlydOv1NbWLtgCDQ8PF5jK3Q6wFYDHUlrQQFeRQx/IhCDjhGcFiSvjIMA9AKwtfBPE2ypWcqh2W/mirZthbOw3j6nc7QQyIVEAH8fmCru33QaSdXQnxsY8RQlHJ4Qt1jcFiBsUOSBRb9dKkLRX0EpOJBn9BMI9ANyW7poXcJ/B2KFAoCr2b/OsuEeD4XDxfGT6HVHYDSDPuvEg3ve6HYd9vtvf2FmB+vvHCzkXe08UXkiHyByI/eYaz2e+igoz2z2+JWhwMFysXbEvCO4A4LJCSP3qRZo9LRXV8dV0rFrewpfKmBf9HODTVogAERD7L9LsWekHl1XXDQ1NlmpX4iNCngVpbeEIgX1ri9xfVlZWxnK5TdSSk8vepDP5NYldGZBZUeolMzJzOFdIGuimirgouhSgNc7rFHnj56nxb7N9VmUVXd/g4LoCw9MF8ilCFgSqzWugx+fzmbCpZTfDyTNnyvOc7k5q+ca8MXPCrpP/ZVt/ATeohyQqj8W7AAAAAElFTkSuQmCC"
              className="mycenter-100"
            />
          </div>
          <div className="mycenter-101"></div>
        </div> */}
      </div>
      <div className="mycenter-140"></div>
    </div>
  );
}
