import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TopBuy({ setIsShowOrder, setType }) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const { t: translate } = useTranslation();
  const [upNum,setUpNum]= useState(50);
  function getRandomNumberInRange(min, max, decimalPlaces) {  
    // 生成一个[min, max)区间的随机数  
    let rand = min + Math.random() * (max - min);  
    // 使用toFixed()方法保留指定的小数位数，并转换回数字类型  
    // 注意：toFixed()返回的是字符串，所以需要再次转换为数字  
    return Number(rand.toFixed(decimalPlaces));  
}
  useEffect(()=>{
    //开启定时器
    const timer=setInterval(()=>{
      setUpNum(getRandomNumberInRange(45,65,2));
    },3000);
  },[]);
  return (
    <div class="marketbuydivlb-1">
      <div
        class="marketbuydivlb-2"
        onClick={() => {
          setIsShowOrder(true);
          setType(1);
        }}
      >
        <div class="marketbuydivlb-3">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAmCAYAAACsyDmTAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEpSURBVFiF7ZWtUsNAFEZvmMgIBAKBRPQheAwkD1DJA1QgcXSGF0AyQx+gAlc8sgaHKDNIJOIguGGWy27optlMxT12v3w5m/2JiOM4jvOLqvQLgKmIHHdKVNVVaY8fgAmwoYPRZIzU+94IqdQZ8PGf0MGITi8i8lakGWiA08z8c5El0/KVbtRJRj7kDvjcWQioTfkrkDzSkTzATMcudhLS8ofIF1/HpBL5uclc9hLqkAmlDnNkQqk+Qjem/L6dXcAKaDR/a8YW2S/NkFkAdTu7iNQfmTY/hMzMlC9tOXBNmschZezsn9oliWTnEZlkvo/MNLec77uliMw5waVF4lhHnqt1v2yVLypjpI4GkdHCZSCzAU4GK+8p1Oj6b/WfGgWV2g8Zx3EcR+QLyS7dArSNAhUAAAAASUVORK5CYII="
            draggable="false"
            class="marketbuydivlb-6"
          />
        </div>
        <div class="marketbuydivlb-7">{translate(getText("看涨"))}</div>
        <div class="marketbuydivlb-8">
          <span class="marketbuydivlb-9">{upNum}%</span>
        </div>
      </div>
      <div
        class="marketbuydivlb-10"
        onClick={() => {
          setIsShowOrder(true);
          setType(2);
        }}
      >
        <div class="marketbuydivlb-11">
          <span class="marketbuydivlb-12">{(100-upNum).toFixed(2)}%</span>
        </div>
        <div class="marketbuydivlb-13">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAmCAYAAACsyDmTAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEpSURBVFiF7ZWtUsNAFEZvmMgIBAKBRPQheAwkD1DJA1QgcXSGF0AyQx+gAlc8sgaHKDNIJOIguGGWy27optlMxT12v3w5m/2JiOM4jvOLqvQLgKmIHHdKVNVVaY8fgAmwoYPRZIzU+94IqdQZ8PGf0MGITi8i8lakGWiA08z8c5El0/KVbtRJRj7kDvjcWQioTfkrkDzSkTzATMcudhLS8ofIF1/HpBL5uclc9hLqkAmlDnNkQqk+Qjem/L6dXcAKaDR/a8YW2S/NkFkAdTu7iNQfmTY/hMzMlC9tOXBNmschZezsn9oliWTnEZlkvo/MNLec77uliMw5waVF4lhHnqt1v2yVLypjpI4GkdHCZSCzAU4GK+8p1Oj6b/WfGgWV2g8Zx3EcR+QLyS7dArSNAhUAAAAASUVORK5CYII="
            draggable="false"
            class="marketbuydivlb-16"
          />
        </div>
        <div class="marketbuydivlb-17">{translate(getText("看跌"))}</div>
      </div>
    </div>

    // <div class="marketbuydiv-1">
    //   <div class="marketbuydiv-2">
    //     <div
    //       class="marketbuydiv-3"
    //       onClick={() => {
    //         setIsShowOrder(true);
    //         setType(1);
    //       }}
    //     >
    //       {translate(getText("買多"))}
    //     </div>
    //     <div
    //       class="marketbuydiv-4"
    //       onClick={() => {
    //         setIsShowOrder(true);
    //         setType(2);
    //       }}
    //     >
    //       {translate(getText("買空"))}
    //     </div>
    //   </div>
    // </div>
  );
}
