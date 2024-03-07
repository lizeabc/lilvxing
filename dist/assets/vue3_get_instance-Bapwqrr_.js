import{c as s,o as a,f as e}from"./app-Bm1F-R0U.js";const t="/images/blog/vue3_get_instance.png",n={class:"prose m-auto slide-enter-content"},l=e(`<h2 id="vue3-组件实列，上下文获取问题" tabindex="-1">vue3 组件实列，上下文获取问题 <a class="header-anchor" href="#vue3-组件实列，上下文获取问题" aria-hidden="true">#</a></h2><h3 id="getcurrentinstance" tabindex="-1">getCurrentInstance <a class="header-anchor" href="#getcurrentinstance" aria-hidden="true">#</a></h3><blockquote><p>获取当前组件实例</p></blockquote><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-js"><span class="line"><span style="--s-dark:#4D9375;--s-light:#1E754F;">import</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> getCurrentInstance</span><span style="--s-dark:#666666;--s-light:#999999;"> }</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> from</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">vue</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">const</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> instance</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#80A665;--s-light:#59873A;"> getCurrentInstance</span><span style="--s-dark:#666666;--s-light:#999999;">();</span></span></code></pre><h3 id="ctx" tabindex="-1">ctx <a class="header-anchor" href="#ctx" aria-hidden="true">#</a></h3><blockquote><p>当前组件的上下文，只能在开发环境下使用，生产环境下的 ctx 将访问不到，ctx 中包含了组件中由 ref 和 reactive 创建的响应式数据对象，以及 proxy 下的属性</p></blockquote><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-js"><span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">const</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> ctx</span><span style="--s-dark:#666666;--s-light:#999999;"> }</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#80A665;--s-light:#59873A;"> getCurrentInstance</span><span style="--s-dark:#666666;--s-light:#999999;">();</span></span></code></pre><ul><li><p>注意：在 setup 中不可以调用 getCurrentInstance().ctx 来获取组件内部数据，因为在 prod 模式会被干掉</p></li><li><p>原因：</p><ul><li>ctx 只是为了便于在开发模式下通过控制台检查</li><li>在 prod 模式是一个空对象</li></ul></li></ul><p><img src="`+t+'" alt="vue3_get_instance"></p><p>图片来源<a href="https://juejin.cn/post/6899432348266283022" target="_blank" rel="noopener">掘金 春去春又来</a></p><h3 id="proxy" tabindex="-1">proxy <a class="header-anchor" href="#proxy" aria-hidden="true">#</a></h3><blockquote><p>在开发环境以及生产环境下都能放到组件上下文对象（推荐）</p></blockquote><p>包含属性$attrs,$data,$el,$emit,$forceUpdate,$nextTick,$options,$parent,$props,$refs,$root,$slots,$watch</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-js"><span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">const</span><span style="--s-dark:#666666;--s-light:#999999;"> {</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> proxy</span><span style="--s-dark:#666666;--s-light:#999999;"> }</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#80A665;--s-light:#59873A;"> getCurrentInstance</span><span style="--s-dark:#666666;--s-light:#999999;">();</span></span></code></pre>',14),r=[l],h={__name:"vue3_get_instance",setup(p){return(i,d)=>(a(),s("div",n,r))}};export{h as default};
//# sourceMappingURL=vue3_get_instance-Bapwqrr_.js.map
