import{c as s,o as a,f as n}from"./app-Bm1F-R0U.js";const t="/images/blog/vite-plugin-pages_2.png",p="/images/blog/vite-plugin-pages_1.png",l="/images/blog/vite-plugin-pages_3.png",e={class:"prose m-auto slide-enter-content"},i=n(`<h1 id="文件自动路由插件-vite-plugin-pages-打包路由丢失问题" tabindex="-1">文件自动路由插件 vite-plugin-pages 打包路由丢失问题 <a class="header-anchor" href="#文件自动路由插件-vite-plugin-pages-打包路由丢失问题" aria-hidden="true">#</a></h1><blockquote><p>已修复，并不是 <strong>vite-plugin-pages</strong> 的问题，查看<a href="/blog/other/vercel-build-err">vercel 构建项目刷新页面 404 问题</a></p></blockquote><p>vite-plugin-pages 配置</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-ts"><span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">Pages</span><span style="--s-dark:#666666;--s-light:#999999;">({</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">  extensions</span><span style="--s-dark:#666666;--s-light:#999999;">: [</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">vue</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">, </span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">md</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">],</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">  dirs</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">pages</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">  extendRoute</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">route</span><span style="--s-dark:#666666;--s-light:#999999;">) {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">    const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">path</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#80A665;--s-light:#59873A;"> resolve</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">__dirname</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> route</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">component</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">slice</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;">1</span><span style="--s-dark:#666666;--s-light:#999999;">));</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">path</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">endsWith</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">.md</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">)) {</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">      const </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">md</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> fs</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">readFileSync</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">path</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">utf-8</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">      const </span><span style="--s-dark:#666666;--s-light:#999999;">{</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> data</span><span style="--s-dark:#666666;--s-light:#999999;"> }</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#80A665;--s-light:#59873A;"> matter</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">md</span><span style="--s-dark:#666666;--s-light:#999999;">);</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">      route</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">meta</span><span style="--s-dark:#666666;--s-light:#999999;"> = </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">Object</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">assign</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">route</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">meta</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ||</span><span style="--s-dark:#666666;--s-light:#999999;"> {}, { </span><span style="--s-dark:#B8A965;--s-light:#998418;">frontmatter</span><span style="--s-dark:#666666;--s-light:#999999;">: </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">data</span><span style="--s-dark:#666666;--s-light:#999999;"> });</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    }</span></span>
<span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">    return</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> route</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  },</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">});</span></span></code></pre><p>使用 vite-plugin-pages 插件根据文件自动生成路由，文件目录如下</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>pages</span></span>
<span class="line"><span>--blog</span></span>
<span class="line"><span>----index.md</span></span>
<span class="line"><span>--projects.md</span></span></code></pre><p><img src="`+t+'" alt=""></p><p>使用<code>vite-ssg build</code>打包出来之后，会生成 blog.html, project.html</p><p><img src="'+p+'" alt=""></p><p>路由打印</p><p><img src="'+l+'" alt=""></p>',11),r=[i],y={__name:"vite-plugin-pages",setup(g){return(d,h)=>(a(),s("div",e,r))}};export{y as default};
//# sourceMappingURL=vite-plugin-pages-BU9ep3ti.js.map