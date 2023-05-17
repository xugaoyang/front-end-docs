# css规范

## BEM
```txt
B--块（block）
E--元素（element）
M--修饰符（modifier）
（-）中划线：连字符，表示某个块或者某个子元素的多单词之间的连接记号
（__）双下划线：连接块和块的子元素
（_）单下划线：描述块或块的子元素的状态
```

### 命名模式
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
### 好处
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

### 使用场景
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

### 推荐风格

```css
.form { }
.form--theme-xmas { }
.form--simple { }
.form__input { }
.form__submit { }
.form__submit--disabled { }
```

```html
//对应的HTML结构如下：
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>
```

## ACSS

Atomic CSS -- 原子化css,一种 CSS 的架构方式，它倾向于小巧且用途单一的 class，并且会以视觉效果进行命名.

```css

.m-100 { margin: 25rem; }
.m-3 { margin: 0.75rem; }
.p-5 { padding: 1.25rem; }

```
```html
<div class="m-100">
  <button class="m-3">
    <icon class="p-5" />
      My Button
  </button>
</div>
```


### acss公共库参考
- tailwindcss【推荐指数：💛💛💛】
- windicss【推荐指数：💛💛💛💛】
- unocss【推荐指数：💛💛💛💛💛,目前只支持vite】
