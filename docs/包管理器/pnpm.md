# pnpm
> pnpm-速度快、节省磁盘空间的软件包管理器

## 优势

1. 快
2. 高效
3. 支持单体仓库
4. 权限严格

## 安装

1. 使用npm
```bash
npm install -g pnpm
```

2. 管理依赖
    1. pnpm add
     ```javascript
     pnpm add <pkg>  // 安装至dependencies

     pnpm add -D <pkg> // 安装至devDependencies

     pnpm add -O <pkg> // 安装至optionalDependencies

     pnpm add -g <pkg> // 安装至全局
     ```

   2. pnpm install
    ```javascript
    pnpm install // same with npm、yarn

    ```

   3. pnpm update 
    ```javascript
    pnpm up

    pnpm up --latest

    pnpm up <pkg>@<version>
    ```

   4. pnpm remove
    ```javascript
    pnpm remove/rm/uninstall/un
    ```

   5. pnpm link
    ```javascript
    pnpm link // 让当前目录下的软件包在系统范围内或其它位置都可访问
    ```

   6. pnpm unlink
    ```javascript
    pnpm unlink // 断开某个软件包在全局范围内的链接

    ```

## pnpm验证安装成功
```
pnpm -v
```

## node版本切换
```bash
# 使用管理员运行cmd或者powershell
pnpm env use -g latest

# node安装路径,假设默认安装的是16.18.0版本
D:\software\nodejs

# pnpm 下载node路径
C:\Users\yann\AppData\Local\pnpm\nodejs

# 第一次查看node版本号发现并未切换需要手动修改系统node环境变量路径
node -v // 16.18.0

# 修改path环境变量后 --> C:\Users\yann\AppData\Local\pnpm\nodejs\xxx\
node -v // 最新版本号
```

修改node路径如下图：<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/25735864/1665644877941-7b59ffcf-88ff-4a00-8e42-40a9c9f7ebfd.png#clientId=u79c70ef7-403d-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=492&id=uc8460414&margin=%5Bobject%20Object%5D&name=image.png&originHeight=615&originWidth=1159&originalType=binary&ratio=1&rotation=0&showTitle=false&size=266067&status=error&style=none&taskId=u0249b094-5bc8-485b-8771-85bcbc3fcd1&title=&width=927.2)

## 前端项目测试

1. 移除node_modules
2. 用pnpm安装依赖
```bash
pnpm install
```
如果出现报错：【 ERR_PNPM_PEER_DEP_ISSUES  Unmet peer dependencies】

   - 项目根目录添加.npmrc配置或者直接命令 npm config set strict-peer-dependencies=false
    ```javascript
    strict-peer-dependencies=false
    // 或者
    auto-install-peers=true
    ```

   - 手动安装提示的依赖
1. 依赖安装正常之后，运行项目
```bash
pnpm run dev
```
