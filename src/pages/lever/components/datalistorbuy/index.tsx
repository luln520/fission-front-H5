import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { imageConfig } from "../../../../config/config";
import { getText } from "../../../../utils/util";
import "./index.css";

export default function DataListAndBuy({ huobigetHistory }) {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const getArray1 = () => {
    const nodes = [];
    for (const i in huobigetHistory) {
      const data = huobigetHistory[i]?.data[0];
      if (i > 9) {
        break;
      }
      nodes.push(
        <div class="leverDataBox-9">
          <div class="leverDataBox-10">
            <span class="leverDataBox-11">{data.amount?.toFixed(5)}</span>
          </div>
          <div class="leverDataBox-12">
            <span class="leverDataBox-13">{data.price}</span>
          </div>
        </div>
      );
    }
    return nodes;
  };

  const getArray2 = () => {
    const nodes = [];
    for (const i in huobigetHistory) {
      const data = huobigetHistory[i]?.data[0];
      if (i <= 9) {
        continue;
      }
      nodes.push(
        <div class="leverDataBox-66">
          <div class="leverDataBox-67">
            <span class="leverDataBox-68">{data.price}</span>
          </div>
          <div class="leverDataBox-69">
            <span class="leverDataBox-70">{data.amount?.toFixed(5)}</span>
          </div>
        </div>
      );
    }
    return nodes;
  };
  return (
    <div class="leverListAndBuy-1">
      <div class="leverListAndBuy-2">
        <div class="leverListAndBuy-3">
          <div class="leverListAndBuy-4">
            <span class="leverListAndBuy-5">逐仓</span>
          </div>
          <div class="leverListAndBuy-6">
            <div class="leverListAndBuy-7">
              <div class="leverListAndBuy-8">
                <i class="leverListAndBuy-9"></i>
                <div class="leverListAndBuy-10">
                  <span class="leverListAndBuy-11">做多</span>
                </div>
              </div>
              <div class="leverListAndBuy-12">
                <i class="leverListAndBuy-13"></i>
                <div class="leverListAndBuy-14">
                  <span class="leverListAndBuy-15">做空</span>
                </div>
              </div>
            </div>
            <div class="leverListAndBuy-16">
              <div class="leverListAndBuy-17">
                <div class="leverListAndBuy-18">
                  <div class="leverListAndBuy-19"></div>
                  <div class="leverListAndBuy-20">
                    <div class="leverListAndBuy-21">
                      <div class="leverListAndBuy-22">选择类型</div>
                      <input
                        type=""
                        maxlength="999"
                        step=""
                        autocomplete="off"
                        class="leverListAndBuy-23"
                      />
                    </div>
                  </div>
                  <div class="leverListAndBuy-24">
                    <i class="leverListAndBuy-25"></i>
                  </div>
                  <div class="leverListAndBuy-26"></div>
                </div>
              </div>
              <div class="leverListAndBuy-27">
                <div class="leverListAndBuy-28"></div>
                <div class="leverListAndBuy-29">
                  <div class="leverListAndBuy-30">
                    <div class="leverListAndBuy-31"></div>
                    <div class="leverListAndBuy-32">
                      <span class="leverListAndBuy-33">类型</span>
                    </div>
                    <div class="leverListAndBuy-34">
                      <span class="leverListAndBuy-35">确定</span>
                    </div>
                  </div>
                  <div class="leverListAndBuy-36">
                    <div class="leverListAndBuy-37">
                      <div class="leverListAndBuy-38">
                        <div class="leverListAndBuy-39">
                          <div class="leverListAndBuy-40">
                            <div class="leverListAndBuy-41">
                              <div class="leverListAndBuy-42">
                                <div class="leverListAndBuy-43"></div>
                              </div>
                              <div class="leverListAndBuy-44">
                                <div class="leverListAndBuy-45"></div>
                              </div>
                            </div>
                            <div class="leverListAndBuy-46">
                              <div class="leverListAndBuy-47">
                                <div class="leverListAndBuy-48">
                                  <div class="leverListAndBuy-49"></div>
                                  <div class="leverListAndBuy-50">
                                    <div class="leverListAndBuy-51">
                                      <div class="leverListAndBuy-52">
                                        <div class="leverListAndBuy-53"></div>
                                      </div>
                                      <div class="leverListAndBuy-54">
                                        <div class="leverListAndBuy-55"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="leverListAndBuy-56">
                                    <div class="leverListAndBuy-57">
                                      <div class="leverListAndBuy-58">
                                        <span class="leverListAndBuy-59">
                                          市价
                                        </span>
                                      </div>
                                    </div>
                                    <div class="leverListAndBuy-60">
                                      <div class="leverListAndBuy-61">
                                        <span class="leverListAndBuy-62">
                                          限价
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="leverListAndBuy-63">
              <div class="leverListAndBuy-64"></div>
              <div class="leverListAndBuy-65">
                <div class="leverListAndBuy-66">
                  <div class="leverListAndBuy-67">请输入</div>
                  <input
                    type=""
                    maxlength="999"
                    step=""
                    autocomplete="off"
                    class="leverListAndBuy-68"
                  />
                </div>
              </div>
              <div class="leverListAndBuy-69"></div>
              <div class="leverListAndBuy-70"></div>
            </div>
            <div class="leverListAndBuy-71">
              <div class="leverListAndBuy-72"></div>
              <div class="leverListAndBuy-73">
                <div class="leverListAndBuy-74">
                  <div class="leverListAndBuy-75">输入数量(张)</div>
                  <input
                    type="number"
                    maxlength="140"
                    step="0.000000000000000001"
                    pattern="[0-9]*"
                    autocomplete="off"
                    class="leverListAndBuy-76"
                  />
                </div>
              </div>
              <div class="leverListAndBuy-77"></div>
            </div>
            <div class="leverListAndBuy-78">
              <div class="leverListAndBuy-79">25%</div>
              <div class="leverListAndBuy-80">50%</div>
              <div class="leverListAndBuy-81">75%</div>
              <div class="leverListAndBuy-82">100%</div>
            </div>
            <div class="leverListAndBuy-83">
              <div class="leverListAndBuy-84">
                <i class="leverListAndBuy-85"></i>
                <div class="leverListAndBuy-86">
                  <span class="leverListAndBuy-87">止盈止损</span>
                </div>
              </div>
            </div>
            <div class="leverListAndBuy-88">
              <span class="leverListAndBuy-89">
                可用数量 160469.3344092 USDT
              </span>
            </div>
            <div class="leverListAndBuy-90">
              <span class="leverListAndBuy-91">最大可开仓 26.19 张</span>
            </div>
          </div>
        </div>
        <div class="leverListAndBuy-92">做多买入</div>
        <div class="leverListAndBuy-93">
          <span class="leverListAndBuy-94">最新价 61279.25</span>
        </div>
      </div>
      <div class="leverListAndBuy-95">
        <div class="leverListAndBuy-96"></div>
      </div>
      <div class="leverListAndBuy-97">
        <div class="leverListAndBuy-98">
          <div class="leverListAndBuy-99">价格(USDT)</div>
          <div class="leverListAndBuy-100">数量(BTC)</div>
        </div>
        <div class="leverListAndBuy-101">
          <div class="leverListAndBuy-102">
            <div class="leverListAndBuy-103">
              <span class="leverListAndBuy-104">61279.7</span>
            </div>
            <div class="leverListAndBuy-105">
              <span class="leverListAndBuy-106">635.00K</span>
            </div>
            <div class="leverListAndBuy-107"></div>
          </div>
          <div class="leverListAndBuy-108">
            <div class="leverListAndBuy-109">
              <span class="leverListAndBuy-110">61278.5</span>
            </div>
            <div class="leverListAndBuy-111">
              <span class="leverListAndBuy-112">489.00K</span>
            </div>
            <div class="leverListAndBuy-113"></div>
          </div>
          <div class="leverListAndBuy-114">
            <div class="leverListAndBuy-115">
              <span class="leverListAndBuy-116">61277.1</span>
            </div>
            <div class="leverListAndBuy-117">
              <span class="leverListAndBuy-118">489.00K</span>
            </div>
            <div class="leverListAndBuy-119"></div>
          </div>
          <div class="leverListAndBuy-120">
            <div class="leverListAndBuy-121">
              <span class="leverListAndBuy-122">61277</span>
            </div>
            <div class="leverListAndBuy-123">
              <span class="leverListAndBuy-124">692.00K</span>
            </div>
            <div class="leverListAndBuy-125"></div>
          </div>
          <div class="leverListAndBuy-126">
            <div class="leverListAndBuy-127">
              <span class="leverListAndBuy-128">61276.2</span>
            </div>
            <div class="leverListAndBuy-129">
              <span class="leverListAndBuy-130">800.00K</span>
            </div>
            <div class="leverListAndBuy-131"></div>
          </div>
          <div class="leverListAndBuy-132">
            <div class="leverListAndBuy-133">
              <span class="leverListAndBuy-134">61276.1</span>
            </div>
            <div class="leverListAndBuy-135">
              <span class="leverListAndBuy-136">1.00K</span>
            </div>
            <div class="leverListAndBuy-137"></div>
          </div>
        </div>
        <div class="leverListAndBuy-138">
          <div class="leverListAndBuy-139">
            <span class="leverListAndBuy-140">61279.25</span>
          </div>
          <div class="leverListAndBuy-141">
            <span class="leverListAndBuy-142"> ≈ $61279.25</span>
          </div>
        </div>
        <div class="leverListAndBuy-143">
          <div class="leverListAndBuy-144">
            <div class="leverListAndBuy-145">
              <span class="leverListAndBuy-146">61272.2</span>
            </div>
            <div class="leverListAndBuy-147">
              <span class="leverListAndBuy-148">11638.00K</span>
            </div>
            <div class="leverListAndBuy-149"></div>
          </div>
          <div class="leverListAndBuy-150">
            <div class="leverListAndBuy-151">
              <span class="leverListAndBuy-152">61271.9</span>
            </div>
            <div class="leverListAndBuy-153">
              <span class="leverListAndBuy-154">751.00K</span>
            </div>
            <div class="leverListAndBuy-155"></div>
          </div>
          <div class="leverListAndBuy-156">
            <div class="leverListAndBuy-157">
              <span class="leverListAndBuy-158">61271.5</span>
            </div>
            <div class="leverListAndBuy-159">
              <span class="leverListAndBuy-160">162.00K</span>
            </div>
            <div class="leverListAndBuy-161"></div>
          </div>
          <div class="leverListAndBuy-162">
            <div class="leverListAndBuy-163">
              <span class="leverListAndBuy-164">61271.4</span>
            </div>
            <div class="leverListAndBuy-165">
              <span class="leverListAndBuy-166">180.00K</span>
            </div>
            <div class="leverListAndBuy-167"></div>
          </div>
          <div class="leverListAndBuy-168">
            <div class="leverListAndBuy-169">
              <span class="leverListAndBuy-170">61268.8</span>
            </div>
            <div class="leverListAndBuy-171">
              <span class="leverListAndBuy-172">587.00K</span>
            </div>
            <div class="leverListAndBuy-173"></div>
          </div>
          <div class="leverListAndBuy-174">
            <div class="leverListAndBuy-175">
              <span class="leverListAndBuy-176">61268.4</span>
            </div>
            <div class="leverListAndBuy-177">
              <span class="leverListAndBuy-178">4283.00K</span>
            </div>
            <div class="leverListAndBuy-179"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
