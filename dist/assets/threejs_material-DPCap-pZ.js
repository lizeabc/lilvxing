import{c as s,o as a,f as n}from"./app-Bm1F-R0U.js";const e="/images/blog/threejs_material.png",t={class:"prose m-auto slide-enter-content"},l=n('<h1 id="three-js-material-物体材质" tabindex="-1">Three.js - Material(物体材质) <a class="header-anchor" href="#three-js-material-物体材质" aria-hidden="true">#</a></h1><h2 id="材料类型" tabindex="-1">材料类型 <a class="header-anchor" href="#材料类型" aria-hidden="true">#</a></h2><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-hidden="true">#</a></h2><p><img src="'+e+`" alt=""></p><h3 id="side" tabindex="-1">side <a class="header-anchor" href="#side" aria-hidden="true">#</a></h3><p>设置物体如何显示贴图等等</p><ul><li>THREE.FrontSide 前面(默认)</li><li>THREE.BackSide 后面</li><li>THREE.DoubleSide 双面</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-js"><span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">var</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> material</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> new</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> THREE</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">MeshBasicMaterial</span><span style="--s-dark:#666666;--s-light:#999999;">({</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">  color</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0xdd00ff</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">  side</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> THREE</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">DoubleSide</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">});</span></span></code></pre><h3 id="opacity" tabindex="-1">opacity <a class="header-anchor" href="#opacity" aria-hidden="true">#</a></h3><p>设置物体透明度，设置 opacity 属性时需要将 transparent 值设置为 true</p><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-js"><span class="line"><span style="--s-dark:#CB7676;--s-light:#AB5959;">var</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> material</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> new</span><span style="--s-dark:#BD976A;--s-light:#B07D48;"> THREE</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#80A665;--s-light:#59873A;">MeshPhongMaterial</span><span style="--s-dark:#666666;--s-light:#999999;">({</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">  color</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0x220000</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">  transparent</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> true</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">  opacity</span><span style="--s-dark:#666666;--s-light:#999999;">:</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0.4</span><span style="--s-dark:#666666;--s-light:#999999;">,</span></span>
<span class="line"><span style="--s-dark:#666666;--s-light:#999999;">});</span></span>
<span class="line"><span style="--s-dark:#758575DD;--s-light:#A0ADA0;">// 通过访问属性设置</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">material</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">transparent</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> true</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span>
<span class="line"><span style="--s-dark:#BD976A;--s-light:#B07D48;">material</span><span style="--s-dark:#666666;--s-light:#999999;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">opacity</span><span style="--s-dark:#666666;--s-light:#999999;"> =</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 0.4</span><span style="--s-dark:#666666;--s-light:#999999;">;</span></span></code></pre>`,11),p=[l],g={__name:"threejs_material",setup(i){return(r,d)=>(a(),s("div",t,p))}};export{g as default};
//# sourceMappingURL=threejs_material-DPCap-pZ.js.map