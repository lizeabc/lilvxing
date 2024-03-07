import{c as s,o as a,f as n}from"./app-Bm1F-R0U.js";const t="/images/leetcode/17_letterCombinations.png",p={class:"prose m-auto slide-enter-content"},l=n(`<h1 id="_17-电话号码的字母组合" tabindex="-1">17. 电话号码的字母组合 <a class="header-anchor" href="#_17-电话号码的字母组合" aria-hidden="true">#</a></h1><p>给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。</p><p>给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。</p><ul><li>示例 1：</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入：digits = &quot;23&quot;</span></span>
<span class="line"><span>输出：[&quot;ad&quot;,&quot;ae&quot;,&quot;af&quot;,&quot;bd&quot;,&quot;be&quot;,&quot;bf&quot;,&quot;cd&quot;,&quot;ce&quot;,&quot;cf&quot;]</span></span></code></pre><ul><li>示例 2：</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入：digits = &quot;&quot;</span></span>
<span class="line"><span>输出：[]</span></span></code></pre><ul><li>示例 3：</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入：digits = &quot;2&quot;</span></span>
<span class="line"><span>输出：[&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]</span></span></code></pre><ul><li>提示：</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>0 &lt;= digits.length &lt;= 4</span></span>
<span class="line"><span>digits[i] 是范围 [&#39;2&#39;, &#39;9&#39;] 的一个数字。</span></span></code></pre><h2 id="解法" tabindex="-1">解法 <a class="header-anchor" href="#解法" aria-hidden="true">#</a></h2><h3 id="回溯" tabindex="-1">回溯 <a class="header-anchor" href="#回溯" aria-hidden="true">#</a></h3><p><a href="https://leetcode.cn/problems/letter-combinations-of-a-phone-number/solution/tong-su-yi-dong-dong-hua-yan-shi-17-dian-hua-hao-m/" target="_blank" rel="noopener">leetcode 参考题解</a></p><p>这一题需要使用回溯，原因是每次需要从输入的数字中取一个数字对应的字符串中取出一个字符，和下一个数字对应字符串中取一个字符进行拼接；</p><p>直到取到最后一个数字对应的字符串时，对每个字符进行组合，添加到结果数组；然后返回上一个数字对应字符串，取下一个字符与最后一个组合，然后再返回上一层；</p><p><img src="`+t+`" alt=""></p><h4 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-hidden="true">#</a></h4><p>记录每次取出的字符，进入递归，用 slice 获取下一个数字；反复递归直到数字取完，添加字符串 <code>con</code>；返回上一层递归。</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-ts"><span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">export</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> letterCombinations</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">digits</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">string</span><span style="--s-dark:#666666;--s-light:#999999;">):</span><span style="--s-dark:#5DA994;--s-light:#2E8F82;"> string</span><span style="--s-dark:#666666;--s-light:#999999;">[]</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">hashMap</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">Record</span><span style="--s-dark:#666666;--s-light:#999999;">&lt;</span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">string</span><span style="--s-dark:#666666;--s-light:#999999;">, </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">string</span><span style="--s-dark:#666666;--s-light:#999999;">&gt; =</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#4C9A91;--s-light:#2F798A;">    2</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">abc</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#4C9A91;--s-light:#2F798A;">    3</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">def</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#4C9A91;--s-light:#2F798A;">    4</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">ghi</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#4C9A91;--s-light:#2F798A;">    5</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">jkl</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#4C9A91;--s-light:#2F798A;">    6</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">mno</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#4C9A91;--s-light:#2F798A;">    7</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">pqrs</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#4C9A91;--s-light:#2F798A;">    8</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">tuv</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#4C9A91;--s-light:#2F798A;">    9</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">wxyz</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  };</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">res</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">string</span><span style="--s-dark:#666666;--s-light:#999999;">[] =</span><span style="--s-dark:#666666;--s-light:#999999;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> backtrack</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">con</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">string</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> next</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">string</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#758575DD;--s-light:#A0ADA0;">    // 没有下一个数字输入了，添加字符串</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">next</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ==</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> con</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> &amp;&amp;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> res</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">push</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">con</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    else</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#758575DD;--s-light:#A0ADA0;">      // 数字对应的字符串</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">      const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">s</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> hashMap</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">next</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">0</span><span style="--s-dark:#666666;--s-light:#999999;">]];</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">      for</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> s</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#758575DD;--s-light:#A0ADA0;">        // 每次取一个字符，然后取下一个数组字符串中的字符</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">        backtrack</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">con</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> +</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> s</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">],</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> next</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">slice</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">1</span><span style="--s-dark:#666666;--s-light:#999999;">));</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">      }</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    }</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">digits</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#80A665;--s-light:#59873A;"> backtrack</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> digits</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> res</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span></code></pre><p>执行过程</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>backtrack(&quot;&quot; , &quot;23&quot;)</span></span>
<span class="line"><span>2 -&gt; abc</span></span>
<span class="line"><span>i = 0</span></span>
<span class="line"><span>backtrack(&quot;a&quot;, &quot;&quot;)</span></span>
<span class="line"><span>3 -&gt; def</span></span>
<span class="line"><span>j = 0</span></span>
<span class="line"><span>backtrack(&quot;ad&quot;, &quot;&quot;)</span></span>
<span class="line"><span>push</span></span>
<span class="line"><span>j = 1</span></span>
<span class="line"><span>backtrack(&quot;ae&quot;, &quot;&quot;)</span></span>
<span class="line"><span>push</span></span>
<span class="line"><span>j = 2</span></span>
<span class="line"><span>backtrack(&quot;af&quot;, &quot;&quot;)</span></span>
<span class="line"><span>j = 3 return</span></span>
<span class="line"><span>i = 1</span></span>
<span class="line"><span>backtrack(&quot;b&quot;, &quot;3&quot;)</span></span>
<span class="line"><span>3 -&gt; def</span></span>
<span class="line"><span>j = 0</span></span>
<span class="line"><span>backtrack(&quot;bd&quot;, &quot;&quot;)</span></span>
<span class="line"><span>push</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span></code></pre>`,22),e=[l],g={__name:"17_letterCombinations",setup(i){return(r,d)=>(a(),s("div",p,e))}};export{g as default};
//# sourceMappingURL=17_letterCombinations-BS6M7pv9.js.map
