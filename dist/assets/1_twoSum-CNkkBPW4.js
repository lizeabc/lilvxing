import{c as s,o as a,f as n}from"./app-Bm1F-R0U.js";const t={class:"prose m-auto slide-enter-content"},l=n(`<h1 id="两数之和" tabindex="-1">两数之和 <a class="header-anchor" href="#两数之和" aria-hidden="true">#</a></h1><h2 id="题目" tabindex="-1">题目 <a class="header-anchor" href="#题目" aria-hidden="true">#</a></h2><blockquote><p>给定一个整数数组 nums  和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那   两个   整数，并返回它们的数组下标。</p></blockquote><blockquote><p>你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。</p></blockquote><blockquote><p>你可以按任意顺序返回答案。</p></blockquote><p>示例 1：</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入：nums = [2,7,11,15], target = 9</span></span>
<span class="line"><span>输出：[0,1]</span></span>
<span class="line"><span>解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。</span></span></code></pre><p>示例 2：</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入：nums = [3,2,4], target = 6</span></span>
<span class="line"><span>输出：[1,2]</span></span></code></pre><p>示例 3：</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入：nums = [3,3], target = 6</span></span>
<span class="line"><span>输出：[0,1]</span></span></code></pre><p>提示：</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>2 &lt;= nums.length &lt;= 104</span></span>
<span class="line"><span>-109 &lt;= nums[i] &lt;= 109</span></span>
<span class="line"><span>-109 &lt;= target &lt;= 109</span></span>
<span class="line"><span>只会存在一个有效答案</span></span></code></pre><blockquote><p>进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？</p></blockquote><hr><h2 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-hidden="true">#</a></h2><p>遍历 nums，用对象记录下每个数与 target 的差和当前数的下标；</p><p>当在对象中存在当前遍历的数时，说明存在与之相加等于 target 的数出现了，直接返回保存的下标和当前下标。</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-ts"><span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">export</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> twoSum</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">nums</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">number</span><span style="--s-dark:#666666;--s-light:#999999;">[],</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> target</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">number</span><span style="--s-dark:#666666;--s-light:#999999;">):</span><span style="--s-dark:#5DA994;--s-light:#2E8F82;"> number</span><span style="--s-dark:#666666;--s-light:#999999;">[]</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">hash</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">Record</span><span style="--s-dark:#666666;--s-light:#999999;">&lt;</span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">number</span><span style="--s-dark:#666666;--s-light:#999999;">, </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">number</span><span style="--s-dark:#666666;--s-light:#999999;">&gt; =</span><span style="--s-dark:#666666;--s-light:#999999;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  for</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> nums</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">    const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">num</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">num</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> in</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> hash</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">      return</span><span style="--s-dark:#666666;--s-light:#999999;"> [</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">hash</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">num</span><span style="--s-dark:#666666;--s-light:#999999;">],</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#666666;--s-light:#999999;">];</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    }</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> else</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">      hash</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">target</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> -</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> num</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    }</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  return</span><span style="--s-dark:#666666;--s-light:#999999;"> [];</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span></code></pre>`,19),p=[l],h={__name:"1_twoSum",setup(e){return(i,r)=>(a(),s("div",t,p))}};export{h as default};
//# sourceMappingURL=1_twoSum-CNkkBPW4.js.map
