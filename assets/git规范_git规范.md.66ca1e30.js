import{_ as s,o as a,c as n,M as e}from"./chunks/framework.0a4b53e9.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"git规范/git规范.md","filePath":"git规范/git规范.md"}'),l={name:"git规范/git规范.md"},t=e(`<h4 id="commitizen-cz-customizable" tabindex="-1">commitizen+cz-customizable <a class="header-anchor" href="#commitizen-cz-customizable" aria-label="Permalink to &quot;commitizen+cz-customizable&quot;">​</a></h4><ol><li>安装依赖</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">yarn add commitizen cz-customizable -D</span></span></code></pre></div><ol start="2"><li>package.json 配置</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">// 添加脚本</span></span>
<span class="line"><span style="color:#babed8;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#babed8;">  &quot;commit&quot;: &quot;git add . &amp;&amp; git-cz&quot;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 添加提交关联模板配置</span></span>
<span class="line"><span style="color:#babed8;">&quot;config&quot;: {</span></span>
<span class="line"><span style="color:#babed8;">  &quot;commitizen&quot;: {</span></span>
<span class="line"><span style="color:#babed8;">    &quot;path&quot;: &quot;node_modules/cz-customizable&quot;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span></code></pre></div><ol start="3"><li>配置自定义提交模板</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">module.exports = {</span></span>
<span class="line"><span style="color:#babed8;">  types: [</span></span>
<span class="line"><span style="color:#babed8;">    {value: &#39;✨feat&#39;,     name: &#39;特性:    一个新的特性&#39;},</span></span>
<span class="line"><span style="color:#babed8;">    {value: &#39;🐛fix&#39;,     name: &#39;修复:    修复一个Bug&#39;},</span></span>
<span class="line"><span style="color:#babed8;">    {value: &#39;📝docs&#39;,     name: &#39;文档:    变更的只有文档&#39;},</span></span>
<span class="line"><span style="color:#babed8;">    {value: &#39;💄style&#39;,     name: &#39;格式:    空格, 分号等格式修复&#39;},</span></span>
<span class="line"><span style="color:#babed8;">    {value: &#39;♻️refactor&#39;,     name: &#39;重构:    代码重构，注意和特性、修复区分开&#39;},</span></span>
<span class="line"><span style="color:#babed8;">    {value: &#39;⚡️perf&#39;,     name: &#39;性能:    提升性能&#39;},</span></span>
<span class="line"><span style="color:#babed8;">    {value: &#39;✅test&#39;,     name: &#39;测试:    添加一个测试&#39;},</span></span>
<span class="line"><span style="color:#babed8;">    {value: &#39;🔧chore&#39;,     name: &#39;工具:    开发工具变动(构建、脚手架工具等)&#39;},</span></span>
<span class="line"><span style="color:#babed8;">    {value: &#39;⏪revert&#39;,     name: &#39;回滚:    代码回退&#39;}  ],</span></span>
<span class="line"><span style="color:#babed8;">  scopes: [</span></span>
<span class="line"><span style="color:#babed8;">    {name: &#39;模块1&#39;},</span></span>
<span class="line"><span style="color:#babed8;">    {name: &#39;模块2&#39;},</span></span>
<span class="line"><span style="color:#babed8;">    {name: &#39;模块3&#39;},</span></span>
<span class="line"><span style="color:#babed8;">    {name: &#39;模块4&#39;}</span></span>
<span class="line"><span style="color:#babed8;">  ],</span></span>
<span class="line"><span style="color:#babed8;">  // it needs to match the value for field type. Eg.: &#39;fix&#39;</span></span>
<span class="line"><span style="color:#babed8;">  /*  scopeOverrides: {</span></span>
<span class="line"><span style="color:#babed8;">    fix: [</span></span>
<span class="line"><span style="color:#babed8;">      {name: &#39;merge&#39;},</span></span>
<span class="line"><span style="color:#babed8;">      {name: &#39;style&#39;},</span></span>
<span class="line"><span style="color:#babed8;">      {name: &#39;e2eTest&#39;},</span></span>
<span class="line"><span style="color:#babed8;">      {name: &#39;unitTest&#39;}</span></span>
<span class="line"><span style="color:#babed8;">    ]</span></span>
<span class="line"><span style="color:#babed8;">  },  */</span></span>
<span class="line"><span style="color:#babed8;">  // override the messages, defaults are as follows</span></span>
<span class="line"><span style="color:#babed8;">  messages: {</span></span>
<span class="line"><span style="color:#babed8;">    type: &#39;选择一种你的提交类型:&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    scope: &#39;选择一个scope (可选):&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    // used if allowCustomScopes is true</span></span>
<span class="line"><span style="color:#babed8;">    customScope: &#39;Denote the SCOPE of this change:&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    subject: &#39;短说明:\\n&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    body: &#39;长说明，使用&quot;|&quot;换行(可选)：\\n&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    breaking: &#39;非兼容性说明 (可选):\\n&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    footer: &#39;关联关闭的issue，例如：#31, #34(可选):\\n&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    confirmCommit: &#39;确定提交说明?&#39;  },</span></span>
<span class="line"><span style="color:#babed8;">  allowCustomScopes: true,</span></span>
<span class="line"><span style="color:#babed8;">  allowBreakingChanges: [&#39;特性&#39;, &#39;修复&#39;],</span></span>
<span class="line"><span style="color:#babed8;">  // limit subject length</span></span>
<span class="line"><span style="color:#babed8;">  subjectLimit: 100</span></span>
<span class="line"><span style="color:#babed8;">}</span></span></code></pre></div><ol start="4"><li>使用</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">yarn commit</span></span></code></pre></div><p>如果使用<code>git bash</code>用方向键选择不了模板，可选方案：</p><ul><li>使用cmd</li><li>使用vscode 自带终端（等同于cmd）</li><li>修改git bash,git安装目录下找到<code>git/etc/bash.bashrc</code>文件，加入<code>alias vue=&#39;winpty vue.cmd&#39;</code>，此方案只针对<code>vue</code>命令，参考：gitbash解决无法上下选择问题</li></ul><h4 id="commitlint-husky" tabindex="-1">commitlint + husky <a class="header-anchor" href="#commitlint-husky" aria-label="Permalink to &quot;commitlint + husky&quot;">​</a></h4><ol><li>安装commitlint相关依赖</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># Install commitlint cli and conventional config</span></span>
<span class="line"><span style="color:#babed8;">npm install --save-dev @commitlint/{config-conventional,cli}</span></span>
<span class="line"><span style="color:#babed8;"># For Windows:</span></span>
<span class="line"><span style="color:#babed8;">npm install --save-dev @commitlint/config-conventional @commitlint/cli</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># Configure commitlint to use conventional config</span></span>
<span class="line"><span style="color:#babed8;">echo &quot;module.exports = {extends: [&#39;@commitlint/config-conventional&#39;]}&quot; &gt; commitlint.config.js</span></span>
<span class="line"><span style="color:#babed8;"># or create commitlint.config.js</span></span>
<span class="line"><span style="color:#babed8;">module.exports = {</span></span>
<span class="line"><span style="color:#babed8;">extends: [&#39;@commitlint/config-conventional&#39;]</span></span>
<span class="line"><span style="color:#babed8;">}</span></span></code></pre></div><ol start="2"><li>安装husky,来关联commitlint</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># Install Husky v6</span></span>
<span class="line"><span style="color:#babed8;">npm install husky --save-dev</span></span>
<span class="line"><span style="color:#babed8;"># or</span></span>
<span class="line"><span style="color:#babed8;">yarn add husky --dev</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># Activate hooks</span></span>
<span class="line"><span style="color:#babed8;">npx husky install</span></span>
<span class="line"><span style="color:#babed8;"># or</span></span>
<span class="line"><span style="color:#babed8;">yarn husky install</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># Add hook</span></span>
<span class="line"><span style="color:#babed8;">npx husky add .husky/commit-msg &#39;npx --no -- commitlint --edit &quot;$1&quot;&#39;</span></span>
<span class="line"><span style="color:#babed8;"># or </span></span>
<span class="line"><span style="color:#babed8;">yarn husky add .husky/commit-msg &#39;yarn commitlint --edit &quot;$1&quot;&#39;</span></span></code></pre></div><ol start="3"><li>提交检查</li></ol><h4 id="commitlint-config-gitmoji" tabindex="-1">commitlint-config-gitmoji <a class="header-anchor" href="#commitlint-config-gitmoji" aria-label="Permalink to &quot;commitlint-config-gitmoji&quot;">​</a></h4><ol><li>安装依赖</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">npm i -D commitlint-config-gitmoji commitlint</span></span>
<span class="line"><span style="color:#babed8;"># or</span></span>
<span class="line"><span style="color:#babed8;">yarn add -D commitlint-config-gitmoji commitlint</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># Configure commitlint to use gitmoji config</span></span>
<span class="line"><span style="color:#babed8;">echo &quot;module.exports = {extends: [&#39;gitmoji&#39;]};&quot; &gt; .commitlintrc.js</span></span>
<span class="line"><span style="color:#babed8;"># or create commitlint.config.js</span></span>
<span class="line"><span style="color:#babed8;">module.exports = {</span></span>
<span class="line"><span style="color:#babed8;">extends: [&#39;gitmoji&#39;]</span></span>
<span class="line"><span style="color:#babed8;">}</span></span></code></pre></div><ol start="2"><li>问题</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># if you meet the below error. It means that you failed to fetch the gitmojis.json file.</span></span>
<span class="line"><span style="color:#babed8;">Failed to fetch gitmoji JSON, please refer to https://github.com/arvinxx/gitmoji-commit-workflow/tree/master/packages/plugin#fetch-error for help.</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">the solution is that manual downloads the gitmoji.json file and add it to node_modules/commitlint-plugin-gitmoji/lib folder</span></span></code></pre></div><ol start="3"><li>提交检查</li></ol><h4 id="commit-type" tabindex="-1">commit type <a class="header-anchor" href="#commit-type" aria-label="Permalink to &quot;commit type&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;type&gt;(scope):&lt;subject&gt;  --&gt; &lt;类型&gt;(范围):&lt;具体描述&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">eg: fix(Login): fixed no valid function</span></span></code></pre></div><h5 id="type-常用类型" tabindex="-1">type（常用类型） <a class="header-anchor" href="#type-常用类型" aria-label="Permalink to &quot;type（常用类型）&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th><th style="text-align:left;">gitmoji</th></tr></thead><tbody><tr><td style="text-align:left;">init</td><td style="text-align:left;">初始化</td><td style="text-align:left;">🎉(<code>:tada:</code>)</td></tr><tr><td style="text-align:left;">feat</td><td style="text-align:left;">新特性功能</td><td style="text-align:left;">✨(<code>:sparkles:</code>)</td></tr><tr><td style="text-align:left;">fix</td><td style="text-align:left;">修复缺陷</td><td style="text-align:left;">🐛(<code>:bug:</code>)</td></tr><tr><td style="text-align:left;">docs</td><td style="text-align:left;">文档修改</td><td style="text-align:left;">📝(<code>:memo:</code>)</td></tr><tr><td style="text-align:left;">refactor</td><td style="text-align:left;">代码重构</td><td style="text-align:left;">♻️(<code>:recycle:</code>)</td></tr><tr><td style="text-align:left;">style</td><td style="text-align:left;">代码格式修改，类似prettier效果，非css修改</td><td style="text-align:left;">💄(<code>:lipstick:</code>)</td></tr><tr><td style="text-align:left;">perf</td><td style="text-align:left;">优化内容，例如提升性能、体验等</td><td style="text-align:left;">⚡️(<code>:zap:</code>)</td></tr><tr><td style="text-align:left;">chore</td><td style="text-align:left;">改变构建流程、或者添加依赖</td><td style="text-align:left;">🚀(<code>:rocket:</code>)</td></tr><tr><td style="text-align:left;">test</td><td style="text-align:left;">测试相关</td><td style="text-align:left;">✅(<code>:white_check_mark:</code>)</td></tr></tbody></table><h4 id="git可视化工具推荐" tabindex="-1">git可视化工具推荐 <a class="header-anchor" href="#git可视化工具推荐" aria-label="Permalink to &quot;git可视化工具推荐&quot;">​</a></h4><h5 id="sourcetree" tabindex="-1">sourcetree <a class="header-anchor" href="#sourcetree" aria-label="Permalink to &quot;sourcetree&quot;">​</a></h5><ul><li>官网：sourcetree</li><li>推荐指数：💛💛💛💛</li><li>缺点：分支过多特别耗内存，导致电脑卡顿</li><li>优点：可破解，支持中文</li></ul><h5 id="fork" tabindex="-1">fork <a class="header-anchor" href="#fork" aria-label="Permalink to &quot;fork&quot;">​</a></h5><ul><li>官网：Fork</li><li>推荐指数：💛💛💛💛💛</li><li>缺点：收费，个人免费；不支持中文</li><li>优点：比sourcetree简洁直观，功能更多</li></ul>`,36),o=[t];function p(i,c,d,r,b,m){return a(),n("div",null,o)}const g=s(l,[["render",p]]);export{u as __pageData,g as default};
