import{c as s,o as a,f as n}from"./app-Bm1F-R0U.js";const l={class:"prose m-auto slide-enter-content"},t=n(`<h1 id="_49-字母异位词分组" tabindex="-1">49. 字母异位词分组 <a class="header-anchor" href="#_49-字母异位词分组" aria-hidden="true">#</a></h1><p>给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。</p><p>字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。</p><ul><li>示例 1:</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入: strs = [&quot;eat&quot;, &quot;tea&quot;, &quot;tan&quot;, &quot;ate&quot;, &quot;nat&quot;, &quot;bat&quot;]</span></span>
<span class="line"><span>输出: [[&quot;bat&quot;],[&quot;nat&quot;,&quot;tan&quot;],[&quot;ate&quot;,&quot;eat&quot;,&quot;tea&quot;]]</span></span></code></pre><ul><li>示例 2:</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入: strs = [&quot;&quot;]</span></span>
<span class="line"><span>输出: [[&quot;&quot;]]</span></span></code></pre><ul><li>示例 3:</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入: strs = [&quot;a&quot;]</span></span>
<span class="line"><span>输出: [[&quot;a&quot;]]</span></span></code></pre><ul><li>提示： <ul><li>1 &lt;= strs.length &lt;= 104</li><li>0 &lt;= strs[i].length &lt;= 100</li><li>strs[i]  仅包含小写字母</li></ul></li></ul><h2 id="解答" tabindex="-1">解答 <a class="header-anchor" href="#解答" aria-hidden="true">#</a></h2><h3 id="解一" tabindex="-1">解一 <a class="header-anchor" href="#解一" aria-hidden="true">#</a></h3><p>遍历 strs，保存第一个字符串，后面的依次比对，如果是异位字符串添加到同一数组</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-ts"><span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> groupAnagrams</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">strs</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">string</span><span style="--s-dark:#666666;--s-light:#999999;">[]):</span><span style="--s-dark:#5DA994;--s-light:#2E8F82;"> string</span><span style="--s-dark:#666666;--s-light:#999999;">[][]</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">result</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">string</span><span style="--s-dark:#666666;--s-light:#999999;">[][] =</span><span style="--s-dark:#666666;--s-light:#999999;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  for</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> strs</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">    const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">str</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> strs</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">];</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">!</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">result</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">      result</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">0</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#666666;--s-light:#999999;"> [</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">str</span><span style="--s-dark:#666666;--s-light:#999999;">];</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    }</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> else</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">      let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">isFind</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> false</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">      for</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> result</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">        const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">s</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> result</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">][</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">0</span><span style="--s-dark:#666666;--s-light:#999999;">];</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">        if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#80A665;--s-light:#59873A;">isAnagramsWord1</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">str</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> s</span><span style="--s-dark:#666666;--s-light:#999999;">))</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">          result</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">].</span><span style="--s-dark:#80A665;--s-light:#59873A;">push</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">str</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">          isFind</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> true</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">        }</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">      }</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">      if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">!</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">isFind</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">        result</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">push</span><span style="--s-dark:#666666;--s-light:#999999;">([</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">str</span><span style="--s-dark:#666666;--s-light:#999999;">]);</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">      }</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    }</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> result</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span></code></pre><p>比对是否为异位字符串</p><p>直接将数组排序转成字符串对比会超时</p><p>用对象记录比对不超时，但还是很慢</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-ts"><span class="line"><span style="--s-dark:#758575DD;--s-light:#A0ADA0;">// 超时</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> isAnagramsWord</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">s1</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">string</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> s2</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">string</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">s1</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> !==</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> s2</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> return</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> false</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">obj1</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> s1</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">split</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">).</span><span style="--s-dark:#80A665;--s-light:#59873A;">sort</span><span style="--s-dark:#666666;--s-light:#999999;">();</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">obj2</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> s2</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">split</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">).</span><span style="--s-dark:#80A665;--s-light:#59873A;">sort</span><span style="--s-dark:#666666;--s-light:#999999;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> JSON</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">stringify</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">obj1</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ===</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> JSON</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">stringify</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">obj2</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#758575DD;--s-light:#A0ADA0;">// 2s</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> isAnagramsWord1</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">s1</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">string</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> s2</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">string</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">s1</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> !==</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> s2</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> return</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> false</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">obj</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">Record</span><span style="--s-dark:#666666;--s-light:#999999;">&lt;</span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">string</span><span style="--s-dark:#666666;--s-light:#999999;">, </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">number</span><span style="--s-dark:#666666;--s-light:#999999;">&gt; =</span><span style="--s-dark:#666666;--s-light:#999999;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  for</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> s1</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">    const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">s</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> s1</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">];</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    obj</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">s</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ?</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> obj</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">s</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> :</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">obj</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">s</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 1</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  for</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> s2</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">    const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">s</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> s2</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">];</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">!</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">obj</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">s</span><span style="--s-dark:#666666;--s-light:#999999;">])</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> return</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> false</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    obj</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">s</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">--</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> Object</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">values</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">obj</span><span style="--s-dark:#666666;--s-light:#999999;">).</span><span style="--s-dark:#80A665;--s-light:#59873A;">reduce</span><span style="--s-dark:#666666;--s-light:#999999;">((</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">p</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> n</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> =&gt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> p</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> +</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> n</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ===</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span></code></pre><h3 id="解二" tabindex="-1">解二 <a class="header-anchor" href="#解二" aria-hidden="true">#</a></h3><p>先将字符串转为数组排序生成 key 值，使用 map 记录 key 值，相同 key 值的字符串添加到同一数组，实质上是双 for，但快了很多</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-ts"><span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> groupAnagrams</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">strs</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">string</span><span style="--s-dark:#666666;--s-light:#999999;">[]):</span><span style="--s-dark:#5DA994;--s-light:#2E8F82;"> string</span><span style="--s-dark:#666666;--s-light:#999999;">[][]</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">map</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> new </span><span style="--s-dark:#80A665;--s-light:#59873A;">Map</span><span style="--s-dark:#666666;--s-light:#999999;">&lt;</span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">string</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#5DA994;--s-light:#2E8F82;"> string</span><span style="--s-dark:#666666;--s-light:#999999;">[]&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  for</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> strs</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">    const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">arr</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> Array</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">from</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">strs</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">]);</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    arr</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">sort</span><span style="--s-dark:#666666;--s-light:#999999;">();</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">    const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">key</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> arr</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">toString</span><span style="--s-dark:#666666;--s-light:#999999;">();</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">    const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">list</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> map</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">has</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">key</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ? </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">map</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">get</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">key</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> : </span><span style="--s-dark:#666666;--s-light:#999999;">[];</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    list</span><span style="--s-dark:#666666;--s-light:#999999;">?.</span><span style="--s-dark:#80A665;--s-light:#59873A;">push</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">strs</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">]);</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    map</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">set</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">key</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> list</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">!</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  return</span><span style="--s-dark:#666666;--s-light:#999999;"> [...</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">map</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">values</span><span style="--s-dark:#666666;--s-light:#999999;">()];</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span></code></pre>`,21),p=[t],g={__name:"49_groupAnagrams",setup(e){return(i,r)=>(a(),s("div",l,p))}};export{g as default};
//# sourceMappingURL=49_groupAnagrams-B84nysna.js.map