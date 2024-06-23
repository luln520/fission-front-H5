import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TopBar({
  coinname,
  iscollect,
  collectAdd,
  collectDel,
  setIsShowCoin,
  setvisibleInfoMsg
}) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const { t: translate } = useTranslation();
  return (
    <div class="marketTopBarlb-1">
      <div class="marketTopBarlb-2">
        <i
          class="marketTopBarlb-3"
          onClick={() => {
            setIsShowCoin(true);
          }}
        ></i>
        <div class="marketTopBarlb-4">
          <span class="marketTopBarlb-5">{coinname?.toUpperCase()}/USDT</span>
        </div>
        <div class="marketTopBarlb-6">
          <span class="marketTopBarlb-7">-0.52%</span>
        </div>
        <i class="marketTopBarlb-8" onClick={()=>{
          setvisibleInfoMsg(true);
        }}></i>
        <div class="marketTopBarlb-9">
          <div class="marketTopBarlb-10">
            <div class="marketTopBarlb-11">
              <div class="marketTopBarlb-12"></div>
              <span class="marketTopBarlb-13"></span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAH7SURBVEiJ7ZM9aBNhGMd/z917IUjIICIFOyg4ZOgg6KK4nO1goIvQwUHBxdGPhCCCgxkEUZMenRxUOjjYLThJbUKWgGMdM0kGhwxaKmbQ3vk+DndKmo9WbMQlv+XuvXve/+/9hClTpgwgBw0w9WBBXD02Jv2wtXz4caH4eiJCrxmcQnVznzIN0xzhXHELwBxEGELHE2mhOjvw6yhwKHkXvksW2IobE8ZrVK8hsrprYCIn8AsdAGeSslQ9WELkWdL8NKpmYsJUPVhSR18Rb1NbLDdG1e27h3GQva/irEV8qeKXvw2FbFTO98k6oUS+UckJ7lDenjP03i6fUUdXQeZE9YGn2U1TDxYGZeI6bwCj0BWxefw73XGZ42fYfDyjSk0gA/SInzlxdMNrLK+FTlQwkXMykWUUuo5Yf8cvtYfD3GhvYbOc9tTUgFkgUrF5cI2oPgVyCJc9NReTFcsAvUFZZMx7D1qq+hn/5sdf30deC6+x/BLhCgBqr4fzpefJQIyx2ZII9xIRQE/F5iO/1Bq7Wn0MCU2jclfEeRjLWAnni7cHa9LN4HikWhE4rWKv/qlsSOjWq4uOIzXACLq+I18X8cvRmL5/xW9hav3JnHruO+KlaociZ/EL25OUQd+10JS5lci2ReylfyGDXafUvlCRGbCPwpFHe8qU/8RPozawbvMzrxoAAAAASUVORK5CYII="
                draggable="false"
                class="marketTopBarlb-14"
              />
            </div>
            <div class="marketTopBarlb-15">
              <span class="marketTopBarlb-16">23:32~23:33</span>
            </div>
          </div>
          <div class="marketTopBarlb-17">
            <div class="marketTopBarlb-18">
              <div class="marketTopBarlb-19"></div>
              <span class="marketTopBarlb-20"></span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAH7SURBVEiJ7ZM9aBNhGMd/z917IUjIICIFOyg4ZOgg6KK4nO1goIvQwUHBxdGPhCCCgxkEUZMenRxUOjjYLThJbUKWgGMdM0kGhwxaKmbQ3vk+DndKmo9WbMQlv+XuvXve/+/9hClTpgwgBw0w9WBBXD02Jv2wtXz4caH4eiJCrxmcQnVznzIN0xzhXHELwBxEGELHE2mhOjvw6yhwKHkXvksW2IobE8ZrVK8hsrprYCIn8AsdAGeSslQ9WELkWdL8NKpmYsJUPVhSR18Rb1NbLDdG1e27h3GQva/irEV8qeKXvw2FbFTO98k6oUS+UckJ7lDenjP03i6fUUdXQeZE9YGn2U1TDxYGZeI6bwCj0BWxefw73XGZ42fYfDyjSk0gA/SInzlxdMNrLK+FTlQwkXMykWUUuo5Yf8cvtYfD3GhvYbOc9tTUgFkgUrF5cI2oPgVyCJc9NReTFcsAvUFZZMx7D1qq+hn/5sdf30deC6+x/BLhCgBqr4fzpefJQIyx2ZII9xIRQE/F5iO/1Bq7Wn0MCU2jclfEeRjLWAnni7cHa9LN4HikWhE4rWKv/qlsSOjWq4uOIzXACLq+I18X8cvRmL5/xW9hav3JnHruO+KlaociZ/EL25OUQd+10JS5lci2ReylfyGDXafUvlCRGbCPwpFHe8qU/8RPozawbvMzrxoAAAAASUVORK5CYII="
                draggable="false"
                class="marketTopBarlb-21"
              />
            </div>
            <div class="marketTopBarlb-22">
              <span class="marketTopBarlb-23">23:31~23:32</span>
            </div>
          </div>
          <div class="marketTopBarlb-24">
            <div class="marketTopBarlb-25">
              <div class="marketTopBarlb-26"></div>
              <span class="marketTopBarlb-27"></span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIdSURBVEiJ7ZSxa1NRFMZ/574EX1/TThUcKlQoolBQcCoUfC62HQpdHEIrCHUt1KHYxT9AUFpBkIKCYJ4R7FbpS2qHgoqCjg4dHDo4FHEoVZNAbnIckmfbNCm0MeKQbzrnfh/vd++75z1oq63/XRIVheHJfhWZEtUnbjb1pVVAExUq3AadUyHcGUv2tBwIBIAF+uNF56X6fqylwI5Mal1FZ6utX3B7H7UCKLUL+ZHJx8AUgCrTXjb1sDaj/g0359o5EblkS3a2ezW9cWyg+n4s7/auCVwGtSXV0UT2+Vrk/xqdHDeq8yB91aUtsIMdmRebxwIC7Iwle+JF8xGkT5Vtq6XBuNGCaGxehfE9UQvEQDZKxrmSWHm6tXfjlWvRrY5McOdQIMCPq9cHYkbfAwnQTZBTgFu1P6noNNArKul60PxIcgicNwDFeOlk93L6O+yf0n3qWn32uWw0WTmF9AGuKNsqesstfB30wuCDFwZLKlFGzzkl+/qbfy1ReYLzZ8rjRU1EdUMgQOdK8EpVZwGrEFgndt4LgwVZX7dRxguDpWoGhIEu90S4Cz2ohq/0qMoNT8yIyHy1fVsu611jZLnS2jPRUB16wqPIywYLKkTf8ZAxcr9e7q8BAbwwdU+VB9X2bL1MU7+v3dGnf7/BT4S699gUMOedvmjKevOAUTMZthzPNbCOAR2dmBHlQn3XOGX0XWcmtdgsp622/p1+A1dCyPN4+DHtAAAAAElFTkSuQmCC"
                draggable="false"
                class="marketTopBarlb-28"
              />
            </div>
            <div class="marketTopBarlb-29">
              <span class="marketTopBarlb-30">23:30~23:31</span>
            </div>
          </div>
          <div class="marketTopBarlb-31">
            <div class="marketTopBarlb-32">
              <div class="marketTopBarlb-33"></div>
              <span class="marketTopBarlb-34"></span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAH7SURBVEiJ7ZM9aBNhGMd/z917IUjIICIFOyg4ZOgg6KK4nO1goIvQwUHBxdGPhCCCgxkEUZMenRxUOjjYLThJbUKWgGMdM0kGhwxaKmbQ3vk+DndKmo9WbMQlv+XuvXve/+/9hClTpgwgBw0w9WBBXD02Jv2wtXz4caH4eiJCrxmcQnVznzIN0xzhXHELwBxEGELHE2mhOjvw6yhwKHkXvksW2IobE8ZrVK8hsrprYCIn8AsdAGeSslQ9WELkWdL8NKpmYsJUPVhSR18Rb1NbLDdG1e27h3GQva/irEV8qeKXvw2FbFTO98k6oUS+UckJ7lDenjP03i6fUUdXQeZE9YGn2U1TDxYGZeI6bwCj0BWxefw73XGZ42fYfDyjSk0gA/SInzlxdMNrLK+FTlQwkXMykWUUuo5Yf8cvtYfD3GhvYbOc9tTUgFkgUrF5cI2oPgVyCJc9NReTFcsAvUFZZMx7D1qq+hn/5sdf30deC6+x/BLhCgBqr4fzpefJQIyx2ZII9xIRQE/F5iO/1Bq7Wn0MCU2jclfEeRjLWAnni7cHa9LN4HikWhE4rWKv/qlsSOjWq4uOIzXACLq+I18X8cvRmL5/xW9hav3JnHruO+KlaociZ/EL25OUQd+10JS5lci2ReylfyGDXafUvlCRGbCPwpFHe8qU/8RPozawbvMzrxoAAAAASUVORK5CYII="
                draggable="false"
                class="marketTopBarlb-35"
              />
            </div>
            <div class="marketTopBarlb-36">
              <span class="marketTopBarlb-37">23:29~23:30</span>
            </div>
          </div>
        </div>
      </div>
      <div class="marketTopBarlb-38">
        <div class="marketTopBarlb-39">60s</div>
        <div class="marketTopBarlb-40">120s</div>
        <div class="marketTopBarlb-41">5min</div>
        <div class="marketTopBarlb-42">10min</div>
      </div>
      <div class="marketTopBarlb-43">
        <div class="marketTopBarlb-44">
          <div class="marketTopBarlb-45">截止下单(UTC+8)</div>
          <div class="marketTopBarlb-46">倒计时</div>
          <div class="marketTopBarlb-47">时间周期</div>
        </div>
        <div class="marketTopBarlb-48">
          <div class="marketTopBarlb-49">2024/06/21 23:34:00</div>
          <div class="marketTopBarlb-50">
            <span class="marketTopBarlb-51">32 s</span>
          </div>
          <div class="marketTopBarlb-52">23:34~23:35</div>
        </div>
      </div>
    </div>
  );
}
