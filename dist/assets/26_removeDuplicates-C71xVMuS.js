import{c as s,o as a,f as n}from"./app-Bm1F-R0U.js";const l={class:"prose m-auto slide-enter-content"},p=n(`<h1 id="_26-删除有序数组中的重复项" tabindex="-1">26. 删除有序数组中的重复项 <a class="header-anchor" href="#_26-删除有序数组中的重复项" aria-hidden="true">#</a></h1><p>给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。</p><p>由于在某些语言中不能改变数组的长度，所以必须将结果放在数组 nums 的第一部分。更规范地说，如果在删除重复项之后有 k 个元素，那么 nums 的前 k 个元素应该保存最终结果。</p><p>将最终结果插入 nums 的前 k 个位置后返回 k 。</p><p>不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。</p><p>判题标准:</p><p>系统会用下面的代码来测试你的题解:</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>int[] nums = [...]; // 输入数组</span></span>
<span class="line"><span>int[] expectedNums = [...]; // 长度正确的期望答案</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int k = removeDuplicates(nums); // 调用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>assert k == expectedNums.length;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (int i = 0; i &lt; k; i++) {</span></span>
<span class="line"><span>  assert nums[i] == expectedNums[i];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>如果所有断言都通过，那么您的题解将被 通过。</span></span></code></pre><ul><li>示例 1：</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入：nums = [1,1,2]</span></span>
<span class="line"><span>输出：2, nums = [1,2,_]</span></span>
<span class="line"><span>解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。</span></span></code></pre><ul><li>示例 2：</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>输入：nums = [0,0,1,1,1,2,2,3,3,4]</span></span>
<span class="line"><span>输出：5, nums = [0,1,2,3,4]</span></span>
<span class="line"><span>解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。</span></span></code></pre><ul><li>提示：</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>1 &lt;= nums.length &lt;= 3 \\* 104</span></span>
<span class="line"><span>-104 &lt;= nums[i] &lt;= 104</span></span>
<span class="line"><span>nums 已按 升序 排列</span></span></code></pre><h2 id="解答" tabindex="-1">解答 <a class="header-anchor" href="#解答" aria-hidden="true">#</a></h2><h3 id="一" tabindex="-1">一 <a class="header-anchor" href="#一" aria-hidden="true">#</a></h3><p>将相同数置为 null，然后将 null 与数交换</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-ts"><span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">export</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> removeDuplicates</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">nums</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">number</span><span style="--s-dark:#666666;--s-light:#999999;">[]):</span><span style="--s-dark:#5DA994;--s-light:#2E8F82;"> number</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">flag</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> -</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">1</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  for</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> nums</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> - </span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">1</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#666666;--s-light:#999999;"> &gt;=</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">--</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ===</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> -</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 1</span><span style="--s-dark:#666666;--s-light:#999999;">])</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">      (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">nums</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> as</span><span style="--s-dark:#5DA994;--s-light:#2E8F82;"> any</span><span style="--s-dark:#666666;--s-light:#999999;">)[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> null</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">      flag</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> +</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 1</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    }</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">flag</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> nums</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  for</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> nums</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#666666;--s-light:#999999;">;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> i</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ==</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> null</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">      let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">j</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> flag</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">      while</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">j</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> nums</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">        if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">j</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> !==</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> null</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">          nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">i</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">j</span><span style="--s-dark:#666666;--s-light:#999999;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">          (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">nums</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> as</span><span style="--s-dark:#5DA994;--s-light:#2E8F82;"> any</span><span style="--s-dark:#666666;--s-light:#999999;">)[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">j</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> null</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">          flag</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> j</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> +</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 1</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">          break</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">        }</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">        j</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">      }</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    }</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> nums</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">filter</span><span style="--s-dark:#666666;--s-light:#999999;">((</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">v</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> =&gt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> v</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> !==</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> null</span><span style="--s-dark:#666666;--s-light:#999999;">).</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span></code></pre><h3 id="二" tabindex="-1">二 <a class="header-anchor" href="#二" aria-hidden="true">#</a></h3><p>使用两个指针，一个快指针用来查找不同的数，一个慢指针用来替换数字。</p><p>slow 从 1 开始，依次替换数组后面所有的不同数； 当此数与前一个数不同时，替换到 slow 下标的位置； 每个不同的数只会替换一次，因此最终 slow 就是去重的数组长度。</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-ts"><span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">export</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> removeDuplicates1</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">nums</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">number</span><span style="--s-dark:#666666;--s-light:#999999;">[]):</span><span style="--s-dark:#5DA994;--s-light:#2E8F82;"> number</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">slow</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 1</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">fast</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 1</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">len</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> nums</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#B8A965;--s-light:#998418;">length</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">len</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;=</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 1</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> len</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  while</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">fast</span><span style="--s-dark:#666666;--s-light:#999999;"> &lt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> len</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">fast</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> !==</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">fast</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> -</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 1</span><span style="--s-dark:#666666;--s-light:#999999;">])</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">      nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">slow</span><span style="--s-dark:#666666;--s-light:#999999;">]</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> nums</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">fast</span><span style="--s-dark:#666666;--s-light:#999999;">];</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">      slow</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    }</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    fast</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">++</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> slow</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span></code></pre>`,22),t=[p],h={__name:"26_removeDuplicates",setup(e){return(i,r)=>(a(),s("div",l,t))}};export{h as default};
//# sourceMappingURL=26_removeDuplicates-C71xVMuS.js.map