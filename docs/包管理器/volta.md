# volta


### 常用命令

```bash
volta fetch        # 将工具缓存到本地，方便使用，下次不用重新下载
volta install      #下载一个工具例如 volta install node@14(自动下载稳定版本)   切换node版本也可以使用此命令
volta uninstall    # 卸载一个工具，指定详细名称如node/npm/cnpm/yarn
volta pin          # 将使用的工具版本固定到json中
volta list         # 查看当前使用工具的版本,后面加上工具名称如node/npm/cnpm/yarn都可以
volta completions  # 补全可用shell，输入volta ,然后tab即可了解
volta which        # 查看volta安装的工具目录
volta setup        # 
volta help         # 

```

### volta离线使用（wins）

1. 先运行`volta-1.1.1-windows-x86_64.msi`

```bash
volta -v

# 1.1.1
```



2. 下载可用到的`node`版本，使用`.zip`压缩包放至`C:\Users\用户名\AppData\Local\Volta\tools\inventory\node`

```bash
volta install node@16.20.2

volta install node@20.10.0

volta list all

# v16.20.2
# v20.10.0
```

3. 全局安装`pnpm`

```
// 环境变量设置
VoLTA_FEATURE_PNPM:1
```

