import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function TopBuy({ setIsShowOrder, setType }) {
  const navigate = useNavigate();
  const [num, setNum] = useState(1);
  const { t: translate } = useTranslation();
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
        <div class="marketbuydivlb-7">看涨</div>
        <div class="marketbuydivlb-8">
          <span class="marketbuydivlb-9">61.82%</span>
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
          <span class="marketbuydivlb-12">68.18%</span>
        </div>
        <div class="marketbuydivlb-13">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAmCAYAAACsyDmTAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEpSURBVFiF7ZWtUsNAFEZvmMgIBAKBRPQheAwkD1DJA1QgcXSGF0AyQx+gAlc8sgaHKDNIJOIguGGWy27optlMxT12v3w5m/2JiOM4jvOLqvQLgKmIHHdKVNVVaY8fgAmwoYPRZIzU+94IqdQZ8PGf0MGITi8i8lakGWiA08z8c5El0/KVbtRJRj7kDvjcWQioTfkrkDzSkTzATMcudhLS8ofIF1/HpBL5uclc9hLqkAmlDnNkQqk+Qjem/L6dXcAKaDR/a8YW2S/NkFkAdTu7iNQfmTY/hMzMlC9tOXBNmschZezsn9oliWTnEZlkvo/MNLec77uliMw5waVF4lhHnqt1v2yVLypjpI4GkdHCZSCzAU4GK+8p1Oj6b/WfGgWV2g8Zx3EcR+QLyS7dArSNAhUAAAAASUVORK5CYII="
            draggable="false"
            class="marketbuydivlb-16"
          />
        </div>
        <div class="marketbuydivlb-17">看跌</div>
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
