import{c as s,o as a,f as n}from"./app-Bm1F-R0U.js";const l={class:"prose m-auto slide-enter-content"},p=n(`<h1 id="_8-字符串转换整数-atoi" tabindex="-1">8. 字符串转换整数 (atoi) <a class="header-anchor" href="#_8-字符串转换整数-atoi" aria-hidden="true">#</a></h1><p>请你来实现一个  myAtoi(string s)  函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。</p><ul><li>函数  myAtoi(string s) 的算法如下：</li></ul><p>读入字符串并丢弃无用的前导空格 检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。 读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。 将前面步骤读入的这些数字转换为整数（即，“123” -&gt; 123， “0032” -&gt; 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。 如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。 返回整数作为最终结果。</p><ul><li>注意：</li></ul><p>本题中的空白字符只包括空格字符 ’ ’ 。 除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。</p><ul><li>示例  1：</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入：s = &quot;42&quot;</span></span>
<span class="line"><span>输出：42</span></span></code></pre><p>解释：加粗的字符串为已经读入的字符，插入符号是当前读取的字符。</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>第 1 步：&quot;42&quot;（当前没有读入字符，因为没有前导空格）</span></span>
<span class="line"><span>^</span></span>
<span class="line"><span>第 2 步：&quot;42&quot;（当前没有读入字符，因为这里不存在 &#39;-&#39; 或者 &#39;+&#39;）</span></span>
<span class="line"><span>^</span></span>
<span class="line"><span>第 3 步：&quot;42&quot;（读入 &quot;42&quot;）</span></span>
<span class="line"><span>^</span></span>
<span class="line"><span>解析得到整数 42 。</span></span>
<span class="line"><span>由于 &quot;42&quot; 在范围 [-231, 231 - 1] 内，最终结果为 42 。</span></span></code></pre><ul><li>示例  2：</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入：s = &quot; -42&quot;</span></span>
<span class="line"><span>输出：-42</span></span></code></pre><p>解释：</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>第 1 步：&quot; -42&quot;（读入前导空格，但忽视掉）</span></span>
<span class="line"><span>^</span></span>
<span class="line"><span>第 2 步：&quot; -42&quot;（读入 &#39;-&#39; 字符，所以结果应该是负数）</span></span>
<span class="line"><span>^</span></span>
<span class="line"><span>第 3 步：&quot; -42&quot;（读入 &quot;42&quot;）</span></span>
<span class="line"><span>^</span></span>
<span class="line"><span>解析得到整数 -42 。</span></span>
<span class="line"><span>由于 &quot;-42&quot; 在范围 [-231, 231 - 1] 内，最终结果为 -42 。</span></span></code></pre><ul><li>示例  3：</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入：s = &quot;4193 with words&quot;</span></span>
<span class="line"><span>输出：4193</span></span></code></pre><p>解释：</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>第 1 步：&quot;4193 with words&quot;（当前没有读入字符，因为没有前导空格）</span></span>
<span class="line"><span>^</span></span>
<span class="line"><span>第 2 步：&quot;4193 with words&quot;（当前没有读入字符，因为这里不存在 &#39;-&#39; 或者 &#39;+&#39;）</span></span>
<span class="line"><span>^</span></span>
<span class="line"><span>第 3 步：&quot;4193 with words&quot;（读入 &quot;4193&quot;；由于下一个字符不是一个数字，所以读入停止）</span></span>
<span class="line"><span>^</span></span>
<span class="line"><span>解析得到整数 4193 。</span></span>
<span class="line"><span>由于 &quot;4193&quot; 在范围 [-231, 231 - 1] 内，最终结果为 4193 。</span></span></code></pre><ul><li>提示：</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>0 &lt;= s.length &lt;= 200</span></span>
<span class="line"><span>s 由英文字母（大写和小写）、数字（0-9）、&#39; &#39;、&#39;+&#39;、&#39;-&#39; 和 &#39;.&#39; 组成</span></span></code></pre><h2 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-hidden="true">#</a></h2><p>虽然题目很长，但是仔细读完之后其实本体很简单，就是取遇到的第一个数字字符串，然后有几个条件需要判断：</p><ul><li>空格或者其他字母结束</li><li>遇到 <code>-</code> 为负数，没有默认正数</li><li>第一个字符不是数字或者 <code>-</code> <code>+</code> 就返回 0</li><li>超过 <code>-2^31 ~ 2^31 - 1</code>这个范围返回边界</li></ul><p>OK，没了，把这些条件判断了之后返回 Number(s) 就完事了。</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-ts"><span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">export</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> atoi</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">s</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">string</span><span style="--s-dark:#666666;--s-light:#999999;">):</span><span style="--s-dark:#5DA994;--s-light:#2E8F82;"> number</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">min</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> Math</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">pow</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">2</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 31</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> * -</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">1</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">max</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> Math</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">pow</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">2</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 31</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> - </span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">1</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">result</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 1</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">  s</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> s</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">trim</span><span style="--s-dark:#666666;--s-light:#999999;">();</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">!</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">/</span><span style="--s-dark:#C99076;--s-light:#A65E2B;">\\d</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">|</span><span style="--s-dark:#E6CC77;--s-light:#BDA437;">\\-</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">|</span><span style="--s-dark:#E6CC77;--s-light:#BDA437;">\\+</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">/</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">test</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">s</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">0</span><span style="--s-dark:#666666;--s-light:#999999;">]))</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    return</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">/</span><span style="--s-dark:#E6CC77;--s-light:#BDA437;">\\-</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">|</span><span style="--s-dark:#E6CC77;--s-light:#BDA437;">\\+</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">/</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">test</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">s</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">0</span><span style="--s-dark:#666666;--s-light:#999999;">]))</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">s</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">0</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ===</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">-</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> result</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> -</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">1</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    s</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> s</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">slice</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">1</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  for</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> s</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">!</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">/</span><span style="--s-dark:#C99076;--s-light:#A65E2B;">\\d</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">/</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">test</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">s</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">]))</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> s</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> s</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">slice</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">0</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">  result</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#80A665;--s-light:#59873A;"> Number</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">s</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> *</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> result</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">result</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> min</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> min</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> else</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">result</span><span style="--s-dark:#666666;--s-light:#999999;"> &gt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> max</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> max</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> result</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span></code></pre>`,25),t=[p],h={__name:"8_atoi",setup(e){return(i,d)=>(a(),s("div",l,t))}};export{h as default};
//# sourceMappingURL=8_atoi-syTBGqPu.js.map