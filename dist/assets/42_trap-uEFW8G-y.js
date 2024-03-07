import{c as s,o as a,f as n}from"./app-Bm1F-R0U.js";const t="/images/leetcode/42_trap_1.png",l="/images/leetcode/42_trap_2.png",p="/images/leetcode/42_trap_3.png",e={class:"prose m-auto slide-enter-content"},i=n('<h1 id="_42-接雨水" tabindex="-1">42. 接雨水 <a class="header-anchor" href="#_42-接雨水" aria-hidden="true">#</a></h1><p>给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。</p><ul><li>示例 1：</li></ul><p><img src="'+t+`" alt=""></p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]</span></span>
<span class="line"><span>输出：6</span></span>
<span class="line"><span>解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。</span></span></code></pre><ul><li>示例 2：</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入：height = [4,2,0,3,2,5]</span></span>
<span class="line"><span>输出：9</span></span></code></pre><ul><li>提示：</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>n == height.length</span></span>
<span class="line"><span>1 &lt;= n &lt;= 2 \\* 104</span></span>
<span class="line"><span>0 &lt;= height[i] &lt;= 105</span></span></code></pre><h2 id="解答" tabindex="-1">解答 <a class="header-anchor" href="#解答" aria-hidden="true">#</a></h2><h3 id="动态规划" tabindex="-1">动态规划 <a class="header-anchor" href="#动态规划" aria-hidden="true">#</a></h3><p>从左向右遍历，记录 i 处左边的最大高度，对应的接水量就是 <strong>leftMax[i] - height[i]</strong>；</p><p>从右向左遍历，记录 i 处右边的最大高度，对应的接水量就是 <strong>rightMax[i] - height[i]</strong>。</p><p>但是左边或者右边都受到相互最大高度的限制，合并两个数组计算，i 处的接水量为 <strong>Math.min(leftMax[i], rightMax[i]) - height[i]</strong>，如下图：</p><p><img src="`+l+`" alt=""></p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-ts"><span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> trap</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">height</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">number</span><span style="--s-dark:#666666;--s-light:#999999;">[]):</span><span style="--s-dark:#5DA994;--s-light:#2E8F82;"> number</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">len</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> height</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">leftMax</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">number</span><span style="--s-dark:#666666;--s-light:#999999;">[] =</span><span style="--s-dark:#666666;--s-light:#999999;"> [];</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">rightMax</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">number</span><span style="--s-dark:#666666;--s-light:#999999;">[] =</span><span style="--s-dark:#666666;--s-light:#999999;"> [];</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">result</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  for</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> len</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    leftMax</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> Math</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">max</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">leftMax</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> -</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 1</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ||</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> height</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">]);</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  for</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> len</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> - </span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">1</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#666666;--s-light:#999999;"> &gt;=</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">--</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    rightMax</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> Math</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">max</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">rightMax</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> +</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 1</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ||</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> height</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">]);</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  for</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> len</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    result</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> +=</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> Math</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">min</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">leftMax</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">],</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> rightMax</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">])</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> -</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> height</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">];</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> result</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span></code></pre><h3 id="栈" tabindex="-1">栈 <a class="header-anchor" href="#栈" aria-hidden="true">#</a></h3><p>栈记录每个下标，当遇到元素大于栈顶元素时，取出栈顶元素 top 和下一个数 left，这时接水量的宽度为 <strong>i - left - 1</strong>，高度为两个边界减去中间的 top 的高度为 <strong>min(height[left], height[i]) - height[top]</strong>，因此接水量为 <strong>currWidth * currHeight</strong>。</p><p>继续取出栈顶元素计算，直到栈内没有元素，或者取出 top 时没有 left。</p><p><img src="`+p+`" alt=""></p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-ts"><span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> trap</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">height</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">number</span><span style="--s-dark:#666666;--s-light:#999999;">[])</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">ans</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">stack</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">number</span><span style="--s-dark:#666666;--s-light:#999999;">[] =</span><span style="--s-dark:#666666;--s-light:#999999;"> [];</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">n</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> height</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  for</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> n</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ++</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    while</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">stack</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> &amp;&amp;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> height</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#666666;--s-light:#999999;"> &gt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> height</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">stack</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">stack</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> -</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 1</span><span style="--s-dark:#666666;--s-light:#999999;">]])</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">      const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">top</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> stack</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">pop</span><span style="--s-dark:#666666;--s-light:#999999;">();</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">      if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">!</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">stack</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> break</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">      const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">left</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> stack</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">stack</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> - </span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">1</span><span style="--s-dark:#666666;--s-light:#999999;">];</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">      const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">currWidth</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> - </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">left</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> - </span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">1</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">      const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">currHeight</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> Math</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">min</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">height</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">left</span><span style="--s-dark:#666666;--s-light:#999999;">],</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> height</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">])</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> - </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">height</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">top</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">!</span><span style="--s-dark:#666666;--s-light:#999999;">];</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">      ans</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> +=</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> currWidth</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> *</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> currHeight</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    }</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    stack</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">push</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> ans</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span></code></pre><h3 id="双指针" tabindex="-1">双指针 <a class="header-anchor" href="#双指针" aria-hidden="true">#</a></h3><p>双指针有点类似动态规划，只是现在只用两个指针来计算。</p><p>leftMax 记录 left 坐标左边的最大高度； rightMax 记录 right 坐标右边的最大高度；</p><p>当 **height[left] &lt; height[right]**时，代表 <strong>leftMax &lt; rightMax</strong>，因此左边是能接到水的，接到量为 <strong>leftMax - height[left]</strong>；反之右边也如此。</p><p>因为 leftMax 是 height[left] 的最大值，并且移动的指针是高度更小的一方，所以当**height[left] &lt; height[right]**时，代表最大值也小于右边，能够接到水。</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-ts"><span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> trap2</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">height</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">number</span><span style="--s-dark:#666666;--s-light:#999999;">[])</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">left</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">right</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> height</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> - </span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">1</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">leftMax</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">rightMax</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">result</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  while</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">left</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> right</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    leftMax</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> Math</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">max</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">leftMax</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> height</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">left</span><span style="--s-dark:#666666;--s-light:#999999;">]);</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    rightMax</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> Math</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">max</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">rightMax</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> height</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">right</span><span style="--s-dark:#666666;--s-light:#999999;">]);</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">height</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">left</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> height</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">right</span><span style="--s-dark:#666666;--s-light:#999999;">])</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">      result</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> +=</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> leftMax</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> -</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> height</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">left</span><span style="--s-dark:#666666;--s-light:#999999;">];</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">      left</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    }</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> else</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">      result</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> +=</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> rightMax</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> -</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> height</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">right</span><span style="--s-dark:#666666;--s-light:#999999;">];</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">      right</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">--</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    }</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> result</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span></code></pre>`,27),h=[i],y={__name:"42_trap",setup(r){return(g,d)=>(a(),s("div",e,h))}};export{y as default};
//# sourceMappingURL=42_trap-uEFW8G-y.js.map
