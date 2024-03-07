import{c as s,o as a,f as n}from"./app-Bm1F-R0U.js";const l={class:"prose m-auto slide-enter-content"},p=n(`<h1 id="_27-移除元素" tabindex="-1">27. 移除元素 <a class="header-anchor" href="#_27-移除元素" aria-hidden="true">#</a></h1><p>给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。</p><p>不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。</p><p>元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。</p><ul><li>说明:</li></ul><p>为什么返回数值是整数，但输出的答案是数组呢?</p><p>请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。</p><p>你可以想象内部操作如下:</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-py"><span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">//</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;"> nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">int</span><span style="--s-dark:#B8A965;--s-light:#998418;"> len</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;"> removeElement</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">nums</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;"> val</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#FDAEB7;--s-light:#B31D28;--s-dark-font-style:italic;--s-light-font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">//</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;"> 在函数里修改输入数组对于调用者是可见的。</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">//</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;"> 根据你的函数返回的长度</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;"> 它会打印出数组中 该长度范围内 的所有元素。</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">for</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#B8A965;--s-light:#998418;">int</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;"> i = </span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">0</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">; i </span><span style="--s-dark:#CB7676;--s-light:#AB5959;">&lt;</span><span style="--s-dark:#B8A965;--s-light:#998418;"> len</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">; i</span><span style="--s-dark:#FDAEB7;--s-light:#B31D28;--s-dark-font-style:italic;--s-light-font-style:italic;">++</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">  print</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">i</span><span style="--s-dark:#666666;--s-light:#999999;">])</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span></code></pre><ul><li>示例 1：</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入：nums = [3,2,2,3], val = 3</span></span>
<span class="line"><span>输出：2, nums = [2,2]</span></span>
<span class="line"><span>解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。</span></span></code></pre><ul><li>示例 2：</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入：nums = [0,1,2,2,3,0,4,2], val = 2</span></span>
<span class="line"><span>输出：5, nums = [0,1,4,0,3]</span></span>
<span class="line"><span>解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。</span></span></code></pre><ul><li>提示：</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>0 &lt;= nums.length &lt;= 100</span></span>
<span class="line"><span>0 &lt;= nums[i] &lt;= 50</span></span>
<span class="line"><span>0 &lt;= val &lt;= 100</span></span></code></pre><h2 id="解答" tabindex="-1">解答 <a class="header-anchor" href="#解答" aria-hidden="true">#</a></h2><h3 id="左右指针" tabindex="-1">左右指针 <a class="header-anchor" href="#左右指针" aria-hidden="true">#</a></h3><p>采用左右指针，等于 val 时交换</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-ts"><span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">export</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> removeElement</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">nums</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">number</span><span style="--s-dark:#666666;--s-light:#999999;">[],</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> val</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">number</span><span style="--s-dark:#666666;--s-light:#999999;">):</span><span style="--s-dark:#5DA994;--s-light:#2E8F82;"> number</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">left</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">right</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> nums</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> - </span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">1</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  while</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">left</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;=</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> right</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">left</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ===</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> val</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">      if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">right</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ===</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> val</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">        right</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">--</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">      }</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> else</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">        const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">temp</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">right</span><span style="--s-dark:#666666;--s-light:#999999;">];</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">        nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">right</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">left</span><span style="--s-dark:#666666;--s-light:#999999;">];</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">        nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">left</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> temp</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">        left</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">        right</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">--</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">      }</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    }</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> else</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">      left</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    }</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> left</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span></code></pre><h3 id="快慢指针" tabindex="-1">快慢指针 <a class="header-anchor" href="#快慢指针" aria-hidden="true">#</a></h3><p>遇到不等于 val 时才交换，更灵性。</p><p>将不等于 val 的值从下标为 0 开始替换。</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-ts"><span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">export</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> removeElement1</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">nums</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">number</span><span style="--s-dark:#666666;--s-light:#999999;">[],</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> val</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">number</span><span style="--s-dark:#666666;--s-light:#999999;">):</span><span style="--s-dark:#5DA994;--s-light:#2E8F82;"> number</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">slow</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    fast</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  while</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">fast</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> nums</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">fast</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> !==</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> val</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">      nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">slow</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">fast</span><span style="--s-dark:#666666;--s-light:#999999;">];</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    }</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    fast</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> slow</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span></code></pre>`,23),t=[p],d={__name:"27_removeElement",setup(e){return(i,r)=>(a(),s("div",l,t))}};export{d as default};
//# sourceMappingURL=27_removeElement-BIuIwJUw.js.map