import{c as s,o as a,f as n}from"./app-Bm1F-R0U.js";const l={class:"prose m-auto slide-enter-content"},p=n(`<h1 id="使用-github-actions-自动同步服务器" tabindex="-1">使用 github actions 自动同步服务器 <a class="header-anchor" href="#使用-github-actions-自动同步服务器" aria-hidden="true">#</a></h1><p>在 github 中设置 secrets，步骤 <strong>Settings ==&gt; Secrets and variables ==&gt; Actions</strong></p><p>需要添加几个参数</p><ul><li>DEPLOY_KEY：SSH 私钥</li><li>SERVER_IP：服务器的host名</li><li>USERNAME：服务器登录名</li><li>SERVER_DESTINATION：部署到目标文件夹</li></ul><pre class="shiki shiki-themes vitesse-dark vitesse-light" style="--s-dark:#dbd7caee;--s-light:#393a34;--s-dark-bg:#121212;--s-light-bg:#ffffff;" tabindex="0"><code class="language-bash"><span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">name:</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> note</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> build</span></span>
<span class="line"><span style="--s-dark:#758575DD;--s-light:#A0ADA0;"># 触发workflow的条件</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">on:</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">  push:</span></span>
<span class="line"><span style="--s-dark:#758575DD;--s-light:#A0ADA0;">    # 只有master分支发生push事件时，才会触发workflow</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">    branches:</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">      -</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> main</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">    paths-ignore:</span><span style="--s-dark:#758575DD;--s-light:#A0ADA0;"> # 下列文件的变更不触发部署，可以自行添加</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">      -</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> README.md</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">      -</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> LICENSE</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">  pull_request:</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">    branches:</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;"> [main]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#758575DD;--s-light:#A0ADA0;"># jobs表示执行的一项或多项任务</span></span>
<span class="line"><span style="--s-dark:#B8A965;--s-light:#998418;">jobs</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">:</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">  deploy:</span><span style="--s-dark:#758575DD;--s-light:#A0ADA0;"> # 任务的job_id，具体名称自定义，这里build代表打包</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">    runs-on:</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> ubuntu-latest</span><span style="--s-dark:#758575DD;--s-light:#A0ADA0;"> # runs-on字段指定运行所需要的虚拟机环境。注意：这个是必填字段</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">    steps:</span></span>
<span class="line"><span style="--s-dark:#758575DD;--s-light:#A0ADA0;">      # 切换分支</span></span>
<span class="line"><span style="--s-dark:#758575DD;--s-light:#A0ADA0;">      # - name: Checkout</span></span>
<span class="line"><span style="--s-dark:#758575DD;--s-light:#A0ADA0;">      #   uses: actions/checkout@main</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#758575DD;--s-light:#A0ADA0;">      # git submodule</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">      -</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> uses:</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> actions/checkout@v2</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#758575DD;--s-light:#A0ADA0;">      # node</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">      -</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> name:</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> use</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> Node.js</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 16</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">        uses:</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> actions/setup-node@v1</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">          node-version:</span><span style="--s-dark:#4C9A91;--s-light:#2F798A;"> 16</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#758575DD;--s-light:#A0ADA0;">      # npm install</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">      -</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> name:</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> npm</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> install</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> and</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> build</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">        run:</span><span style="--s-dark:#CB7676;--s-light:#AB5959;"> |</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">          npm</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> install</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">          npm</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> run</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> build</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">        env:</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">          CI:</span><span style="--s-dark:#4D9375;--s-light:#1E754F;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">      -</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> name:</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> deploy</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> to</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> server</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">        uses:</span><span style="--s-dark:#C98A7D;--s-light:#B56959;"> AEnterprise/rsync-deploy@v1.0.2</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">        env:</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">          DEPLOY_KEY:</span><span style="--s-dark:#666666;--s-light:#999999;"> \${</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">{ </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">secrets</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">DEPLOY_KEY</span><span style="--s-dark:#666666;--s-light:#999999;"> }</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">}</span><span style="--s-dark:#758575DD;--s-light:#A0ADA0;">  # SSH 私钥</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">          ARGS:</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">-e -c -r --delete</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">          SERVER_PORT:</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &#39;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">22</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&#39;</span><span style="--s-dark:#758575DD;--s-light:#A0ADA0;"> # SSH端口</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">          FOLDER:</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;"> &quot;</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">./dist</span><span style="--s-dark:#C98A7D99;--s-light:#B5695999;">&quot;</span><span style="--s-dark:#758575DD;--s-light:#A0ADA0;"> # 要推送的文件夹，路径相对于代码仓库的根目录</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">          SERVER_IP:</span><span style="--s-dark:#666666;--s-light:#999999;"> \${</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">{ </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">secrets</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">SERVER_IP</span><span style="--s-dark:#666666;--s-light:#999999;"> }</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">}</span><span style="--s-dark:#758575DD;--s-light:#A0ADA0;">  # 服务器的host名</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">          USERNAME:</span><span style="--s-dark:#666666;--s-light:#999999;"> \${</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">{ </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">secrets</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">USER_NAME</span><span style="--s-dark:#666666;--s-light:#999999;"> }</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">}</span><span style="--s-dark:#758575DD;--s-light:#A0ADA0;"> # 服务器登录名</span></span>
<span class="line"><span style="--s-dark:#80A665;--s-light:#59873A;">          SERVER_DESTINATION:</span><span style="--s-dark:#666666;--s-light:#999999;"> \${</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">{ </span><span style="--s-dark:#BD976A;--s-light:#B07D48;">secrets</span><span style="--s-dark:#DBD7CAEE;--s-light:#393A34;">.</span><span style="--s-dark:#BD976A;--s-light:#B07D48;">SERVER_DESTINATION</span><span style="--s-dark:#666666;--s-light:#999999;"> }</span><span style="--s-dark:#C98A7D;--s-light:#B56959;">}</span><span style="--s-dark:#758575DD;--s-light:#A0ADA0;"> # 部署到目标文件夹</span></span></code></pre>`,5),t=[p],d={__name:"github_actions",setup(e){return(i,A)=>(a(),s("div",l,t))}};export{d as default};
//# sourceMappingURL=github_actions-CgdcjN_K.js.map