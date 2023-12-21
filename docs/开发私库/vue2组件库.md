# wiz-components

> element-ui+vue 前端组件包

## 组件结构

```js
// 结构说明
├─packages                // 组件父级文件夹
│  ├─wiz-xx               // 具体组件文件夹
│  │  ├─index.vue         // 组件
│  │  ├─index.js          // 导出入口
│  ├─element-import.js    // element-ui 组件引入
│  ├─index.js             // 导出总入口
```

## 开发组件

1. `src/packages`下面新建组件文件夹，文件夹名及组件名，按<font color='orange'>小写中横线</font>命名，比如`wiz-button`
2. 组件开发，默认文件为`index.vue`,编写对应的组件逻辑
3. `index.vue`组件必须携带`name`字段，命名必须以`wiz`开头的中横线书写

```js
// eg
export default {
  name: 'wiz-button',
}
```

4. 导出处理

```js
// 单独导出处理
import wizComponentName from './index.vue'

wizComponentName.install = (Vue) => {
  Vue.component(wizComponentName.name, wizComponentName)
}

export default wizComponentName
```

5. 总导出入口添加代码

```js
// pacakges/index.js

import wizComponentName from './wiz-component-name'

const components = { otherComponents, wizComponentName }
```

## 正常使用

1. 全局加载

```js
// main.js
import wizComps from '@wiz-core/compts/lib/index'
import '@wiz-core/compts/lib/index/style.css'
Vue.use(wizComps)

// xx.vue直接引用
<wiz-button />
```

2. 按需加载
  - 项目需要添加`babel-plugin-component`,实现按需加载，达到减小项目体积的目的
```bash
yarn add babel-plugin-component -D
```

```js
// 配置babel.config.js
{
  ...
  plugins: [
    [
      "component",
      {
        libraryName: '@wiz-core/compts',
        style: (name) => {
          return `${name}/style.css`
        }
      }
    ]
  ]

}
```

  - 按需引入如下
```vue
<template>
  <!-- wizButton -->
  <wiz-button @clickEvent="clicked()"></wiz-button>
  <!-- wizUploadFile -->
  <wiz-upload-file
    v-dialogDrag
    @refreshList="searchList()"
    v-if="showUploadExcelDialog"
    :uploadFileProps="uploadFileProps"
    @exportTemplate="exportTemplate"
    @importTemplate="importTemplate"
    :isExcel="true"
  ></wiz-upload-file>
</template>

<script>

import { wizButton, wizUploadFile } from '@wiz-core/compts'

export default {
  name: 'xx',
  components: {
    wizButton,
    wizUploadFile,
  },
}
</script>
```
