import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function SettingPage({ userInfo }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div class="setting-1">
      <div class="setting-2">
        <div class="setting-3">
          <div class="setting-4">
            <div class="setting-5">
              <div class="setting-6">
                <p class="setting-7">{translate(getText("暱稱"))}</p>
              </div>
              <div class="setting-8">
                <p class="setting-9">{userInfo?.userCode}</p>
                <div class="setting-10">
                  <div class="setting-11"></div>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAYAAACXOioTAAAD1UlEQVRIx+2WX0ybVRjGn/e09CsUKA6yZWYkkkkWVgS7AM0m/kGjRpNl0SmLu9LFyMWCGokmM8FhcOrF4h+YRjNjYoI3GJdddVtCAtOtwoQxtgEZzRIznXGCkzIY7df2PN5Y+Vo2LP289Lk6+d7k/M7znPec7wgsCobDRsl89DUQ7QCuK6jHAv7NkyJC2JQjNegfHy8sjCbeAvE6gAIAxZr6wavXpifK16+7MjAwYAumUoOCeWVA85m/IQAAEdlM4tOHt2+vtuvoH1AgUPVHTJyPApgAoC31KocYx78bGanp6OhQuYIk88OpsxfqhOxWShpIWCcOQ0nrL1MTfc3NzcmcHaV0n796hEn9oiYn01YkshGa3Xdu3FRvKzrLhGxsuHfc1MZDoIwCSAIASQWgUok6Gjp3zr/aGGWl4qkfxzaJUl0ieMTaoSSuKFGt0cjvwaampkROjqxqrK+dMiF7SYymu0Y5RX/oKl7zwH/iKKW+ocnSfGfiuAj86c44TZEn+/zVZztEtG0QAPwwOnkXdaILgicAOC2laxC2XkiaR1vq6uI5RWfVVn/VT6KcLwM4nVFaC6qD94jxOEmx7Sil78+fv0PFJQiwXkSWYoTMgMldVy9fOnmrc7bqk35/Tc2fXIzvFFFHAMSXVswygRzZcHfV88Fg0LANAoDGxi2/xhNsA6Qv4xB6AbzrXb/hud7eXoet6KzqHx0tcWnHMREJWOciMKvA3Vu31Byz5SglY7EsBiK0rEAamtJgOzoACIVC+eKe7YSSvRluYlCqm4t5H9iOLhQK5dNd3CbgmwDyLU4SoHzlydOv1NbWLtgCDQ8PF5jK3Q6wFYDHUlrQQFeRQx/IhCDjhGcFiSvjIMA9AKwtfBPE2ypWcqh2W/mirZthbOw3j6nc7QQyIVEAH8fmCru33QaSdXQnxsY8RQlHJ4Qt1jcFiBsUOSBRb9dKkLRX0EpOJBn9BMI9ANyW7poXcJ/B2KFAoCr2b/OsuEeD4XDxfGT6HVHYDSDPuvEg3ve6HYd9vtvf2FmB+vvHCzkXe08UXkiHyByI/eYaz2e+igoz2z2+JWhwMFysXbEvCO4A4LJCSP3qRZo9LRXV8dV0rFrewpfKmBf9HODTVogAERD7L9LsWekHl1XXDQ1NlmpX4iNCngVpbeEIgX1ri9xfVlZWxnK5TdSSk8vepDP5NYldGZBZUeolMzJzOFdIGuimirgouhSgNc7rFHnj56nxb7N9VmUVXd/g4LoCw9MF8ilCFgSqzWugx+fzmbCpZTfDyTNnyvOc7k5q+ca8MXPCrpP/ZVt/ATeohyQqj8W7AAAAAElFTkSuQmCC"
                    draggable="true"
                    class="setting-12"
                  />
                </div>
              </div>
            </div>
            <div class="setting-13">
              <div class="setting-14">
                <p class="setting-15">{translate(getText("賬號"))}</p>
              </div>
              <div class="setting-16">
                <p class="setting-17">{userInfo?.username}</p>
                <div class="setting-18">
                  <div class="setting-19"></div>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAYAAACXOioTAAAD1UlEQVRIx+2WX0ybVRjGn/e09CsUKA6yZWYkkkkWVgS7AM0m/kGjRpNl0SmLu9LFyMWCGokmM8FhcOrF4h+YRjNjYoI3GJdddVtCAtOtwoQxtgEZzRIznXGCkzIY7df2PN5Y+Vo2LP289Lk6+d7k/M7znPec7wgsCobDRsl89DUQ7QCuK6jHAv7NkyJC2JQjNegfHy8sjCbeAvE6gAIAxZr6wavXpifK16+7MjAwYAumUoOCeWVA85m/IQAAEdlM4tOHt2+vtuvoH1AgUPVHTJyPApgAoC31KocYx78bGanp6OhQuYIk88OpsxfqhOxWShpIWCcOQ0nrL1MTfc3NzcmcHaV0n796hEn9oiYn01YkshGa3Xdu3FRvKzrLhGxsuHfc1MZDoIwCSAIASQWgUok6Gjp3zr/aGGWl4qkfxzaJUl0ieMTaoSSuKFGt0cjvwaampkROjqxqrK+dMiF7SYymu0Y5RX/oKl7zwH/iKKW+ocnSfGfiuAj86c44TZEn+/zVZztEtG0QAPwwOnkXdaILgicAOC2laxC2XkiaR1vq6uI5RWfVVn/VT6KcLwM4nVFaC6qD94jxOEmx7Sil78+fv0PFJQiwXkSWYoTMgMldVy9fOnmrc7bqk35/Tc2fXIzvFFFHAMSXVswygRzZcHfV88Fg0LANAoDGxi2/xhNsA6Qv4xB6AbzrXb/hud7eXoet6KzqHx0tcWnHMREJWOciMKvA3Vu31Byz5SglY7EsBiK0rEAamtJgOzoACIVC+eKe7YSSvRluYlCqm4t5H9iOLhQK5dNd3CbgmwDyLU4SoHzlydOv1NbWLtgCDQ8PF5jK3Q6wFYDHUlrQQFeRQx/IhCDjhGcFiSvjIMA9AKwtfBPE2ypWcqh2W/mirZthbOw3j6nc7QQyIVEAH8fmCru33QaSdXQnxsY8RQlHJ4Qt1jcFiBsUOSBRb9dKkLRX0EpOJBn9BMI9ANyW7poXcJ/B2KFAoCr2b/OsuEeD4XDxfGT6HVHYDSDPuvEg3ve6HYd9vtvf2FmB+vvHCzkXe08UXkiHyByI/eYaz2e+igoz2z2+JWhwMFysXbEvCO4A4LJCSP3qRZo9LRXV8dV0rFrewpfKmBf9HODTVogAERD7L9LsWekHl1XXDQ1NlmpX4iNCngVpbeEIgX1ri9xfVlZWxnK5TdSSk8vepDP5NYldGZBZUeolMzJzOFdIGuimirgouhSgNc7rFHnj56nxb7N9VmUVXd/g4LoCw9MF8ilCFgSqzWugx+fzmbCpZTfDyTNnyvOc7k5q+ca8MXPCrpP/ZVt/ATeohyQqj8W7AAAAAElFTkSuQmCC"
                    draggable="true"
                    class="setting-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="setting-21">
          {/* <div class="setting-22">
            <div class="setting-23">
              <div class="setting-24">
                <p class="setting-25">設置提現密碼</p>
              </div>
              <div class="setting-26">
                <div class="setting-27">
                  <div class="setting-28"></div>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAYAAACXOioTAAAD1UlEQVRIx+2WX0ybVRjGn/e09CsUKA6yZWYkkkkWVgS7AM0m/kGjRpNl0SmLu9LFyMWCGokmM8FhcOrF4h+YRjNjYoI3GJdddVtCAtOtwoQxtgEZzRIznXGCkzIY7df2PN5Y+Vo2LP289Lk6+d7k/M7znPec7wgsCobDRsl89DUQ7QCuK6jHAv7NkyJC2JQjNegfHy8sjCbeAvE6gAIAxZr6wavXpifK16+7MjAwYAumUoOCeWVA85m/IQAAEdlM4tOHt2+vtuvoH1AgUPVHTJyPApgAoC31KocYx78bGanp6OhQuYIk88OpsxfqhOxWShpIWCcOQ0nrL1MTfc3NzcmcHaV0n796hEn9oiYn01YkshGa3Xdu3FRvKzrLhGxsuHfc1MZDoIwCSAIASQWgUok6Gjp3zr/aGGWl4qkfxzaJUl0ieMTaoSSuKFGt0cjvwaampkROjqxqrK+dMiF7SYymu0Y5RX/oKl7zwH/iKKW+ocnSfGfiuAj86c44TZEn+/zVZztEtG0QAPwwOnkXdaILgicAOC2laxC2XkiaR1vq6uI5RWfVVn/VT6KcLwM4nVFaC6qD94jxOEmx7Sil78+fv0PFJQiwXkSWYoTMgMldVy9fOnmrc7bqk35/Tc2fXIzvFFFHAMSXVswygRzZcHfV88Fg0LANAoDGxi2/xhNsA6Qv4xB6AbzrXb/hud7eXoet6KzqHx0tcWnHMREJWOciMKvA3Vu31Byz5SglY7EsBiK0rEAamtJgOzoACIVC+eKe7YSSvRluYlCqm4t5H9iOLhQK5dNd3CbgmwDyLU4SoHzlydOv1NbWLtgCDQ8PF5jK3Q6wFYDHUlrQQFeRQx/IhCDjhGcFiSvjIMA9AKwtfBPE2ypWcqh2W/mirZthbOw3j6nc7QQyIVEAH8fmCru33QaSdXQnxsY8RQlHJ4Qt1jcFiBsUOSBRb9dKkLRX0EpOJBn9BMI9ANyW7poXcJ/B2KFAoCr2b/OsuEeD4XDxfGT6HVHYDSDPuvEg3ve6HYd9vtvf2FmB+vvHCzkXe08UXkiHyByI/eYaz2e+igoz2z2+JWhwMFysXbEvCO4A4LJCSP3qRZo9LRXV8dV0rFrewpfKmBf9HODTVogAERD7L9LsWekHl1XXDQ1NlmpX4iNCngVpbeEIgX1ri9xfVlZWxnK5TdSSk8vepDP5NYldGZBZUeolMzJzOFdIGuimirgouhSgNc7rFHnj56nxb7N9VmUVXd/g4LoCw9MF8ilCFgSqzWugx+fzmbCpZTfDyTNnyvOc7k5q+ca8MXPCrpP/ZVt/ATeohyQqj8W7AAAAAElFTkSuQmCC"
                    draggable="true"
                    class="setting-29"
                  />
                </div>
              </div>
              <div class="setting-30"></div>
            </div>
            <div class="setting-31">
              <div class="setting-32">
                <p class="setting-33">修改登錄密碼</p>
              </div>
              <div class="setting-34">
                <div class="setting-35">
                  <div class="setting-36"></div>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAYAAACXOioTAAAD1UlEQVRIx+2WX0ybVRjGn/e09CsUKA6yZWYkkkkWVgS7AM0m/kGjRpNl0SmLu9LFyMWCGokmM8FhcOrF4h+YRjNjYoI3GJdddVtCAtOtwoQxtgEZzRIznXGCkzIY7df2PN5Y+Vo2LP289Lk6+d7k/M7znPec7wgsCobDRsl89DUQ7QCuK6jHAv7NkyJC2JQjNegfHy8sjCbeAvE6gAIAxZr6wavXpifK16+7MjAwYAumUoOCeWVA85m/IQAAEdlM4tOHt2+vtuvoH1AgUPVHTJyPApgAoC31KocYx78bGanp6OhQuYIk88OpsxfqhOxWShpIWCcOQ0nrL1MTfc3NzcmcHaV0n796hEn9oiYn01YkshGa3Xdu3FRvKzrLhGxsuHfc1MZDoIwCSAIASQWgUok6Gjp3zr/aGGWl4qkfxzaJUl0ieMTaoSSuKFGt0cjvwaampkROjqxqrK+dMiF7SYymu0Y5RX/oKl7zwH/iKKW+ocnSfGfiuAj86c44TZEn+/zVZztEtG0QAPwwOnkXdaILgicAOC2laxC2XkiaR1vq6uI5RWfVVn/VT6KcLwM4nVFaC6qD94jxOEmx7Sil78+fv0PFJQiwXkSWYoTMgMldVy9fOnmrc7bqk35/Tc2fXIzvFFFHAMSXVswygRzZcHfV88Fg0LANAoDGxi2/xhNsA6Qv4xB6AbzrXb/hud7eXoet6KzqHx0tcWnHMREJWOciMKvA3Vu31Byz5SglY7EsBiK0rEAamtJgOzoACIVC+eKe7YSSvRluYlCqm4t5H9iOLhQK5dNd3CbgmwDyLU4SoHzlydOv1NbWLtgCDQ8PF5jK3Q6wFYDHUlrQQFeRQx/IhCDjhGcFiSvjIMA9AKwtfBPE2ypWcqh2W/mirZthbOw3j6nc7QQyIVEAH8fmCru33QaSdXQnxsY8RQlHJ4Qt1jcFiBsUOSBRb9dKkLRX0EpOJBn9BMI9ANyW7poXcJ/B2KFAoCr2b/OsuEeD4XDxfGT6HVHYDSDPuvEg3ve6HYd9vtvf2FmB+vvHCzkXe08UXkiHyByI/eYaz2e+igoz2z2+JWhwMFysXbEvCO4A4LJCSP3qRZo9LRXV8dV0rFrewpfKmBf9HODTVogAERD7L9LsWekHl1XXDQ1NlmpX4iNCngVpbeEIgX1ri9xfVlZWxnK5TdSSk8vepDP5NYldGZBZUeolMzJzOFdIGuimirgouhSgNc7rFHnj56nxb7N9VmUVXd/g4LoCw9MF8ilCFgSqzWugx+fzmbCpZTfDyTNnyvOc7k5q+ca8MXPCrpP/ZVt/ATeohyQqj8W7AAAAAElFTkSuQmCC"
                    draggable="true"
                    class="setting-37"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div class="setting-38">
          <div class="setting-39">
            <div
              class="setting-40"
              onClick={() => {
                navigate("/changelanguage");
              }}
            >
              <div class="setting-41">
                <p class="setting-42">{translate(getText("語言切換"))}</p>
              </div>
              <div class="setting-43">
                {/* <p class="setting-44">中文繁體</p> */}
                <div class="setting-45">
                  <div class="setting-46"></div>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAYAAACXOioTAAAD1UlEQVRIx+2WX0ybVRjGn/e09CsUKA6yZWYkkkkWVgS7AM0m/kGjRpNl0SmLu9LFyMWCGokmM8FhcOrF4h+YRjNjYoI3GJdddVtCAtOtwoQxtgEZzRIznXGCkzIY7df2PN5Y+Vo2LP289Lk6+d7k/M7znPec7wgsCobDRsl89DUQ7QCuK6jHAv7NkyJC2JQjNegfHy8sjCbeAvE6gAIAxZr6wavXpifK16+7MjAwYAumUoOCeWVA85m/IQAAEdlM4tOHt2+vtuvoH1AgUPVHTJyPApgAoC31KocYx78bGanp6OhQuYIk88OpsxfqhOxWShpIWCcOQ0nrL1MTfc3NzcmcHaV0n796hEn9oiYn01YkshGa3Xdu3FRvKzrLhGxsuHfc1MZDoIwCSAIASQWgUok6Gjp3zr/aGGWl4qkfxzaJUl0ieMTaoSSuKFGt0cjvwaampkROjqxqrK+dMiF7SYymu0Y5RX/oKl7zwH/iKKW+ocnSfGfiuAj86c44TZEn+/zVZztEtG0QAPwwOnkXdaILgicAOC2laxC2XkiaR1vq6uI5RWfVVn/VT6KcLwM4nVFaC6qD94jxOEmx7Sil78+fv0PFJQiwXkSWYoTMgMldVy9fOnmrc7bqk35/Tc2fXIzvFFFHAMSXVswygRzZcHfV88Fg0LANAoDGxi2/xhNsA6Qv4xB6AbzrXb/hud7eXoet6KzqHx0tcWnHMREJWOciMKvA3Vu31Byz5SglY7EsBiK0rEAamtJgOzoACIVC+eKe7YSSvRluYlCqm4t5H9iOLhQK5dNd3CbgmwDyLU4SoHzlydOv1NbWLtgCDQ8PF5jK3Q6wFYDHUlrQQFeRQx/IhCDjhGcFiSvjIMA9AKwtfBPE2ypWcqh2W/mirZthbOw3j6nc7QQyIVEAH8fmCru33QaSdXQnxsY8RQlHJ4Qt1jcFiBsUOSBRb9dKkLRX0EpOJBn9BMI9ANyW7poXcJ/B2KFAoCr2b/OsuEeD4XDxfGT6HVHYDSDPuvEg3ve6HYd9vtvf2FmB+vvHCzkXe08UXkiHyByI/eYaz2e+igoz2z2+JWhwMFysXbEvCO4A4LJCSP3qRZo9LRXV8dV0rFrewpfKmBf9HODTVogAERD7L9LsWekHl1XXDQ1NlmpX4iNCngVpbeEIgX1ri9xfVlZWxnK5TdSSk8vepDP5NYldGZBZUeolMzJzOFdIGuimirgouhSgNc7rFHnj56nxb7N9VmUVXd/g4LoCw9MF8ilCFgSqzWugx+fzmbCpZTfDyTNnyvOc7k5q+ca8MXPCrpP/ZVt/ATeohyQqj8W7AAAAAElFTkSuQmCC"
                    draggable="true"
                    class="setting-47"
                  />
                </div>
              </div>
              <div class="setting-48"></div>
            </div>
            <div
              class="setting-49"
              onClick={() => {
                navigate("/changeline");
              }}
            >
              <div class="setting-50">
                <p class="setting-51">{translate(getText("切換線路"))}</p>
              </div>
              <div class="setting-52">
                {/* <p class="setting-53">線路1</p> */}
                <div class="setting-54">
                  <div class="setting-55"></div>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAYAAACXOioTAAAD1UlEQVRIx+2WX0ybVRjGn/e09CsUKA6yZWYkkkkWVgS7AM0m/kGjRpNl0SmLu9LFyMWCGokmM8FhcOrF4h+YRjNjYoI3GJdddVtCAtOtwoQxtgEZzRIznXGCkzIY7df2PN5Y+Vo2LP289Lk6+d7k/M7znPec7wgsCobDRsl89DUQ7QCuK6jHAv7NkyJC2JQjNegfHy8sjCbeAvE6gAIAxZr6wavXpifK16+7MjAwYAumUoOCeWVA85m/IQAAEdlM4tOHt2+vtuvoH1AgUPVHTJyPApgAoC31KocYx78bGanp6OhQuYIk88OpsxfqhOxWShpIWCcOQ0nrL1MTfc3NzcmcHaV0n796hEn9oiYn01YkshGa3Xdu3FRvKzrLhGxsuHfc1MZDoIwCSAIASQWgUok6Gjp3zr/aGGWl4qkfxzaJUl0ieMTaoSSuKFGt0cjvwaampkROjqxqrK+dMiF7SYymu0Y5RX/oKl7zwH/iKKW+ocnSfGfiuAj86c44TZEn+/zVZztEtG0QAPwwOnkXdaILgicAOC2laxC2XkiaR1vq6uI5RWfVVn/VT6KcLwM4nVFaC6qD94jxOEmx7Sil78+fv0PFJQiwXkSWYoTMgMldVy9fOnmrc7bqk35/Tc2fXIzvFFFHAMSXVswygRzZcHfV88Fg0LANAoDGxi2/xhNsA6Qv4xB6AbzrXb/hud7eXoet6KzqHx0tcWnHMREJWOciMKvA3Vu31Byz5SglY7EsBiK0rEAamtJgOzoACIVC+eKe7YSSvRluYlCqm4t5H9iOLhQK5dNd3CbgmwDyLU4SoHzlydOv1NbWLtgCDQ8PF5jK3Q6wFYDHUlrQQFeRQx/IhCDjhGcFiSvjIMA9AKwtfBPE2ypWcqh2W/mirZthbOw3j6nc7QQyIVEAH8fmCru33QaSdXQnxsY8RQlHJ4Qt1jcFiBsUOSBRb9dKkLRX0EpOJBn9BMI9ANyW7poXcJ/B2KFAoCr2b/OsuEeD4XDxfGT6HVHYDSDPuvEg3ve6HYd9vtvf2FmB+vvHCzkXe08UXkiHyByI/eYaz2e+igoz2z2+JWhwMFysXbEvCO4A4LJCSP3qRZo9LRXV8dV0rFrewpfKmBf9HODTVogAERD7L9LsWekHl1XXDQ1NlmpX4iNCngVpbeEIgX1ri9xfVlZWxnK5TdSSk8vepDP5NYldGZBZUeolMzJzOFdIGuimirgouhSgNc7rFHnj56nxb7N9VmUVXd/g4LoCw9MF8ilCFgSqzWugx+fzmbCpZTfDyTNnyvOc7k5q+ca8MXPCrpP/ZVt/ATeohyQqj8W7AAAAAElFTkSuQmCC"
                    draggable="true"
                    class="setting-56"
                  />
                </div>
              </div>
              <div class="setting-57"></div>
            </div>
          </div>
          <div class="setting-58">
            <div
              type="submit"
              class="setting-59"
              onClick={() => {
                localStorage.removeItem("uid");
                localStorage.removeItem("username");
                localStorage.removeItem("x-access-token");
                navigate("/login");
              }}
            >
              {translate(getText("退出登錄"))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
