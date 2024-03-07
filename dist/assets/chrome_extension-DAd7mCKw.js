import{c as s,o as a,f as n}from"./app-Bm1F-R0U.js";const t="/images/blog/chrome_extension_1.png",l="/images/blog/chrome_extension_2.png",p="/images/blog/chrome_extension_3.png",e={class:"prose m-auto slide-enter-content"},i=n(`<h1 id="github-项目链接-package-包地址的-chrome-插件" tabindex="-1">github 项目链接 package 包地址的 chrome 插件 <a class="header-anchor" href="#github-项目链接-package-包地址的-chrome-插件" aria-hidden="true">#</a></h1><h2 id="地址" tabindex="-1">地址 <a class="header-anchor" href="#地址" aria-hidden="true">#</a></h2><p><a href="https://github.com/shellingfordly/pkg-url" target="_blank" rel="noopener">插件 github 地址</a></p><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-hidden="true">#</a></h2><p>有时候逛 github 看别人项目的时候，想看看他们的 package 里面引用了什么包，不知道这些包是干什么的。复制再去搜索感觉有点麻烦，就想实现一个 chrome 插件点击包名的时候能跳转到对应的 github 地址、npm 地址或者 google 搜索。也许已经有插件实现了，懒得去找了，简单的实现一下并不难，也方便以后自己加功能。</p><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-hidden="true">#</a></h2><ul><li>配置 manifest.json</li></ul><p>content_scripts 的 matches 属性设置在遇到什么 url 的时候去执行 js 脚本，content-script.js 既是需要执行的脚本。</p><p>popup.html 是插件点击后的弹窗，配置一下插件名和描述，添加插件 icon。ok，其他的暂时不需要。</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-json"><span class="line"><span style="--s-dark:#666666;--s-light:#999999;">{</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">  &quot;</span><span style="--s-dark:#B8A965;--s-light:#998418;">name</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">PKG-URL</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">  &quot;</span><span style="--s-dark:#B8A965;--s-light:#998418;">description</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">Get url of the github project&#39;s package.</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">  &quot;</span><span style="--s-dark:#B8A965;--s-light:#998418;">version</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">1.0</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">  &quot;</span><span style="--s-dark:#B8A965;--s-light:#998418;">manifest_version</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 3</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">  &quot;</span><span style="--s-dark:#B8A965;--s-light:#998418;">content_scripts</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#666666;--s-light:#999999;"> [</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    {</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">      &quot;</span><span style="--s-dark:#B8A965;--s-light:#998418;">matches</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#666666;--s-light:#999999;"> [</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">https://github.com/*/*</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">],</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">      &quot;</span><span style="--s-dark:#B8A965;--s-light:#998418;">js</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#666666;--s-light:#999999;"> [</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">content-script.js</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">]</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    }</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  ],</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">  &quot;</span><span style="--s-dark:#B8A965;--s-light:#998418;">action</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">    &quot;</span><span style="--s-dark:#B8A965;--s-light:#998418;">default_popup</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">popup.html</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  },</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">  &quot;</span><span style="--s-dark:#B8A965;--s-light:#998418;">icons</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">    &quot;</span><span style="--s-dark:#B8A965;--s-light:#998418;">16</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">/imgs/logo.png</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">    &quot;</span><span style="--s-dark:#B8A965;--s-light:#998418;">32</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">/imgs/logo.png</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">    &quot;</span><span style="--s-dark:#B8A965;--s-light:#998418;">48</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">/imgs/logo.png</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">    &quot;</span><span style="--s-dark:#B8A965;--s-light:#998418;">128</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">/imgs/logo.png</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span></code></pre><h3 id="实现逻辑" tabindex="-1">实现逻辑 <a class="header-anchor" href="#实现逻辑" aria-hidden="true">#</a></h3><p>按道理这些 class 应该不会变的，获取 package.json 里面的所有包名的 dom，给他们添加点击事件，点击时候弹窗显示 npm/github/google 选项，到对应的地址。</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-js"><span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">const</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> highlight</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> document</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">querySelector</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">.highlight</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">const</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> allBlobCode</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> highlight</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">querySelectorAll</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">tr td.blob-code</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">const</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> allPkg</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#80A665;--s-light:#59873A;"> handle</span><span style="--s-dark:#666666;--s-light:#999999;">([...</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">allBlobCode</span><span style="--s-dark:#666666;--s-light:#999999;">]);</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">const</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> ToolDom</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#80A665;--s-light:#59873A;"> createToolDom</span><span style="--s-dark:#666666;--s-light:#999999;">();</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">let</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> searchKey</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">allPkg</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">forEach</span><span style="--s-dark:#666666;--s-light:#999999;">((</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">item</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> =&gt;</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">  item</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">style</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">cursor</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">pointer</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">  item</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">title</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">点击可跳转</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">  item</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">addEventListener</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">click</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#666666;--s-light:#999999;"> ()</span><span style="--s-dark:#666666;--s-light:#999999;"> =&gt;</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    searchKey</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> item</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">innerText</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">replace</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">/</span><span style="--s-dark:#E6CC77;--s-light:#BDA437;">\\&quot;</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">/</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">g</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">    item</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">parentElement</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">appendChild</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">ToolDom</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  });</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">});</span></span></code></pre><p>处理一下 dom，因为它 package.json 里面的每一行都是 tr td 包裹的。这里筛选一下，只对 <code>dependencies</code> 和 <code>devDependencies</code> 下面的 dom 添加点击事件，其它的暂时不管。</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-js"><span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> handle</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">allBlobCode</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  function</span><span style="--s-dark:#80A665;--s-light:#59873A;"> filterPkg</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">allPkg</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> key</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">    const</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> index</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> allPkg</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">findIndex</span><span style="--s-dark:#666666;--s-light:#999999;">((</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">item</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> =&gt;</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">      const</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> ent</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> item</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">querySelector</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">span.pl-ent</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">      return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> ent</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> &amp;&amp;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> ent</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">innerText</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ===</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> key</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    });</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">    const</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> pkgs</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> index</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> !==</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> -</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">1</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ?</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> allPkg</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">slice</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">index</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> +</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 1</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> :</span><span style="--s-dark:#666666;--s-light:#999999;"> [];</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">    const</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> end</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> pkgs</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">findIndex</span><span style="--s-dark:#666666;--s-light:#999999;">((</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">v</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> =&gt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> v</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">innerText</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">includes</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">}</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">));</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> end</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> !==</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 1</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ?</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> pkgs</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">slice</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">0</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> end</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> :</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> pkgs</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> depPkg</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#80A665;--s-light:#59873A;"> filterPkg</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">allBlobCode</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &#39;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">&quot;dependencies&quot;</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&#39;</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> devPkg</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#80A665;--s-light:#59873A;"> filterPkg</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">allBlobCode</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &#39;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">&quot;devDependencies&quot;</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&#39;</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  return</span><span style="--s-dark:#666666;--s-light:#999999;"> [...</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">depPkg</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#666666;--s-light:#999999;"> ...</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">devPkg</span><span style="--s-dark:#666666;--s-light:#999999;">].</span><span style="--s-dark:#80A665;--s-light:#59873A;">map</span><span style="--s-dark:#666666;--s-light:#999999;">(</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">el</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> =&gt;</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> el</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">querySelector</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">span.pl-ent</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ||</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> el</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  );</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span></code></pre><p>createToolDom 函数就是去创建我们的弹窗 dom，不知道能不能写 html 和 css 的形式来引入，这里懒得去看文档了，以后再研究。先直接 js 创建了，反正代码也不多；都是一些设置 dom 样式的呆呆代码，就不贴了，具体可以去<a href="https://github.com/shellingfordly/pkg-url" target="_blank" rel="noopener">github 地址</a>看源码。</p><p>先直接去搜索吧，跳转的官方稍微麻烦了点。本来想直接去搜索结果第一个，但是第一个也不一定是官方，先这样了。也方便一些了，省得还要复制再开网页搜索。</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-js"><span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">btn</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">addEventListener</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">click</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#666666;--s-light:#999999;"> ()</span><span style="--s-dark:#666666;--s-light:#999999;"> =&gt;</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">  if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#CB7676;--s-light:#AB5959;">!</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">searchKey</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> return</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">  const</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> url</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">    npm</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> \`</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">https://www.npmjs.com/search?q=</span><span style="--s-dark:#666666;--s-light:#999999;">\${</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">searchKey</span><span style="--s-dark:#666666;--s-light:#999999;">}</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">\`</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">    github</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> \`</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">https://github.com/search?q=</span><span style="--s-dark:#666666;--s-light:#999999;">\${</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">searchKey</span><span style="--s-dark:#666666;--s-light:#999999;">}</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">\`</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">    google</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> \`</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">https://www.google.com/search?q=</span><span style="--s-dark:#666666;--s-light:#999999;">\${</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">searchKey</span><span style="--s-dark:#666666;--s-light:#999999;">}</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">\`</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  };</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">  window</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">open</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">url</span><span style="--s-dark:#666666;--s-light:#999999;">[</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">value</span><span style="--s-dark:#666666;--s-light:#999999;">]);</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">});</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">Ï</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span></code></pre><h2 id="效果" tabindex="-1">效果 <a class="header-anchor" href="#效果" aria-hidden="true">#</a></h2><p>OK，这样就完成了，稍微在 popup.html 里面写点介绍。</p><p><img src="`+t+'" alt="chrome_extension_1"></p><p>移动到包名上面会提示可以点击，指针也会变成小手指，点击就会弹窗选择到对应的地址去。 <img src="'+l+'" alt="chrome_extension_2"><img src="'+p+'" alt="chrome_extension_3"></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><p>简单的做一些功能还是挺简单的（好像是句废话哈哈哈），发布插件好像要花钱，懒得搞了，本地用用算了。想用的小伙伴可以去<a href="https://github.com/shellingfordly/pkg-url" target="_blank" rel="noopener">github 地址</a>下载自行引入。</p>',24),r=[i],y={__name:"chrome_extension",setup(h){return(d,g)=>(a(),s("div",e,r))}};export{y as default};
//# sourceMappingURL=chrome_extension-DAd7mCKw.js.map
