import{_ as s,o as a,c as n,O as e}from"./chunks/framework.865a7308.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"框架优化/页面自刷.md","filePath":"框架优化/页面自刷.md"}'),l={name:"框架优化/页面自刷.md"},o=e(`<h3 id="初衷" tabindex="-1">初衷 <a class="header-anchor" href="#初衷" aria-label="Permalink to &quot;初衷&quot;">​</a></h3><p>目前的大部分前端项目在部署构建之后经常会有内容不显示最新修改的情况，导致每次现场都需要手动强制刷新页面清除缓存，在某些项目上体验非常不好。</p><h3 id="目标" tabindex="-1">目标 <a class="header-anchor" href="#目标" aria-label="Permalink to &quot;目标&quot;">​</a></h3><p>前端项目新打开项目页面能够自动刷新至部署版本；</p><h3 id="调试" tabindex="-1">调试 <a class="header-anchor" href="#调试" aria-label="Permalink to &quot;调试&quot;">​</a></h3><ul><li>vue项目输出的css和js文件名都默认加了contenthash【name.contenthash.js(css)】,多次编译的文件名是不同的，所以也不会有缓存问题。目前的问题是，服务端index.html有缓存，所以需要在服务端配置不让缓存index.html【!!#ff0000 目前鹏锐项目大部分现场并没有nginx代理，所以此方法并不适用，(现场能否支持待定)!!】</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// no-cache 浏览器会缓存，刷新页面或重新打开时，会请求服务器获取资源，响应200会获取改动的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">// no-store 浏览器不缓存，刷新页面需要重新下载资源</span></span>
<span class="line"><span style="color:#A6ACCD;">// nginx配置如下：</span></span>
<span class="line"><span style="color:#A6ACCD;">location = / {</span></span>
<span class="line"><span style="color:#A6ACCD;">	add_header cache-control &quot;no-cache, no-store&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><ul><li>如果服务端不能配置，那只能前端判断同一项目不同版本，然后自动刷新重载，目前考虑用版本号来控制，即package.json里面的version属性</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// App.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">import packageJson from &#39;../package.json&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">async created() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const currentVersion = packageJson.version</span></span>
<span class="line"><span style="color:#A6ACCD;">    const oldVersion = await localforage.getItem(&#39;version&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (currentVersion !== oldVersion) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        localforage.setItem(&#39;version&#39;, currentVersion)</span></span>
<span class="line"><span style="color:#A6ACCD;">        window.location.reload()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,9),t=[o];function p(c,r,i,d,C,A){return a(),n("div",null,t)}const u=s(l,[["render",p]]);export{_ as __pageData,u as default};
