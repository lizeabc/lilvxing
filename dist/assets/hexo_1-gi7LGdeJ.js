import{c as s,o as a,f as e}from"./app-Bm1F-R0U.js";const t={class:"prose m-auto slide-enter-content"},l=e(`<h1 id="hexo基础使用学习" tabindex="-1">hexo基础使用学习 <a class="header-anchor" href="#hexo基础使用学习" aria-hidden="true">#</a></h1><span>      Hexo是一个快速、简洁且高效的博客框架。 Hexo使用Markdown(或其他渲染引擎)解析文章，在几秒内， 即可利用靓丽的主题生成静态网页。下面是关于它的一些基础使用介绍 </span><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-hidden="true">#</a></h2><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h3><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-shell"><span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">npm</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> install</span><span style="--s-dark:#C99076;--s-light:#A65E2B;"> -g</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> hexo-cli</span></span></code></pre><h2 id="建站" tabindex="-1">建站 <a class="header-anchor" href="#建站" aria-hidden="true">#</a></h2><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>hexo init &lt;folder&gt;</span></span>
<span class="line"><span>cd &lt;folder&gt;</span></span>
<span class="line"><span>npm install</span></span></code></pre><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h2><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>title	网站标题</span></span>
<span class="line"><span>subtitle	网站副标题</span></span>
<span class="line"><span>description	网站描述</span></span>
<span class="line"><span>keywords	网站的关键词, 搜索引擎会解析到. 使用半角逗号 , 分隔多个关键词。</span></span>
<span class="line"><span>author	您的名字</span></span>
<span class="line"><span>language	网站使用的语言</span></span></code></pre><h3 id="文章" tabindex="-1">文章 <a class="header-anchor" href="#文章" aria-hidden="true">#</a></h3><ul><li>external_link — 在新标签中打开链接 — 默认true</li></ul><h3 id="分页" tabindex="-1">分页 <a class="header-anchor" href="#分页" aria-hidden="true">#</a></h3><table><thead><tr><th>参数</th><th>描述</th><th>默认值</th></tr></thead><tbody><tr><td>per_page</td><td>每页显示的文章量 (0=关闭分页功能)</td><td>10</td></tr><tr><td>pagination_dir</td><td>分页目录</td><td>page</td></tr></tbody></table><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-hidden="true">#</a></h2><ul><li>清除缓存文件(db.json)和已生成的静态文件(public)</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-shell"><span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">hexo</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> clean</span></span></code></pre><ul><li>生成静态文件 <ul><li>监视</li></ul></li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-shell"><span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">hexo</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> generate</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">hexo</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> generate</span><span style="--s-dark:#C99076;--s-light:#A65E2B;"> --watch</span></span></code></pre><ul><li>启动服务器 <ul><li>默认</li><li>修改端口</li><li>静态模式</li></ul></li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-shell"><span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">hexo</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> server</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">hexo</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> server</span><span style="--s-dark:#C99076;--s-light:#A65E2B;"> -p</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 5000</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">hexo</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> server</span><span style="--s-dark:#C99076;--s-light:#A65E2B;"> -s</span></span></code></pre><ul><li>部署网站</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-shell"><span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">hexo</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> deploy</span></span></code></pre><ul><li>设置 <ul><li>在 ~/.pow 文件夹建立链接(symlink)</li><li>网站将会在 <a href="http://myapp.dev" target="_blank" rel="noopener">http://myapp.dev</a> 下运行，网址根据链接名称而定</li></ul></li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-shell"><span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">cd</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> ~/.pow</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">ln</span><span style="--s-dark:#C99076;--s-light:#A65E2B;"> -s</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> /path/to/myapp</span></span></code></pre><h2 id="写作" tabindex="-1">写作 <a class="header-anchor" href="#写作" aria-hidden="true">#</a></h2><h3 id="布局" tabindex="-1">布局 <a class="header-anchor" href="#布局" aria-hidden="true">#</a></h3><ul><li>三种默认布局：post、page 和 draft</li></ul><table><thead><tr><th>布局</th><th>路径</th></tr></thead><tbody><tr><td>post</td><td>source/_posts</td></tr><tr><td>page</td><td>source</td></tr><tr><td>draft</td><td>source/_drafts</td></tr></tbody></table><ul><li>如果不想文章被处理，将Front-Matter中的layout:设为false</li></ul><h3 id="模板" tabindex="-1">模板 <a class="header-anchor" href="#模板" aria-hidden="true">#</a></h3><ul><li>在新建文章时，Hexo会根据scaffolds文件夹内相对应的文件来建立文件</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-shell"><span class="line"><span style="--s-dark:#758575DD;--s-light:#A0ADA0;"># Hexo会尝试在scaffolds文件夹中寻找 photo.md模板</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">hexo</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> new</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> photo</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">My Gallery</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span></span></code></pre><h2 id="front-matter" tabindex="-1">Front-matter <a class="header-anchor" href="#front-matter" aria-hidden="true">#</a></h2><h3 id="模板参数" tabindex="-1">模板参数 <a class="header-anchor" href="#模板参数" aria-hidden="true">#</a></h3><table><thead><tr><th>参数</th><th>描述</th><th>默认值</th></tr></thead><tbody><tr><td>layout</td><td>布局</td><td></td></tr><tr><td>title</td><td>标题</td><td></td></tr><tr><td>comments</td><td>开启文章的评论功能</td><td>true</td></tr><tr><td>tags</td><td>标签（不适用于分页）</td><td></td></tr><tr><td>categories</td><td>分类（不适用于分页）</td><td></td></tr><tr><td>permalink</td><td>覆盖文章网址</td><td></td></tr></tbody></table><h3 id="分类和标签" tabindex="-1">分类和标签 <a class="header-anchor" href="#分类和标签" aria-hidden="true">#</a></h3><ul><li>分类具有顺序性和层次性 <ul><li>Foo, Bar 不等于 Bar, Foo</li></ul></li><li>而标签没有顺序和层次</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>categories:</span></span>
<span class="line"><span>- Diary</span></span>
<span class="line"><span>tags:</span></span>
<span class="line"><span>- PS3</span></span>
<span class="line"><span>- Games</span></span></code></pre><h2 id="标签插件" tabindex="-1">标签插件 <a class="header-anchor" href="#标签插件" aria-hidden="true">#</a></h2><h3 id="文章摘要和截断" tabindex="-1">文章摘要和截断 <a class="header-anchor" href="#文章摘要和截断" aria-hidden="true">#</a></h3><blockquote><p>在文章中使用 &lt; !-- more --&gt; 那么 &lt; !-- more --&gt; 之前的文字将会被视为摘要。 首页中将只出现这部分文字，同时这部分文字也会出现在正文之中。</p></blockquote><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-html"><span class="line"><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">主页显示内容</span></span>
<span class="line"><span style="--s-dark:#758575DD;--s-light:#A0ADA0;">&lt;!-- more --&gt;</span></span>
<span class="line"><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">正文</span></span></code></pre><ul><li>注意，摘要可能会被 Front Matter 中的 excerpt 覆盖</li></ul><h2 id="资源文件夹" tabindex="-1">资源文件夹 <a class="header-anchor" href="#资源文件夹" aria-hidden="true">#</a></h2><h3 id="文章资源文件夹" tabindex="-1">文章资源文件夹 <a class="header-anchor" href="#文章资源文件夹" aria-hidden="true">#</a></h3><blockquote><p>当资源文件管理功能打开后，Hexo将会在你每一次通过 hexo new [layout] [title] 命令创建新文章时自动创建一个文件夹, 存放着文章有关的资源</p></blockquote><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>_config.yml</span></span>
<span class="line"><span>post_asset_folder: true</span></span></code></pre><h2 id="数据文件" tabindex="-1">数据文件 <a class="header-anchor" href="#数据文件" aria-hidden="true">#</a></h2><ul><li>在 source/_data 文件夹中新建 menu.yml 文件</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>Home: /</span></span>
<span class="line"><span>Gallery: /gallery/</span></span>
<span class="line"><span>Archives: /archives/</span></span></code></pre><ul><li><p>在模板中使用这些资料</p></li><li><p>渲染结果</p></li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-html"><span class="line"><span style="--s-dark:#666666;--s-light:#999999;">&lt;</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">a</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> href</span><span style="--s-dark:#666666;--s-light:#999999;">=</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">/</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;"> Home </span><span style="--s-dark:#666666;--s-light:#999999;">&lt;/</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">a</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">&lt;</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">a</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> href</span><span style="--s-dark:#666666;--s-light:#999999;">=</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">/gallery/</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;"> Gallery </span><span style="--s-dark:#666666;--s-light:#999999;">&lt;/</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">a</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">&lt;</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">a</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> href</span><span style="--s-dark:#666666;--s-light:#999999;">=</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">/archives/</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;"> Archives </span><span style="--s-dark:#666666;--s-light:#999999;">&lt;/</span><span style="--s-dark:#4D9375;--s-light:#1E754F;">a</span><span style="--s-dark:#666666;--s-light:#999999;">&gt;</span></span></code></pre><h2 id="自定义" tabindex="-1">自定义 <a class="header-anchor" href="#自定义" aria-hidden="true">#</a></h2><ul><li>参数</li></ul><table><thead><tr><th>参数</th><th>结果</th></tr></thead><tbody><tr><td>:year/:month/:day/:title/</td><td>2013/07/14/hello-world</td></tr><tr><td>:year-:month-:day-:title.html</td><td>2013-07-14-hello-world.html</td></tr><tr><td>:category/:title</td><td>foo/bar/hello-world</td></tr></tbody></table><ul><li>新建文章</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-"><span class="line"><span>hexo new &quot;Hello World&quot; --lang tw</span></span>
<span class="line"><span>source/_posts/tw/Hello-World.md</span></span></code></pre><p>地址 <a href="http://localhost:4000/tw/hello-world/" target="_blank" rel="noopener">http://localhost:4000/tw/hello-world/</a></p>`,58),n=[l],p={__name:"hexo_1",setup(i){return(d,r)=>(a(),s("div",t,n))}};export{p as default};
//# sourceMappingURL=hexo_1-gi7LGdeJ.js.map