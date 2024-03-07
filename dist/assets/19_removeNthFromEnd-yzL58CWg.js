import{c as s,o as a,f as n}from"./app-Bm1F-R0U.js";const l={class:"prose m-auto slide-enter-content"},p=n(`<h1 id="_19-删除链表的倒数第-n-个结点" tabindex="-1">19. 删除链表的倒数第 N 个结点 <a class="header-anchor" href="#_19-删除链表的倒数第-n-个结点" aria-hidden="true">#</a></h1><p>给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。</p><ul><li>示例 1：</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入：head = [1,2,3,4,5], n = 2</span></span>
<span class="line"><span>输出：[1,2,3,5]</span></span></code></pre><ul><li>示例 2：</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入：head = [1], n = 1</span></span>
<span class="line"><span>输出：[]</span></span></code></pre><ul><li>示例 3：</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入：head = [1,2], n = 1</span></span>
<span class="line"><span>输出：[1]</span></span></code></pre><ul><li>提示：</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>链表中结点的数目为 sz</span></span>
<span class="line"><span>1 &lt;= sz &lt;= 30</span></span>
<span class="line"><span>0 &lt;= Node.val &lt;= 100</span></span>
<span class="line"><span>1 &lt;= n &lt;= sz</span></span></code></pre><blockquote><p>进阶：你能尝试使用一趟扫描实现吗？</p></blockquote><h2 id="解答" tabindex="-1">解答 <a class="header-anchor" href="#解答" aria-hidden="true">#</a></h2><h3 id="map-记录下标" tabindex="-1">map 记录下标 <a class="header-anchor" href="#map-记录下标" aria-hidden="true">#</a></h3><p>直接记录每个 node 的下标，再进行删除。</p><p>比较简单，占内存</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-ts"><span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">export</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> removeNthFromEnd</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">head</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">ListNode</span><span style="--s-dark:#666666;--s-light:#999999;"> | </span><span style="--s-dark:#CB7676;--s-light:#AB5959;">null</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> n</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">number</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">map</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">any</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#666666;--s-light:#999999;"> {};</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  while</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">head</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    map</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> head</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    head</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> head</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">next</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">!</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ===</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> n</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> map</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">0</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> map</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">0</span><span style="--s-dark:#666666;--s-light:#999999;">].</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">next</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  else</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;"> &gt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> n</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> map</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> -</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> n</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> -</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 1</span><span style="--s-dark:#666666;--s-light:#999999;">].</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">next</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> map</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> -</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> n</span><span style="--s-dark:#666666;--s-light:#999999;">].</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">next</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> map</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">0</span><span style="--s-dark:#666666;--s-light:#999999;">];</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span></code></pre><h3 id="双指针记录" tabindex="-1">双指针记录 <a class="header-anchor" href="#双指针记录" aria-hidden="true">#</a></h3><p>一个指针先走 n 步，再一起走完，second.next 就是要删除的元素</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-ts"><span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">export</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> const </span><span style="--s-dark:#80A665;--s-light:#59873A;">removeNthFromEnd</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> function </span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">head</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">ListNode</span><span style="--s-dark:#666666;--s-light:#999999;"> | </span><span style="--s-dark:#CB7676;--s-light:#AB5959;">null</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> n</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">number</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">first</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">ListNode</span><span style="--s-dark:#666666;--s-light:#999999;"> | </span><span style="--s-dark:#CB7676;--s-light:#AB5959;">null</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> head</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">second</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">ListNode</span><span style="--s-dark:#666666;--s-light:#999999;"> | </span><span style="--s-dark:#CB7676;--s-light:#AB5959;">null</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> head</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  while</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">n</span><span style="--s-dark:#666666;--s-light:#999999;"> &gt;=</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">first</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> first</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> first</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">next</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    else</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> head</span><span style="--s-dark:#666666;--s-light:#999999;">?.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">next</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    n</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">--</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  while</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">first</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    first</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> first</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">next</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    second</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> second</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">!</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">next</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">  second</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">!</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">next</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> second</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">!</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">next</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">!</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">next</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> head</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">};</span></span></code></pre>`,19),t=[p],h={__name:"19_removeNthFromEnd",setup(e){return(i,d)=>(a(),s("div",l,t))}};export{h as default};
//# sourceMappingURL=19_removeNthFromEnd-yzL58CWg.js.map