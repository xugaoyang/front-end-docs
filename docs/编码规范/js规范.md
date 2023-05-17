# js 规范

#### 注释

- 多行注释用 /** ... */。 
- 单行注释用 //，将单行注释放在被注释区域上面。如果注释不是在第一行，那么注释前面就空一行。 
- 所有注释开头空一格，方便阅读。eslint: spaced-comment 
- 在你的注释前使用 FIXME 或 TODO 前缀，这有助于其他开发人员快速理解你指出的需要修复的问题， 或者您建议需要实现的问题的解决方案。 这些不同于常规注释，它们是有明确含义的。FIXME：需要修复这个问题或TODO：需要实现的功能。 

#### 空格

- 缩进使用两空格。eslint: indent 
- 大括号前空一格。eslint: space-before-blocks 
- 在控制语句（if, while 等）的圆括号前空一格。在函数调用和定义时，参数列表和函数名之间不空格。 eslint: keyword-spacing 
- 用空格来隔开运算符。eslint: space-infix-ops 
- 文件结尾空一行。eslint: eol-last 
- 当出现长的方法链式调用时（>2个）用缩进。用点开头强调该行是一个方法调用，而不是一个新的语句。eslint: newline-per-chained-call no-whitespace-before-property 
- 在一个代码块后下一条语句前空一行。 
- 不要用空白行填充块。eslint: padded-blocks 
- 不要在代码之间使用多个空白行填充。eslint: no-multiple-empty-lines 
- 圆括号里不要加空格。eslint: space-in-parens 
- 方括号里不要加空格。 eslint: array-bracket-spacing 
- 花括号里加空格 。eslint: object-curly-spacing 
- 避免一行代码超过100个字符（包含空格）。注意：对于长字符串不受此规则限制，不应换行。 eslint: max-len 
- 作为语句的花括号内也要加空格 —— { 后和 } 前都需要空格。 eslint: block-spacing 
- , 前不要空格， , 后需要空格。 eslint: comma-spacing 
- 调用函数时，函数名和小括号之间不要空格。 eslint: func-call-spacing 
- 在对象的字面量属性中， key  和 value 之间要有空格。 eslint: key-spacing 
- 行末不要空格。 eslint: no-trailing-spaces 
- 避免出现多个空行。 在文件末尾只允许空一行。避免在文件开始处出现空行。eslint: no-multiple-empty-lines 

#### 逗号

- 禁止前置逗号，eslint: comma-style
```javascript
// bad
const story = [once, upon, aTime]

// good
const story = [once, upon, aTime]

// bad
const hero = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  birthYear: 1815,
  superPower: 'computers',
}

// good
const hero = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  birthYear: 1815,
  superPower: 'computers',
}
```

- 需要额外结尾逗号。eslint: comma-dangle
```javascript
// bad - 没有结尾逗号的 git diff
const hero = {
      firstName: 'Florence',
-     lastName: 'Nightingale'
+     lastName: 'Nightingale',
+     inventorOf: ['coxcomb chart', 'modern nursing']
};

// good - 有结尾逗号的 git diff
const hero = {
      firstName: 'Florence',
      lastName: 'Nightingale',
+     inventorOf: ['coxcomb chart', 'modern nursing'],
};

// bad
const hero = {
  firstName: 'Dana',
  lastName: 'Scully',
}

const heroes = ['Batman', 'Superman']

// good
const hero = {
  firstName: 'Dana',
  lastName: 'Scully',
}

const heroes = ['Batman', 'Superman']

// bad
function createHero(firstName, lastName, inventorOf) {
  // does nothing
}

// good
function createHero(firstName, lastName, inventorOf) {
  // does nothing
}

// good (注意，逗号不应出现在使用了 ... 操作符后的参数后面)
function createHero(firstName, lastName, inventorOf, ...heroArgs) {
  // does nothing
}

// bad
createHero(firstName, lastName, inventorOf)

// good
createHero(firstName, lastName, inventorOf)

// good  (注意，逗号不应出现在使用了 ... 操作符后的参数后面)
createHero(firstName, lastName, inventorOf, ...heroArgs)
```

#### 分号

- 默认在行尾不添加分号

#### 命名规范

- 避免用一个字母命名，让你的命名有意义。eslint: id-length
```javascript
// bad
function q() {
  // ...
}

// good
function query() {
  // ...
}
```

- 用小驼峰命名法来命名你的对象、函数、实例。eslint: camelcase 
```javascript
// bad
const OBJEcttsssss = {}
const this_is_my_object = {}
function c() {}

// good
const thisIsMyObject = {}
function thisIsMyFunction() {}
 ``` 

- 用大驼峰命名法来命名类。eslint: new-cap 
```javascript
// bad
function user(options) {
  this.name = options.name
}

const bad = new user({
  name: 'nope',
})

// good
class User {
  constructor(options) {
    this.name = options.name
  }
}

const good = new User({
  name: 'yup',
})
 ```

- 不要用前置或后置下划线。eslint: no-underscore-dangle 
为什么？JavaScript 没有私有属性或私有方法的概念。尽管前置下划线通常的概念上意味着私有，事实上，这些属性是完全公有的，因此这部分也是你的 API 的内容。这一概念可能会导致开发者误以为更改这个不会导致崩溃或者不需要测试。如果你想要什么东西变成私有，那就不要让它在这里出现。
  
- 不要保存引用 this，用箭头函数或 函数绑定——Function#bind
```javascript
// bad
function foo() {
  const self = this
  return function () {
    console.log(self)
  }
}

// bad
function foo() {
  const that = this
  return function () {
    console.log(that)
  }
}

// good
function foo() {
  return () => {
    console.log(this)
  }
}
```

- export default导出模块 A，则这个文件名也叫A.\*， import时候的参数也叫A。 大小写完全一致.
```javascript
// file 1 contents
class CheckBox {
  // ...
}
export default CheckBox;

// file 2 contents
export default function fortyTwo() { return 42; }

// file 3 contents
export default function insideDirectory() {}

// in some other file
// bad
import CheckBox from './checkBox'; // PascalCase import/export, camelCase filename
import FortyTwo from './FortyTwo'; // PascalCase import/filename, camelCase export
import InsideDirectory from './InsideDirectory'; // PascalCase import/filename, camelCase export

// bad
import CheckBox from './check_box'; // PascalCase import/export, snake_case filename
import forty_two from './forty_two'; // snake_case import/filename, camelCase export
import inside_directory from './inside_directory'; // snake_case import, camelCase export
import index from './inside_directory/index'; // requiring the index file explicitly
import insideDirectory from './insideDirectory/index'; // requiring the index file explicitly

// good
import CheckBox from './CheckBox'; // PascalCase export/import/filename
import fortyTwo from './fortyTwo'; // camelCase export/import/filename
import insideDirectory from './insideDirectory'; // camelCase export/import/directory name/implicit "index"
// ^ supports both insideDirectory.js and insideDirectory/index.js
```

- 当你 export-default 一个函数时，函数名用小驼峰，文件名需要和函数名一致
```javascript
function makeStyleGuide() {
  // ...
}

export default makeStyleGuide
```
- 当你 export 一个结构体/类/单例/函数库/对象 时用大驼峰
```javascript
const AirbnbStyleGuide = {
  es6: {},
}

export default AirbnbStyleGuide
```

- 简称和缩写应该全部大写或全部小写。 
  为什么？名字都是给人读的，不是为了去适应计算机算法。
  
- 你可以用全大写字母设置静态变量，他需要满足三个条件。 
  a. 导出变量；
  b. 是 const 定义的， 保证不能被改变；

1. 这个变量是可信的，他的子属性都是不能被改变的。 
为什么？这是一个附加工具，帮助开发者去辨识一个变量是不是不可变的。UPPERCASE_VARIABLES 能让开发者知道他能确信这个变量（以及他的属性）是不会变的。
  - 对于所有的 const 变量呢？ —— 这个是不必要的。大写变量不应该在同一个文件里定义并使用， 它只能用来作为导出变量。

- 那导出的对象呢？ —— 大写变量处在 export 的最高级(例如：EXPORTED_OBJECT.key) 并且他包含的所有子属性都是不可变的。（译者注：即导出的变量是全大写的，但他的属性不用大写） 
```javascript
// bad

const PRIVATE_VARIABLE = 'should not be unnecessarily uppercased within a file';

// bad

export const THING_TO_BE_CHANGED = 'should obviously not be uppercased';

// bad

export let REASSIGNABLE_VARIABLE = 'do not use let with uppercase variables';

// 允许但不够语义化

export const apiKey = 'SOMEKEY';

// 在大多数情况下更好

export const API_KEY = 'SOMEKEY';

// bad - 不必要的大写键，没有增加任何语义

export const MAPPING = {
  KEY: 'value'
};

// good

export const MAPPING = {
  key: 'value'
};
```
 