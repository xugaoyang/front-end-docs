
#### commitizen+cz-customizable

1. 安装依赖
```
yarn add commitizen cz-customizable -D
```

2. package.json 配置
```
// 添加脚本
"scripts": {
  "commit": "git add . && git-cz"
}

// 添加提交关联模板配置
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}
```

3. 配置自定义提交模板

```
module.exports = {
  types: [
    {value: '✨feat',     name: '特性:    一个新的特性'},
    {value: '🐛fix',     name: '修复:    修复一个Bug'},
    {value: '📝docs',     name: '文档:    变更的只有文档'},
    {value: '💄style',     name: '格式:    空格, 分号等格式修复'},
    {value: '♻️refactor',     name: '重构:    代码重构，注意和特性、修复区分开'},
    {value: '⚡️perf',     name: '性能:    提升性能'},
    {value: '✅test',     name: '测试:    添加一个测试'},
    {value: '🔧chore',     name: '工具:    开发工具变动(构建、脚手架工具等)'},
    {value: '⏪revert',     name: '回滚:    代码回退'}  ],
  scopes: [
    {name: '模块1'},
    {name: '模块2'},
    {name: '模块3'},
    {name: '模块4'}
  ],
  // it needs to match the value for field type. Eg.: 'fix'
  /*  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },  */
  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?'  },
  allowCustomScopes: true,
  allowBreakingChanges: ['特性', '修复'],
  // limit subject length
  subjectLimit: 100
}
```

4. 使用
```
yarn commit
```

如果使用`git bash`用方向键选择不了模板，可选方案：
- 使用cmd
- 使用vscode 自带终端（等同于cmd）
- 修改git bash,git安装目录下找到`git/etc/bash.bashrc`文件，加入`alias vue='winpty vue.cmd'`，此方案只针对`vue`命令，参考：gitbash解决无法上下选择问题


#### commitlint + husky

1. 安装commitlint相关依赖
```
# Install commitlint cli and conventional config
npm install --save-dev @commitlint/{config-conventional,cli}
# For Windows:
npm install --save-dev @commitlint/config-conventional @commitlint/cli
```

```
# Configure commitlint to use conventional config
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
# or create commitlint.config.js
module.exports = {
extends: ['@commitlint/config-conventional']
}
```
2. 安装husky,来关联commitlint
```
# Install Husky v6
npm install husky --save-dev
# or
yarn add husky --dev
```
```
# Activate hooks
npx husky install
# or
yarn husky install
```

```
# Add hook
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
# or 
yarn husky add .husky/commit-msg 'yarn commitlint --edit "$1"'
```

3. 提交检查


#### commitlint-config-gitmoji

1. 安装依赖
```
npm i -D commitlint-config-gitmoji commitlint
# or
yarn add -D commitlint-config-gitmoji commitlint
```

```
# Configure commitlint to use gitmoji config
echo "module.exports = {extends: ['gitmoji']};" > .commitlintrc.js
# or create commitlint.config.js
module.exports = {
extends: ['gitmoji']
}
```
2. 问题
```
# if you meet the below error. It means that you failed to fetch the gitmojis.json file.
Failed to fetch gitmoji JSON, please refer to https://github.com/arvinxx/gitmoji-commit-workflow/tree/master/packages/plugin#fetch-error for help.

the solution is that manual downloads the gitmoji.json file and add it to node_modules/commitlint-plugin-gitmoji/lib folder
```
3. 提交检查

#### commit type
```
<type>(scope):<subject>  --> <类型>(范围):<具体描述>

eg: fix(Login): fixed no valid function
```

##### type（常用类型）

| 类型 | 描述	| gitmoji |
| :---- | :---- | :---- |
| init | 初始化 | 🎉(`:tada:`) |
| feat | 新特性功能 | ✨(`:sparkles:`) |
| fix | 修复缺陷 | 🐛(`:bug:`) |
| docs | 文档修改 | 📝(`:memo:`) |
| refactor | 代码重构 | ♻️(`:recycle:`) |
| style | 代码格式修改，类似prettier效果，非css修改 | 💄(`:lipstick:`) |
| perf | 优化内容，例如提升性能、体验等 | ⚡️(`:zap:`) |
| chore | 改变构建流程、或者添加依赖 | 🚀(`:rocket:`) |
| test | 测试相关 | ✅(`:white_check_mark:`) | 

#### git可视化工具推荐

##### sourcetree
- 官网：sourcetree
- 推荐指数：💛💛💛💛
- 缺点：分支过多特别耗内存，导致电脑卡顿
- 优点：可破解，支持中文

##### fork
- 官网：Fork
- 推荐指数：💛💛💛💛💛
- 缺点：收费，个人免费；不支持中文
- 优点：比sourcetree简洁直观，功能更多
