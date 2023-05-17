# vue规范

- 组件名为多个单词
```js
// bad
Vue.component('todo', {
  // ...
})

export default {
  name: 'Todo',
  // ...
}

// good
Vue.component('todo-item', {
  // ...
})

export default {
  name: 'TodoItem',
  // ...
}
```

- 组件数据， 组件的data必须是一个函数
```javascript
// bad
Vue.component('some-comp', {
  data: {
    foo: 'bar'
  }
})

export default {
  data: {
    foo: 'bar'
  }
}

// good
Vue.component('some-comp', {
  data: function () {
    return {
      foo: 'bar'
    }
  }
})

export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}
```
- prop定义，尽量详细，至少需要指定类型
```js
// bad
props: ['status']

// good
props: {
  status: String
}

// better
props: {
  status: {
    type: String,
      required: true,
      validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```
- v-for设置键值，总是用 key 配合 v-for
```js
// bad
<ul>
  <li v-for="todo in todos">
  {{ todo.text }}
	</li>
</ul>

  // good
<ul>
  <li
		v-for="todo in todos"
    :key="todo.id"
  >
  	{{ todo.text }}
	</li>
</ul>
```

- v-for和v-if避免使用，永远不要把 v-if 和 v-for 同时用在同一个元素上
```js
// bad
<ul>
  <li
		v-for="user in users"
		v-if="user.isActive"
		:key="user.id"
  >
  	{{ user.name }}
	</li>
</ul>

<ul>
  <li
		v-for="user in users"
		v-if="shouldShowUsers"
		:key="user.id"
  >
  {{ user.name }}
	</li>
</ul>

// good
// users --> activeUsers,用计算属性筛一次，过滤出显示条件的数据
<ul>
  <li
		v-for="user in activeUsers"
		:key="user.id"
  >
  	{{ user.name }}
	</li>
</ul>

<ul v-if="shouldShowUsers">
  <li
		v-for="user in users"
		:key="user.id"
  >
  	{{ user.name }}
	</li>
</ul>
```
- 组件样式作用域， scoped/module/BEM
```js
// bad
<template>
  <button class="btn btn-close">X</button>
</template>

<style>
  .btn-close {
  	background-color: red;
	}
</style>

// good
<template>
  <button class="button button-close">X</button>
</template>

<!-- 使用 `scoped` attribute -->
<style scoped>
  .button {
  border: none;
  border-radius: 2px;
	}

  .button-close {
    background-color: red;
  }
</style>

<template>
	<button :class="[$style.button, $style.buttonClose]">X</button>
</template>

<!-- 使用 CSS Modules -->
<style module>
.button {
  border: none;
  border-radius: 2px;
}

.buttonClose {
  background-color: red;
}
</style>

<template>
	<button class="c-Button c-Button--close">X</button>
</template>

<!-- 使用 BEM 约定 -->
<style>
.c-Button {
  border: none;
  border-radius: 2px;
}

.c-Button--close {
  background-color: red;
}
</style>
```
- 单文件组件文件名首字母大写
```js
// bad
components/
  | - myComponent

// good
components/
  | - MyComponent
```

- 紧密耦合的组件名
```js
// bad
components/
  |- TodoList.vue
  |- TodoItem.vue
  |- TodoButton.vue

// good
components/
  |- TodoList.vue
  |- TodoListItem.vue
  |- TodoListItemButton.vue
```
- 完整单词的组件名
```js
// bad
components/
  |- SdSettings.vue

// good
components/
  |- StudentDashboardSettings.vue
```
- 在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。
```js
// bad
props: {
  'greeting-text': String
}
<WelcomeMessage greetingText="hi"/>

// good
props: {
  greetingText: String
}
<WelcomeMessage greeting-text="hi"/>
```
- 多个 attribute 的元素应该分多行撰写，每个 attribute 一行
```js
// bad
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo">

<MyComponent foo="a" bar="b" baz="c"/>

// good
<img
	src="https://vuejs.org/images/logo.png"
	alt="Vue Logo"
>

<MyComponent
	foo="a"
	bar="b"
	baz="c"
/>
```