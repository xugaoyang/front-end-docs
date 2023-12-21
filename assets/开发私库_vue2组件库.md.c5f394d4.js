import{_ as p,A as o,o as e,c as t,v as s,a as n,C as c,y as r,M as a}from"./chunks/framework.0a4b53e9.js";const b=JSON.parse('{"title":"wiz-components","description":"","frontmatter":{},"headers":[],"relativePath":"开发私库/vue2组件库.md","filePath":"开发私库/vue2组件库.md"}'),D={name:"开发私库/vue2组件库.md"},y=a(`<h1 id="wiz-components" tabindex="-1">wiz-components <a class="header-anchor" href="#wiz-components" aria-label="Permalink to &quot;wiz-components&quot;">​</a></h1><blockquote><p>element-ui+vue 前端组件包</p></blockquote><h2 id="组件结构" tabindex="-1">组件结构 <a class="header-anchor" href="#组件结构" aria-label="Permalink to &quot;组件结构&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 结构说明</span></span>
<span class="line"><span style="color:#BABED8;">├─packages                </span><span style="color:#676E95;font-style:italic;">// 组件父级文件夹</span></span>
<span class="line"><span style="color:#BABED8;">│  ├─wiz</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">xx               </span><span style="color:#676E95;font-style:italic;">// 具体组件文件夹</span></span>
<span class="line"><span style="color:#BABED8;">│  │  ├─index</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">vue         </span><span style="color:#676E95;font-style:italic;">// 组件</span></span>
<span class="line"><span style="color:#BABED8;">│  │  ├─index</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">js          </span><span style="color:#676E95;font-style:italic;">// 导出入口</span></span>
<span class="line"><span style="color:#BABED8;">│  ├─element</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">import</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">js    </span><span style="color:#676E95;font-style:italic;">// element-ui 组件引入</span></span>
<span class="line"><span style="color:#BABED8;">│  ├─index</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">js             </span><span style="color:#676E95;font-style:italic;">// 导出总入口</span></span></code></pre></div><h2 id="开发组件" tabindex="-1">开发组件 <a class="header-anchor" href="#开发组件" aria-label="Permalink to &quot;开发组件&quot;">​</a></h2>`,5),i=s("code",null,"src/packages",-1),F=s("code",null,"wiz-button",-1),B=s("li",null,[n("组件开发，默认文件为"),s("code",null,"index.vue"),n(",编写对应的组件逻辑")],-1),E=s("li",null,[s("code",null,"index.vue"),n("组件必须携带"),s("code",null,"name"),n("字段，命名必须以"),s("code",null,"wiz"),n("开头的中横线书写")],-1),u=a(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// eg</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">wiz-button</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ol start="4"><li>导出处理</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 单独导出处理</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> wizComponentName </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./index.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">wizComponentName</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">install</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">Vue</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">wizComponentName</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">name</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">wizComponentName</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> wizComponentName</span></span></code></pre></div><ol start="5"><li>总导出入口添加代码</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// pacakges/index.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> wizComponentName </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./wiz-component-name</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> components </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> otherComponents</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> wizComponentName </span><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="正常使用" tabindex="-1">正常使用 <a class="header-anchor" href="#正常使用" aria-label="Permalink to &quot;正常使用&quot;">​</a></h2><ol><li>全局加载</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// main.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> wizComps </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@wiz-core/compts/lib/index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@wiz-core/compts/lib/index/style.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#BABED8;">(wizComps)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// xx.vue直接引用</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">wiz-button</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><ol start="2"><li>按需加载</li></ol><ul><li>项目需要添加<code>babel-plugin-component</code>,实现按需加载，达到减小项目体积的目的</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">babel-plugin-component</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-D</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 配置babel.config.js</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">    [</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">component</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        libraryName</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@wiz-core/compts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">style</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#BABED8;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/style.css</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    ]</span></span>
<span class="line"><span style="color:#F07178;">  ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li>按需引入如下</li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- wizButton --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wiz-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@clickEvent</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">clicked()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">wiz-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- wizUploadFile --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wiz-upload-file</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-dialogDrag</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">@refreshList</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">searchList()</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">showUploadExcelDialog</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:uploadFileProps</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">uploadFileProps</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">@exportTemplate</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">exportTemplate</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">@importTemplate</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">importTemplate</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:isExcel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;&lt;/</span><span style="color:#F07178;">wiz-upload-file</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">wizButton</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">wizUploadFile</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@wiz-core/compts</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    wizButton</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    wizUploadFile</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,14);function d(m,A,C,h,f,g){const l=o("font");return e(),t("div",null,[y,s("ol",null,[s("li",null,[i,n("下面新建组件文件夹，文件夹名及组件名，按"),c(l,{color:"orange"},{default:r(()=>[n("小写中横线")]),_:1}),n("命名，比如"),F]),B,E]),u])}const w=p(D,[["render",d]]);export{b as __pageData,w as default};
