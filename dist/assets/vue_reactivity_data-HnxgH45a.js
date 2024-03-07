import{c as s,o as a,f as t}from"./app-Bm1F-R0U.js";const n="/images/blog/vue_reactivity_data_1.png",l="/images/blog/vue_reactivity_data_2.png",p="/images/blog/vue_reactivity_data_3.png",e="/images/blog/vue_reactivity_data_4.png",i="/images/blog/vue_reactivity_data_5.png",d={class:"prose m-auto slide-enter-content"},r=t(`<h2 id="某些特殊情况下，非响应式数据改变也能被页面响应" tabindex="-1">某些特殊情况下，非响应式数据改变也能被页面响应 <a class="header-anchor" href="#某些特殊情况下，非响应式数据改变也能被页面响应" aria-hidden="true">#</a></h2><p>非响应式变量改变时页面是无法重新渲染的，如果在响应式数据改变的时候，改变了非响应式的变量，此时页面会同时重新渲染新数据。但是只限于数组和对象的改变，普通字符串不渲染。</p><h3 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-hidden="true">#</a></h3><ul><li>数组的 push/pop 或者是直接[index]赋值的方式都是会触发的</li></ul><p>template 代码</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-html"><span class="line"><span style="--s-dark:#666666;--s-light:#999999;">&lt;</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">div</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  &lt;</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">button</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> @click</span><span style="--s-dark:#666666;--s-light:#999999;">=</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">push</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">Push</span><span style="--s-dark:#666666;--s-light:#999999;">&lt;/</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">button</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  &lt;</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">ul</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    &lt;</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">li</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> v-for</span><span style="--s-dark:#666666;--s-light:#999999;">=</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">item in list1</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> :key</span><span style="--s-dark:#666666;--s-light:#999999;">=</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">item</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">{{ item }}</span><span style="--s-dark:#666666;--s-light:#999999;">&lt;/</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">li</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  &lt;/</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">ul</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  &lt;</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">ul</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    &lt;</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">li</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> v-for</span><span style="--s-dark:#666666;--s-light:#999999;">=</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">item in list2</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> :key</span><span style="--s-dark:#666666;--s-light:#999999;">=</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">item</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">{{ item }}</span><span style="--s-dark:#666666;--s-light:#999999;">&lt;/</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">li</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  &lt;/</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">ul</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">&lt;/</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">div</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span></span></code></pre><p>ts 代码</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-ts"><span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">setup</span><span style="--s-dark:#666666;--s-light:#999999;">(){</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;"> const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">list1</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#80A665;--s-light:#59873A;"> ref</span><span style="--s-dark:#666666;--s-light:#999999;">&lt;</span><span style="--s-dark:#5DA994;--s-light:#2E8F82;">string</span><span style="--s-dark:#666666;--s-light:#999999;">[]&gt;([</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">aaa</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">bbb</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">ccc</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">]);</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">list2</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#666666;--s-light:#999999;"> [</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">AAA</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">BBB</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">CCC</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> push</span><span style="--s-dark:#666666;--s-light:#999999;">()</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    list1</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">value</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">push</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">ddd</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    list2</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">push</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">DDD</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  return</span><span style="--s-dark:#666666;--s-light:#999999;"> { </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">list1</span><span style="--s-dark:#666666;--s-light:#999999;">, </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">list2</span><span style="--s-dark:#666666;--s-light:#999999;">, </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">push</span><span style="--s-dark:#666666;--s-light:#999999;"> }</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span></code></pre><p>点击 Push，页面同时渲染了 list1 和 list2</p><p><img src="`+n+'" alt="vue_reactivity_data_1"><img src="'+l+`" alt="vue_reactivity_data_2"></p><h3 id="对象" tabindex="-1">对象 <a class="header-anchor" href="#对象" aria-hidden="true">#</a></h3><ul><li>对象的属性修改/新增也是会触发页面渲染的</li></ul><p>template 代码</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-html"><span class="line"><span style="--s-dark:#666666;--s-light:#999999;">&lt;</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">button</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> @click</span><span style="--s-dark:#666666;--s-light:#999999;">=</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">modify</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">modify</span><span style="--s-dark:#666666;--s-light:#999999;">&lt;/</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">button</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">&lt;</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">div</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">{{ obj1 }}</span><span style="--s-dark:#666666;--s-light:#999999;">&lt;/</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">div</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">&lt;</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">div</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">{{ obj2 }}</span><span style="--s-dark:#666666;--s-light:#999999;">&lt;/</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">div</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span></span></code></pre><p>ts 代码</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-ts"><span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">setup</span><span style="--s-dark:#666666;--s-light:#999999;">(){</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">obj1</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#80A665;--s-light:#59873A;"> reactive</span><span style="--s-dark:#666666;--s-light:#999999;">({</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">    key</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">obj1 key</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  });</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">obj2</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">    key</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">obj2 key</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> modify</span><span style="--s-dark:#666666;--s-light:#999999;">()</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    obj1</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">key</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">modify obj1 key</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    obj2</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">key</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">modify obj2 key</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  return</span><span style="--s-dark:#666666;--s-light:#999999;"> { </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">obj1</span><span style="--s-dark:#666666;--s-light:#999999;">, </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">obj2</span><span style="--s-dark:#666666;--s-light:#999999;">, </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">modify</span><span style="--s-dark:#666666;--s-light:#999999;"> };</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span></code></pre><p>点击修改 obj1 和 obj2 的 key 后，页面都渲染了</p><p><img src="`+p+`" alt="vue_reactivity_data_3"></p><h3 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-hidden="true">#</a></h3><ul><li>修改普通字符串后，页面没有渲染</li><li>数字/Boolean 和字符串的效果一样</li></ul><p>template 代码</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-html"><span class="line"><span style="--s-dark:#666666;--s-light:#999999;">&lt;</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">button</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> @click</span><span style="--s-dark:#666666;--s-light:#999999;">=</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">modify</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">modify</span><span style="--s-dark:#666666;--s-light:#999999;">&lt;/</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">button</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">&lt;</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">div</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">value1 ====== {{ value1 }}</span><span style="--s-dark:#666666;--s-light:#999999;">&lt;/</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">div</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">&lt;</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">div</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">value2 ====== {{ value2 }}</span><span style="--s-dark:#666666;--s-light:#999999;">&lt;/</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">div</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span></span></code></pre><p>js 代码</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-ts"><span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">setup</span><span style="--s-dark:#666666;--s-light:#999999;">()</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">value1</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#80A665;--s-light:#59873A;"> ref</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">使用ref声明的value1</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  let </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">value2</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">普通字符串value2</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> modify</span><span style="--s-dark:#666666;--s-light:#999999;">()</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    value1</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">value</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">修改value1</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    value2</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">修改value2</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  return</span><span style="--s-dark:#666666;--s-light:#999999;"> { </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">value1</span><span style="--s-dark:#666666;--s-light:#999999;">, </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">value2</span><span style="--s-dark:#666666;--s-light:#999999;">, </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">modify</span><span style="--s-dark:#666666;--s-light:#999999;"> };</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">},</span></span>
<span class="line"></span></code></pre><p>点击修改后页面只有 ref 声明的变量重新渲染了，普通声明的变量并没有重新渲染</p><p><img src="`+e+'" alt="vue_reactivity_data_4"></p><p><img src="'+i+'" alt="vue_reactivity_data_5"></p>',27),g=[r],B={__name:"vue_reactivity_data",setup(h){return(k,y)=>(a(),s("div",d,g))}};export{B as default};
//# sourceMappingURL=vue_reactivity_data-HnxgH45a.js.map
