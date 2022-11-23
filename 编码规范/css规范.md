#### 1.BEM
```text
B--块（block）
E--元素（element）
M--修饰符（modifier）
（-）中划线：连字符，表示某个块或者某个子元素的多单词之间的连接记号
（__）双下划线：连接块和块的子元素
（_）单下划线：描述块或块的子元素的状态
```

##### 1.1 命名模式
```css
.block {} // 更高级别的抽象或组件
.block__element {} // .block 的后代，用于形成一个完整的 .block 的整体
.block--modifier {} // .block 的不同状态或不同版本
```
使用两个连字符和下划线而不是一个，是为了让你自己的块可以用单个连字符来界定
```css
.sub-block__element {}

.sub-block--modifier {}
```
##### 1.2 好处
可以获得更多的描述和更加清晰的结构，从其名字可以知道标记含义，通过查看代码的class就能知道元素之间的关联

```html
<!-- 此写法能知道单个元素的意义，无法明确真实层级关系，而且没有局部作用域，可能会造成样式污染 -->
<div class="article">
  <button class="button-primary"></button>
  <button class="button-success"></button>
</div>
```

```html
<!-- 模块层级关系简单清晰，而且 css 书写上也不必作过多的层级选择 -->
<div class="article">
  <button class="article__button--primary"></button>
  <button class="article__button--success"></button>
</div>
```

##### 1.3 使用场景
- 不是每个地方都需要使用BEM命名方式，需要明确关联性模块关系时，应使用BEM

```css
// 比如基础公共样式，就没有必要时用BEM
.hide {display: none!important}
```

- BEM命名方式长且难看，相比BEM的优势，客观看待
- 使用sass/less等预处理器来编写css,利用其语言特性编写更简单清晰

```css
// sass为例
.article {
  width: 1920px;
  &__button {
    padding: 10px;
    &--primary{background:blue;}
    &--success{background:green;}
  }
}
```

- 避免过长嵌套，例如.block__el1__el2,层级最好不要超过4级

##### 1.4 推荐风格

```html
.form { }
.form--theme-xmas { }
.form--simple { }
.form__input { }
.form__submit { }
.form__submit--disabled { }

//对应的HTML结构如下：
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>
```

#### 2.ACSS

Atomic CSS -- 原子化css,一种 CSS 的架构方式，它倾向于小巧且用途单一的 class，并且会以视觉效果进行命名.

```css
<style>
.m-100 { margin: 25rem; }
.m-3 { margin: 0.75rem; }
.p-5 { padding: 1.25rem; }
</style>
<div class="m-100">
  <button class="m-3">
    <icon class="p-5" />
      My Button
  </button>
</div>
```

#### 3.stylelint代码检查
> 参考：stylelint官网,stylelint规则,stylelint中文文档,stylelint-issue#5632

##### 3.1 安装步骤

```cmd
pnpm add postcss postcss-scss postcss-html stylelint stylelint-config-prettier stylelint-config-rational-order stylelint-config-standard stylelint-config-recommended-vue stylelint-config-recommended-scss stylelint-order -D
```

- postcss：转换css代码工具
- postcss-scss：识别sass语法
- postcss-html：识别html/vue中<style></style>标签中的样式
- stylelint：css样式lint工具
- stylelint-config-prettier：关闭所有不必要或可能与prettier冲突的规则
- stylelint-config-rational-order：stylelint配置，通过按照顺序分组在一起来排序相关的属性声明
- stylelint-config-standard：stylelint的标准可共享配置规则
- stylelint-config-recommended-vue：lint .vue文件的样式配置
- stylelint-config-recommended-scss：sass的推荐可共享配置规则
- stylelint-order：指定样式书写的顺序，在.stylelintrc.js中order/properties-order指定顺序

##### 3.2 安装问题

- TypeError: Class extends value undefined is not a constructor or null at Object...
需要配置文件对应的customSyntax，参考issue#5791

- Cannot resolve custom syntax module "postcss-scss"
依赖包所依赖的postcss版本不一致，需要在package.json锁定子依赖版本，参考issue#5632

##### 3.3 配置文件参考
```javascript
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue'
  ],
  plugins: ['stylelint-order'],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html'
    }
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml'
  ],
  rules: {
    'number-leading-zero': 'always',
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'font-size',
      'font-family',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition'
    ]
  }
}
```

##### 3.4vscode配置
```json
// 保存自动修复
"editor.codeActionsOnSave": {
  "source.fixAll.stylelint": true 
},
// 校验文件类型
"stylelint.validate": [
  "css",
  "less",
  "postcss",
  "scss",
  "vue",
  "sass"
],
```

#### 4.acss公共库参考
##### 4.1 tailwindcss【推荐指数：💛💛💛】

##### 4.2 windicss【推荐指数：💛💛💛💛】

##### 4.3 unocss【推荐指数：💛💛💛💛💛,目前只支持vite】
