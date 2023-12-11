

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

