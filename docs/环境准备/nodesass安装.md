### 准备

#### 针对项目（前提win32-x64-64_binding.node放在C盘根目录）
##### .yarnrc || .npmrc(npm下面配置是=)
registry 'https://nexus.wiz.top/repository/npm-wizgroup/'

SASS_BINARY_PATH 'C:/win32-x64-64_binding.node'


#### 针对命令行
##### 配置npm/yarn仓库
npm config set registry https://nexus.wiz.top/repository/npm-wizgroup/


##### 配置环境变量（ __我的电脑-属性-高级系统设置-高级-环境变量__ ）
- 下载win32-x64-64_binding.node文件（https://github.com/sass/node-sass/releases 或者见附件）
- 在用户变量里配置SASS_BINARY_PATH变量，变量值填入下载文件路径(eg:C:/win32-x64-64_binding.node,配置时的斜杠需要反过来)
- 在系统变量PATH的变量值中添加下载文件路径(同上)
- 重新npm install,如果还不成功说明环境变量未生效，重启电脑后再次npm install即可。

----------------------
 __2020/08/12更新：__ 
根据node版本去调整本地node-sass的离线包版本，由于最近有同事拉代码起不来项目，而且node版本升级到了12+以上，本地的node-sass包也需要更新到对应版本，项目才能运行，版本对照如下图：
![图片描述](/tfl/captures/2020-08/tapd_37492354_base64_1597201647_27.png)

目前node的稳定版本是12.18.x,故对应win32-x64-72_binding.node

下载见地址（或附件）：
https://github.com/sass/node-sass/releases 

 !!#ff0000 注意：更新包之后，环境变量也同步更新!! 