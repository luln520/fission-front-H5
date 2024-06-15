import { useNavigate } from "react-router-dom";
import "./index.css";

export default function TopBar2({ title, isBack, mini, miniClick }) {
  const navigate = useNavigate();
  return (
    // <div className="topbarnew-1">
    //   <div className="topbarnew-2">
    //     <div className="topbarnew-3"></div>
    //     <div className="topbarnew-4">
    //       {isBack && (
    //         <div
    //           className="topbarnew-5"
    //           onClick={() => {
    //             navigate(-1);
    //           }}
    //         >
    //           <div className="topbarnew-6">
    //             <div className="topbarnew-7">
    //               <div className="topbarnew-8">
    //                 <span className="topbarnew-9"></span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       )}
    //       <div className="topbarnew-10">
    //         <div className="topbarnew-11">{title}</div>
    //       </div>
    //       <div className="topbarnew-12"></div>
    //       <div className="topbarnew-13"></div>
    //     </div>
    //   </div>
    //   <div className="topbarnew-14"></div>
    // </div>

    <div class="topBar2-1">
      <div class="topBar2-2">
        <div class="topBar2-3"></div>
        <div class="topBar2-4">
          {isBack && (
            <div
              class="topBar2-5"
              onClick={() => {
                navigate(-1);
              }}
            >
              <div class="topBar2-6">
                <div class="topBar2-7">
                  <div class="topBar2-8">
                    <span class="topBar2-9"></span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div class="topBar2-10">
            <div class="topBar2-11">{title}</div>
          </div>
          <div class="topBar2-12"></div>
          <div class="topBar2-13">
            <div class="topBar2-14">
              {mini && (
                <div
                  class="topBar2-15"
                  onClick={() => {
                    miniClick();
                  }}
                >
                  {mini}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div class="topBar2-16"></div>
    </div>
  );
}
