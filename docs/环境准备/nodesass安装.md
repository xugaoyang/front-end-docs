# node-sass离线安装


## 配置npm/yarn仓库
npm config set registry https://xxx


## 配置环境变量（ __我的电脑-属性-高级系统设置-高级-环境变量__ ）
- 下载win32-x64-64_binding.node文件（https://github.com/sass/node-sass/releases 或者见附件）
- 在用户变量里配置SASS_BINARY_PATH变量，变量值填入下载文件路径(eg:C:/win32-x64-64_binding.node,配置时的斜杠需要反过来)
- 在系统变量PATH的变量值中添加下载文件路径(同上)
- 重新npm install,如果还不成功说明环境变量未生效，重启电脑后再次npm install即可。
