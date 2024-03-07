import{c as s,o as a,f as n}from"./app-Bm1F-R0U.js";const l={class:"prose m-auto slide-enter-content"},t=n(`<h1 id="react-脚手架项目-webpack-4-44-2-配置-less，antd-按需加载，路径别名" tabindex="-1">react 脚手架项目 webpack@4.44.2 配置 less，antd 按需加载，路径别名 <a class="header-anchor" href="#react-脚手架项目-webpack-4-44-2-配置-less，antd-按需加载，路径别名" aria-hidden="true">#</a></h1><h3 id="antd-按需加载" tabindex="-1">antd 按需加载 <a class="header-anchor" href="#antd-按需加载" aria-hidden="true">#</a></h3><ol><li>需要安装 babel-plugin-import，less，less-loader</li><li>在 webpack.config.js 的 <strong>oneOf</strong> 后面添加 less 配置</li></ol><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-js"><span class="line"><span style="--s-dark:#666666;--s-light:#999999;">{</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">	test</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> lessRegex</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">    exclude</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> lessModuleRegex</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">    use</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#80A665;--s-light:#59873A;"> getStyleLoaders</span><span style="--s-dark:#666666;--s-light:#999999;">({</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">    	importLoaders</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 3</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">	    sourceMap</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> isEnvProduction</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">    		?</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> shouldUseSourceMap</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">	    	:</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> isEnvDevelopment</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">		},</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">        &#39;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">less-loader</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&#39;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">	),</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">	sideEffects</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> true</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">},</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">{</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">	test</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> lessModuleRegex</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">    use</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#80A665;--s-light:#59873A;"> getStyleLoaders</span><span style="--s-dark:#666666;--s-light:#999999;">({</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">    	importLoaders</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 3</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">   	 	sourceMap</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> isEnvProduction</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">   	 		?</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> shouldUseSourceMap</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">            :</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> isEnvDevelopment</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">            modules</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">            	getLocalIdent</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> getCSSModuleLocalIdent</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">            },</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">		},</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">        &#39;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">less-loader</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&#39;</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">	),</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">},</span></span></code></pre><ol start="3"><li>在 webpack.config.js 中的 getStyleLoaders 方法后面添加此段</li></ol><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-js"><span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">if</span><span style="--s-dark:#666666;--s-light:#999999;"> (</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">preProcessor</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ===</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">less-loader</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">)</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">	loaders</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">push</span><span style="--s-dark:#666666;--s-light:#999999;">({</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">		loader</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> require</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">resolve</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">preProcessor</span><span style="--s-dark:#666666;--s-light:#999999;">),</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">		options</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">			modifyVars</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span><span style="--s-dark:#758575DD;--s-light:#A0ADA0;"> //自定义主题</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">			&#39;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">primary-color</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&#39;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &#39;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> #1890ff </span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&#39;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">		},</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">		javascriptEnabled</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> true</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">	}</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">)</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span>
<span class="line"></span></code></pre><h3 id="配置路径别名" tabindex="-1">配置路径别名 <a class="header-anchor" href="#配置路径别名" aria-hidden="true">#</a></h3><ol><li>找到 webpack.config.js 中的 alias 配置</li></ol><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-js"><span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">alias</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">	&#39;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">react-native</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&#39;</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">: </span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&#39;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">react-native-web</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&#39;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">	...(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">isEnvProductionProfile</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> &amp;&amp;</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">		&#39;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">react-dom$</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&#39;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &#39;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">react-dom/profiling</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&#39;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">		&#39;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">scheduler/tracing</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&#39;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &#39;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">scheduler/tracing-profiling</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&#39;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">	}),</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">	...(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">modules</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">webpackAliases</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> ||</span><span style="--s-dark:#666666;--s-light:#999999;"> {}),</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">	&#39;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">@</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&#39;</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">: </span><span style="--s-dark:#80A665;--s-light:#59873A;">resolve</span><span style="--s-dark:#666666;--s-light:#999999;">(</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">__dirname</span><span style="--s-dark:#666666;--s-light:#999999;">,</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &#39;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">../src</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&#39;</span><span style="--s-dark:#666666;--s-light:#999999;">)</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">},</span></span></code></pre><ol start="2"><li>如果是 ts 项目需要在 tsconfig.json 文件中添加声明</li></ol><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-json"><span class="line"><span style="--s-dark:#666666;--s-light:#999999;">{</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">  &quot;</span><span style="--s-dark:#B8A965;--s-light:#998418;">compilerOptions</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">    &quot;</span><span style="--s-dark:#B8A965;--s-light:#998418;">baseUrl</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">.</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">    &quot;</span><span style="--s-dark:#B8A965;--s-light:#998418;">paths</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span></span>
<span class="line"><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">      &quot;</span><span style="--s-dark:#B8A965;--s-light:#998418;">@/*</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#666666;--s-light:#999999;"> [</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">src/*</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">]</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">    }</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">  }</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">}</span></span></code></pre>`,11),p=[t],h={__name:"react_webpack_config",setup(e){return(i,r)=>(a(),s("div",l,p))}};export{h as default};
//# sourceMappingURL=react_webpack_config-BT7XVtZt.js.map
